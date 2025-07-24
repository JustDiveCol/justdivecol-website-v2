// src/components/MultipleCtaComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import ButtonComponent from './common/Button/ButtonComponent';
import { staggerContainer, fadeInUp } from '../hooks/animations';
import { NAMESPACES } from '@/data/global/constants';

const MultipleCtaComponent = ({ sectionData, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  const {
    backgroundImage,
    titleKey,
    subtitleKey,
    ctaButtons,
    mainLogo,
    mainLogoAltKey,
    complementaryLogo,
    complementaryLogoAltKey,
    textOverlayKey,
    photoCreditKey,
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
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-brand-primary-dark/80 pointer-events-none" />

      {/* Texto overlay (selectable) */}
      {textOverlayKey && (
        <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20 select-text">
          {t(textOverlayKey)}
        </div>
      )}

      {/* Complementary Logo */}
      {complementaryLogo && (
        <div className="absolute top-4 right-4 drop-shadow-md opacity-70 z-20">
          <img src={complementaryLogo} alt={t(complementaryLogoAltKey)} className="w-12 h-auto" />
        </div>
      )}

      {/* Main Logo */}
      {mainLogo && (
        <div className="absolute bottom-4 right-4 drop-shadow-md opacity-70 z-20">
          <img src={mainLogo} alt={t(mainLogoAltKey)} className="w-24 h-auto" />
        </div>
      )}

      {/* Photo credit al hover (selectable) */}
      {photoCreditKey && (
        <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-text z-20">
          {t(photoCreditKey)}
        </div>
      )}

      {/* Contenido principal (text selectable) */}
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

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          {ctaButtons &&
            ctaButtons.map((button, idx) => (
              <ButtonComponent
                key={idx}
                to={button.to}
                textKey={button.textKey}
                translationNS={translationNS}
                isExternal={button.isExternal}
              />
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MultipleCtaComponent;
