// src/pages/SafetyPage/components/Cards/CertificationCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../../../hooks/animations';

/**
 * Renders a single card for a certification partner.
 * @param {object} partnerData - The data for a single partner.
 */
const CertificationCardComponent = ({ partnerData }) => {
  const { t } = useTranslation('safety');
  const { nameKey, descriptionKey, logoUrl } = partnerData;

  return (
    <motion.div
      variants={fadeInUp}
      className='bg-brand-primary-medium p-8 rounded-lg shadow-xl flex flex-col text-center w-full max-w-sm'>
      <div className='flex-shrink-0 h-24 flex items-center justify-center'>
        <img
          src={logoUrl}
          alt={t(nameKey)}
          className='max-h-20'
        />
      </div>
      <div className='mt-4 flex flex-col flex-grow'>
        <h3 className='text-2xl font-sans font-bold text-brand-white'>
          {t(nameKey)}
        </h3>
        <p className='mt-2 font-serif text-brand-neutral/80 flex-grow'>
          {t(descriptionKey)}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificationCardComponent;
