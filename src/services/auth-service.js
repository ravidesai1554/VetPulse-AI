/**
 * Authentication service for handling auth-related API calls
 */

import { apiClient } from './api-client';

import { API_ENDPOINTS } from '@/constants';

/**
 * Login credentials interface
 */


/**
 * Registration data interface
 */


/**
 * Auth response interface
 */


/**
 * Service for authentication-related API operations
 */
export const authService = {
  /**
   * Login with email and password
   * @param credentials Login credentials
   * @returns Promise with auth response
   */
  async login(credentials) {
    const response = await apiClient.post(
      `${API_ENDPOINTS.AUTH}/login`,
      credentials
    );

    if (response.data?.token) {
      // Set the auth token for future requests
      apiClient.setAuthToken(response.data.token);

      // Store token in localStorage
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data;
  },

  /**
   * Register a new user
   * @param data Registration data
   * @returns Promise with auth response
   */
  async register(data) {
    const response = await apiClient.post(
      `${API_ENDPOINTS.AUTH}/register`,
      data
    );

    if (response.data?.token) {
      // Set the auth token for future requests
      apiClient.setAuthToken(response.data.token);

      // Store token in localStorage
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data;
  },

  /**
   * Logout the current user
   * @returns Promise with success status
   */
  async logout() {
    try {
      await apiClient.post(`${API_ENDPOINTS.AUTH}/logout`);

      // Clear auth token
      apiClient.clearAuthToken();

      // Remove from localStorage
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');

      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  },

  /**
   * Get the current authenticated user
   * @returns Promise with user data
   */
  async getCurrentUser() {
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.AUTH}/me`);
      return response.data || null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  },

  /**
   * Check if the user is authenticated
   * @returns Boolean indicating if user is authenticated
   */
  isAuthenticated() {
    return !!localStorage.getItem('auth_token');
  },

  /**
   * Initialize the auth service
   * Sets up the auth token from localStorage if available
   */
  init() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      apiClient.setAuthToken(token);
    }
  },

  /**
   * Request a password reset
   * @param email User email
   * @returns Promise with success status
   */
  async requestPasswordReset(email) {
    const response = await apiClient.post(
      `${API_ENDPOINTS.AUTH}/request-password-reset`,
      { email }
    );
    return response.success;
  },

  /**
   * Reset password with token
   * @param token Reset token
   * @param newPassword New password
   * @returns Promise with success status
   */
  async resetPassword(token, newPassword) {
    const response = await apiClient.post(
      `${API_ENDPOINTS.AUTH}/reset-password`,
      { token, newPassword }
    );
    return response.success;
  },

  /**
   * Update user profile
   * @param userData Updated user data
   * @returns Promise with updated user
   */
  async updateProfile(userData) {
    const response = await apiClient.put(
      `${API_ENDPOINTS.AUTH}/profile`,
      userData
    );

    if (response.data) {
      // Update stored user data
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  },

  /**
   * Change password
   * @param currentPassword Current password
   * @param newPassword New password
   * @returns Promise with success status
   */
  async changePassword(currentPassword, newPassword) {
    const response = await apiClient.post(
      `${API_ENDPOINTS.AUTH}/change-password`,
      { currentPassword, newPassword }
    );
    return response.success;
  },
};

// Initialize auth service
if (typeof window !== 'undefined') {
  authService.init();
}