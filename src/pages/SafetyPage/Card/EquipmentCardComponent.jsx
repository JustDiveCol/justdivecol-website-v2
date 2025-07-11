// src/pages/SafetyPage/components/Cards/EquipmentCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../../../hooks/animations';

/**
 * Renders a single card for a piece of safety equipment.
 * @param {object} itemData - The data for a single equipment item.
 * @param {React.ReactNode} icon - The actual icon component to render.
 */
export const EquipmentCardComponent = ({ itemData, icon }) => {
  const { t } = useTranslation('safety');

  return (
    <motion.div
      variants={fadeInUp}
      className='bg-brand-primary-dark p-8 rounded-lg shadow-xl text-center'>
      <div className='text-brand-cta-green inline-block mb-4'>{icon}</div>
      <h3 className='text-2xl font-sans font-bold text-brand-white'>
        {t(itemData.nameKey)}
      </h3>
      <p className='mt-2 font-serif text-brand-neutral/80'>
        {t(itemData.descriptionKey)}
      </p>
    </motion.div>
  );
};
