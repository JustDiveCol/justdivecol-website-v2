// src/pages/ExperiencesPage/components/Sections/CalendarExperiencesSection.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { useExperiences } from '../../../../data/content/experiences/DataProvider';
import { experiencesData } from '../../../../data/pages/experiencesData';
import { staggerContainer } from '../../../../hooks/animations';

import backgroundImage from '../../../../assets/images/page-specific/experiences/experiences-header-background.webp';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent.jsx';
import CalendarExperienceCardComponent from '../Cards/CalendarExperienceCardComponent.jsx';

// Child Components
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../assets/icons/ChevronIcons.jsx';
import { CalendarIcon } from '../../../../assets/icons/SocialIcons.jsx';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders a paginated calendar section of all upcoming trips.
 * It filters and sorts all published experiences to create a chronological list.
 */
const CalendarExperiencesSection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, 'common']);
  const [currentPage, setCurrentPage] = useState(0);

  // Get all experiences from the Context Provider
  const { experiences } = useExperiences(); // Correcto: Obtiene las experiencias enriquecidas

  // --- LÓGICA CENTRALIZADA DE FECHAS Y DURACIÓN ---
  const { upcomingTrips, pastTrips } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const allSessionsWithDetails = [];

    // Iteramos sobre cada experiencia y luego sobre sus sesiones
    // `experiences` ya viene enriquecido con la propiedad `sessions` de DataProvider.jsx
    experiences.forEach((experience) => {
      (experience.sessions || []).forEach((session) => {
        // Accede a las sesiones de la experiencia
        const startDate = new Date(session.startDate); // Las fechas están en la sesión
        const endDate = new Date(session.endDate); // Las fechas están en la sesión
        let finalStatus = session.availability; // La disponibilidad está en la sesión

        if (endDate < today) {
          finalStatus = 'completed';
        }

        // Calcula la duración en días y noches
        const timeDiff = endDate.getTime() - startDate.getTime();
        const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));

        const days = dayDiff + 1;
        const nights = days - 1;

        // Retorna el objeto de la sesión con el status y la duración añadidos,
        // y también adjunta la experiencia padre para tener acceso a sus datos (título, descripción, etc.)
        allSessionsWithDetails.push({
          ...session, // Todas las propiedades de la sesión
          finalStatus,
          duration: { days, nights },
          // Adjuntamos una referencia a la experiencia padre si la necesitas en la tarjeta
          experienceDetails: {
            id: experience.id,
            slug: experience.slug,
            titleKey: experience.titleKey,
            subtitleKey: experience.subtitleKey,
            header: experience.header, // Puedes pasar más datos si CalendarExperienceCardComponent los necesita
            seo: experience.seo,
            // Agrega cualquier otra propiedad de la experiencia que necesites en la tarjeta de sesión
          },
        });
      });
    });

    // Filtramos y ordenamos las sesiones
    const upcoming = allSessionsWithDetails
      .filter((session) => session.finalStatus !== 'completed')
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    const past = allSessionsWithDetails
      .filter((session) => session.finalStatus === 'completed')
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    return { upcomingTrips: upcoming, pastTrips: past };
  }, [experiences]); // Dependencia del useMemo: recalcular si las experiencias cambian

  // --- Lógica de paginación ---
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(upcomingTrips.length / ITEMS_PER_PAGE);
  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const currentUpcomingTrips = upcomingTrips.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

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
                <motion.ul key={currentPage} variants={staggerContainer} className="space-y-4">
                  {currentUpcomingTrips.map((trip) => (
                    <CalendarExperienceCardComponent
                      key={trip.id} // El ID de la sesión
                      tripData={trip} // tripData ahora es el objeto de sesión enriquecido
                      status={trip.finalStatus}
                      duration={trip.duration}
                      translationNS={NAMESPACES.EXPERIENCES_DETAIL}
                    />
                  ))}
                </motion.ul>
              </AnimatePresence>

              {totalPages > 1 && (
                <div className="flex items-center justify-center mt-8 space-x-4">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white cursor-pointer"
                    aria-label="Previous trips"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <div className="flex space-x-2">
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
                    className="p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white cursor-pointer"
                    aria-label="Next trips"
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              )}
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
              <motion.ul className="space-y-4">
                {pastTrips.map((trip) => (
                  <CalendarExperienceCardComponent
                    key={trip.id}
                    tripData={trip}
                    status={trip.finalStatus}
                    duration={trip.duration}
                    translationNS={NAMESPACES.EXPERIENCES_DETAIL}
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
