// src/pages/ExperiencesPage/components/Sections/ExperiencesSection.jsx
import React from 'react';
import { motion } from 'motion/react';

// Data sources and animations
import { homePageData } from '../../../../data/pages/homeData';
import { staggerContainer } from '../../../../hooks/animations';

// Child Components
import SimpleCardComponent from '../../../../components/common/Card/SimpleCardComponent';

/**
 * Renders the top section of the Experiences page, displaying the main
 * categories (Courses, Trips, Private) as a grid of cards.
 * It reuses the category data defined in homePageData.
 */
const ExperiencesSection = () => {
  // Destructure the categories data from the shared home page data file.
  const { categories } = homePageData.featuredExperiences;

  return (
    <section className="bg-brand-primary-dark py-8 px-4">
      <motion.div variants={staggerContainer} className="container mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {categories.map((card) => (
            <SimpleCardComponent key={card.id} cardData={card} translationNS={'home'} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperiencesSection;
