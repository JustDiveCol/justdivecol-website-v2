// src/components/MultipleCtaComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import ButtonComponent from './common/Button/ButtonComponent'; // Re-use your ButtonComponent

import { staggerContainer, fadeInUp } from '../hooks/animations'; // Assuming these are correctly imported

/**
 * Reusable Call-to-Action (CTA) component designed to display multiple buttons.
 * It features a background image, title, subtitle, and optional logos/text overlays.
 *
 * @param {object} props - The component properties.
 * @param {object} props.sectionData - An object containing all data for the section.
 * @param {string} props.sectionData.backgroundImage - URL for the background image.
 * @param {string} props.sectionData.titleKey - Translation key for the main title.
 * @param {string} props.sectionData.subtitleKey - Translation key for the subtitle.
 * @param {Array<object>} props.sectionData.ctaButtons - Array of button objects.
 * @param {string} props.sectionData.ctaButtons[].to - URL for the button.
 * @param {string} props.sectionData.ctaButtons[].textKey - Translation key for the button text.
 * @param {boolean} [props.sectionData.ctaButtons[].isExternal=false] - Whether the button is an external link.
 * @param {string} [props.sectionData.mainLogo] - URL for the main logo.
 * @param {string} [props.sectionData.mainLogoAltKey] - Translation key for the main logo alt text.
 * @param {string} [props.sectionData.complementaryLogo] - URL for the complementary logo.
 * @param {string} [props.sectionData.complementaryLogoAltKey] - Translation key for the complementary logo alt text.
 * @param {string} [props.sectionData.textOverlayKey] - Translation key for the top-left text overlay.
 * @param {string} [props.sectionData.photoCreditKey] - Translation key for the photo credit on hover.
 * @param {string} props.translationNS - The i18n translation namespace to use for all text keys.
 */
const MultipleCtaComponent = ({ sectionData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  const {
    backgroundImage,
    titleKey,
    subtitleKey,
    ctaButtons, // NEW: Array of button objects
    mainLogo,
    mainLogoAltKey,
    complementaryLogo,
    complementaryLogoAltKey,
    textOverlayKey,
    photoCreditKey,
  } = sectionData;

  return (
    <section
      role='img'
      aria-label={`${t(titleKey)} — ${t(subtitleKey)}`}
      onContextMenu={(e) => e.preventDefault()}
      className='group relative bg-cover bg-center py-24 px-4 text-brand-white select-none'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Dark overlay for contrast */}
      <div className='absolute inset-0 bg-brand-primary-dark/80 pointer-events-none' />

      {/* Top-left overlay text */}
      {textOverlayKey && (
        <div className='absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20'>
          {t(textOverlayKey)}
        </div>
      )}

      {/* Top-right complementary logo */}
      {complementaryLogo && (
        <div className='absolute top-4 right-4 drop-shadow-md opacity-70 z-20'>
          <img
            src={complementaryLogo}
            alt={t(complementaryLogoAltKey)}
            className='w-12 h-auto'
          />
        </div>
      )}

      {/* Bottom-right main logo */}
      {mainLogo && (
        <div className='absolute bottom-4 right-4 drop-shadow-md opacity-70 z-20'>
          <img
            src={mainLogo}
            alt={t(mainLogoAltKey)}
            className='w-24 h-auto'
          />
        </div>
      )}

      {/* Hoverable footer credit */}
      {photoCreditKey && (
        <div className='absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20'>
          {t(photoCreditKey)}
        </div>
      )}

      {/* Main CTA content */}
      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, amount: 0.3 }}
        className='relative container mx-auto text-center z-10'>
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-extrabold uppercase'>
          {t(titleKey)}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-2xl mx-auto text-lg text-brand-neutral'>
          {t(subtitleKey)}
        </motion.p>

        {/* NEW: Container for multiple buttons */}
        <motion.div
          variants={fadeInUp} // Apply animation to the button container
          className='mt-8 flex flex-col sm:flex-row justify-center gap-4'>
          {' '}
          {/* Use flexbox for button layout */}
          {ctaButtons &&
            ctaButtons.map((button, index) => (
              <ButtonComponent
                key={index} // Use index as key if order is stable and items are not reordered
                to={button.to}
                textKey={button.textKey}
                translationNS={translationNS}
                isExternal={button.isExternal}
                // You can pass other ButtonComponent props from the button object if needed
                // e.g., className={button.className}
              />
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MultipleCtaComponent;
