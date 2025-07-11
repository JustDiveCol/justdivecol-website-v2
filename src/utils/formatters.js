// src/utils/formatters.js

/**
 * Formats a date range into a readable, multilingual string.
 * @param {string} start - The start date string (e.g., '2025-09-26').
 * @param {string} end - The end date string (e.g., '2025-09-29').
 * @param {string} lang - The current language ('es' or 'en').
 * @param {function} t - The i18next translation function.
 */
export const formatDateRange = (start, end, lang, t) => {
  // If dates are invalid, return a translated fallback text.
  if (!start || !end) {
    return t('common:datesNotAvailable');
  }

  // Use appropriate locales for each language. 'es-CO' for Colombian Spanish.
  const locale = lang === 'es' ? 'es-CO' : 'en-US';

  const startDate = new Date(start + 'T00:00:00');
  const endDate = new Date(end + 'T00:00:00');

  // --- Spanish Formatting ---
  if (lang === 'es') {
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = startDate.toLocaleDateString(locale, { month: 'long' });
    const year = startDate.getFullYear();

    if (startDate.getMonth() === endDate.getMonth()) {
      return `${startDay} - ${endDay} de ${month} de ${year}`;
    }
    // Fallback for different months (can be improved if needed)
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

    if (startDate.getMonth() === endDate.getMonth()) {
      return `${month} ${startDay} - ${endDay}, ${year}`;
    }
    // Fallback for different months
    return `${startDate.toLocaleDateString(locale, {
      dateStyle: 'long',
    })} - ${endDate.toLocaleDateString(locale, { dateStyle: 'long' })}`;
  }

  // Default fallback
  return start;
};
