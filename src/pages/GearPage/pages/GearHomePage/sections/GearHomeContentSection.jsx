// src/pages/GearPage/pages/GearHomePage/sections/GearHomeContentSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { gearHomePageData } from '../../../../../data/pages/gearHomePageData';

const GearHomeContentSection = () => {
  const { t } = useTranslation('gearHomePage');

  const content = gearHomePageData.content;

  return (
    <section className='py-16 bg-brand-neutral'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-brand-primary-dark mb-12'>
          {t(content.titleKey)}
        </h2>

        <div className='flex flex-col md:flex-row gap-8 text-justify'>
          <div className='md:w-1/2'>
            <p className='text-brand-primary-medium text-lg leading-relaxed mb-4'>
              {t(content.contentParagraph1Key)}
            </p>
            <p className='text-brand-primary-medium text-lg leading-relaxed'>
              {t(content.contentParagraph2Key)}
            </p>
          </div>
          <div className='md:w-1/2'>
            <p className='text-brand-primary-medium text-lg leading-relaxed mb-4'>
              {t(content.contentParagraph3Key)}
            </p>
            <p className='text-brand-primary-medium text-lg leading-relaxed'>
              {t(content.contentParagraph4Key)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearHomeContentSection;
