import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { homePageData } from '../../../../data/pages/homeData';

import { ChevronDownIcon } from '../../../../assets/icons/NavbarIcons';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent';

const HeroSection = () => {
  const { t } = useTranslation('home');

  const {
    imageUrl,
    titleKey,
    subtitleKey,
    ctaTextKey,
    ctaAction,
    mainLogo,
    mainLogoAlt,
    complementaryLogo,
    complementaryLogoAlt,
    textOverlay,
    photoCreditKey,
  } = homePageData.hero;

  return (
    <section
      role='img'
      aria-label={`${t(titleKey)} — ${t(subtitleKey)}`}
      onContextMenu={(e) => e.preventDefault()}
      className='group relative min-h-screen flex items-center justify-center text-center text-brand-white bg-cover bg-center bg-no-repeat select-none'
      style={{
        backgroundImage: `url(${imageUrl})`,
        minHeight: 'calc(100vh - 5rem)',
      }}>
      {/* Background dark overlay */}
      <div className='absolute inset-0 bg-brand-primary-dark/70 pointer-events-none'></div>

      {/* Top-left overlay text */}
      {textOverlay && (
        <div className='absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20'>
          {textOverlay}
        </div>
      )}

      {/* Top-right complementary logo */}
      {complementaryLogo && (
        <div className='absolute top-4 right-4 drop-shadow-md opacity-70 z-20'>
          <img
            src={complementaryLogo}
            alt={t(complementaryLogoAlt)}
            className='w-12 h-auto'
          />
        </div>
      )}

      {/* Bottom-right main logo */}
      {mainLogo && (
        <div className='absolute bottom-4 right-4 drop-shadow-md opacity-70 z-20'>
          <img
            src={mainLogo}
            alt={t(mainLogoAlt)}
            className='w-24 h-auto'
          />
        </div>
      )}

      {/* Main animated content */}
      <div className='relative z-10 p-4'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-4xl md:text-6xl lg:text-7xl  font-extrabold uppercase tracking-tight drop-shadow-xl opacity-90'>
          {t(titleKey)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-4 max-w-2xl mx-auto text-lg md:text-xl  text-brand-neutral drop-shadow-md opacity-80'>
          {t(subtitleKey)}
        </motion.p>

        <ButtonComponent
          action={ctaAction}
          textKey={ctaTextKey}
          translationNS='home'
          motionInitial={{ opacity: 0, y: 50 }}
          motionAnimate={{ opacity: 1, y: 0 }}
          motionTransition={{ duration: 0.8, delay: 0.6 }}
          containerClassName='mt-8'
        />
      </div>

      {/* Scroll inducement icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className='absolute bottom-8 z-10 left-1/2 -translate-x-1/2'>
        {' '}
        {/* Changed left-0 right-0 mx-auto to left-1/2 -translate-x-1/2 */}
        <ChevronDownIcon className='w-10 h-10 text-brand-cta-orange animate-bounce' />
      </motion.div>

      {/* Hover footer credit */}
      {photoCreditKey && (
        <div className='absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20'>
          {t(photoCreditKey)}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
