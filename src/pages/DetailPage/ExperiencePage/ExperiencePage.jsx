import React from 'react';
import { motion } from 'motion/react';

import { staggerContainer } from '../../../hooks/animations';

import SEOComponent from '../../../components/ui/SEOComponent';
import ExperienceLayout from './Layout/ExperienceLayout';

const ExperiencePage = () => {
  return (
    <>
      <SEOComponent />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <ExperienceLayout />
      </motion.div>
    </>
  );
};

export default ExperiencePage;
