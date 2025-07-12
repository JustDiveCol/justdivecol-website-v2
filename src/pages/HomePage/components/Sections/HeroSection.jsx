// src/pages/HomePage/components/Sections/HeroSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import data specifically from the home page data file.
import { homePageData } from '../../../../data/pages/homeData';

/**
 * Renders the main Hero section for the homepage, featuring a full-screen
 * background image, an animated title, subtitle, and a call-to-action button.
 */
const HeroSection = () => {
  const { t } = useTranslation('home');

  // Destructure the hero-specific data for cleaner access in the JSX.
  const { imageUrl, titleKey, subtitleKey, ctaTextKey, ctaLink } =
    homePageData.hero;

  return (
    <section
      className='relative min-h-screen flex items-center justify-center text-center text-brand-white bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Dark overlay to ensure text readability over the background image. */}
      <div className='absolute inset-0 bg-brand-primary-dark/70'></div>

      {/* Main content container. */}
      <div className='relative z-10 p-4'>
        {/* Each element has a staggered animation for a smooth entry effect. */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold uppercase tracking-tight'>
          {t(titleKey)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-4 max-w-2xl mx-auto text-lg md:text-xl font-serif text-brand-neutral'>
          {t(subtitleKey)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-8'>
          <Link
            to={ctaLink}
            className='inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-cta-yellow'>
            {t(ctaTextKey)}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
