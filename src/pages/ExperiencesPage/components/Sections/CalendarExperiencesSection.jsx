// src/pages/ExperiencesPage/components/Sections/CalendarExperiencesSection.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { publishedExperiences } from '../../../../data/content/experiences/_index.js';
import { experiencesPageData } from '../../../../data/pages/experiencesData.js';
import { staggerContainer } from '../../../../hooks/animations.js';

// Child Components
import CalendarExperienceCardComponent from '../Cards/CalendarExperienceCardComponent.jsx';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../../assets/icons/ChevronIcons.jsx';

/**
 * Renders a paginated calendar section of all upcoming trips.
 * It filters and sorts all published experiences to create a chronological list.
 */
const CalendarExperiencesSection = () => {
  const { t } = useTranslation('experiencesPage');
  const [currentPage, setCurrentPage] = useState(0);

  // useMemo is used to filter and sort the trips only once, preventing recalculation on every render.
  const upcomingTrips = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to the start of the day for accurate comparison.
    return publishedExperiences
      .filter((trip) => new Date(trip.details.endDate) >= today)
      .sort(
        (a, b) => new Date(a.details.startDate) - new Date(b.details.startDate)
      );
  }, []); // The empty dependency array ensures this logic runs only once when the component mounts.

  // --- Pagination Logic ---
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(upcomingTrips.length / ITEMS_PER_PAGE);
  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const currentTrips = upcomingTrips.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // Do not render the section at all if there are no upcoming trips.
  if (upcomingTrips.length === 0) return null;

  const { titleKey, subtitleKey } = experiencesPageData.upcomingTrips;

  return (
    <section
      id='upcoming-trips-section'
      className='py-20 px-4 bg-brand-primary-medium scroll-mt-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-brand-white uppercase'>
          {t(titleKey)}
        </h2>
        <p className='mt-4 max-w-2xl mx-auto  text-lg text-brand-neutral'>
          {t(subtitleKey)}
        </p>

        <div className='mt-12 max-w-4xl mx-auto relative'>
          {/* AnimatePresence handles the exit/enter animations when the page changes. */}
          <AnimatePresence mode='wait'>
            <motion.ul
              key={currentPage} // The key is crucial for AnimatePresence to detect changes.
              variants={staggerContainer}
              className='space-y-4'>
              {currentTrips.map((trip) => (
                <CalendarExperienceCardComponent
                  key={trip.id}
                  tripData={trip}
                />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls - only rendered if there's more than one page. */}
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
      </div>
    </section>
  );
};

export default CalendarExperiencesSection;
