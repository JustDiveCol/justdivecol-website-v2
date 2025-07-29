// src/pages/HomePage/components/Cards/FoundationsCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';

// Import the icons required for this component.
import {
  CertifiedIcon,
  HelmetDivingIcon,
  ChecklistIcon,
} from '../../../../assets/icons/DiverIcons';
import { NAMESPACES } from '@/data/global/constants';

// Maps string identifiers from the data file to the actual imported icon components.
// This allows the data layer to remain simple (e.g., "id: 'guias'").
const iconMap = {
  guides: <CertifiedIcon className="h-16 w-16" />,
  gear: <HelmetDivingIcon className="h-16 w-16" />,
  protocols: <ChecklistIcon className="h-16 w-16" />,
};

/**
 * Renders a card highlighting a single Foundations feature.
 *
 * @param {object} props - The component props.
 * @param {object} props.item - The data object for the Foundations point.
 * @param {string} props.item.id - The unique ID used as a key and for the icon map.
 * @param {string} props.item.titleKey - The translation key for the card's title.
 * @param {string} props.item.descriptionKey - The translation key for the card's description.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const FoundationsCardComponent = ({ item, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  return (
    <motion.div
      variants={fadeInUp}
      className="relative w-[30%] min-w-[250px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 bg-brand-primary-dark text-white"
    >
      <div className="text-brand-cta-green mb-4">{iconMap[item.id]}</div>
      <h3 className="text-center text-xs sm:text-base md:text-xl lg:text-2xl font-bold uppercase tracking-wide">
        {t(item.titleKey)}
      </h3>
      <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-brand-neutral mt-2">
        {t(item.descriptionKey)}
      </p>
    </motion.div>
  );
};

export default FoundationsCardComponent;
