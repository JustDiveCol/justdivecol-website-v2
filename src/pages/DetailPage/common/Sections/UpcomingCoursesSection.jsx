import React from 'react';
import { useTranslation } from 'react-i18next';
import CoursesCard from '../Cards/CoursesCard';

/**
 * Renders a section that displays a responsive, centered grid of available courses.
 * This component replaces the separate Horizontal and Vertical versions.
 *
 * @param {object} props - The component props.
 * @param {object[]} props.availableCourses - An array of course data objects to display.
 * @param {string} props.titleKey - The translation key for the section's title.
 * @param {string} [props.noCoursesMessageKey] - Optional: The translation key for the message shown when no courses are available.
 * @param {string} props.translationNS - The i18next namespace to use for the section title.
 */
const UpcomingCoursesSection = ({
  availableCourses,
  titleKey,
  noCoursesMessageKey,
  translationNS,
}) => {
  const { t, i18n } = useTranslation([translationNS, 'courses', 'common']);

  if (!titleKey || !availableCourses) {
    return null;
  }

  return (
    <div
      id='available-courses-section'
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-bold text-brand-white mb-4'>
        {t(titleKey, { ns: translationNS })}
      </h3>
      {availableCourses.length > 0 ? (
        // --- Contenedor Flexbox para un diseño centrado y adaptable ---
        <div className='flex flex-wrap gap-6 justify-center pt-4 border-t border-brand-primary-light/40'>
          {availableCourses.map((course) => (
            <CoursesCard
              key={course.id}
              courseData={course}
              lang={i18n.language}
              t={t}
            />
          ))}
        </div>
      ) : (
        // Mensaje que se muestra si no hay cursos
        noCoursesMessageKey && (
          <div>
            <p className='text-sm text-brand-neutral/80 pt-4 border-t border-brand-primary-light/40'>
              {t(noCoursesMessageKey, { ns: translationNS })}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default UpcomingCoursesSection;
