// src/pages/ExperiencesPage/components/Sections/CalendarExperiencesSection.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data Layer
import { publishedExperiences } from '../../../../data/content/experiences/_index.js';
import { experiencesPageData } from '../../../../data/pages/experiencesData.js';

import { staggerContainer } from '../../../../hooks/animations.js';

// Child Components
import CalendarExperienceCardComponent from '../Cards/CalendarExperienceCardComponent.jsx';
import { ArrowLeftIcon } from '../../../../assets/icons/ArrowLeftIcon.jsx';
import { ArrowRightIcon } from '../../../../assets/icons/ArrowRightIcon.jsx';

const CalendarExperiencesSection = () => {
  const { t } = useTranslation('experiencesPage');
  const [currentPage, setCurrentPage] = useState(0);

  // Memoized logic to filter and sort upcoming trips
  const upcomingTrips = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to beginning of the day for accurate comparison
    return publishedExperiences
      .filter((trip) => new Date(trip.details.endDate) >= today)
      .sort(
        (a, b) => new Date(a.details.startDate) - new Date(b.details.startDate)
      );
  }, []); // Empty dependency array means this runs only once

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(upcomingTrips.length / ITEMS_PER_PAGE);

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentTrips = upcomingTrips.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // Don't render the section if there are no upcoming trips
  if (upcomingTrips.length === 0) return null;

  const { titleKey, subtitleKey } = experiencesPageData.upcomingTrips;

  return (
    <section
      id='upcoming-trips-section'
      className='py-20 px-4 bg-brand-primary-medium scroll-mt-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-sans font-bold text-brand-white uppercase'>
          {t(titleKey)}
        </h2>
        <p className='mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral'>
          {t(subtitleKey)}
        </p>

        <div className='mt-12 max-w-4xl mx-auto relative'>
          <AnimatePresence mode='wait'>
            <motion.ul
              key={currentPage}
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

        {/* Carousel Navigation Controls */}
        {totalPages > 1 && (
          <div className='flex items-center justify-center mt-8 space-x-4'>
            <button
              onClick={handlePrev}
              className='p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white'
              aria-label='Previous trips'>
              <ArrowLeftIcon />
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
              className='p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white'
              aria-label='Next trips'>
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendarExperiencesSection;
