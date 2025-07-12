// src/pages/DetailPage/ExperiencePage/ExperiencePage.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// UI, Layout, and Animation
import { staggerContainer } from '../../../hooks/animations';
import SEOComponent from '../../../components/ui/SEOComponent';
import ExperienceLayout from './Layout/ExperienceLayout';

// Data fetching utility
import { getExperienceDetails } from '../../../data/content/experiences/_index';

/**
 * Renders the detail page for a specific experience (trip).
 * It fetches experience data and any associated courses based on the 'tripId'
 * from the URL, handles loading/error states, and passes the data to the ExperienceLayout.
 */
const ExperiencePage = () => {
  const { tripId } = useParams(); // Get the dynamic tripId from the URL.
  const { t } = useTranslation(['experiences', 'common']);

  // State for managing experience data, courses, loading, and errors.
  const [experienceData, setExperienceData] = useState(null);
  const [offeredCoursesData, setOfferedCoursesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch all necessary data when the tripId changes.
  useEffect(() => {
    // The utility returns both trip data and any courses offered with it.
    const fetchedData = getExperienceDetails(tripId);

    if (fetchedData && fetchedData.tripData) {
      setExperienceData(fetchedData.tripData);
      setOfferedCoursesData(fetchedData.offeredCoursesData || []); // Ensure offeredCoursesData is always an array.
    } else {
      // If no data is found for the given tripId, set an error state.
      setError(true);
    }
    setIsLoading(false);
  }, [tripId]); // Rerun this effect if the tripId in the URL changes.

  // --- Render based on component state ---

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-brand-white text-2xl'>
        {t('common:loading')}...
      </div>
    );
  }

  if (error || !experienceData) {
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
        title={t(experienceData.seo.titleKey, { ns: 'experiences' })}
        description={t(experienceData.seo.descriptionKey, {
          ns: 'experiences',
        })}
        imageUrl={experienceData.header.bannerImageUrl}
        url={`/expediciones/${experienceData.id}`}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <ExperienceLayout
          experienceData={experienceData}
          offeredCoursesData={offeredCoursesData}
        />
      </motion.div>
    </>
  );
};

export default ExperiencePage;
