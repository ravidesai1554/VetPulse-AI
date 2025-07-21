export * from "./utils";
export * from "./date-utils";
export * from "./string-utils";

/**
 * Generate a unique ID
 * @param prefix Optional prefix for the ID
 * @returns Unique ID string
 */
export function generateId(prefix = '') {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).substr(2, 5)}`;
}

/**
 * Deep clone an object
 * @param obj The object to clone
 * @returns A deep clone of the object
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    console.error('Error deep cloning object:', error);
    return obj;
  }
}

/**
 * Debounce a function call
 * @param func The function to debounce
 * @param wait The wait time in milliseconds
 * @returns Debounced function
 */
export function debounce(func, wait) {
  let timeout = null;
  
  return function(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle a function call
 * @param func The function to throttle
 * @param limit The time limit in milliseconds
 * @returns Throttled function
 */
export function throttle(func, limit) {
  let inThrottle = false;
  
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Check if running in browser environment
 * @returns Boolean indicating if code is running in browser
 */
export function isBrowser() {
  return typeof window !== 'undefined';
}

/**
 * Get a value from localStorage with type safety
 * @param key The key to retrieve
 * @param defaultValue Default value if key doesn't exist
 * @returns The stored value or default value
 */
export function getLocalStorage(key, defaultValue) {
  if (!isBrowser()) return defaultValue;
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error getting localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Set a value in localStorage with type safety
 * @param key The key to set
 * @param value The value to store
 * @returns Boolean indicating success
 */
export function setLocalStorage(key, value) {
  if (!isBrowser()) return false;
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
    return false;
  }
}