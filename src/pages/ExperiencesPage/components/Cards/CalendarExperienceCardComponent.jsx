// src/pages/ExperiencesPage/components/Cards/CalendarExperienceCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { formatDateRange } from '../../../../utils/formatters';
import { CalendarIcon } from '../../../../assets/icons/CalendarIcon';
import { fadeInUp } from '../../../../hooks/animations';

/**
 * A card component that displays a single upcoming trip in a calendar-like list.
 * Used within the CalendarExperiencesSection.
 *
 * @param {object} props - The component props.
 * @param {object} props.tripData - The data object for a specific trip.
 * @param {string} props.tripData.id - The unique identifier for the trip.
 * @param {string} props.tripData.nameKey - The translation key for the trip's name.
 * @param {object} props.tripData.details - An object containing date information.
 * @param {string} props.tripData.details.startDate - The start date of the trip.
 * @param {string} props.tripData.details.endDate - The end date of the trip.
 */
const CalendarExperienceCardComponent = ({ tripData }) => {
  // We load both 'common' and 'experiences' namespaces for trip names and generic button texts.
  const { t, i18n } = useTranslation(['common', 'experiences']);
  const { id, nameKey, details } = tripData;

  return (
    <motion.li
      variants={fadeInUp}
      className='bg-brand-primary-dark/50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-lg transition-all duration-300 hover:bg-brand-primary-dark'>
      {/* Left side: Icon, Title, and Date */}
      <div className='flex items-center mb-4 sm:mb-0 text-left w-full sm:w-auto text-brand-white'>
        <CalendarIcon />
        <div className='ml-4'>
          <h3 className='text-xl font-sans font-semibold text-brand-white'>
            {t(nameKey, { ns: 'experiences' })}
          </h3>
          <p className='text-md font-serif text-brand-neutral/80'>
            {formatDateRange(
              details.startDate,
              details.endDate,
              i18n.language,
              t
            )}
          </p>
        </div>
      </div>

      {/* Right side: Action Button */}
      <div className='flex items-center space-x-4 w-full sm:w-auto justify-end'>
        <Link
          to={`/experiencias/${id}`}
          className='bg-brand-cta-orange text-white font-sans font-bold text-sm uppercase py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors duration-300'>
          {t('viewDetails', { ns: 'common' })}
        </Link>
      </div>
    </motion.li>
  );
};

export default CalendarExperienceCardComponent;
