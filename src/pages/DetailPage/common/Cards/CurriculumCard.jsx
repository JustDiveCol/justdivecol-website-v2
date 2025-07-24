import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoIcon } from '../../../../assets/icons/NavbarIcons';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders a card displaying a curriculum or plan, such as a payment plan.
 * This component is designed to be used in sidebars or smaller content areas.
 *
 * @param {object} props - The component props.
 * @param {object} props.detailsData - The data object for the card's content.
 * @param {string} props.detailsData.titleKey - The translation key for the section title.
 * @param {object[]} props.detailsData.modules - An array of module/step objects.
 * @param {string[]} [props.detailsData.notes] - An optional array of translation keys for notes.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const CurriculumCard = ({ detailsData, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  // Do not render the component if the essential data is missing.
  // Now checks for 'detailsData' instead of 'curriculumData'.
  if (!detailsData || !detailsData.modules || detailsData.modules.length === 0) {
    return null;
  }

  return (
    <div className="bg-brand-primary-medium p-6 rounded-lg shadow-lg">
      <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl leading-tight font-bold text-brand-white mb-4">
        {t(detailsData.titleKey)}
      </h3>

      <div className="space-y-6 pt-4 border-t border-brand-primary-light/40">
        {detailsData.modules.map((module) => (
          <div key={module.id}>
            <h4 className="text-base sm:text-base md:text-lg leading-tight font-semibold text-brand-cta-green">
              {t(module.nameKey)}
            </h4>
            <p className="text-xs sm:text-base pt-2 text-brand-neutral/80 text-justify">
              {t(module.descriptionKey)}
            </p>
          </div>
        ))}
      </div>

      {detailsData.notes && detailsData.notes.length > 0 && (
        <div className="mt-8 space-y-3">
          {detailsData.notes.map((noteKey, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80"
            >
              <InfoIcon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-brand-neutral/80" />
              <p className="text-xs text-brand-neutral/80 text-justify">{t(noteKey)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurriculumCard;
