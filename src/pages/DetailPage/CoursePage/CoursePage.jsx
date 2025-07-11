import React from 'react';
import { motion } from 'motion/react';

import CourseLayout from './Layout/CourseLayout';
import SEOComponent from '../../../components/ui/SEOComponent';

import { staggerContainer } from '../../../hooks/animations';

const CoursePage = () => {
  return (
    <>
      <SEOComponent />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <CourseLayout />
      </motion.div>
    </>
  );
};

export default CoursePage;
