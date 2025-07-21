/**
 * Authentication context provider
 */

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

import { authService } from '@/services';
import { useToast } from '@/hooks/use-toast';

/**
 * Auth context state interface
 */


// Create the auth context
const AuthContext = createContext(undefined);

/**
 * Auth context provider props
 */


/**
 * Auth context provider component
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check if user is authenticated on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Try to get stored user first for faster UI rendering
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }

        // Then verify with the server
        if (authService.isAuthenticated()) {
          const currentUser = await authService.getCurrentUser();
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid auth state
        authService.logout();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  /**
   * Login handler
   */
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await authService.login({ email, password });
      setUser(response.user);
      toast({
        title: 'Login successful',
        description: `Welcome back, ${response.user.name}!`,
      });
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: error.message || 'Invalid credentials',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Register handler
   */
  const register = async (
    name,
    email,
    password,
    role
  ) => {
    try {
      setIsLoading(true);
      const response = await authService.register({ name, email, password, role });
      setUser(response.user);
      toast({
        title: 'Registration successful',
        description: `Welcome, ${response.user.name}!`,
      });
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Registration failed',
        description: 'registration failed. please try again',

      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout handler
   */
  const logout = async () => {
    try {
      setIsLoading(true);
      await authService.logout();
      setUser(null);
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out',
      });
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        variant: 'destructive',
        title: 'Logout failed',
        description: 'There was an error logging out',
      });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Update profile handler
   */
  const updateProfile = async (userData) => {
    try {
      setIsLoading(true);
      const updatedUser = await authService.updateProfile(userData);
      setUser(updatedUser);
      toast({
        title: 'Profile updated',
        description: 'Your profile has been successfully updated',
      });
      return updatedUser;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Update failed',
        description: error.message || 'Could not update profile',
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Memoized context value
  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to use the auth context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}