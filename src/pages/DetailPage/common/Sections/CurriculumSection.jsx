// src/pages/DetailPage/common/Sections/CurriculumSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoIcon } from '../../../../assets/icons/NavbarIcons';

/**
 * Renders a course curriculum section, including modules and optional notes.
 *
 * @param {object} props - The component props.
 * @param {object} props.curriculumData - The data object for the curriculum.
 * @param {string} props.curriculumData.titleKey - The translation key for the section title.
 * @param {object[]} props.curriculumData.modules - An array of module objects.
 * @param {string[]} [props.curriculumData.notes] - An optional array of translation keys for notes.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const CurriculumSection = ({ curriculumData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Do not render the component if no curriculum data is provided.
  if (!curriculumData) return null;

  return (
    <section>
      <h2 className='text-3xl font-bold text-brand-white mb-6'>
        {t(curriculumData.titleKey)}
      </h2>
      <div className='space-y-6'>
        {curriculumData.modules.map((module) => (
          <div key={module.id}>
            <h3 className='text-2xl font-semibold text-brand-cta-green'>
              {t(module.nameKey)}
            </h3>
            <p className='mt-1  text-brand-neutral/90 text-justify'>
              {t(module.descriptionKey)}
            </p>
          </div>
        ))}
      </div>

      {/* Conditionally render the notes section if it exists in the data. */}
      {curriculumData.notes && curriculumData.notes.length > 0 && (
        <div className='mt-6 space-y-2'>
          {curriculumData.notes.map((noteKey, index) => (
            <div
              key={index}
              className='flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80'>
              <InfoIcon className='w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-brand-neutral/80' />
              <p className='ml-2  text-sm text-justify'>{t(noteKey)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CurriculumSection;
