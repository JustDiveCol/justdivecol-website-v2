// src/pages/DetailPage/common/Sections/ItinerarySection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoIcon } from '../../../../assets/icons/InfoIcon';

/**
 * Renders a vertical timeline for a day-by-day itinerary.
 *
 * @param {object} props - The component props.
 * @param {object} props.itineraryData - The data object for the itinerary.
 * @param {string} props.itineraryData.titleKey - The translation key for the section title.
 * @param {object[]} props.itineraryData.days - An array of day objects.
 * @param {string[]} [props.itineraryData.notes] - An optional array of translation keys for notes.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const ItinerarySection = ({ itineraryData, translationNS }) => {
  // Load both the specific namespace for the content and the 'common' namespace for generic terms.
  const { t } = useTranslation([translationNS, 'common']);

  // Do not render if there is no data.
  if (!itineraryData) return null;

  return (
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
        {t(itineraryData.titleKey)}
      </h2>
      <div className='border-l-2 border-brand-cta-green/50 pl-6 space-y-8'>
        {itineraryData.days.map((day) => (
          <div key={day.day}>
            <h3 className='text-xl font-sans font-semibold text-brand-cta-green'>
              {/* The word "Day" is translated from the 'common' namespace. */}
              {t('common:day')} {day.day}: {t(day.titleKey)}
            </h3>
            <p className='mt-1 font-serif text-brand-neutral/90 text-justify'>
              {t(day.descriptionKey)}
            </p>
          </div>
        ))}
      </div>

      {/* Conditionally render the notes section if it exists in the data. */}
      {itineraryData.notes && itineraryData.notes.length > 0 && (
        <div className='mt-6 space-y-2'>
          {itineraryData.notes.map((noteKey, index) => (
            <div
              key={index}
              className='flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80'>
              <InfoIcon />
              <p className='ml-2 font-serif text-sm text-justify'>
                {/* Use the dynamically passed translationNS for the note. */}
                {t(noteKey, { ns: translationNS })}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ItinerarySection;
