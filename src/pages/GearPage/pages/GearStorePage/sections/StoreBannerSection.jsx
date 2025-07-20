// src/pages/GearPage/pages/StorePage/sections/StoreBannerSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const StoreBannerSection = ({ titleKey, subtitleKey, backgroundImage }) => {
  const { t } = useTranslation('storePage'); // Nuevo namespace para StorePage

  return (
    <section
      className='relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex flex-col justify-center items-center text-brand-white text-center p-4'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='absolute inset-0 bg-brand-primary-dark/60'></div>{' '}
      {/* Overlay para oscurecer la imagen */}
      <div className='relative z-10 flex flex-col items-center'>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-text'>
          {t(titleKey)}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-lg md:text-xl max-w-3xl drop-shadow-text'>
          {t(subtitleKey)}
        </motion.p>
      </div>
    </section>
  );
};

export default StoreBannerSection;
