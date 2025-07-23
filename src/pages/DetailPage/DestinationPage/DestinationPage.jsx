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
import { useDestinations } from '@/data/content/destinations/DataProvider';
import { useExperiences } from '@/data/content/experiences/DataProvider';

/**
 * Renders the detail page for a specific destination.
 * It fetches destination data and its associated upcoming trips based on the 'destinationId'
 * from the URL, handles loading/error states, and passes the data to the DestinationLayout.
 */
const DestinationPage = () => {
  const { destinationSlug } = useParams();
  const { t } = useTranslation(['destinationsPage', 'common']);

  // Get data from Context Providers
  const { destinations } = useDestinations();
  const { experiences } = useExperiences();

  // State for managing destination data, trips, loading, and errors.
  const [destinationData, setDestinationData] = useState(null);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch all necessary data when the destinationId changes.
  useEffect(() => {
    setIsLoading(true); // Always reset loading state
    setError(false); // Always reset error state

    // Find the destination by its slug from the context data
    const foundDestination = destinations.find((dest) => dest.slug === destinationSlug);

    if (foundDestination) {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to the beginning of the day for accurate comparison.

      // Filter and sort all published experiences to find ones matching this destination.
      const filteredUpcomingTrips = experiences // Use experiences from context
        .filter(
          (trip) =>
            (trip.destinationId === foundDestination.id &&
              new Date(trip.details.endDate) >= today) ||
            (Array.isArray(trip.destinationIds) &&
              trip.destinationIds.includes(foundDestination.id) &&
              new Date(trip.details.endDate) >= today)
        )
        .sort((a, b) => new Date(a.details.startDate) - new Date(b.details.startDate));

      setDestinationData(foundDestination); // Use the found destination
      setUpcomingTrips(filteredUpcomingTrips);
    } else {
      // If no destination matches the ID, set an error state.
      setError(true);
    }

    setIsLoading(false);
  }, [destinationSlug, destinations, experiences]); // Rerun effect if slug, destinations, or experiences data changes.

  // --- Render based on component state ---

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-brand-white text-2xl">
        {t('common:loading')}...
      </div>
    );
  }

  if (error || !destinationData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOComponent
        title={t(destinationData.seo.titleKey, { ns: 'destinationsPage' })}
        description={t(destinationData.seo.descriptionKey, { ns: 'destinationsPage' })}
        keywords={t(destinationData.seo.keywords)}
        imageUrl={destinationData.seo.imageUrl}
        url={destinationData.seo.url}
      />
      <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
        <DestinationLayout destinationData={destinationData} upcomingTrips={upcomingTrips} />
      </motion.div>
    </>
  );
};

export default DestinationPage;
