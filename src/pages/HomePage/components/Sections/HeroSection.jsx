// src/pages/ExperiencesPage/components/Sections/HeroSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent';

import { NAMESPACES } from '@/data/global/constants';
import { homePageData } from '../../../../data/pages/homeData';
import { ChevronDownIcon } from '../../../../assets/icons/NavbarIcons';

const HeroSection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  const {
    imageUrl,
    titleKey,
    subtitleKey,
    mainLogo,
    mainLogoAlt,
    complementaryLogo,
    complementaryLogoAlt,
    textOverlay,
    photoCredit,
  } = homePageData.hero;

  return (
    <section
      role="img"
      aria-label={`${t(titleKey)} — ${t(subtitleKey)}`}
      className="group relative min-h-screen min-h-hero flex items-center text-brand-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand-primary-dark/70 pointer-events-none" />

      {/* Text overlay (optional) */}
      {textOverlay && (
        <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-30 select-none">
          {textOverlay}
        </div>
      )}

      {/* Complementary Logo */}
      {complementaryLogo && (
        <div className="absolute top-4 right-4 drop-shadow-xl opacity-80 z-30 w-12 h-auto select-none">
          <img src={complementaryLogo} alt={t(complementaryLogoAlt)} className="w-12 h-auto" />
        </div>
      )}

      {/* Main Logo */}
      {mainLogo && (
        <div className="absolute bottom-4 right-4 drop-shadow-xl opacity-80 z-30 w-24 h-auto select-none">
          <img src={mainLogo} alt={t(mainLogoAlt)} className="w-24 h-auto" />
        </div>
      )}

      {/* Contenido principal: texto y botón */}
      <div className="relative z-20 p-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-1 text-center"
        >
          {t(titleKey)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-subtitle text-center"
        >
          {t(subtitleKey)}
        </motion.p>

        <div className="mt-8 mb-16 flex justify-center">
          <ButtonComponent {...homePageData.hero.ctaButton} />
        </div>
      </div>

      {/* Icono de scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          delay: 1,
        }}
        className="absolute bottom-8 z-40 left-1/2 -translate-x-1/2"
      >
        <ChevronDownIcon className="w-10 h-10 text-brand-cta-orange animate-bounce select-none" />
      </motion.div>

      {/* Photo credit al hover */}
      {photoCredit && (
        <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-text z-20">
          {t(photoCredit.prefixKey, { ns: NAMESPACES.COMMON })}
          {photoCredit.text}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
