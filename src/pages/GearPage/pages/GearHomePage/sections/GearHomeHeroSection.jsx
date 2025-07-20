// src/pages/GearPage/pages/GearHomePage/sections/GearHomeHeroSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { gearHomePageData } from '../../../../../data/pages/gearHomePageData';

import { ChevronDownIcon } from '../../../../../assets/icons/ChevronIcons';

// El componente ahora recibe props para su contenido
const GearHomeHeroSection = () => {
  const { t } = useTranslation('gearHomePage');

  const hero = gearHomePageData.hero;

  return (
    <section
      role='img'
      aria-label={`${t(hero.titleKey)} — ${t(hero.subtitleKey)}`}
      onContextMenu={(e) => e.preventDefault()}
      className='group relative flex items-center justify-center text-center text-brand-white bg-cover bg-center bg-no-repeat select-none'
      style={{
        backgroundImage: `url(${hero.backgroundImage})`,
        minHeight: 'calc(100vh - 5rem)',
      }}>
      {/* Background dark overlay */}
      <div className='absolute inset-0 bg-brand-primary-dark/50 pointer-events-none'></div>

      {/* Top-left overlay text */}
      {hero.textOverlayKey && (
        <div className='absolute top-20 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20'>
          {hero.textOverlayKey}
        </div>
      )}

      {/* Top-right complementary logo */}
      {hero.complementaryLogo && (
        <div className='absolute top-20 right-4 drop-shadow-md opacity-70 z-20'>
          <img
            src={hero.complementaryLogo}
            alt={t(hero.complementaryLogoAltKey)}
            className='w-12 h-auto'
          />
        </div>
      )}

      {/* Bottom-right main logo */}
      {hero.mainLogo && (
        <div className='absolute bottom-4 right-4 drop-shadow-md opacity-70 z-20'>
          <img
            src={hero.mainLogo}
            alt={t(hero.mainLogoAltKey)}
            className='w-24 h-auto'
          />
        </div>
      )}

      <div className='relative z-10 p-4'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-4xl md:text-6xl lg:text-7xl  font-extrabold uppercase tracking-tight drop-shadow-xl opacity-90'>
          {t(hero.titleKey)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-4 max-w-2xl mx-auto text-lg md:text-xl  text-brand-neutral drop-shadow-md opacity-80'>
          {t(hero.subtitleKey)}
        </motion.p>
      </div>
      {/* Icono para inducir al scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className='absolute bottom-8 z-10'>
        <ChevronDownIcon className='w-10 h-10 text-brand-cta-orange animate-bounce' />
      </motion.div>
      {/* Hover footer credit */}
      {hero.photoCreditKey && (
        <div className='absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20'>
          {t(hero.photoCreditKey)}
        </div>
      )}
    </section>
  );
};

export default GearHomeHeroSection;
