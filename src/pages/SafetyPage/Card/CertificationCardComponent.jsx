// src/pages/SafetyPage/Card/CertificationCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../hooks/animations';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders a card for a single certification or partner organization.
 *
 * @param {object} props - The component props.
 * @param {object} props.partnerData - The data object for a single partner.
 * @param {string} props.partnerData.nameKey - The translation key for the partner's name.
 * @param {string} props.partnerData.descriptionKey - The translation key for the partner's description.
 * @param {string} props.partnerData.logoUrl - The URL for the partner's logo.
 */
const CertificationCardComponent = ({ translationNS, partnerData }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);
  const { nameKey, descriptionKey, logoUrl } = partnerData;

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-brand-primary-medium p-8 rounded-lg shadow-xl flex flex-col text-center w-full max-w-sm"
    >
      <div className="flex-shrink-0 h-24 flex items-center justify-center">
        <img
          src={logoUrl}
          alt={t(nameKey)}
          className="max-h-20"
          loading="lazy" // Defer loading of logos to improve initial page performance.
        />
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-base-md font-bold text-brand-white">{t(nameKey)}</h3>
        <p className="text-base-xs mt-2 text-brand-neutral/80 flex-grow">{t(descriptionKey)}</p>
      </div>
    </motion.div>
  );
};

export default CertificationCardComponent;
