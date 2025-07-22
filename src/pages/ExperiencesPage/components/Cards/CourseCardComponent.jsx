// src/pages/ExperiencesPage/components/Cards/CourseCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../../../../hooks/animations';
import ImageComponent from '../../../../components/common/Image/ImageComponent';

/**
 * Renders a detailed card for a single course, showing its image, title,
 * a snippet of the description, availability status, and duration.
 *
 * @param {object} props - The component props.
 * @param {object} props.certData - The complete data object for the course.
 */
const CourseCardComponent = ({ certData, translationNS }) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { id, header, card, details, availability } = certData;

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

  return (
    <motion.div
      variants={fadeInUp}
      className="relative w-[80%] sm:w-[70%] md:w-[45%] lg:w-[30%] max-w-sm bg-brand-primary-medium rounded-lg overflow-hidden shadow-2xl flex flex-col hover:scale-[1.02] transition-all duration-300"
    >
      <ImageComponent imageData={card} translationNS={'courses'} />
      <div className="p-6 flex flex-col flex-grow justify-between">
        <h3 className="heading-5 leading-tight font-bold text-brand-white">{t(header.titleKey)}</h3>
        <div className="mt-6 pt-4 border-t border-brand-primary-light/20 flex justify-between items-center">
          <span
            className={`font-bold text-center text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 rounded-full ${getStatusStyles(
              availability
            )}`}
          >
            {t(`common:${availability}`)}
          </span>
          {details?.durationKey && (
            <span className="text-[10px] sm:text-xs md:text-sm text-center text-brand-neutral bg-brand-primary-light px-2 sm:px-3 py-1 rounded-full">
              {t(details.durationKey)}
            </span>
          )}
        </div>
      </div>
      <Link
        to={`/certification/${id}`}
        className="block bg-brand-cta-orange text-center text-brand-white font-bold uppercase text-xs sm:text-sm md:text-base p-2 sm:p-3 hover:bg-opacity-90 transition-colors mt-auto"
      >
        {t('common:viewDetails')}
      </Link>
    </motion.div>
  );
};

export default CourseCardComponent;
