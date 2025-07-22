// src/components/HeaderComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../hooks/animations';

/**
 * Reusable Header component with background image, title, subtitle, and optional logos/credits.
 *
 * @param {object} props - The component properties.
 * @param {object} props.sectionData - Data for the header section (backgroundImage, titleKey, etc.).
 * @param {string} props.translationNS - The i18n translation namespace to use.
 * @param {string} [props.heightClass='h-80'] - OPTIONAL: Tailwind class to override the default height (e.g., 'h-64').
 */
const HeaderComponent = ({ sectionData, translationNS, heightClass = 'h-80' }) => {
  const { t } = useTranslation(translationNS);
  const {
    backgroundImage,
    titleKey,
    subtitleKey,
    mainLogo,
    mainLogoAltKey,
    complementaryLogo,
    complementaryLogoAltKey,
    textOverlayKey,
    photoCredit,
  } = sectionData;

  const title = t(titleKey);
  const subtitle = t(subtitleKey);

  // Handler para bloquear arrastre de imágenes/fondos
  const preventDrag = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <motion.div variants={fadeInUp}>
      <div className={`group relative ${heightClass}`}>
        {/* Background with image + overlay */}
        <div
          role="img"
          aria-label={`${title} — ${subtitle}`}
          className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-center text-brand-white"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            WebkitUserDrag: 'none',
          }}
          draggable={false}
          onDragStart={preventDrag}
          onContextMenu={preventDrag}
        >
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-brand-primary-dark/70 z-0 pointer-events-none"
            draggable={false}
            onDragStart={preventDrag}
          />

          {/* Title & subtitle (selectable) */}
          <div className="relative z-10 p-4 select-text">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase drop-shadow-xl opacity-90">
              {title}
            </h1>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-brand-neutral drop-shadow-md opacity-80">
              {subtitle}
            </p>
          </div>

          {/* Text Overlay (selectable) */}
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
        </div>

        {/* Footer credit on hover (selectable text) */}
        {photoCredit && (
          <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-text z-20">
            {t(photoCredit.prefixKey, { ns: 'common' })}
            {photoCredit.text}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HeaderComponent;
