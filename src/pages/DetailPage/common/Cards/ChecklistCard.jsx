// src/pages/DetailPage/common/Cards/ChecklistCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CheckIcon } from '../../../../assets/icons/CheckIcon';
import { CrossIcon } from '../../../../assets/icons/CrossIcon';

/**
 * Renders a card with a title and a list of items, each prefixed with an icon.
 * The icon can be changed based on the 'type' prop to represent inclusion or exclusion.
 *
 * @param {object} props - The component props.
 * @param {object} props.checklistData - The data object for the list.
 * @param {string} props.checklistData.titleKey - The translation key for the card's title.
 * @param {string[]} props.checklistData.items - An array of translation keys for the list items.
 * @param {string} props.translationNS - The i18next namespace for translations.
 * @param {'included' | 'excluded' | 'requirements'} [props.type] - The type of list, which determines the icon used. Defaults to a checkmark.
 */
const ChecklistCard = ({ checklistData, translationNS, type }) => {
  const { t } = useTranslation(translationNS);

  // Do not render the component if there is no data to display.
  if (
    !checklistData ||
    !checklistData.items ||
    checklistData.items.length === 0
  ) {
    return null;
  }

  /**
   * A sub-component that selects the appropriate icon based on the list type.
   * @param {{type: string}} props - The props for the ItemIcon.
   */
  const ItemIcon = ({ type }) => {
    switch (type) {
      case 'excluded':
        return <CrossIcon />;
      default:
        // 'included', 'requirements', or any other type will use the CheckIcon.
        return <CheckIcon />;
    }
  };

  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {t(checklistData.titleKey)}
      </h3>
      <ul className='space-y-3'>
        {checklistData.items.map((itemKey, index) => (
          <li
            key={itemKey || index}
            className='flex items-start'>
            <div className='flex-shrink-0 w-6 mt-1'>
              <ItemIcon type={type} />
            </div>
            <span className='ml-2 font-serif text-brand-neutral/90 text-justify'>
              {t(itemKey)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistCard;
