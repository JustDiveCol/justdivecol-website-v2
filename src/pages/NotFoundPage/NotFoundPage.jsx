// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data and Assets
import { notFoundData } from '../../data/pages/notFoundData';

import ImageComponent from '../../components/common/Image/ImageComponent';

/**
 * Renders the 404 "Not Found" error page.
 * This page is displayed when a user navigates to a non-existent route.
 */
const NotFoundPage = () => {
  const { t } = useTranslation('notFound');
  const { titleKey, subtitleKey, ctaTextKey } = notFoundData;

  return (
    // The 'isolate' class creates a new stacking context for the z-index to work correctly.
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 isolate overflow-hidden">
      {/* Background container with an image and a dark overlay. */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <ImageComponent imageData={notFoundData.image} translationNS={'common'} />
        <div className="absolute inset-0 bg-brand-primary-dark/50"></div>
      </div>

      {/* Main content container with an entry animation. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="mt-6 text-4xl md:text-6xl  font-extrabold uppercase text-brand-white">
          {t(titleKey)}
        </h1>
        <p className="mt-4 max-w-lg mx-auto  text-lg text-brand-neutral">{t(subtitleKey)}</p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block bg-brand-cta-orange text-brand-white  font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50"
          >
            {t(ctaTextKey)}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
