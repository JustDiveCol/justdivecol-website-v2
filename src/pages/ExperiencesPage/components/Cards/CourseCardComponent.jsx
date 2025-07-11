// src/pages/ExperiencesPage/components/Cards/CourseCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';

/**
 * Renders a detailed card for a single course, showing its image, title,
 * a snippet of the description, availability status, and duration.
 *
 * @param {object} props - The component props.
 * @param {object} props.courseData - The complete data object for the course.
 */
const CourseCardComponent = ({ courseData }) => {
  const { t } = useTranslation(['courses', 'common']);
  const { id, header, description, details, availability } = courseData;

  /**
   * Returns Tailwind CSS classes based on the course's availability status.
   * @param {string} statusKey - The availability status key (e.g., 'statusAvailable').
   * @returns {string} The corresponding CSS classes.
   */
  const getStatusStyles = (statusKey) => {
    return statusKey === 'statusAvailable'
      ? 'bg-brand-cta-green text-brand-primary-dark'
      : 'bg-brand-cta-yellow text-brand-primary-dark';
  };

  // Find the course duration from the details array by its specific translation key.
  const duration = details.items.find(
    (item) => item.labelKey === 'owdDetailLabel1'
  )?.valueKey;

  return (
    <motion.div
      variants={fadeInUp}
      className='bg-brand-primary-medium rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-sm'>
      <img
        src={header.imageUrl}
        alt={t(header.titleKey)}
        className='w-full h-56 object-cover bg-brand-primary-light'
        loading='lazy' // Defer loading of images until they are near the viewport.
      />
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-2xl font-bold font-sans text-brand-white'>
          {t(header.titleKey)}
        </h3>
        {/* Display a truncated version of the first paragraph of the description. */}
        <p className='mt-2 font-serif text-brand-neutral flex-grow'>
          {t(description.paragraphs[0]).substring(0, 100)}...
        </p>
        <div className='mt-6 pt-4 border-t border-brand-primary-light/20 flex justify-between items-center'>
          <span
            className={`font-sans font-bold text-sm px-3 py-1 rounded-full ${getStatusStyles(
              availability
            )}`}>
            {t(`common:${availability}`)}
          </span>
          {/* Conditionally render the duration if it was found in the data. */}
          {duration && (
            <span className='font-serif text-sm text-brand-neutral bg-brand-primary-light px-3 py-1 rounded-full'>
              {t(duration, { ns: 'courses' })}
            </span>
          )}
        </div>
      </div>
      <Link
        to={`/cursos/${id}`}
        className='block bg-brand-cta-orange text-center text-brand-white font-bold uppercase p-3 hover:bg-opacity-90 transition-colors mt-auto'>
        {t('common:viewDetails')}
      </Link>
    </motion.div>
  );
};

export default CourseCardComponent;
