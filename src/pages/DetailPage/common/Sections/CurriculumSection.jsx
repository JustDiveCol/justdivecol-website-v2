import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoIcon } from '../../../../assets/icons/InfoIcon';

const CurriculumSection = ({ curriculumData, translationNS }) => {
  const { t } = useTranslation(translationNS); // Use the passed namespace

  if (!curriculumData) return null; // Handle cases where data might be missing

  return (
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
        {t(curriculumData.titleKey)} {/* Use data and translate */}
      </h2>
      <div className='space-y-6'>
        {curriculumData.modules.map((module) => (
          <div key={module.id}>
            <h3 className='text-2xl font-sans font-semibold text-brand-cta-green'>
              {t(module.nameKey)} {/* Use data and translate */}
            </h3>
            <p className='mt-1 font-serif text-brand-neutral/90 text-justify'>
              {t(module.descriptionKey)} {/* Use data and translate */}
            </p>
          </div>
        ))}
      </div>

      {curriculumData.notes && curriculumData.notes.length > 0 && (
        <div className='mt-6 space-y-2'>
          {curriculumData.notes.map((noteKey, index) => (
            <div
              key={index}
              className='flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80'>
              <InfoIcon /> {/* */}
              <p className='font-serif text-sm text-justify'>
                {t(noteKey)}
              </p>{' '}
              {/* Use data and translate */}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CurriculumSection;
