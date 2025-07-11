// src/pages/AboutUsPage/components/Sections/CommitmentSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

import CommitmentCardComponent from '../Cards/CommitmentCardComponent';

// Import the icons needed for this section
import { LeafIcon } from '../../../../assets/icons/LeafIcon';
import { ShieldIcon } from '../../../../assets/icons/ShieldIcon';
import { HeartIcon } from '../../../../assets/icons/HeartIcon';

/**
 * Renders the commitment section, displaying key values of the brand.
 * @param {object} commitmentData - The data object for this section.
 */
const CommitmentSection = ({ commitmentData }) => {
  const { t } = useTranslation('aboutUs');

  // This map links the 'icon' string from your data to the actual Icon component.
  const iconMap = {
    leaf: <LeafIcon />,
    shield: <ShieldIcon />,
    heart: <HeartIcon />,
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, amount: 0.3 }}
      className='py-20 px-4 bg-brand-primary-dark'>
      <div className='container mx-auto text-center'>
        {/* Section Title and Subtitle */}
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
          {t(commitmentData.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
          {t(commitmentData.subtitleKey)}
        </motion.p>

        {/* Grid for Commitment Points */}
        <motion.div
          variants={staggerContainer}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
          {commitmentData.points.map((point) => (
            <CommitmentCardComponent
              key={point.id}
              pointData={point}
              icon={iconMap[point.icon]} // We pass the resolved icon as a prop
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CommitmentSection;
