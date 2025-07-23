// src/pages/ExperiencesPage/components/Cards/DestinationCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { formatDateRange } from '../../../../utils/formatters';
import { fadeInUp } from '../../../../hooks/animations';
import ImageComponent from '../../../../components/common/Image/ImageComponent';

import { NAMESPACES, ROUTES } from '@/data/global/constants';

const DestinationCardComponent = ({ destinationData, translationNS }) => {
  const { t, i18n } = useTranslation([translationNS, NAMESPACES.COMMON, NAMESPACES.EXPERIENCES]);

  const { id, nameKey, card, upcomingTrips } = destinationData;

  const hasTrips = upcomingTrips.length > 0;

  return (
    <motion.div
      variants={fadeInUp}
      className="w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] bg-brand-primary-medium rounded-lg overflow-hidden shadow-2xl flex flex-col hover:scale-[1.02] transition-all duration-300"
    >
      <ImageComponent imageData={card} translationNS={NAMESPACES.DESTINATIONS} />{' '}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-white">
          {t(nameKey, { ns: NAMESPACES.DESTINATIONS })}
        </h3>

        {hasTrips && (
          <>
            {/* Solo mostramos la descripción si hay viajes */}
            <p className="mt-2 text-brand-neutral text-[13px] sm:text-sm md:text-base flex-grow text-justify">
              <span className="block sm:hidden">
                {t(card.descriptionKey, { ns: NAMESPACES.DESTINATIONS }).substring(0, 60)}...
              </span>{' '}
              {/* Asegura el namespace */}
              <span className="hidden sm:block">
                {t(card.descriptionKey, { ns: NAMESPACES.DESTINATIONS })}
              </span>{' '}
              {/* Asegura el namespace */}
            </p>

            <div className="mt-1 pt-2 border-t border-brand-primary-light/20">
              <h4 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-brand-white mb-2">
                {t('common:upcomingDates')}
              </h4>
              <ul className="space-y-2">
                {/* Aquí 'session' tiene 'experienceDetails' adjunto */}
                {upcomingTrips.map((session) => (
                  <li key={session.id}>
                    <Link
                      // Construir el Link usando experienceDetails.slug y session.slug
                      to={`${ROUTES.experiences}/${session.experienceDetails.slug}/${session.slug}`}
                      className="text-xs sm:text-xs md:text-sm lg:text-base block bg-brand-primary-dark p-1 rounded-md hover:bg-brand-primary-light transition-colors text-center"
                    >
                      <span className="text-brand-neutral">
                        {formatDateRange(session.startDate, session.endDate, i18n.language, t)}
                      </span>
                      {/* Aquí se usa el titleKey de la experiencia, que está en NAMESPACES.EXPERIENCES */}
                      <span className="text-brand-cta-orange ml-2">
                        {session.experienceDetails?.titleKey
                          ? t(session.experienceDetails.titleKey, { ns: NAMESPACES.EXPERIENCES })
                          : ''}{' '}
                        &rarr;
                      </span>
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
        to={destinationData.seo.url}
        className="block bg-brand-cta-orange text-center text-brand-white font-bold uppercase text-xs sm:text-sm md:text-base p-2 sm:p-3 hover:bg-opacity-90 transition-colors mt-auto"
      >
        {t('common:exploreDestination')}
      </Link>
    </motion.div>
  );
};

export default DestinationCardComponent;
