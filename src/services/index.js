/**
 * Export all services from a single entry point
 */

export * from './api-client';
export * from './animal-service';
export * from './auth-service';

// Re-export specific services as named exports
import { animalService } from './animal-service';
import { authService } from './auth-service';
import { apiClient } from './api-client';

// Export a services object that contains all services
export const services = {
  api: apiClient,
  auth: authService,
  animal: animalService,
};