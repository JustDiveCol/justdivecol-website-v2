import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import MapComponent from './components/MapComponent';
import SEOComponent from '../../components/ui/SEOComponent';

import { mapData } from '../../data/pages/mapData';
import { staggerContainer, fadeInUp } from '../../hooks/animations';

/**
 * Renders the main map exploration page.
 * This page provides a full view of all dive sites and allows users to filter and explore.
 */
const MapPage = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      {/* SEO Component for setting page-specific metadata */}
      <SEOComponent
        title={t(mapData.seo.titleKey)}
        description={t(mapData.seo.descriptionKey)}
        keywords={t(mapData.seo.keywords)}
        imageUrl={mapData.seo.imageUrl}
        url={mapData.seo.url}
      />

      {/* Main container with animations and styling */}
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'>
        <motion.header
          variants={fadeInUp}
          className='container mx-auto pt-5 pb-4'>
          <h1 className='text-3xl lg:text-4xl font-bold text-brand-white text-center mb-4'>
            {t(mapData.titleKey)}
          </h1>
          <p className='mx-auto text-lg text-brand-neutral/80 text-justify'>
            {t(mapData.descriptionKey)}
          </p>
        </motion.header>

        <motion.main
          variants={fadeInUp}
          initial='initial'
          animate='animate'
          className='flex-grow w-full px-6 md:px-12'>
          <div className='bg-brand-primary-medium rounded-2xl'>
            <MapComponent />
          </div>
        </motion.main>
      </motion.div>
    </>
  );
};

export default MapPage;
