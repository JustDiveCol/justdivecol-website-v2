// src/pages/DetailPage/common/Cards/TripsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { formatDateRange } from '../../../../utils/formatters'; // Import the formatter utility

// Accept tripData, translationNS, lang, and t (from parent) as props
const TripsCard = ({ tripData, translationNS, lang, t }) => {
  // Use the passed 't' function directly, or get it again if you prefer,
  // but passing it saves re-instantiating useTranslation if not strictly needed for this component's own namespace.
  // const { t, i18n } = useTranslation(translationNS); // Alternative if this card needs its own namespace.

  // Render nothing if tripData is not provided or if essential details are missing
  if (!tripData || !tripData.id || !tripData.nameKey || !tripData.details) {
    return null;
  }

  return (
    <Link
      key={tripData.id}
      to={`/expediciones/${tripData.id}`} // Link to the specific expedition page
      className='block bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300'>
      <h4 className='font-sans font-bold text-brand-white'>
        {t(tripData.nameKey, { ns: translationNS })}{' '}
        {/* Use data and translate the trip name */}
      </h4>
      <p className='mt-1 font-serif text-sm text-brand-neutral/80'>
        {formatDateRange(
          tripData.details.startDate,
          tripData.details.endDate,
          lang, // Pass the language for formatting
          t // Pass the translation function for formatDateRange internal use
        )}
      </p>
      <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
        {t('common:viewTripDetails')} &rarr;{' '}
        {/* Translate "View trip details" from common namespace */}
      </span>
    </Link>
  );
};

export default TripsCard;
