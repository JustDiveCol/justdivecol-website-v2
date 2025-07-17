// src/pages/AboutUsPage/components/Cards/CommitmentCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';

/**
 * Renders a single "commitment" card with an icon, title, and description.
 *
 * @param {object} props - The component props.
 * @param {object} props.pointData - The data object for a single commitment point.
 * @param {string} props.pointData.id - A unique identifier for the key prop.
 * @param {string} props.pointData.titleKey - The translation key for the title.
 * @param {string} props.pointData.descriptionKey - The translation key for the description.
 * @param {React.ReactNode} props.icon - The actual icon component to render.
 */
const CommitmentCardComponent = ({ pointData, icon }) => {
  const { t } = useTranslation('aboutUs');

  return (
    <motion.div
      variants={fadeInUp}
      key={pointData.id}
      className='flex flex-col items-center'>
      {/* The icon is passed as a ready-to-render component. */}
      <div className='text-brand-cta-green mb-4'>{icon}</div>

      <h3 className='text-2xl font-semibold text-brand-white'>
        {t(pointData.titleKey)}
      </h3>
      <p className='mt-2  text-brand-neutral/80'>
        {t(pointData.descriptionKey)}
      </p>
    </motion.div>
  );
};

export default CommitmentCardComponent;
