// src/pages/DetailPage/CoursePage/CoursePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import CourseLayout from './Layout/CourseLayout';
import SEOComponent from '../../../components/ui/SEOComponent';
import { getCourseDetails } from '../../../data/content/courses/_index';
import { staggerContainer } from '../../../hooks/animations';

const CoursePage = () => {
  const { courseId } = useParams(); // Get the courseId from the URL
  const { t } = useTranslation('courses'); // Use the 'courses' namespace for translations

  const [courseData, setCourseData] = useState(null);
  const [availableTrips, setAvailableTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch course details when the component mounts or courseId changes
    const fetchedData = getCourseDetails(courseId); //

    if (fetchedData && fetchedData.courseData) {
      setCourseData(fetchedData.courseData);
      setAvailableTrips(fetchedData.availableTrips);
      setIsLoading(false);
    } else {
      setError(true);
      setIsLoading(false);
    }
  }, [courseId]); // Rerun effect if courseId changes

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-brand-white text-2xl'>
        {t('common:loading')}...
      </div>
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
        title={t(courseData.seo.titleKey)} // Use translated SEO title
        description={t(courseData.seo.descriptionKey)} // Use translated SEO description
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <CourseLayout
          courseData={courseData} // Pass the fetched course data
          availableTrips={availableTrips} // Pass available trips
        />
      </motion.div>
    </>
  );
};

export default CoursePage;
