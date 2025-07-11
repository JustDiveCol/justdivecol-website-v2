// src/pages/DetailPage/common/Cards/ChecklistCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import { CheckIcon } from '../../../../assets/icons/CheckIcon';
import { CrossIcon } from '../../../../assets/icons/CrossIcon'; // Import CrossIcon for excluded items if needed

// Accept checklistData, translationNS, and an optional 'type' prop
const ChecklistCard = ({ checklistData, translationNS, type }) => {
  const { t } = useTranslation(translationNS); // Use the passed namespace

  // Render nothing if checklistData is not provided or if there are no items
  if (
    !checklistData ||
    !checklistData.items ||
    checklistData.items.length === 0
  ) {
    return null;
  }

  // Determine which icon to use based on the 'type' prop (e.g., 'included', 'excluded')
  // By default, it uses CheckIcon. You can expand this logic for different types.
  const ItemIcon = ({ type }) => {
    switch (type) {
      case 'excluded':
        return <CrossIcon />;
      default:
        return <CheckIcon />;
    }
  };

  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {t(checklistData.titleKey)} {/* Use data and translate */}
      </h3>
      <ul className='space-y-3'>
        {checklistData.items.map((itemKey, index) => (
          <li
            key={itemKey || index} // Use itemKey as key if available, otherwise index
            className='flex items-start'>
            <div className='flex-shrink-0 w-6 mt-1'>
              <ItemIcon type={type} /> {/* Render the appropriate icon */}
            </div>
            <span className='ml-2 font-serif text-brand-neutral/90'>
              {t(itemKey)} {/* Use data and translate */}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistCard;
