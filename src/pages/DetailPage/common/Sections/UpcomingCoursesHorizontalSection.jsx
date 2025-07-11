// src/pages/DetailPage/common/Sections/UpcomingCoursesHorizontalSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
// CORRECTED: Import CoursesCard
import CoursesCard from '../Cards/CoursesCard';

// CORRECTED: Prop name changed from availableTrips to availableCourses
const UpcomingCoursesHorizontalSection = ({
  availableCourses, // Renamed prop
  titleKey,
  noTripsMessageKey, // This message might need to be rephrased for courses
  translationNS, // This will be 'experiences' for the Offered Courses section title
}) => {
  // Ensure 'courses' namespace is loaded for CoursesCard and its own title if from 'courses'
  const { t, i18n } = useTranslation([translationNS, 'courses', 'common']); // Added 'courses' explicitly

  // CORRECTED: Check for availableCourses
  if (!titleKey || !availableCourses) {
    return null;
  }

  return (
    <div
      id='available-courses-section-horizontal' // Changed ID to reflect courses
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {t(titleKey, { ns: translationNS })}
      </h3>
      {/* CORRECTED: Check for availableCourses and map 'course' instead of 'trip' */}
      {availableCourses && availableCourses.length > 0 ? (
        <div className='grid grid-cols-1'>
          {availableCourses.map((course) => (
            <CoursesCard // CORRECTED: Use CoursesCard
              key={course.id}
              courseData={course} // CORRECTED: Pass courseData
              lang={i18n.language}
              t={t}
              // CoursesCard no longer needs translationNS prop because it implicitly uses 'courses'
            />
          ))}
        </div>
      ) : (
        <div>
          <p className='font-serif text-sm text-brand-neutral/80'>
            {/* The message key noTripsMessageKey (from common.js) says "No scheduled dates yet. Contact us for a custom trip!".
                You might want a new message key for courses like 'noScheduledCourses' in common.js
                or just reuse this if it's acceptable.
            */}
            {t(noTripsMessageKey, { ns: 'common' })}
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingCoursesHorizontalSection;
