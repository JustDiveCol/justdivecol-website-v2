// src/components/common/Image/ImageComponent.jsx
import { NAMESPACES } from '@/data/global/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';

const variantStyles = {
  fullscreen: 'h-full',
  header: 'h-[600px]',
  horizontal: 'aspect-[4/3]',
  vertical: 'aspect-[3/4]',
  square: 'aspect-square',
};

const ImageComponent = ({ className = '', imageData, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  if (!imageData) {
    return null;
  }

  const {
    backgroundImage,
    mainLogo,
    mainLogoAltKey,
    complementaryLogo,
    complementaryLogoAltKey,
    textOverlayKey,
    photoCredit,
    variant,
  } = imageData;

  const variantClass = variantStyles[variant] || 'h-full';
  const wrapperClass = `
    group relative w-full bg-cover bg-center select-none ${variantClass} ${className}
  `;

  return (
    <div
      className={wrapperClass}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {textOverlayKey && (
        <div className="select-none absolute top-2 left-2 text-brand-neutral text-sm sm:text-base md:text-lg lg:text-2xl font-bold drop-shadow-md opacity-80 uppercase z-20">
          {t(textOverlayKey, { ns: translationNS })}
        </div>
      )}

      {complementaryLogo && (
        <div className="select-none absolute top-2 right-2 drop-shadow-md opacity-70 z-20 w-8 h-auto sm:w-10 md:w-12">
          <img src={complementaryLogo} alt={t(complementaryLogoAltKey)} className="w-full h-auto" />
        </div>
      )}

      {mainLogo && (
        <div className="select-none absolute bottom-2 right-2 drop-shadow-md opacity-70 z-20 w-16 h-auto sm:w-20 md:w-24">
          <img src={mainLogo} alt={t(mainLogoAltKey)} className="w-full h-auto" />
        </div>
      )}

      {photoCredit && (
        <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20">
          {t(photoCredit.prefixKey, { ns: NAMESPACES.COMMON })}
          {photoCredit.text}
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
