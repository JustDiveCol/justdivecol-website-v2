// src/pages/DetailPage/common/Cards/CoursesCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a simple card that links to a specific course detail page.
 *
 * NOTE: This card intentionally does not handle date formatting. It is designed
 * to link to a course, which can be offered on multiple dates.
 *
 * @param {object} props - The component props.
 * @param {object} props.courseData - The data object for the course.
 * @param {string} props.courseData.id - The unique identifier for the course.
 * @param {object} props.courseData.header - The header object containing title information.
 * @param {string} props.courseData.header.titleKey - The translation key for the course name.
 * @param {function} props.t - The i18next translation function, passed from the parent.
 * @param {string} props.lang - The current language code, passed from the parent.
 */
const CoursesCard = ({ courseData, t, lang }) => {
  // Ensure we have the essential data before rendering.
  if (
    !courseData ||
    !courseData.id ||
    !courseData.header ||
    !courseData.header.titleKey
  ) {
    return null;
  }

  const courseNameKey = courseData.header.titleKey;

  return (
    <Link
      key={courseData.id}
      to={`/cursos/${courseData.id}`} // Links to the specific course page.
      className='block bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300'>
      <h4 className='font-sans font-bold text-brand-white'>
        {/* The course name is translated using the 'courses' namespace. */}
        {t(courseNameKey, { ns: 'courses' })}
      </h4>

      <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
        {/* The "View Details" text is fetched from the 'common' namespace. */}
        {t('common:viewDetails')} &rarr;
      </span>
    </Link>
  );
};

export default CoursesCard;
