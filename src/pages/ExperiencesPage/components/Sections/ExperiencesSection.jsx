import React from 'react';
import { motion } from 'motion/react';

// Import the data structure from our single source for the homepage
import { homePageData } from '../../../../data/pages/homeData';

import SimpleCardComponent from '../../../../components/common/Card/SimpleCardComponent';

import { staggerContainer } from '../../../../hooks/animations';

const ExperiencesSection = () => {
  // Destructure the relevant data for this section from our homeData file
  const { categories } = homePageData.featuredExperiences;

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      <motion.div
        variants={staggerContainer}
        className='container mx-auto text-center'>
        {/* The card grid doesn't need to be animated itself, but its parent does. */}
        <motion.div
          variants={staggerContainer}
          className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {categories.map((card) => (
            <SimpleCardComponent
              key={card.id}
              cardData={card}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperiencesSection;
