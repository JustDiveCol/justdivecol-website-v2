// src/pages/DetailPage/common/Sections/UpcomingTripsHorizontalSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import TripsCard from '../Cards/TripsCard';

const UpcomingTripsHorizontalSection = ({
  availableTrips,
  titleKey,
  noTripsMessageKey,
  translationNS,
}) => {
  const { t, i18n } = useTranslation([translationNS, 'experiences', 'common']); // Add translationNS to the array

  if (!titleKey || !availableTrips) {
    return null;
  }

  return (
    <div
      id='available-trips-section'
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {t(titleKey, { ns: translationNS })} // Make sure it uses the passed
        translationNS for its title
      </h3>
      {availableTrips && availableTrips.length > 0 ? (
        <div className='space-y-4'>
          {availableTrips.map((trip) => (
            <TripsCard
              key={trip.id}
              tripData={trip}
              translationNS='experiences' // This is correct for trip names
              lang={i18n.language}
              t={t}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className='font-serif text-sm text-brand-neutral/80'>
            {t(noTripsMessageKey, { ns: 'common' })}
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingTripsHorizontalSection;
