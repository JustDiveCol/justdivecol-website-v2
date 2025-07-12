// src/pages/UnderConstructionPage/UnderConstructionPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Data sources and assets
import { underConstructionData } from '../../data/pages/underConstructionData';
import SEOComponent from '../../components/ui/SEOComponent';
import { ConstructionIcon } from '../../assets/icons/ConstructionIcon';

/**
 * Renders a placeholder page for sections of the website that are under development.
 */
const UnderConstructionPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOComponent
        title={t(underConstructionData.seo.titleKey, { ns: 'common' })}
        description={t(underConstructionData.seo.descriptionKey, {
          ns: 'common',
        })}
        url='/proximamente' // Add url for completeness
      />
      {/* Main container that centers content and fills the screen height. */}
      {/* 'isolate' creates a new stacking context for the z-index to work correctly. */}
      <div className='relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 isolate overflow-hidden'>
        {/* Background container with an image and a dark overlay. */}
        <div className='absolute inset-0 -z-10'>
          <img
            src={underConstructionData.imageUrl}
            alt={t(underConstructionData.titleKey, { ns: 'common' })}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-brand-primary-dark/85'></div>
        </div>

        {/* Main content container with an entry animation. */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}>
          <ConstructionIcon />
          <h1 className='mt-6 text-4xl md:text-6xl font-sans font-extrabold uppercase text-brand-white'>
            {t(underConstructionData.titleKey, { ns: 'common' })}
          </h1>
          <p className='mt-4 max-w-lg mx-auto font-serif text-lg text-brand-neutral'>
            {t(underConstructionData.subtitleKey, { ns: 'common' })}
          </p>
          <div className='mt-10'>
            {/* The button redirects the user back to the homepage. */}
            <Link
              to={underConstructionData.ctaLink}
              className='inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50'>
              {t(underConstructionData.ctaTextKey, { ns: 'common' })}
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default UnderConstructionPage;
