/**
 * Application-wide constants
 */

// Toast configuration
export const TOAST_CONFIG = {
  LIMIT: 5,           // Maximum number of toasts shown at once
  REMOVE_DELAY: 5000, // Time in ms before toast is automatically removed
};

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,  // Mobile breakpoint in pixels
  TABLET: 1024, // Tablet breakpoint in pixels
  DESKTOP: 1280, // Desktop breakpoint in pixels
};

// API endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  ANIMALS: '/api/animals',
  VETERINARIANS: '/api/veterinarians',
  DIAGNOSES: '/api/diagnoses',
  APPOINTMENTS: '/api/appointments',
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER_ANIMAL: '/register-animal',
  DIAGNOSIS: '/diagnosis',
  HEALTH_RECORDS: '/health-records',
  VETERINARIANS: '/veterinarians',
  EMERGENCY: '/emergency',
  ADMIN: '/admin',
  ABOUT: '/about',
};