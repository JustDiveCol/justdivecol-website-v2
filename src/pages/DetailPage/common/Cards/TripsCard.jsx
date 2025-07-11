// src/pages/DetailPage/common/Cards/TripsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDateRange } from '../../../../utils/formatters';

/**
 * Renders a card that summarizes an upcoming trip and links to its detail page.
 *
 * @param {object} props - The component props.
 * @param {object} props.tripData - The data object for the trip.
 * @param {string} props.tripData.id - Unique identifier for the trip.
 * @param {string} props.tripData.nameKey - Translation key for the trip's name.
 * @param {object} props.tripData.details - Object containing trip dates.
 * @param {string} props.tripData.details.startDate - The start date of the trip.
 * @param {string} props.tripData.details.endDate - The end date of the trip.
 * @param {string} props.translationNS - The i18next namespace for the trip's name.
 * @param {string} props.lang - The current language code, passed from the parent.
 * @param {function} props.t - The i18next translation function, passed from the parent.
 */
const TripsCard = ({ tripData, translationNS, lang, t }) => {
  // A guard clause to prevent rendering if essential data is missing.
  if (!tripData || !tripData.id || !tripData.nameKey || !tripData.details) {
    return null;
  }

  return (
    <Link
      key={tripData.id}
      to={`/expediciones/${tripData.id}`} // Links to the specific expedition page.
      className='block bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300'>
      <h4 className='font-sans font-bold text-brand-white'>
        {t(tripData.nameKey, { ns: translationNS })}
      </h4>
      <p className='mt-1 font-serif text-sm text-brand-neutral/80'>
        {formatDateRange(
          tripData.details.startDate,
          tripData.details.endDate,
          lang, // Pass language to the formatter.
          t // Pass translation function to the formatter for fallback text.
        )}
      </p>
      <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
        {/* Fetches the "View trip details" text from the common namespace. */}
        {t('common:viewTripDetails')} &rarr;
      </span>
    </Link>
  );
};

export default TripsCard;
