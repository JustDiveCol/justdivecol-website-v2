// src/pages/SafetyPage/components/Sections/ProtocolsSection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animations and Child Components
import { staggerContainer, fadeInUp } from '../../../hooks/animations';
import ProtocolCardComponent from '../Card/ProtocolCardComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders the "Safety Protocols" section of the Safety page.
 * It displays a title, subtitle, and a list of protocol steps.
 *
 * @param {object} props - The component props.
 * @param {object} props.protocolsData - The data object for this section.
 * @param {string} props.protocolsData.titleKey - The translation key for the section title.
 * @param {string} props.protocolsData.subtitleKey - The translation key for the section subtitle.
 * @param {object[]} props.protocolsData.steps - An array of protocol step objects.
 */
const ProtocolsSection = ({ translationNS, protocolsData }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);
  return (
    <motion.section variants={staggerContainer} className="py-12 px-4 bg-brand-primary-dark">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="heading-2 font-bold text-brand-white uppercase">
            {t(protocolsData.titleKey)}
          </h2>
          <p className="text-subtitle-sm mt-4 max-w-3xl mx-auto text-brand-neutral">
            {t(protocolsData.subtitleKey)}
          </p>
        </motion.div>

        {/* List of Protocol Steps */}
        <motion.div variants={staggerContainer} className="max-w-4xl mx-auto space-y-8">
          {protocolsData.steps.map((step, index) => (
            <ProtocolCardComponent
              key={step.id}
              stepData={step}
              index={index}
              translationNS={translationNS}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProtocolsSection;
