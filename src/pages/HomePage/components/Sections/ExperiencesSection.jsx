// src/pages/HomePage/components/Sections/ExperiencesSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { homePageData } from '../../../../data/pages/homeData';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

// Child Components
import SimpleCardComponent from '../../../../components/common/Card/SimpleCardComponent';

/**
 * Renders the "Featured Experiences" section for the homepage.
 * It displays the main service categories as a grid of cards.
 */
const ExperiencesSection = () => {
  const { t } = useTranslation('home');

  // Destructure the relevant data from the single source of truth for the homepage.
  const { titleKey, subtitleKey, categories } =
    homePageData.featuredExperiences;

  return (
    <section className='bg-brand-primary-dark py-20 px-4'>
      {/* This motion.div acts as the main animation container for the section. */}
      <motion.div
        variants={staggerContainer}
        className='container mx-auto text-center'>
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-bold text-brand-white uppercase'>
          {t(titleKey)}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-3xl mx-auto  text-lg text-brand-neutral'>
          {t(subtitleKey)}
        </motion.p>

        {/* This div contains the grid of cards and orchestrates their animation. */}
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
              translationNS={'home'}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperiencesSection;
