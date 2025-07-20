// src/pages/ExperiencesPage/components/Sections/CalendarExperiencesSection.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { publishedExperiences } from '../../../../data/content/experiences/_index.js';
import { experiencesPageData } from '../../../../data/pages/experiencesData.js';
import { staggerContainer } from '../../../../hooks/animations.js';

import backgroundImage from '../../../../assets/images/page-specific/experiences/experiences-header-background.webp';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent.jsx';
import CalendarExperienceCardComponent from '../Cards/CalendarExperienceCardComponent.jsx';

// Child Components
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../../assets/icons/ChevronIcons.jsx';

import { CalendarIcon } from '../../../../assets/icons/SocialIcons.jsx';

/**
 * Renders a paginated calendar section of all upcoming trips.
 * It filters and sorts all published experiences to create a chronological list.
 */
const CalendarExperiencesSection = () => {
  const { t } = useTranslation(['experiencesPage', 'common', 'contact']);
  const [currentPage, setCurrentPage] = useState(0);

  // --- LÓGICA CENTRALIZADA DE FECHAS Y DURACIÓN ---
  const { upcomingTrips, pastTrips } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Usamos un nombre de variable descriptivo y consistente
    const allTripsWithDetails = publishedExperiences.map((trip) => {
      const startDate = new Date(trip.details.startDate);
      const endDate = new Date(trip.details.endDate);
      let finalStatus = trip.availability;

      if (endDate < today) {
        finalStatus = 'completed';
      }

      // Calcula la duración en días y noches
      const timeDiff = endDate.getTime() - startDate.getTime();
      const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));

      const days = dayDiff + 1;
      const nights = days - 1;

      // Retorna el objeto del viaje con el status y la duración añadidos
      return { ...trip, finalStatus, duration: { days, nights } };
    });

    const upcoming = allTripsWithDetails
      .filter((trip) => trip.finalStatus !== 'completed')
      .sort(
        (a, b) => new Date(a.details.startDate) - new Date(b.details.startDate)
      );

    const past = allTripsWithDetails
      .filter((trip) => trip.finalStatus === 'completed')
      .sort(
        (a, b) => new Date(b.details.startDate) - new Date(a.details.startDate)
      );

    return { upcomingTrips: upcoming, pastTrips: past };
  }, []);

  // --- Lógica de paginación ---
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(upcomingTrips.length / ITEMS_PER_PAGE);
  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const currentUpcomingTrips = upcomingTrips.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const { titleKey, subtitleKey, pastTitleKey } =
    experiencesPageData.upcomingTrips;

  return (
    <section
      id='upcoming-trips-section'
      className='relative py-20 px-4 bg-cover bg-center scroll-mt-20'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='absolute inset-0 bg-brand-primary-dark/80'></div>

      <div className='relative container mx-auto text-center z-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-brand-white uppercase'>
          {t(titleKey)}
        </h1>
        <p className='mt-4 max-w-2xl mx-auto text-lg text-brand-neutral'>
          {t(subtitleKey)}
        </p>

        <div className='mt-12 max-w-4xl mx-auto relative'>
          {upcomingTrips.length > 0 ? (
            <>
              <AnimatePresence mode='wait'>
                <motion.ul
                  key={currentPage}
                  variants={staggerContainer}
                  className='space-y-4'>
                  {currentUpcomingTrips.map((trip) => (
                    <CalendarExperienceCardComponent
                      key={trip.id}
                      tripData={trip}
                      status={trip.finalStatus}
                      duration={trip.duration}
                    />
                  ))}
                </motion.ul>
              </AnimatePresence>

              {totalPages > 1 && (
                <div className='flex items-center justify-center mt-8 space-x-4'>
                  <button
                    onClick={handlePrev}
                    className='p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white cursor-pointer'
                    aria-label='Previous trips'>
                    <ChevronLeftIcon />
                  </button>
                  <div className='flex space-x-2'>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentPage === i
                            ? 'bg-brand-cta-orange'
                            : 'bg-brand-primary-light hover:bg-brand-neutral/50'
                        }`}
                        aria-label={`Go to page ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className='p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white cursor-pointer'
                    aria-label='Next trips'>
                    <ChevronRightIcon />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className='mt-16 text-center bg-brand-neutral/60 p-8 rounded-lg'>
              <div className='flex justify-center mb-4'>
                <CalendarIcon className='h-12 w-12 text-brand-cta-orange' />
              </div>
              <h3 className='text-2xl font-bold text-brand-primary-dark'>
                {t(experiencesPageData.noUpcomingTrips.titleKey)}
              </h3>
              <p className='mt-2 text-brand-primary-dark max-w-md mx-auto'>
                {t(experiencesPageData.noUpcomingTrips.subtitleKey)}
              </p>
              <div className='mt-8'>
                <ButtonComponent
                  action={experiencesPageData.noUpcomingTrips.ctaAction}
                  textKey={experiencesPageData.noUpcomingTrips.ctaTextKey}
                  translationNS={'experiencesPage'}
                />
              </div>
            </div>
          )}
        </div>

        {pastTrips.length > 0 && (
          <div className='mt-20'>
            <h2 className='text-3xl font-bold text-brand-white uppercase'>
              {t(pastTitleKey)}
            </h2>
            <div className='mt-8 max-w-4xl mx-auto relative'>
              <motion.ul className='space-y-4'>
                {pastTrips.map((trip) => (
                  <CalendarExperienceCardComponent
                    key={trip.id}
                    tripData={trip}
                    status={trip.finalStatus}
                    duration={trip.duration}
                  />
                ))}
              </motion.ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendarExperiencesSection;
