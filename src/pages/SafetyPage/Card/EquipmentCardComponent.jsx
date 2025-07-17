// src/pages/SafetyPage/Card/EquipmentCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../hooks/animations';

/**
 * Renders a card for a single piece of safety equipment, displaying its icon, name, and description.
 *
 * @param {object} props - The component props.
 * @param {object} props.itemData - The data object for a single equipment item.
 * @param {string} props.itemData.nameKey - The translation key for the equipment's name.
 * @param {string} props.itemData.descriptionKey - The translation key for the equipment's description.
 * @param {React.ReactNode} props.icon - The actual icon component to render.
 */
export const EquipmentCardComponent = ({ itemData, icon }) => {
  const { t } = useTranslation('safety');

  return (
    <motion.div
      variants={fadeInUp}
      className='bg-brand-primary-dark p-8 rounded-lg shadow-xl text-center'>
      <div className='text-brand-cta-green inline-block mb-4'>{icon}</div>
      <h3 className='text-2xl  font-bold text-brand-white'>
        {t(itemData.nameKey)}
      </h3>
      <p className='mt-2  text-brand-neutral/80'>
        {t(itemData.descriptionKey)}
      </p>
    </motion.div>
  );
};
