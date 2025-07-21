/**
 * Date utility functions for the application
 */

/**
 * Format a date to a human-readable string
 * @param date The date to format
 * @param format The format to use (default: 'medium')
 * @returns Formatted date string
 */
export function formatDate(date, format = 'medium') {
  if (!date) return '';

  try {
    switch (format) {
      case 'short':
        return new Intl.DateTimeFormat('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: '2-digit'
        }).format(new Date(date));

      case 'medium':
        return new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }).format(new Date(date));

      case 'long':
        return new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        }).format(new Date(date));

      default:
        return new Date(date).toLocaleDateString();
    }
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}

/**
 * Calculate the difference between two dates in days
 * @param date1 First date
 * @param date2 Second date (defaults to current date)
 * @returns Number of days between dates
 */
export function daysBetween(date1, date2 = new Date()) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
  return diffDays;
}

/**
 * Check if a date is in the past
 * @param date The date to check
 * @returns Boolean indicating if the date is in the past
 */
export function isDateInPast(date) {
  return new Date(date).getTime() < new Date().getTime();
}

/**
 * Get a date that is a certain number of days from today
 * @param days Number of days from today (positive for future, negative for past)
 * @returns Date object
 */
export function getDateFromToday(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

/**
 * Format a time string (HH:MM) to a more readable format (HH:MM AM/PM)
 * @param timeString Time string in 24-hour format (HH:MM)
 * @returns Formatted time string
 */
export function formatTimeString(timeString) {
  try {
    // Create a date object with the time string
    const [hours, minutes] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0);

    // Format the time
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  } catch (error) {
    console.error('Error formatting time string:', error);
    return timeString;
  }
}