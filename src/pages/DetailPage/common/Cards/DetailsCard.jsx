// src/pages/DetailPage/common/Cards/DetailsCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Accept detailsData and translationNS as props
const DetailsCard = ({ detailsData, translationNS }) => {
  const { t } = useTranslation(translationNS); // Use the passed namespace

  // Render nothing if detailsData is not provided or if there are no items
  if (!detailsData || !detailsData.items || detailsData.items.length === 0) {
    return null;
  }

  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {t(detailsData.titleKey)} {/* Use data and translate */}
      </h3>
      <ul className='space-y-3 font-serif'>
        {detailsData.items.map((item, index) => (
          <li
            key={item.labelKey || index} // Use labelKey as key if available, otherwise index
            className='flex items-baseline justify-between gap-4'>
            <span className='text-brand-neutral/80'>
              {t(item.labelKey)}: {/* Use data and translate */}
            </span>
            <span className='text-brand-white text-right'>
              {t(item.valueKey)}{' '}
              {/* Use data and translate (assuming valueKey holds a translation key) */}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsCard;
