// src/utils/formatters.js

import { SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

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
    return t(SHARED_TRANSLATION_KEYS.DATES_NOT_AVAILABLE);
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

/**
 * Formatea un número como un precio en una moneda específica para un idioma dado.
 * @param {number} price - El valor numérico del precio.
 * @param {string} currencyCode - El código ISO de la moneda (ej. 'COP', 'USD').
 * @param {string} locale - El código de idioma/locale (ej. 'es', 'en').
 * @param {boolean} [showDecimals=false] - Si se deben mostrar decimales.
 * @returns {string} El precio formateado.
 */
export const formatPrice = (price, currencyCode, locale, showDecimals = false) => {
  if (typeof price !== 'number' || !currencyCode || !locale) {
    console.warn('formatPrice: Missing price, currencyCode, or locale.');
    return ''; // Retorna cadena vacía o un valor predeterminado si los datos son incompletos
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0,
    }).format(price);
  } catch (e) {
    console.error('Error formatting currency:', e);
    return `${price} ${currencyCode}`; // Fallback en caso de error de formato
  }
};
