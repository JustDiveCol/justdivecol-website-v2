// src/pages/DetailPage/ExperiencePage/ExperiencePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import { staggerContainer } from '../../../hooks/animations';
import SEOComponent from '../../../components/ui/SEOComponent';
import ExperienceLayout from './Layout/ExperienceLayout';
import { getExperienceDetails } from '../../../data/content/experiences/_index'; // Import the data fetching utility

const ExperiencePage = () => {
  const { tripId } = useParams(); // Get the tripId from the URL
  const { t } = useTranslation(['experiences', 'common']); // Use relevant namespaces

  const [experienceData, setExperienceData] = useState(null);
  const [offeredCoursesData, setOfferedCoursesData] = useState([]); // For courses offered by this trip
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch experience details when the component mounts or tripId changes
    const fetchedData = getExperienceDetails(tripId); // This returns { tripData, offeredCoursesData }

    if (fetchedData && fetchedData.tripData) {
      setExperienceData(fetchedData.tripData);
      setOfferedCoursesData(fetchedData.offeredCoursesData || []); // Ensure it's an array
      setIsLoading(false);
    } else {
      console.error(
        'ExperiencePage: Experience details not found for tripId:',
        tripId
      );
      setError(true);
      setIsLoading(false);
    }
  }, [tripId]); // Re-run effect if tripId changes

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-brand-white text-2xl'>
        {t('common:loading')}...
      </div>
    );
  }

  // Check for the base experienceData and its SEO property before rendering
  if (error || !experienceData || !experienceData.seo) {
    console.error(
      'ExperiencePage: Render error - Experience data or SEO information is missing/invalid.',
      { experienceData, error }
    );
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Experience data or SEO information missing. Please check trip ID and
        data structure.
      </div>
    );
  }

  return (
    <>
      <SEOComponent
        title={t(experienceData.seo.titleKey, { ns: 'experiences' })}
        description={t(experienceData.seo.descriptionKey, {
          ns: 'experiences',
        })}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <ExperienceLayout
          experienceData={experienceData} // Pass the fetched experience data
          offeredCoursesData={offeredCoursesData} // Pass courses offered by this trip
        />
      </motion.div>
    </>
  );
};

export default ExperiencePage;
