// src/pages/SafetyPage/components/Cards/ProtocolCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../hooks/animations';

/**
 * Renders a single card for a safety protocol step.
 * @param {object} stepData - The data for a single step.
 * @param {number} index - The index of the step, used for numbering.
 */
const ProtocolCardComponent = ({ stepData, index }) => {
  const { t } = useTranslation('safety');
  const { id, nameKey, descriptionKey } = stepData;

  return (
    <motion.div
      key={id}
      variants={fadeInUp}
      className='flex items-start space-x-6 bg-brand-primary-medium p-6 rounded-lg'>
      {/* Step Number */}
      <div className='flex-shrink-0 text-3xl font-sans font-bold text-brand-cta-green'>
        {index + 1}.
      </div>

      {/* Step Content */}
      <div>
        <h3 className='text-2xl font-sans font-semibold text-brand-white'>
          {t(nameKey)}
        </h3>
        <p className='mt-1 font-serif text-brand-neutral/90'>
          {t(descriptionKey)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProtocolCardComponent;
