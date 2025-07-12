import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../hooks/animations';

/**
 * A reusable header component for page and section banners.
 * @param {object} props - The component props.
 * @param {object} props.sectionData - Data object containing header details.
 * @param {string} props.sectionData.titleKey - The translation key for the main title.
 * @param {string} props.sectionData.subtitleKey - The translation key for the subtitle.
 * @param {string} props.sectionData.imageUrl - The URL for the background image.
 * @param {string} props.translationNS - The i18next namespace for translations.
 */

const HeaderComponent = ({ sectionData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  const { titleKey, subtitleKey, headerImageUrl } = sectionData;

  return (
    <motion.div variants={fadeInUp}>
      <section
        className='relative h-80 bg-cover bg-center text-brand-white flex items-center justify-center text-center'
        style={{ backgroundImage: `url(${headerImageUrl})` }}>
        {/* Dark overlay to improve text readability over the background image. */}
        <div className='absolute inset-0 bg-brand-primary-dark/70' />
        <div className='relative z-10 p-4'>
          <h1 className='text-4xl md:text-6xl font-sans font-extrabold uppercase'>
            {t(titleKey)}
          </h1>
          <p className='mt-2 max-w-2xl mx-auto font-serif text-lg text-brand-neutral'>
            {t(subtitleKey)}
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default HeaderComponent;
