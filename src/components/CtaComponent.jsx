// src/components/CtaComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import ButtonComponent from './common/Button/ButtonComponent';
import { staggerContainer, fadeInUp } from '../hooks/animations';

const CtaComponent = ({ sectionData, translationNS }) => {
  const { t } = useTranslation(translationNS, 'common');

  const {
    backgroundImage,
    titleKey,
    subtitleKey,
    ctaTextKey,
    ctaAction,
    mainLogo,
    mainLogoAltKey,
    complementaryLogo,
    complementaryLogoAltKey,
    textOverlayKey,
    photoCredit,
  } = sectionData;

  // Handler para prevenir drag en imágenes/fondos
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
      className="group relative bg-cover bg-center py-24 px-4 text-brand-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        WebkitUserDrag: 'none',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-brand-primary-dark/80 pointer-events-none"
        draggable={false}
        onDragStart={preventDrag}
      />

      {/* Text overlay (selectable) */}
      {textOverlayKey && (
        <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20 select-text">
          {t(textOverlayKey)}
        </div>
      )}

      {/* Complementary Logo */}
      {complementaryLogo && (
        <div className="absolute top-4 right-4 drop-shadow-md opacity-70 z-20">
          <img
            src={complementaryLogo}
            alt={t(complementaryLogoAltKey)}
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
            alt={t(mainLogoAltKey)}
            className="w-24 h-auto"
            draggable={false}
            onDragStart={preventDrag}
            style={{ WebkitUserDrag: 'none' }}
          />
        </div>
      )}

      {/* Photo credit on hover (selectable) */}
      {photoCredit && (
        <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-text z-20">
          {t(photoCredit.prefixKey, { ns: 'common' })}
          {photoCredit.text}
        </div>
      )}

      {/* Main CTA content (text is selectable) */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="relative container mx-auto text-center z-10 select-text"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold uppercase">
          {t(titleKey)}
        </motion.h2>

        <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto text-lg text-brand-neutral">
          {t(subtitleKey)}
        </motion.p>

        <ButtonComponent
          action={ctaAction}
          textKey={ctaTextKey}
          translationNS={['home', 'common']}
          className="mt-8"
        />
      </motion.div>
    </section>
  );
};

export default CtaComponent;
