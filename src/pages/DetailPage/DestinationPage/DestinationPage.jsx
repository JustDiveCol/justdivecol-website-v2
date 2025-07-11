import React from 'react';
import { motion } from 'motion/react';

import SEOComponent from '../../../components/ui/SEOComponent';
import DestinationLayout from './Layout/DestinationLayout';

import { staggerContainer } from '../../../hooks/animations';

const DestinationPage = () => {
  return (
    <>
      <SEOComponent />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <DestinationLayout />
      </motion.div>
    </>
  );
};

export default DestinationPage;
