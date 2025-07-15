// src/pages/DetailPage/DestinationPage/DestinationPage.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// UI, Layout, and Animation
import SEOComponent from '../../../components/ui/SEOComponent';
import DestinationLayout from './Layout/DestinationLayout';
import { staggerContainer } from '../../../hooks/animations';

// Data fetching utilities
import { destinationsById } from '../../../data/content/destinations/_index';
import { publishedExperiences } from '../../../data/content/experiences/_index';

/**
 * Renders the detail page for a specific destination.
 * It fetches destination data and its associated upcoming trips based on the 'destinationId'
 * from the URL, handles loading/error states, and passes the data to the DestinationLayout.
 */
const DestinationPage = () => {
  const { destinationId } = useParams();
  const { t } = useTranslation(['destinations', 'common']);

  // State for managing destination data, trips, loading, and errors.
  const [destinationData, setDestinationData] = useState(null);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch all necessary data when the destinationId changes.
  useEffect(() => {
    const baseDestination = destinationsById[destinationId];

    if (baseDestination) {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to the beginning of the day for accurate comparison.

      // Filter and sort all published experiences to find ones matching this destination.
      const filteredUpcomingTrips = publishedExperiences
        .filter(
          (trip) =>
            trip.destinationId === destinationId &&
            new Date(trip.details.endDate) >= today
        )
        .sort(
          (a, b) =>
            new Date(a.details.startDate) - new Date(b.details.startDate)
        );

      setDestinationData(baseDestination);
      setUpcomingTrips(filteredUpcomingTrips);
    } else {
      // If no destination matches the ID, set an error state.
      setError(true);
    }

    setIsLoading(false);
  }, [destinationId]); // Rerun effect if the destinationId in the URL changes.

  // --- Render based on component state ---

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-brand-white text-2xl'>
        {t('common:loading')}...
      </div>
    );
  }

  if (error || !destinationData) {
    return (
      <Navigate
        to='/404'
        replace
      />
    );
  }

  return (
    <>
      <SEOComponent
        title={t(destinationData.seo.titleKey, { ns: 'destinations' })}
        description={t(destinationData.seo.descriptionKey, {
          ns: 'destinations',
        })}
        imageUrl={destinationData.header.backgroundImage}
        url={`/destinos/${destinationData.id}`}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <DestinationLayout
          destinationData={destinationData}
          upcomingTrips={upcomingTrips}
        />
      </motion.div>
    </>
  );
};

export default DestinationPage;
