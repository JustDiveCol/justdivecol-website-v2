// src/components/common/SimpleCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../hooks/animations';

const SimpleCardComponent = ({ cardData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Handler para bloquear el arrastre en elementos internos
  const preventDrag = (e) => {
    e.preventDefault();
    return false;
  };

  const {
    backgroundImage,
    titleKey,
    categoryKey,
    link,
    mainLogo,
    mainLogoAltKey,
    complementaryLogo,
    complementaryLogoAltKey,
    photoCreditKey,
  } = cardData;

  const isAnchorLink = link.startsWith('#');

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cardContent = React.useMemo(
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
              alt={t(complementaryLogoAltKey)}
              className="w-10 h-auto"
              draggable={false}
              onDragStart={preventDrag}
              style={{ WebkitUserDrag: 'none' }}
            />
          </div>
        )}

        {/* Top-right main logo */}
        {mainLogo && (
          <div className="absolute top-4 right-4 z-20 drop-shadow-md opacity-80">
            <img
              src={mainLogo}
              alt={t(mainLogoAltKey)}
              className="w-16 h-auto"
              draggable={false}
              onDragStart={preventDrag}
              style={{ WebkitUserDrag: 'none' }}
            />
          </div>
        )}

        {/* Footer credit (hover only) */}
        {photoCreditKey && (
          <div className="absolute bottom-0 left-0 w-full bg-brand-primary-dark/50 text-brand-white text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-20">
            {t(photoCreditKey)}
          </div>
        )}

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl uppercase tracking-widest text-brand-cta-orange font-bold">
            {t(titleKey)}
          </h3>
          <p className="mt-2 text-lg md:text-lg">{t(categoryKey)}</p>
        </div>
      </div>
    ),
    [
      backgroundImage,
      categoryKey,
      titleKey,
      mainLogo,
      mainLogoAltKey,
      complementaryLogo,
      complementaryLogoAltKey,
      photoCreditKey,
      t,
    ]
  );

  return (
    <motion.div
      variants={fadeInUp}
      className="relative h-96 rounded-lg overflow-hidden shadow-2xl w-full"
    >
      {isAnchorLink ? (
        <button
          onClick={handleScroll}
          className="block h-full w-full text-left"
          draggable={false}
          onDragStart={preventDrag}
        >
          {cardContent}
        </button>
      ) : (
        <Link to={link} className="block h-full w-full" draggable={false} onDragStart={preventDrag}>
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default SimpleCardComponent;
