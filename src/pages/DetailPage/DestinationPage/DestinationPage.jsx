// src/pages/DetailPage/DestinationPage/DestinationPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import SEOComponent from '../../../components/ui/SEOComponent';
import DestinationLayout from './Layout/DestinationLayout';
// Import the data access utilities
import {
  destinationsById,
  getDestinationsWithUpcomingTrips,
} from '../../../data/content/destinations/_index';
import { staggerContainer } from '../../../hooks/animations';

const DestinationPage = () => {
  const { destinationId } = useParams(); // Get the destinationId from the URL
  const { t } = useTranslation(['destinations', 'common']); // Use relevant namespaces

  const [destinationData, setDestinationData] = useState(null);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Attempt to find the specific destination data
    const foundDestination = destinationsById[destinationId];

    if (foundDestination) {
      // Since getDestinationsWithUpcomingTrips attaches trips to ALL destinations,
      // we need to filter that result to get the specific one with its trips.
      const allDestinationsWithTrips = getDestinationsWithUpcomingTrips();
      const specificDestinationWithTrips = allDestinationsWithTrips.find(
        (dest) => dest.id === destinationId
      );

      if (specificDestinationWithTrips) {
        setDestinationData(specificDestinationWithTrips);
        setUpcomingTrips(specificDestinationWithTrips.upcomingTrips); // Extract the already attached trips
        setIsLoading(false);
      } else {
        // This case implies destination exists but somehow no trips are attached, or filtering failed
        setError(true);
        setIsLoading(false);
      }
    } else {
      // Destination not found at all
      setError(true);
      setIsLoading(false);
    }
  }, [destinationId]); // Re-run effect if destinationId changes

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-brand-white text-2xl'>
        {t('common:loading')}...
      </div>
    );
  }

  if (error || !destinationData) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Destination not found or an error occurred.
      </div>
    );
  }

  return (
    <>
      <SEOComponent
        title={t(destinationData.seo.titleKey, { ns: 'destinations' })}
        description={t(destinationData.seo.descriptionKey, {
          ns: 'destinations',
        })}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <DestinationLayout
          destinationData={destinationData} // Pass the fetched destination data
          upcomingTrips={upcomingTrips} // Pass upcoming trips
        />
      </motion.div>
    </>
  );
};

export default DestinationPage;
