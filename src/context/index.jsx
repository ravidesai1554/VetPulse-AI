/**
 * Export all context providers from a single entry point
 */

'use client';

import React from 'react';
import { AuthProvider } from './auth-context';

/**
 * Props for the AppProviders component
 */


/**
 * Combined context providers for the application
 */
export function AppProviders({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

// Export individual context providers and hooks
export * from './auth-context';