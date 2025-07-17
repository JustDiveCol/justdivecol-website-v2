// src/pages/DetailPage/common/Cards/DetailsCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

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
const DetailsCard = ({ detailsData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Do not render the component if there is no data to display.
  if (!detailsData || !detailsData.items || detailsData.items.length === 0) {
    return null;
  }

  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-bold text-brand-white mb-4'>
        {t(detailsData.titleKey)}
      </h3>
      <ul className='space-y-3 '>
        {detailsData.items.map((item, index) => (
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
