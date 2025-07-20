// src/pages/DetailPage/common/Cards/DetailsCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CalendarIcon } from '../../../../assets/icons/SocialIcons';
import { ClockIcon } from '../../../../assets/icons/UtilIcons';

/**
 * Renders a card that displays a list of key-value pairs, such as course or trip details.
 *
 * @param {object} props - The component props.
 * @param {object} props.detailsData - The data object for the details list.
 * @param {string} props.detailsData.titleKey - The translation key for the card's title.
 * @param {object[]} props.detailsData.items - An array of objects, each representing a detail item.
 * @param {string} props.detailsData.items[].labelKey - The translation key for the detail's label.
 * @param {string} props.detailsData.items[].valueKey - The translation key for the detail's value.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const DetailsCard = ({ detailsData, dateRange, duration, translationNS }) => {
  const { t } = useTranslation(translationNS, 'common');

  // Do not render the component if there is no data to display.
  if (!detailsData) {
    return null;
  }

  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-bold text-brand-white mb-4'>
        {t(detailsData.titleKey)}
      </h3>
      {(dateRange || duration) && (
        <div className='flex flex-col sm:flex-row sm:items-center text-brand-cta-green/80 mt-2 mb-4 pt-4 border-t border-brand-primary-light/40'>
          {dateRange && (
            <div className='flex text-center text-sm sm:mr-6 mb-2 sm:mb-0'>
              <span>{dateRange}</span>
            </div>
          )}
          {duration && (
            <div className='flex text-center text-sm'>
              <span>{duration}</span>
            </div>
          )}
        </div>
      )}
      <ul className='space-y-3 pt-4 border-t border-brand-primary-light/40'>
        {detailsData.items &&
          detailsData.items.map((item, index) => (
            <li
              key={item.labelKey || index}
              className='grid grid-cols-3 gap-4 items-center'>
              <span className='col-span-1 text-brand-neutral/80'>
                {t(item.labelKey)}:
              </span>
              <span className='col-span-2 text-brand-white text-right font-semibold'>
                {t(item.valueKey)}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DetailsCard;
