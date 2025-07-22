// src/pages/AboutUsPage/components/Sections/CommitmentSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

import CommitmentCardComponent from '../Cards/CommitmentCardComponent';

// Import the icons needed for this section
import {
  SustainabilityIcon,
  SecurityIcon,
  HandshakeIcon,
} from '../../../../assets/icons/NavbarIcons';

/**
 * Renders the "Our Commitment" section, displaying key brand values.
 * This component maps string identifiers from data to actual icon components.
 *
 * @param {object} props - The component props.
 * @param {object} props.commitmentData - The data object for this section.
 * @param {string} props.commitmentData.titleKey - The translation key for the section title.
 * @param {string} props.commitmentData.subtitleKey - The translation key for the section subtitle.
 * @param {object[]} props.commitmentData.points - An array of commitment points.
 */
const CommitmentSection = ({ translationNS, commitmentData }) => {
  const { t } = useTranslation([translationNS, 'common']);

  // This map links the 'icon' string from the data file to the actual Icon component.
  // This allows the data to remain simple (e.g., "icon: 'leaf'") while the component
  // handles the mapping to the correct visual element.
  const iconMap = {
    leaf: <SustainabilityIcon className="h-16 w-16" />,
    shield: <SecurityIcon className="h-16 w-16" />,
    heart: <HandshakeIcon className="h-16 w-16" />,
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="py-12 px-4 bg-brand-primary-dark"
    >
      <div className="container mx-auto text-center">
        {/* Section Title and Subtitle */}
        <motion.h2 variants={fadeInUp} className="heading-2 text-brand-white uppercase">
          {t(commitmentData.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-subtitle-2 mt-4 max-w-3xl mx-auto text-brand-neutral"
        >
          {t(commitmentData.subtitleKey)}
        </motion.p>

        {/* Grid for Commitment Points */}
        <motion.div
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {commitmentData.points.map((point) => (
            <CommitmentCardComponent
              key={point.id}
              pointData={point}
              icon={iconMap[point.icon]} // The resolved icon component is passed as a prop.
              translationNS={translationNS}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CommitmentSection;
