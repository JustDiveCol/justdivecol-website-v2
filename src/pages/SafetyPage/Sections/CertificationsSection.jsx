// src/pages/SafetyPage/components/Sections/CertificationsSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer, fadeInUp } from '../../../hooks/animations';

import CertificationCardComponent from '../Card/CertificationCardComponent';

import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../assets/icons/ArrowRightIcon';

const CertificationsSection = ({ certificationsData }) => {
  const { t } = useTranslation(['safety', 'common']);
  const [currentPage, setCurrentPage] = useState(0);

  // Carousel Logic
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(
    certificationsData.partners.length / ITEMS_PER_PAGE
  );
  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const currentPartners = certificationsData.partners.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  if (
    !certificationsData.partners ||
    certificationsData.partners.length === 0
  ) {
    return null;
  }

  return (
    <motion.section
      variants={staggerContainer}
      className='py-20 px-4 bg-brand-primary-dark'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeInUp}
          className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
            {t(certificationsData.titleKey)}
          </h2>
          <p className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
            {t(certificationsData.subtitleKey)}
          </p>
        </motion.div>

        <div className='relative max-w-7xl mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className='flex flex-wrap justify-center gap-10'>
              {currentPartners.map((partner) => (
                <CertificationCardComponent
                  key={partner.id}
                  partnerData={partner}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        {totalPages > 1 && (
          <div className='flex items-center justify-center mt-8 space-x-4'>
            <button
              onClick={handlePrev}
              className='p-2 rounded-full bg-brand-primary-medium hover:bg-brand-cta-orange transition-colors text-white'
              aria-label={t('common:ariaPrevious')}>
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
                  aria-label={`${t('common:ariaGoToPage')} ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className='p-2 rounded-full bg-brand-primary-medium hover:bg-brand-cta-orange transition-colors text-white'
              aria-label={t('common:ariaNext')}>
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
