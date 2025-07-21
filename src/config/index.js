/**
 * Export all configuration from a single entry point
 */

export * from './site';

/**
 * Authentication configuration
 */
export const authConfig = {
  providers: ['google', 'credentials'],
  sessionMaxAge: 30 * 24 * 60 * 60, // 30 days in seconds
  passwordMinLength: 8,
  passwordRequiresSpecialChar: true,
};

/**
 * API configuration
 */
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000, // 10 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
};

/**
 * Feature flags
 */
export const featureFlags = {
  enableAIDiagnostics: true,
  enableEmergencyChat: true,
  enableVideoConsultation: false,
  enablePushNotifications: false,
  enableBetaFeatures: process.env.NODE_ENV === 'development',
};

/**
 * Theme configuration
 */
export const themeConfig = {
  defaultTheme: 'system',
  availableThemes: ['light', 'dark', 'system'],
  storageKey: 'vetcare-pro-theme',
};