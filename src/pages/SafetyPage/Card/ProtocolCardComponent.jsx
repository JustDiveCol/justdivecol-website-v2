// src/pages/SafetyPage/components/Cards/ProtocolCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../hooks/animations';

/**
 * Renders a card for a single safety protocol step, including its number,
 * title, and description.
 *
 * @param {object} props - The component props.
 * @param {object} props.stepData - The data object for a single step.
 * @param {string} props.stepData.id - A unique identifier for the key prop.
 * @param {string} props.stepData.nameKey - The translation key for the step's name.
 * @param {string} props.stepData.descriptionKey - The translation key for the step's description.
 * @param {number} props.index - The zero-based index of the step, used for display numbering.
 */
const ProtocolCardComponent = ({ stepData, index }) => {
  const { t } = useTranslation('safety');
  const { id, nameKey, descriptionKey } = stepData;

  return (
    <motion.div
      key={id}
      variants={fadeInUp}
      className='flex items-start space-x-6 bg-brand-primary-medium p-6 rounded-lg'>
      {/* The step number is derived from the item's index in the array. */}
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
