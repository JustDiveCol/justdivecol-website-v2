// src/pages/ExperiencesPage/components/Cards/CalendarExperienceCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { formatDateRange } from '../../../../utils/formatters';
import { CalendarIcon } from '../../../../assets/icons/SocialIcons';
import { ClockIcon } from '../../../../assets/icons/UtilIcons';
import { fadeInUp } from '../../../../hooks/animations';

import AvailabilityBadgeComponent from '../../../../components/common/Component/AvailabilityBadgeComponent';

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
const CalendarExperienceCardComponent = ({ tripData, status, duration }) => {
  const { t, i18n } = useTranslation(['common', 'experiences']);
  const { id, nameKey, details } = tripData;

  const isInactive = status === 'soldOut' || status === 'completed';

  const wrapperClasses = `group bg-brand-neutral/60 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-lg transition-all duration-300 w-full ${
    isInactive ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-neutral'
  }`;

  const CardContent = (
    <>
      {/* Lado Izquierdo */}
      <div className='flex items-center mb-4 sm:mb-0 text-left w-full sm:w-auto text-brand-white'>
        <CalendarIcon className='h-6 w-6 text-brand-primary-dark' />
        <div className='ml-4'>
          <h3 className='text-xl font-semibold text-brand-primary-dark'>
            {t(nameKey, { ns: 'experiences' })}
          </h3>
          <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4'>
            <p className='text-md text-brand-primary-dark/90'>
              {formatDateRange(
                details.startDate,
                details.endDate,
                i18n.language,
                t
              )}
            </p>
            {duration && (
              <div className='flex items-center text-md text-brand-primary-dark/90 mt-1 sm:mt-0'>
                <ClockIcon className='h-4 w-4 mr-1.5' />
                <span>
                  {t('durationFormat', {
                    ns: 'common',
                    days: duration.days,
                    nights: duration.nights,
                  })}
                </span>
              </div>
            )}
          </div>
          {!isInactive && (
            <AvailabilityBadgeComponent
              className='mt-2'
              status={status}
            />
          )}
        </div>
      </div>

      {/* --- CÓDIGO RESTAURADO: LADO DERECHO --- */}
      <div className='mt-4 sm:mt-0'>
        {isInactive ? (
          // Si está inactivo, muestra el badge de estado
          <AvailabilityBadgeComponent status={status} />
        ) : (
          // Si no, muestra el botón visual con animación
          <div className='bg-brand-cta-orange text-white font-bold text-sm uppercase py-2 px-5 rounded-md transition-transform duration-300 group-hover:scale-105'>
            {t('viewDetails', { ns: 'common' })}
          </div>
        )}
      </div>
      {/* --- FIN DEL CÓDIGO RESTAURADO --- */}
    </>
  );

  return (
    <motion.li variants={fadeInUp}>
      {isInactive ? (
        <div className={wrapperClasses}>{CardContent}</div>
      ) : (
        <Link
          to={`/experiencias/${id}`}
          className={wrapperClasses}>
          {CardContent}
        </Link>
      )}
    </motion.li>
  );
};

export default CalendarExperienceCardComponent;
