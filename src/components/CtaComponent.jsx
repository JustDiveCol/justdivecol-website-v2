import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import ButtonComponent from './common/Button/ButtonComponent';
import { staggerContainer, fadeInUp } from '../hooks/animations';
import { NAMESPACES } from '@/data/global/constants';

const CtaComponent = ({ sectionData, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  const {
    backgroundImage,
    titleKey,
    subtitleKey,
    ctaButton,
    mainLogo,
    mainLogoAltKey,
    complementaryLogo,
    complementaryLogoAltKey,
    textOverlayKey,
    photoCredit,
  } = sectionData;

  return (
    <section
      role="img"
      aria-label={`${t(titleKey)} — ${t(subtitleKey)}`}
      className="group relative bg-cover bg-center py-24 px-4 text-brand-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-primary-dark/80 pointer-events-none" />

      {/* Text overlay (top-left) */}
      {textOverlayKey && (
        <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20 select-none text-left">
          {t(textOverlayKey)}
        </div>
      )}

      {/* Complementary Logo (top-right) */}
      {complementaryLogo && (
        <div className="absolute top-4 right-4 drop-shadow-md opacity-70 z-20">
          <img
            src={complementaryLogo}
            alt={t(complementaryLogoAltKey, { ns: NAMESPACES.COMMON })}
            className="w-12 h-auto"
          />
        </div>
      )}

      {/* Main Logo (bottom-right) */}
      {mainLogo && (
        <div className="absolute bottom-4 right-4 drop-shadow-md opacity-70 z-20">
          <img
            src={mainLogo}
            alt={t(mainLogoAltKey, { ns: NAMESPACES.COMMON })}
            className="w-24 h-auto"
          />
        </div>
      )}

      {/* Photo credit (hover only) */}
      {photoCredit && (
        <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-text z-20 text-left">
          {t(photoCredit.prefixKey, { ns: NAMESPACES.COMMON })}
          {photoCredit.text}
        </div>
      )}

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="relative container mx-auto text-center z-10 select-text"
      >
        <motion.h2 variants={fadeInUp} className="heading-2 font-extrabold uppercase">
          {t(titleKey)}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-subtitle mt-4 max-w-3xl mx-auto text-brand-neutral"
        >
          {t(subtitleKey)}
        </motion.p>

        {ctaButton && <ButtonComponent {...ctaButton} />}
      </motion.div>
    </section>
  );
};

export default CtaComponent;
