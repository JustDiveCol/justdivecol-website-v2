// src/pages/DetailPage/common/Cards/CoursesCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// IMPORTANT: This CoursesCard does NOT use formatDateRange, as per your request.
// If you add date-like info to courses in the future, consider re-adding it.

const CoursesCard = ({ courseData, t, lang }) => {
  // Removed translationNS prop from here, will use 'courses' directly
  // Ensure we have essential course data to render
  if (
    !courseData ||
    !courseData.id ||
    !courseData.header ||
    !courseData.header.titleKey
  ) {
    return null;
  }

  // Determine the key for the course name. It's usually courseData.header.titleKey
  const courseNameKey = courseData.header.titleKey;

  return (
    <Link
      key={courseData.id}
      to={`/cursos/${courseData.id}`} // Link to the specific course page
      className='block bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300'>
      <h4 className='font-sans font-bold text-brand-white'>
        {t(courseNameKey, { ns: 'courses' })}{' '}
        {/* Use 'courses' namespace for course name */}
      </h4>
      {/* REMOVED: Date display logic is intentionally omitted for CoursesCard */}

      <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
        {t('common:viewDetails')} &rarr;{' '}
        {/* Translate "View Details" from common namespace */}
      </span>
    </Link>
  );
};

export default CoursesCard;
