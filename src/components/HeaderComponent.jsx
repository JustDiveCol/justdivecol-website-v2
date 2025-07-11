import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../hooks/animations';

const HeaderComponent = ({ sectionData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  const { titleKey, subtitleKey, imageUrl } = sectionData;

  return (
    <motion.div variants={fadeInUp}>
      <section
        className='relative h-80 bg-cover bg-center text-brand-white flex items-center justify-center text-center'
        style={{ backgroundImage: `url(${imageUrl})` }}>
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
