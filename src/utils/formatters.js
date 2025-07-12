// src/utils/formatters.js

/**
 * Formats a date range into a readable, multilingual string (e.g., "September 26 - 29, 2025" or "26 - 29 de septiembre de 2025").
 * It handles cases where the start and end dates are in the same month.
 *
 * @param {string} start - The start date string in 'YYYY-MM-DD' format.
 * @param {string} end - The end date string in 'YYYY-MM-DD' format.
 * @param {string} lang - The current language code ('es' or 'en').
 * @param {function} t - The i18next translation function, used for fallback text.
 * @returns {string} The formatted date range string.
 */
export const formatDateRange = (start, end, lang, t) => {
  // If dates are invalid, return a translated fallback text.
  if (!start || !end) {
    return t('common:datesNotAvailable');
  }

  // Use appropriate locales for each language ('es-CO' for Colombian Spanish).
  const locale = lang === 'es' ? 'es-CO' : 'en-US';

  // Appending 'T00:00:00' ensures the dates are parsed in the local time zone, avoiding UTC conversion issues.
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);

  // --- Spanish Formatting ---
  if (lang === 'es') {
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = startDate.toLocaleDateString(locale, { month: 'long' });
    const year = startDate.getFullYear();

    // If the trip is within the same month, use a compact format.
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${startDay} - ${endDay} de ${month} de ${year}`;
    }
    // Fallback for trips spanning different months.
    return `${startDate.toLocaleDateString(locale, {
      dateStyle: 'long',
    })} - ${endDate.toLocaleDateString(locale, { dateStyle: 'long' })}`;
  }

  // --- English Formatting ---
  if (lang === 'en') {
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = startDate.toLocaleDateString(locale, { month: 'long' });
    const year = startDate.getFullYear();

    // If the trip is within the same month, use a compact format.
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${month} ${startDay} - ${endDay}, ${year}`;
    }
    // Fallback for trips spanning different months.
    return `${startDate.toLocaleDateString(locale, {
      dateStyle: 'long',
    })} - ${endDate.toLocaleDateString(locale, { dateStyle: 'long' })}`;
  }

  // Default fallback if the language is not recognized.
  return start;
};
