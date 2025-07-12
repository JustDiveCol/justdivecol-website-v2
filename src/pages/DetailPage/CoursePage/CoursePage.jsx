// src/pages/DetailPage/CoursePage/CoursePage.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import CourseLayout from './Layout/CourseLayout';
import SEOComponent from '../../../components/ui/SEOComponent';
import { getCourseDetails } from '../../../data/content/courses/_index';
import { staggerContainer } from '../../../hooks/animations';

/**
 * Renders the detail page for a specific course.
 * It fetches course data based on the 'courseId' from the URL,
 * handles loading and error states, and then passes the data to the CourseLayout component.
 */
const CoursePage = () => {
  const { courseId } = useParams(); // Get the dynamic courseId from the URL.
  const { t } = useTranslation(['courses', 'common']);

  // State for managing course data, associated trips, loading, and error status.
  const [courseData, setCourseData] = useState(null);
  const [availableTrips, setAvailableTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch course details when the component mounts or the courseId changes.
  useEffect(() => {
    const fetchedData = getCourseDetails(courseId);

    if (fetchedData && fetchedData.courseData) {
      setCourseData(fetchedData.courseData);
      setAvailableTrips(fetchedData.availableTrips);
    } else {
      // If no data is found for the given courseId, set an error state.
      setError(true);
    }

    setIsLoading(false);
  }, [courseId]); // Rerun this effect if the courseId in the URL changes.

  // --- Render based on state ---

  if (isLoading) {
    return (
      <Navigate
        to='/404'
        replace
      />
    );
  }

  if (error || !courseData) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Course not found or an error occurred.
      </div>
    );
  }

  return (
    <>
      <SEOComponent
        title={t(courseData.seo.titleKey)}
        description={t(courseData.seo.descriptionKey)}
        imageUrl={courseData.header.bannerImageUrl}
        url={`/cursos/${courseData.id}`}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <CourseLayout
          courseData={courseData}
          availableTrips={availableTrips}
        />
      </motion.div>
    </>
  );
};

export default CoursePage;
