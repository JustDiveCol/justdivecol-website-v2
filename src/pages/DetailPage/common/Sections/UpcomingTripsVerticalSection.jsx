// src/pages/DetailPage/common/Sections/UpcomingTripsVerticalSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import TripsCard from '../Cards/TripsCard';

/**
 * Renders a section that displays a vertical list of available trips.
 *
 * @param {object} props - The component props.
 * @param {object[]} props.availableTrips - An array of trip data objects.
 * @param {string} props.titleKey - The translation key for the section's title.
 * @param {string} props.noTripsMessageKey - The translation key for the fallback message.
 * @param {string} props.translationNS - The i18next namespace to use for the section title.
 */
const UpcomingTripsVerticalSection = ({
  availableTrips,
  titleKey,
  noTripsMessageKey,
  translationNS,
}) => {
  // Loads multiple namespaces for section titles, trip data, and common terms.
  const { t, i18n } = useTranslation(['experiences', 'common', translationNS]);

  // Do not render if essential data is missing.
  if (!titleKey || !availableTrips) {
    return null;
  }

  return (
    <div
      id='available-trips-section-vertical'
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-bold text-brand-white mb-4'>
        {t(titleKey, { ns: translationNS })}
      </h3>
      {availableTrips.length > 0 ? (
        <div className='space-y-4'>
          {availableTrips.map((trip) => (
            <TripsCard
              key={trip.id}
              tripData={trip}
              translationNS='experiences'
              lang={i18n.language}
              t={t} // Pass down the 't' function and language to the child card.
            />
          ))}
        </div>
      ) : (
        <div>
          <p className=' text-sm text-brand-neutral/80'>
            {t(noTripsMessageKey, { ns: 'common' })}
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingTripsVerticalSection;
