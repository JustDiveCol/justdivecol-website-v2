// src/components/common/Image/ImageComponent.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const variantStyles = {
  fullscreen: 'h-full', // 'h-screen' puede ser muy grande, 'h-full' es más flexible.
  header: 'h-[600px]',
  horizontal: 'aspect-[4/3]',
  vertical: 'aspect-[3/4]',
  square: 'aspect-square',
};

const isAspectVariant = (variant) =>
  variant === 'horizontal' || variant === 'vertical' || variant === 'square';

const ImageComponent = ({ className = '', imageData, translationNS }) => {
  const { t } = useTranslation(translationNS);

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
    photoCreditKey,
    variant,
  } = imageData;

  // Se determina la clase principal del contenedor
  const variantClass = variantStyles[variant] || 'h-full';
  const wrapperClass = `group relative w-full bg-cover bg-center select-none ${variantClass} ${className}`;

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className={wrapperClass}
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Top-left text overlay */}
      {textOverlayKey && (
        <div
          onContextMenu={(e) => e.preventDefault()}
          className='select-none absolute top-4 left-4 text-brand-neutral text-2xl font-bold drop-shadow-md opacity-80 uppercase'>
          {t(textOverlayKey)}
        </div>
      )}

      {/* Top-right complementary logo */}
      {complementaryLogo && (
        <div
          onContextMenu={(e) => e.preventDefault()}
          className='select-none absolute top-4 right-4 drop-shadow-md opacity-70 w-12 h-auto'>
          <img
            src={complementaryLogo}
            alt={t(complementaryLogoAltKey)}
            className='w-12 h-auto'
          />
        </div>
      )}

      {/* Bottom-right main logo */}
      {mainLogo && (
        <div
          onContextMenu={(e) => e.preventDefault()}
          className='select-none absolute bottom-4 right-4 drop-shadow-md opacity-70 w-24 h-auto'>
          <img
            src={mainLogo}
            alt={t(mainLogoAltKey)}
            className='w-24 h-auto'
          />
        </div>
      )}

      {/* Footer alt text on hover */}
      {photoCreditKey && (
        <div className='absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20'>
          {t(photoCreditKey)}
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
