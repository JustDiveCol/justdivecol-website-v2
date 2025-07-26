// src/pages/ExperiencesPage/components/Sections/CalendarExperiencesSection.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react'; // Asegúrate de que AnimatePresence esté importado
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { useExperiences } from '../../../../data/content/experiences/DataProvider';
import { experiencesData } from '../../../../data/pages/experiencesData';
import { staggerContainer } from '../../../../hooks/animations';

import backgroundImage from '../../../../assets/images/page-specific/experiences/header-background.webp';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent.jsx';
import CalendarExperienceCardComponent from '../Cards/CalendarExperienceCardComponent.jsx';

// Child Components
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../assets/icons/ChevronIcons.jsx';
import { CalendarIcon } from '../../../../assets/icons/SocialIcons.jsx';
import { NAMESPACES } from '@/data/global/constants';

// --- COMPONENTE REUTILIZABLE: Controles de Paginación (sin cambios) ---
const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center mt-8 space-x-4">
      <button
        onClick={() => onPageChange('prev')}
        className="p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
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
        onClick={() => onPageChange('next')}
        className="p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

/**
 * Renders a paginated calendar section of all upcoming trips.
 * It filters and sorts all published experiences to create a chronological list.
 */
const CalendarExperiencesSection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);
  const [upcomingCurrentPage, setUpcomingCurrentPage] = useState(0);
  const [pastCurrentPage, setPastCurrentPage] = useState(0);

  const { experiences } = useExperiences();

  const { upcomingTrips, pastTrips } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const allSessionsWithDetails = [];

    experiences.forEach((experience) => {
      (experience.sessions || []).forEach((session) => {
        const startDate = new Date(session.startDate);
        const endDate = new Date(session.endDate);
        let finalStatus = session.availability;

        if (endDate < today) {
          finalStatus = 'completed';
        }

        const timeDiff = endDate.getTime() - startDate.getTime();
        const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));

        const days = dayDiff + 1;
        const nights = days - 1;

        allSessionsWithDetails.push({
          ...session,
          finalStatus,
          duration: { days, nights },
          experienceDetails: {
            id: experience.id,
            slug: experience.slug,
            titleKey: experience.titleKey,
            subtitleKey: experience.subtitleKey,
            nameKey: experience.nameKey,
            header: experience.header,
            seo: experience.seo,
          },
        });
      });
    });

    const upcoming = allSessionsWithDetails
      .filter((session) => session.finalStatus !== 'completed')
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    const past = allSessionsWithDetails
      .filter((session) => session.finalStatus === 'completed')
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    return { upcomingTrips: upcoming, pastTrips: past };
  }, [experiences]);

  // --- Lógica de paginación para Próximos Viajes ---
  const ITEMS_PER_PAGE = 3;
  const upcomingTotalPages = Math.ceil(upcomingTrips.length / ITEMS_PER_PAGE);
  const handleUpcomingPageChange = (action) => {
    if (typeof action === 'number') {
      setUpcomingCurrentPage(action);
    } else if (action === 'next') {
      setUpcomingCurrentPage((prev) => (prev + 1) % upcomingTotalPages);
    } else if (action === 'prev') {
      setUpcomingCurrentPage((prev) => (prev - 1 + upcomingTotalPages) % upcomingTotalPages);
    }
  };
  const currentUpcomingTrips = upcomingTrips.slice(
    upcomingCurrentPage * ITEMS_PER_PAGE,
    upcomingCurrentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // --- Lógica de paginación para Viajes Finalizados ---
  const pastTotalPages = Math.ceil(pastTrips.length / ITEMS_PER_PAGE);
  const handlePastPageChange = (action) => {
    if (typeof action === 'number') {
      setPastCurrentPage(action);
    } else if (action === 'next') {
      setPastCurrentPage((prev) => (prev + 1) % pastTotalPages);
    } else if (action === 'prev') {
      setPastCurrentPage((prev) => (prev - 1 + pastTotalPages) % pastTotalPages);
    }
  };
  const currentPastTrips = pastTrips.slice(
    pastCurrentPage * ITEMS_PER_PAGE,
    pastCurrentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // --- Efectos para Resetear página actual si el número de páginas cambia ---
  useEffect(() => {
    if (upcomingCurrentPage >= upcomingTotalPages && upcomingTotalPages > 0) {
      // Añadida condición > 0
      setUpcomingCurrentPage(0);
    }
  }, [upcomingTrips, upcomingTotalPages]); // Eliminar upcomingCurrentPage de aquí

  useEffect(() => {
    if (pastCurrentPage >= pastTotalPages && pastTotalPages > 0) {
      // Añadida condición > 0
      setPastCurrentPage(0);
    }
  }, [pastTrips, pastTotalPages]); // Eliminar pastCurrentPage de aquí

  const { titleKey, subtitleKey, pastTitleKey } = experiencesData.upcomingTrips;

  return (
    <section
      id="upcoming-trips-section"
      className="relative py-12 px-4 bg-cover bg-center scroll-mt-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-brand-primary-dark/80"></div>

      <div className="relative container mx-auto text-center z-10">
        <h1 className="heading-1 font-bold text-brand-white uppercase">{t(titleKey)}</h1>
        <p className="text-subtitle-sm leading-tight mt-4 max-w-2xl mx-auto text-brand-neutral">
          {t(subtitleKey)}
        </p>

        <div className="mt-6 max-w-4xl mx-auto relative">
          {upcomingTrips.length > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={upcomingCurrentPage}
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {currentUpcomingTrips.map((trip) => (
                    <CalendarExperienceCardComponent
                      key={trip.id}
                      tripData={trip}
                      status={trip.finalStatus}
                      duration={trip.duration}
                      translationNS={NAMESPACES.EXPERIENCES}
                    />
                  ))}
                </motion.ul>
              </AnimatePresence>

              <PaginationControls
                currentPage={upcomingCurrentPage}
                totalPages={upcomingTotalPages}
                onPageChange={handleUpcomingPageChange}
              />
            </>
          ) : (
            <div className="mt-16 text-center bg-brand-neutral/60 p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                <CalendarIcon className="h-12 w-12 text-brand-cta-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary-dark">
                {t(experiencesData.noUpcomingTrips.titleKey)}
              </h3>
              <p className="mt-2 text-brand-primary-dark max-w-md mx-auto">
                {t(experiencesData.noUpcomingTrips.subtitleKey)}
              </p>
              <div className="mt-8">
                <ButtonComponent
                  action={experiencesData.noUpcomingTrips.ctaAction}
                  textKey={experiencesData.noUpcomingTrips.ctaTextKey}
                  translationNS={translationNS}
                />
              </div>
            </div>
          )}
        </div>

        {pastTrips.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-brand-white uppercase">{t(pastTitleKey)}</h2>
            <div className="mt-8 max-w-4xl mx-auto relative">
              {/* Añadir AnimatePresence aquí para que las transiciones de página funcionen bien */}
              <AnimatePresence mode="wait">
                {/* La key en motion.ul DEBE cambiar para que AnimatePresence funcione */}
                <motion.ul
                  key={'past-' + pastCurrentPage}
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {/* currentPastTrips es el array de ítems de la página actual */}
                  {currentPastTrips.map((trip) => (
                    <CalendarExperienceCardComponent
                      key={trip.id}
                      tripData={trip}
                      status={trip.finalStatus}
                      duration={trip.duration}
                      translationNS={NAMESPACES.EXPERIENCES}
                    />
                  ))}
                </motion.ul>
              </AnimatePresence>
              <PaginationControls
                currentPage={pastCurrentPage}
                totalPages={pastTotalPages}
                onPageChange={handlePastPageChange}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendarExperiencesSection;
