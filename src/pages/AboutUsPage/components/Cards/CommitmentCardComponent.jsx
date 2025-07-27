// src/pages/AboutUsPage/components/Cards/CommitmentCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';
import { NAMESPACES } from '@/data/global/constants';

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
const CommitmentCardComponent = ({ pointData, icon, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-brand-primary-medium w-full max-w-sm mx-auto"
    >
      <div className="text-brand-cta-green mb-4">{icon}</div>

      <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase text-brand-white tracking-wide">
        {t(pointData.titleKey)}
      </h3>

      <p className="text-xs sm:text-sm md:text-base text-brand-neutral/80 mt-2 leading-relaxed">
        {t(pointData.descriptionKey)}
      </p>
    </motion.div>
  );
};

export default CommitmentCardComponent;
