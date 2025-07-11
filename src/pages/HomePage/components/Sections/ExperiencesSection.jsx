// src/pages/HomePage/components/Sections/ExperiencesSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Import the data structure from our single source for the homepage
import { homePageData } from '../../../../data/pages/homeData';

// Import our new reusable card component
import SimpleCardComponent from '../../../../components/common/Card/SimpleCardComponent';

import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

/**
 * Main component that renders the "Featured Experiences" section.
 * Commonly used on the homepage to provide a quick overview of services.
 */
const ExperiencesSection = () => {
  // Get the translation function 't' for the 'experiences' namespace
  const { t } = useTranslation('home');

  // Destructure the relevant data for this section from our homeData file
  const { titleKey, subtitleKey, categories } =
    homePageData.featuredExperiences;

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      {/*
          This motion.div acts as the animation container.
          We apply the stagger variants to it.
        */}
      <motion.div
        variants={staggerContainer}
        className='container mx-auto text-center'>
        {/* The children now only need to reference the 'fadeInUp' variant. */}
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
          {t(titleKey)}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
          {t(subtitleKey)}
        </motion.p>

        {/* The card grid doesn't need to be animated itself, but its parent does. */}
        <motion.div
          variants={staggerContainer}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.1 }}
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
