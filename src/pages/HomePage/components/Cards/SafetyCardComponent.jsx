// src/pages/HomePage/components/Cards/SafetyCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';

// Import the icons required for this component.
import { GuidesIcon } from '../../../../assets/icons/GuidesIcon';
import { EquipmentIcon } from '../../../../assets/icons/EquipmentIcon';
import { ProtocolsIcon } from '../../../../assets/icons/ProtocolsIcon';

// Maps string identifiers from the data file to the actual imported icon components.
// This allows the data layer to remain simple (e.g., "id: 'guias'").
const iconMap = {
  guias: <GuidesIcon />,
  equipos: <EquipmentIcon />,
  protocolos: <ProtocolsIcon />,
};

/**
 * Renders a card highlighting a single safety feature.
 *
 * @param {object} props - The component props.
 * @param {object} props.item - The data object for the safety point.
 * @param {string} props.item.id - The unique ID used as a key and for the icon map.
 * @param {string} props.item.titleKey - The translation key for the card's title.
 * @param {string} props.item.descriptionKey - The translation key for the card's description.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const SafetyCardComponent = ({ item, translationNS }) => {
  const { t } = useTranslation(translationNS);

  return (
    <motion.div
      variants={fadeInUp}
      className='flex flex-col items-center'>
      <div className='text-brand-cta-green'>{iconMap[item.id]}</div>
      <h3 className='mt-4 text-2xl font-sans font-semibold'>
        {t(item.titleKey)}
      </h3>
      <p className='mt-2 font-serif text-brand-neutral'>
        {t(item.descriptionKey)}
      </p>
    </motion.div>
  );
};

export default SafetyCardComponent;
