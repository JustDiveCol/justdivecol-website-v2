// src/pages/SafetyPage/components/Sections/ProtocolsSection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer, fadeInUp } from '../../../hooks/animations';

import ProtocolCardComponent from '../Card/ProtocolCardComponent';

const ProtocolsSection = ({ protocolsData }) => {
  const { t } = useTranslation('safety');
  return (
    <motion.section
      variants={staggerContainer}
      className='py-20 px-4 bg-brand-primary-dark'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeInUp}
          className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
            {t(protocolsData.titleKey)}
          </h2>
          <p className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
            {t(protocolsData.subtitleKey)}
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className='max-w-4xl mx-auto space-y-8'>
          {protocolsData.steps.map((step, index) => (
            <ProtocolCardComponent
              key={step.id}
              stepData={step}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProtocolsSection;
