// src/pages/ExperiencesPage/components/Sections/DestinationsSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { experiencesPageData } from '../../../../data/pages/experiencesData';
import { getDestinationsWithUpcomingTrips } from '../../../../data/content/destinations/_index';
import { staggerContainer } from '../../../../hooks/animations';
import DestinationCardComponent from '../Cards/DestinationCardComponent';

/**
 * Renders the "Memorable Destinations" section of the Experiences page.
 * It fetches all published destinations and their associated upcoming trips.
 */
const DestinationsSection = () => {
  const { t } = useTranslation('experiencesPage');

  // Fetches all published destinations and attaches a list of their respective upcoming trips.
  const destinationsWithTrips = getDestinationsWithUpcomingTrips();

  const { sectionId, titleKey } = experiencesPageData.fullCatalog.destinations;

  return (
    <section
      id={sectionId}
      className='py-20 px-4 border-t-2 border-brand-primary-light/20 scroll-mt-20'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-brand-white text-center mb-12 uppercase'>
          {t(titleKey)}
        </h2>
        <motion.div
          variants={staggerContainer}
          className='flex flex-wrap justify-center gap-8'>
          {destinationsWithTrips.map((destination) => (
            <DestinationCardComponent
              key={destination.id}
              destinationData={destination}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
