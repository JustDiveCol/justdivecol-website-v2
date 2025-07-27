// src/components/common/SimpleCardComponent.jsx
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '@/hooks/animations';
import { NAMESPACES } from '@/data/global/constants';

const SimpleCardComponent = ({
  backgroundImage,
  titleKey,
  categoryKey,
  link,
  mainLogo,
  mainLogoAltKey,
  complementaryLogo,
  complementaryLogoAltKey,
  photoCredit,
  translationNS,
}) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  const isAnchorLink = link?.startsWith('#');

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cardContent = useMemo(
    () => (
      <div className="group relative h-full w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

        {/* Top-left complementary logo */}
        {complementaryLogo && (
          <div className="absolute top-4 left-4 z-20 drop-shadow-md opacity-80">
            <img
              src={complementaryLogo}
              alt={complementaryLogoAltKey ? t(complementaryLogoAltKey) : ''}
              className="w-10 h-auto"
            />
          </div>
        )}

        {/* Top-right main logo */}
        {mainLogo && (
          <div className="absolute top-4 right-4 z-20 drop-shadow-md opacity-80">
            <img
              src={mainLogo}
              alt={mainLogoAltKey ? t(mainLogoAltKey) : ''}
              className="w-16 h-auto"
            />
          </div>
        )}

        {/* Footer credit */}
        {photoCredit && (
          <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/70 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20 text-left">
            {t(photoCredit.prefixKey, { ns: NAMESPACES.COMMON })}
            {photoCredit.text}
          </div>
        )}

        {/* Text content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-end text-center px-4 pb-6 md:pb-14 pt-8 text-white">
          <h3 className="text-xs sm:text-base md:text-xl lg:text-3xl leading-snug font-bold uppercase tracking-wide text-brand-cta-orange">
            {t(titleKey)}
          </h3>
          <p className="text-xs sm:text-xs md:text-base lg:text-lg leading-normal mt-2">
            {t(categoryKey)}
          </p>
        </div>
      </div>
    ),
    [
      backgroundImage,
      titleKey,
      categoryKey,
      mainLogo,
      mainLogoAltKey,
      complementaryLogo,
      complementaryLogoAltKey,
      photoCredit,
      t,
    ]
  );

  return (
    <motion.div
      variants={fadeInUp}
      className="relative w-[30%] min-w-[150px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
    >
      {isAnchorLink ? (
        <button type="button" onClick={handleScroll} className="block h-full w-full text-left">
          {cardContent}
        </button>
      ) : (
        <Link to={link} className="block h-full w-full">
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default SimpleCardComponent;
