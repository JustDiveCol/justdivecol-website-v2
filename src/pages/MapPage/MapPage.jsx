import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import MapComponent from './components/MapComponent';
import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';

import { mapData } from '../../data/pages/mapData';
import { staggerContainer, fadeInUp } from '../../hooks/animations';

/**
 * Renders the main map exploration page.
 * This page provides a full view of all dive sites and allows users to filter and explore.
 */
const MapPage = () => {
  const { t } = useTranslation(['map']);

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
        <HeaderComponent
          sectionData={mapData.header}
          translationNS='map'
          heightClass='h-64'
        />

        <motion.main
          variants={fadeInUp}
          initial='initial'
          animate='animate'
          className='flex-grow w-full px-6 md:px-12 py-4'>
          <div className='bg-brand-primary-medium rounded-2xl'>
            <MapComponent />
          </div>
        </motion.main>
      </motion.div>
    </>
  );
};

export default MapPage;
