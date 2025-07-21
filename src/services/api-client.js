/**
 * Base API client for making HTTP requests
 */

import { apiConfig } from '@/config';

/**
 * HTTP request methods
 */


/**
 * API error response
 */
export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Base API client class
 */
export class ApiClient {

  constructor() {
    this.baseUrl = apiConfig.baseUrl;
    this.timeout = apiConfig.timeout;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  /**
   * Set authorization header with token
   * @param token JWT token
   */
  setAuthToken(token) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  /**
   * Clear authorization header
   */
  clearAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }

  /**
   * Make a GET request
   * @param endpoint API endpoint
   * @param options Request options
   * @returns Promise with response data
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  }

  /**
   * Make a POST request
   * @param endpoint API endpoint
   * @param data Request body data
   * @param options Request options
   * @returns Promise with response data
   */
  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: data,
    });
  }

  /**
   * Make a PUT request
   * @param endpoint API endpoint
   * @param data Request body data
   * @param options Request options
   * @returns Promise with response data
   */
  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: data,
    });
  }

  /**
   * Make a PATCH request
   * @param endpoint API endpoint
   * @param data Request body data
   * @param options Request options
   * @returns Promise with response data
   */
  async patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: data,
    });
  }

  /**
   * Make a DELETE request
   * @param endpoint API endpoint
   * @param options Request options
   * @returns Promise with response data
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }

  /**
   * Make an HTTP request with timeout and error handling
   * @param endpoint API endpoint
   * @param options Request options
   * @returns Promise with response data
   */
  async request(endpoint, options = {}) {
    const url = this.resolveUrl(endpoint);
    const { method = 'GET', headers = {}, body, ...restOptions } = options;

    // Prepare request options
    const requestOptions = {
      method,
      headers: { ...this.defaultHeaders, ...headers },
      credentials: 'include',
      ...restOptions,
    };

    // Add body if present
    if (body) {
      requestOptions.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);
      requestOptions.signal = controller.signal;

      // Make the request
      const response = await fetch(url, requestOptions);
      clearTimeout(timeoutId);

      // Handle JSON response
      const contentType = response.headers.get('content-type');
      const isJson = contentType && contentType.includes('application/json');
      const data = isJson ? await response.json() : await response.text();

      // Handle error responses
      if (!response.ok) {
        throw new ApiError(
          data.message || `API error: ${response.status} ${response.statusText}`,
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new ApiError('Request timeout', 408);
      }

      throw new ApiError(
        error instanceof Error ? error.message : 'Unknown error',
        500
      );
    }
  }

  /**
   * Resolve full URL from endpoint
   * @param endpoint API endpoint
   * @returns Full URL
   */
  resolveUrl(endpoint) {
    // If the endpoint is already a full URL, return it
    if (endpoint.startsWith('http')) {
      return endpoint;
    }

    // Remove leading slash if present
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${this.baseUrl}/${normalizedEndpoint}`;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();