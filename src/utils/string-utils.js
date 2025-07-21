/**
 * String utility functions for the application
 */

/**
 * Capitalize the first letter of a string
 * @param str The string to capitalize
 * @returns Capitalized string
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Truncate a string to a specified length and add ellipsis
 * @param str The string to truncate
 * @param length Maximum length before truncation
 * @param ellipsis The ellipsis to add (default: '...')
 * @returns Truncated string
 */
export function truncate(str, length, ellipsis = '...') {
  if (!str) return '';
  if (str.length <= length) return str;
  return str.slice(0, length) + ellipsis;
}

/**
 * Convert a string to kebab-case
 * @param str The string to convert
 * @returns Kebab-cased string
 */
export function toKebabCase(str) {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Convert a string to camelCase
 * @param str The string to convert
 * @returns CamelCased string
 */
export function toCamelCase(str) {
  if (!str) return '';
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => 
      index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    )
    .replace(/\s+/g, '');
}

/**
 * Generate a slug from a string
 * @param str The string to convert to a slug
 * @returns URL-friendly slug
 */
export function slugify(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Check if a string contains another string (case insensitive)
 * @param str The string to search in
 * @param search The string to search for
 * @returns Boolean indicating if the search string was found
 */
export function containsIgnoreCase(str, search) {
  if (!str || !search) return false;
  return str.toLowerCase().includes(search.toLowerCase());
}

/**
 * Format a number as currency
 * @param value The number to format
 * @param currency The currency code (default: 'USD')
 * @returns Formatted currency string
 */
export function formatCurrency(value, currency = 'USD') {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(value);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return `${value}`;
  }
}