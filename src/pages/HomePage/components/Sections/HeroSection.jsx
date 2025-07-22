// src/pages/ExperiencesPage/components/Sections/HeroSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { homePageData } from '../../../../data/pages/homeData';
import { ChevronDownIcon } from '../../../../assets/icons/NavbarIcons';
import ButtonComponent from '../../../../components/common/Button/ButtonComponent';

const HeroSection = () => {
  const { t } = useTranslation(['home', 'common']);

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
    photoCredit,
  } = homePageData.hero;

  // Handler común para bloquear drag en imágenes/fondos
  const preventDrag = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <section
      role="img"
      aria-label={`${t(titleKey)} — ${t(subtitleKey)}`}
      onContextMenu={preventDrag}
      draggable={false}
      onDragStart={preventDrag}
      className="group relative min-h-screen flex items-center justify-center text-center text-brand-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageUrl})`,
        WebkitUserDrag: 'none',
        minHeight: 'calc(100vh - 5rem)',
      }}
    >
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-brand-primary-dark/70 pointer-events-none"
        draggable={false}
        onDragStart={preventDrag}
      />

      {/* Texto overlay (opcional) */}
      {textOverlay && (
        <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20 select-text">
          {textOverlay}
        </div>
      )}

      {/* Complementary Logo */}
      {complementaryLogo && (
        <div className="absolute top-4 right-4 drop-shadow-md opacity-70 z-20">
          <img
            src={complementaryLogo}
            alt={t(complementaryLogoAlt, { ns: 'common' })}
            className="w-12 h-auto"
            draggable={false}
            onDragStart={preventDrag}
            style={{ WebkitUserDrag: 'none' }}
          />
        </div>
      )}

      {/* Main Logo */}
      {mainLogo && (
        <div className="absolute bottom-4 right-4 drop-shadow-md opacity-70 z-20">
          <img
            src={mainLogo}
            alt={t(mainLogoAlt, { ns: 'common' })}
            className="w-24 h-auto"
            draggable={false}
            onDragStart={preventDrag}
            style={{ WebkitUserDrag: 'none' }}
          />
        </div>
      )}

      {/* Contenido principal: texto y botón */}
      <div className="relative z-10 p-4 select-text">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight drop-shadow-xl opacity-90"
        >
          {t(titleKey)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-brand-neutral drop-shadow-md opacity-80"
        >
          {t(subtitleKey)}
        </motion.p>

        <ButtonComponent
          action={ctaAction}
          textKey={ctaTextKey}
          translationNS="common"
          motionInitial={{ opacity: 0, y: 50 }}
          motionAnimate={{ opacity: 1, y: 0 }}
          motionTransition={{ duration: 0.8, delay: 0.6 }}
          containerClassName="mt-8"
        />
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
        className="absolute bottom-8 z-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDownIcon className="w-10 h-10 text-brand-cta-orange animate-bounce" />
      </motion.div>

      {/* Photo credit al hover */}
      {photoCredit && (
        <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-text z-20">
          {t(photoCredit.prefixKey, { ns: 'common' })}
          {photoCredit.text}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
