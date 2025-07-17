// src/pages/DetailPage/common/Sections/UpcomingCoursesVerticalSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import CoursesCard from '../Cards/CoursesCard';

/**
 * Renders a section that displays a vertical list of available courses.
 *
 * @param {object} props - The component props.
 * @param {object[]} props.availableCourses - An array of course data objects to display.
 * @param {string} props.titleKey - The translation key for the section's title.
 * @param {string} props.noTripsMessageKey - The translation key for the message shown when no courses are available.
 * @param {string} props.translationNS - The i18next namespace to use for the section title.
 */
const UpcomingCoursesVerticalSection = ({
  availableCourses,
  titleKey,
  noTripsMessageKey,
  translationNS,
}) => {
  // Loads multiple namespaces to handle the section title and the course/common data.
  const { t, i18n } = useTranslation([translationNS, 'courses', 'common']);

  // Do not render if the section title or course data is missing.
  if (!titleKey || !availableCourses) {
    return null;
  }

  return (
    <div
      id='available-courses-section-vertical'
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-bold text-brand-white mb-4'>
        {t(titleKey, { ns: translationNS })}
      </h3>
      {availableCourses.length > 0 ? (
        <div className='space-y-4'>
          {availableCourses.map((course) => (
            <CoursesCard
              key={course.id}
              courseData={course}
              lang={i18n.language}
              t={t} // Pass down the 't' function and language to the child card.
            />
          ))}
        </div>
      ) : (
        <div>
          <p className=' text-sm text-brand-neutral/80'>
            {/* The fallback message is sourced from the 'common' namespace. */}
            {t(noTripsMessageKey, { ns: 'common' })}
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingCoursesVerticalSection;
