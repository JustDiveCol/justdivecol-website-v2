// src/pages/ExperiencesPage/components/Cards/DestinationCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { formatDateRange } from '../../../../utils/formatters';
import { fadeInUp } from '../../../../hooks/animations';
import ImageComponent from '../../../../components/common/Image/ImageComponent';

import { NAMESPACES, ROUTES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

const DestinationCardComponent = ({ destinationData, translationNS, cardVariant }) => {
  const { t, i18n } = useTranslation([translationNS, NAMESPACES.COMMON]);

  const { nameKey, descriptionKey, card, upcomingTrips } = destinationData;

  const hasTrips = upcomingTrips.length > 0;

  const baseWidthClasses = 'w-[240px] sm:w-[270px] md:w-[320px] lg:w-[350px] xl:w-[380px]';
  const smallerWidthClasses = 'w-[180px] sm:w-[210px] md:w-[260px] lg:w-[280px] xl:w-[300px]'; // Ejemplos de clases más pequeñas

  const widthClasses = cardVariant === 'inactive' ? smallerWidthClasses : baseWidthClasses;

  return (
    <motion.div
      variants={fadeInUp}
      className={`${widthClasses} bg-brand-primary-medium rounded-lg overflow-hidden shadow-2xl flex flex-col hover:scale-[1.02] transition-all duration-300`}
    >
      <ImageComponent imageData={card} translationNS={translationNS} />{' '}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-white">
          {t(nameKey, { ns: translationNS })}
        </h3>

        {hasTrips && (
          <>
            {/* Solo mostramos la descripción si hay viajes */}
            <p className="mt-2 text-brand-neutral text-[13px] sm:text-sm md:text-base flex-grow text-justify">
              <span className="block sm:hidden">
                {t(descriptionKey, { ns: translationNS }).substring(0, 60)}...
              </span>{' '}
              {/* Asegura el namespace */}
              <span className="hidden sm:block">
                {t(descriptionKey, { ns: translationNS })}
              </span>{' '}
              {/* Asegura el namespace */}
            </p>

            <div className="mt-1 pt-2 border-t border-brand-primary-light/20">
              <h4 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-brand-white mb-2">
                {t(SHARED_TRANSLATION_KEYS.UPCOMING_DATES_LABEL)}
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
                      <span className="text-brand-neutral text-xs sm:text-xs md:text-sm lg:text-base">
                        {formatDateRange(session.startDate, session.endDate, i18n.language, t)}
                      </span>
                      <br />
                      <span className="text-brand-cta-orange ml-2 text-xs sm:text-xs md:text-xs lg:text-sm">
                        {session.experienceDetails?.titleKey
                          ? t(session.experienceDetails.titleKey, { ns: NAMESPACES.EXPERIENCES })
                          : ''}
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
        {t(SHARED_TRANSLATION_KEYS.EXPLORE_DESTINATION_LABEL)}
      </Link>
    </motion.div>
  );
};

export default DestinationCardComponent;
