// src/pages/ExperiencesPage/components/Cards/DestinationCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { formatDateRange } from '../../../../utils/formatters';
import { fadeInUp } from '../../../../hooks/animations';
import ImageComponent from '../../../../components/common/Image/ImageComponent';

import { ROUTES } from '@/data/global/constants';

const DestinationCardComponent = ({
  destinationData,
  translationNS = 'destinations',
  maxWidth = 'max-w-xs',
}) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { id, nameKey, card, upcomingTrips } = destinationData;

  const hasTrips = upcomingTrips.length > 0;

  return (
    <motion.div
      variants={fadeInUp}
      className={`
        bg-brand-primary-medium rounded-lg overflow-hidden shadow-lg
        flex flex-col hover:shadow-2xl hover:scale-[1.02]
        transition-all duration-300 w-full ${maxWidth} h-full
      `}
    >
      <ImageComponent imageData={card} translationNS={translationNS} />

      <div className="p-5 flex flex-col flex-grow">
        {/* Siempre mostramos el título */}
        <h3 className="text-2xl font-bold text-brand-white">{t(nameKey)}</h3>

        {hasTrips && (
          <>
            {/* Solo mostramos la descripción si hay viajes */}
            <p className="mt-2 text-brand-neutral flex-grow text-justify">
              {t(card.descriptionKey)}
            </p>

            <div className="mt-1 pt-2 border-t border-brand-primary-light/20">
              <h4 className="font-semibold text-brand-white mb-2">{t('common:upcomingDates')}</h4>
              <ul className="space-y-2">
                {upcomingTrips.map((trip) => (
                  <li key={trip.id}>
                    <Link
                      to={`${ROUTES.experiences}${trip.id}`}
                      className="block bg-brand-primary-dark p-1 rounded-md hover:bg-brand-primary-light transition-colors text-left"
                    >
                      <span className="text-brand-neutral">
                        {formatDateRange(
                          trip.details.startDate,
                          trip.details.endDate,
                          i18n.language,
                          t
                        )}
                      </span>
                      <span className="text-xs text-brand-cta-orange ml-2">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Siempre mostramos el botón */}
      <Link
        to={`${ROUTES.destinations}${id}`}
        className="block bg-brand-cta-orange text-center text-brand-white font-bold uppercase p-3 hover:bg-opacity-90 transition-colors mt-auto"
      >
        {t('common:exploreDestination')}
      </Link>
    </motion.div>
  );
};

export default DestinationCardComponent;
