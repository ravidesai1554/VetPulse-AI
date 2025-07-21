/**
 * Animal service for handling animal-related API calls
 */

import { apiClient } from './api-client';

import { API_ENDPOINTS } from '@/constants';

/**
 * Service for animal-related API operations
 */
export const animalService = {
  /**
   * Get all animals for the current user
   * @returns Promise with array of animals
   */
  async getAnimals() {
    const response = await apiClient.get(API_ENDPOINTS.ANIMALS);
    return response.data || [];
  },

  /**
   * Get a specific animal by ID
   * @param id Animal ID
   * @returns Promise with animal data
   */
  async getAnimalById(id) {
    const response = await apiClient.get(`${API_ENDPOINTS.ANIMALS}/${id}`);
    return response.data || null;
  },

  /**
   * Create a new animal
   * @param animalData Animal data
   * @returns Promise with created animal
   */
  async createAnimal(animalData) {
    const response = await apiClient.post(API_ENDPOINTS.ANIMALS, animalData);
    return response.data;
  },

  /**
   * Update an existing animal
   * @param id Animal ID
   * @param animalData Updated animal data
   * @returns Promise with updated animal
   */
  async updateAnimal(id, animalData) {
    const response = await apiClient.put(
      `${API_ENDPOINTS.ANIMALS}/${id}`,
      animalData
    );
    return response.data;
  },

  /**
   * Delete an animal
   * @param id Animal ID
   * @returns Promise with success status
   */
  async deleteAnimal(id) {
    const response = await apiClient.delete(`${API_ENDPOINTS.ANIMALS}/${id}`);
    return response.success;
  },

  /**
   * Get medical records for an animal
   * @param animalId Animal ID
   * @returns Promise with array of medical records
   */
  async getMedicalRecords(animalId) {
    const response = await apiClient.get(
      `${API_ENDPOINTS.ANIMALS}/${animalId}/medical-records`
    );
    return response.data || [];
  },

  /**
   * Add a medical record for an animal
   * @param animalId Animal ID
   * @param recordData Medical record data
   * @returns Promise with created medical record
   */
  async addMedicalRecord(
    animalId,
    recordData
  ) {
    const response = await apiClient.post(
      `${API_ENDPOINTS.ANIMALS}/${animalId}/medical-records`,
      recordData
    );
    return response.data;
  },

  /**
   * Upload an image for an animal
   * @param animalId Animal ID
   * @param imageFile Image file
   * @returns Promise with image URL
   */
  async uploadAnimalImage(animalId, imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await apiClient.post(
      `${API_ENDPOINTS.ANIMALS}/${animalId}/image`,
      formData,
      {
        headers: {
          // Remove Content-Type header to let the browser set it with the boundary
          'Content-Type': undefined,
        },
      }
    );

    return response.data?.imageUrl || '';
  },
};