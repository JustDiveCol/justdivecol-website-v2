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
import { ROUTES } from '@/data/global/constants';

/**
 * A card component that displays a single upcoming trip in a calendar-like list.
 * Used within the CalendarExperiencesSection.
 *
 * @param {object} props - The component props.
 * @param {object} props.tripData - The data object for a specific trip (which is actually a session object).
 * @param {string} props.tripData.id - The unique identifier for the trip (session).
 * @param {string} props.tripData.slug - The slug for the session. // AÑADIDO: El slug de la sesión
 * @param {string} props.tripData.startDate - The start date of the session.
 * @param {string} props.tripData.endDate - The end date of the session.
 * @param {object} props.tripData.experienceDetails - Contains details of the parent experience.
 */
const CalendarExperienceCardComponent = ({ translationNS, tripData, status, duration }) => {
  const { t, i18n } = useTranslation([translationNS, 'common', 'experiences']);
  // ¡CORREGIDO! Desestructuramos el 'slug' de la sesión también
  const { id, slug: sessionSlug, startDate, endDate, experienceDetails } = tripData; // Renombramos 'slug' a 'sessionSlug' para claridad

  // Acceso seguro a las propiedades de la experiencia padre
  const experienceTitleKey = experienceDetails?.titleKey;
  const experienceSlug = experienceDetails?.slug;

  const isInactive = status === 'soldOut' || status === 'completed';

  const wrapperClasses = `group bg-brand-neutral/60 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-lg transition-all duration-300 w-full ${
    isInactive ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-neutral'
  }`;

  const CardContent = (
    <>
      {/* Lado Izquierdo */}
      <div className="flex items-center mb-4 sm:mb-0 text-left w-full sm:w-auto text-brand-white">
        <div className="mx-4">
          <div className="flex items-center space-x-3">
            <CalendarIcon className="h-6 w-6 text-brand-primary-dark" />
            <h3 className="text-base sm:text-base md:text-lg lg:text-xl uppercase tracking-wide leading-tight font-semibold text-brand-primary-dark">
              {experienceTitleKey
                ? t(experienceTitleKey, { ns: 'experiences' })
                : 'Experience Title Missing'}
            </h3>
          </div>
          <div className="w-full flex flex-col items-center sm:flex-row sm:items-center sm:justify-start sm:space-x-4 text-center sm:text-left mt-1 sm:mt-0">
            <p className="text-xs sm:text-xs md:text-sm lg:text-base tracking-wide leading-tight text-brand-primary-dark/90">
              {formatDateRange(startDate, endDate, i18n.language, t)}
            </p>
            {duration && (
              <div className="text-xs sm:text-xs md:text-sm lg:text-base flex items-center text-brand-primary-dark/90 mt-1 sm:mt-0">
                <ClockIcon className="h-4 w-4 mr-1.5" />
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
            <div className="w-full flex justify-center sm:justify-start">
              <AvailabilityBadgeComponent className="mt-2" status={status} />
            </div>
          )}
        </div>
      </div>

      {/* Lado Derecho */}
      <div className="mt-4 sm:mt-0">
        {isInactive ? (
          <AvailabilityBadgeComponent status={status} />
        ) : (
          <div className="bg-brand-cta-orange text-white font-bold text-sm uppercase py-2 px-5 rounded-md transition-transform duration-300 group-hover:scale-105">
            {t('viewDetails')}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.li variants={fadeInUp}>
      {isInactive ? (
        <div className={wrapperClasses}>{CardContent}</div>
      ) : (
        // ¡CORREGIDO! Ahora usa sessionSlug para la parte de la sesión en la URL
        <Link
          to={`${ROUTES.experiences}/${experienceSlug}/${sessionSlug}`}
          className={wrapperClasses}
        >
          {CardContent}
        </Link>
      )}
    </motion.li>
  );
};

export default CalendarExperienceCardComponent;
