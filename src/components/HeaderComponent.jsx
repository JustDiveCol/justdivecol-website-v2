import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../hooks/animations';

const HeaderComponent = ({ sectionData, translationNS }) => {
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
    photoCreditKey,
  } = sectionData;

  const title = t(titleKey);
  const subtitle = t(subtitleKey);

  return (
    <motion.div variants={fadeInUp}>
      <div className='group relative h-80'>
        {/* Background with image + overlay */}
        <div
          role='img'
          aria-label={`${title} — ${subtitle}`}
          onContextMenu={(e) => e.preventDefault()}
          className='relative w-full h-full bg-cover bg-center select-none flex items-center justify-center text-center text-brand-white'
          style={{ backgroundImage: `url(${backgroundImage})` }}>
          {/* Dark overlay */}
          <div className='absolute inset-0 bg-brand-primary-dark/70 z-0' />

          {/* Title & subtitle */}
          <div className='relative z-10 p-4'>
            <h1 className='text-4xl md:text-6xl font-extrabold uppercase drop-shadow-xl opacity-90'>
              {title}
            </h1>
            <p className='mt-2 max-w-2xl mx-auto  text-lg text-brand-neutral drop-shadow-md opacity-80'>
              {subtitle}
            </p>
          </div>

          {/* Text Overlay */}
          {textOverlayKey && (
            <div className='absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-md opacity-80 uppercase z-20'>
              {t(textOverlayKey)}
            </div>
          )}

          {/* Logos */}
          {complementaryLogo && (
            <div className='absolute top-4 right-4 drop-shadow-md opacity-70 z-20'>
              <img
                src={complementaryLogo}
                alt={t(complementaryLogoAltKey)}
                className='w-12 h-auto'
              />
            </div>
          )}
          {mainLogo && (
            <div className='absolute bottom-4 right-4 drop-shadow-md opacity-70 z-20'>
              <img
                src={mainLogo}
                alt={t(mainLogoAltKey)}
                className='w-24 h-auto'
              />
            </div>
          )}
        </div>

        {/* Hover-revealed footer credit */}
        {photoCreditKey && (
          <div className='absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20'>
            {t(photoCreditKey)}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HeaderComponent;
