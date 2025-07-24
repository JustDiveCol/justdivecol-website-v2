// src/pages/SafetyPage/components/Sections/CertificationsSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animations and Child Components
import { staggerContainer, fadeInUp } from '../../../hooks/animations';
import CertificationCardComponent from '../Card/CertificationCardComponent';

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from '../../../assets/icons/ChevronIcons';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

/**
 * Renders the "Certifications & Partners" section as a paginated carousel.
 *
 * @param {object} props - The component props.
 * @param {object} props.certificationsData - The data object for this section.
 * @param {string} props.certificationsData.titleKey - The translation key for the section title.
 * @param {string} props.certificationsData.subtitleKey - The translation key for the section subtitle.
 * @param {object[]} props.certificationsData.partners - An array of partner data objects.
 */
const CertificationsSection = ({ translationNS, certificationsData }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);
  const [currentPage, setCurrentPage] = useState(0);

  // --- Carousel Logic ---
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(certificationsData.partners.length / ITEMS_PER_PAGE);
  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  // Slice the partners array to get only the items for the current page.
  const currentPartners = certificationsData.partners.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // Do not render the section if there are no partners to display.
  if (!certificationsData.partners || certificationsData.partners.length === 0) {
    return null;
  }

  return (
    <motion.section variants={staggerContainer} className="py-12 px-4 bg-brand-primary-dark">
      <div className="container mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="heading-3 font-bold text-brand-white uppercase">
            {t(certificationsData.titleKey)}
          </h2>
          <p className="text-subtitle-sm mt-4 max-w-3xl mx-auto text-brand-neutral">
            {t(certificationsData.subtitleKey)}
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* AnimatePresence handles the exit/enter animations as the page changes. */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage} // The key is crucial for AnimatePresence to detect changes.
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex flex-wrap justify-center gap-10"
            >
              {currentPartners.map((partner) => (
                <CertificationCardComponent
                  key={partner.id}
                  partnerData={partner}
                  translationNS={translationNS}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel navigation controls are only rendered if there is more than one page. */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-brand-primary-medium hover:bg-brand-cta-orange transition-colors text-white cursor-pointer"
              aria-label={t(SHARED_TRANSLATION_KEYS.ARIA_PREV_LABEL)}
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
                  aria-label={`${t(SHARED_TRANSLATION_KEYS.ARIA_GO_TO_PAGE_LABEL)} ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-brand-primary-medium hover:bg-brand-cta-orange transition-colors text-white cursor-pointer"
              aria-label={t(SHARED_TRANSLATION_KEYS.ARIA_NEXT_LABEL)}
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
