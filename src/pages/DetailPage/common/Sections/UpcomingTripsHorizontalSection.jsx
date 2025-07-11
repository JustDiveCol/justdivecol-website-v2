// src/pages/DetailPage/common/Sections/UpcomingTripsHorizontalSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import TripsCard from '../Cards/TripsCard'; // Ensure this is updated to receive trip data

// Accept availableTrips, titleKey, noTripsMessageKey, and translationNS as props
const UpcomingTripsHorizontalSection = ({
  availableTrips,
  titleKey,
  noTripsMessageKey,
  translationNS,
}) => {
  const { t, i18n } = useTranslation([translationNS, 'common']); // Load both specific and common namespaces

  // Render nothing if no title key or no trips data is provided
  if (!titleKey || !availableTrips) {
    return null;
  }

  return (
    <div
      id='available-trips-section' // Keep ID for potential direct linking/scrolling
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {t(titleKey)} {/* Use data and translate */}
      </h3>
      {availableTrips && availableTrips.length > 0 ? (
        <div className='space-y-4'>
          {availableTrips.map((trip) => (
            <TripsCard
              key={trip.id} // Use trip.id for key
              tripData={trip} // Pass the individual trip data
              translationNS={translationNS} // Pass translation namespace
              lang={i18n.language} // Pass current language for date formatting
              t={t} // Pass the translation function for formatDateRange
            />
          ))}
        </div>
      ) : (
        // Message displayed if no trips are available
        <div>
          <p className='font-serif text-sm text-brand-neutral/80'>
            {t(noTripsMessageKey, { ns: 'common' })}{' '}
            {/* Use data and translate from common namespace */}
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingTripsHorizontalSection;
