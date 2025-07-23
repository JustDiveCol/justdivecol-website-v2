// src/pages/ExperiencesPage/components/Cards/CertificationCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../../../../hooks/animations';
import ImageComponent from '../../../../components/common/Image/ImageComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders a detailed card for a single certification, showing its image, title,
 * a snippet of the description, availability status, and duration.
 *
 * @param {object} props - The component props.
 * @param {object} props.certData - The complete data object for the certification.
 */
const CertificationCardComponent = ({ certData, translationNS }) => {
  // Ensure NAMESPACES.CERTIFICATIONS is loaded for content-related keys
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  const { id, slug, header, card, details, availability, seo } = certData;

  /**
   * Derives the display status key (either 'available' or 'comingSoon')
   * based on the original availability from the data.
   * This is the bridge from your data's status to the desired two display states.
   * @param {string} originalAvailability - The raw availability from data (e.g., 'available', 'last', 'soldOut').
   * @returns {string} The simplified key for translation and styling ('available' or 'comingSoon').
   */
  const getDisplayStatusKey = (originalAvailability) => {
    if (originalAvailability === 'available') {
      return 'statusAvailable';
    }
    // Any other status ('last', 'soldOut', 'completed', or anything else) maps to 'comingSoon'
    return 'statusUpcoming';
  };

  /**
   * Returns Tailwind CSS classes based on the SIMPLIFIED display status.
   * This function directly uses the output of getDisplayStatusKey.
   * @param {string} displayStatus - The simplified display status key ('available' or 'comingSoon').
   * @returns {string} The corresponding CSS classes.
   */
  const getStatusStyles = (displayStatus) => {
    switch (displayStatus) {
      case 'statusAvailable':
        return 'bg-brand-cta-green text-brand-primary-dark';
      case 'statusUpcoming':
        return 'bg-brand-cta-yellow text-brand-primary-dark';
      default:
        return 'bg-gray-400 text-gray-800';
    }
  };

  const displayStatusKey = getDisplayStatusKey(availability); // Get the simplified display key

  return (
    <motion.div
      variants={fadeInUp}
      className="relative w-[80%] sm:w-[70%] md:w-[45%] lg:w-[30%] max-w-sm bg-brand-primary-medium rounded-lg overflow-hidden shadow-2xl flex flex-col hover:scale-[1.02] transition-all duration-300"
    >
      {/* ImageComponent needs NAMESPACES.CERTIFICATIONS to find its translation keys from content data */}
      <ImageComponent imageData={card} translationNS={translationNS} />
      <div className="p-6 flex flex-col flex-grow justify-between">
        {/* header.titleKey is a content key, likely in NAMESPACES.CERTIFICATIONS */}
        <h3 className="heading-5 leading-tight font-bold text-brand-white">{t(header.titleKey)}</h3>
        <div className="mt-6 pt-4 border-t border-brand-primary-light/20 flex justify-between items-center">
          <span
            className={`font-bold text-center text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 rounded-full ${getStatusStyles(
              displayStatusKey // Use the simplified display status key for styling
            )}`}
          >
            {/* Translate the simplified display status key from the COMMON namespace */}
            {t(`${NAMESPACES.COMMON}:${displayStatusKey}`)}
          </span>
          {details?.durationKey && (
            <span className="text-[10px] sm:text-xs md:text-sm text-center text-brand-neutral bg-brand-primary-light px-2 sm:px-3 py-1 rounded-full">
              {t(details.durationKey)}
            </span>
          )}
        </div>
      </div>
      <Link
        to={seo.url}
        className="block bg-brand-cta-orange text-center text-brand-white font-bold uppercase text-xs sm:text-sm md:text-base p-2 sm:p-3 hover:bg-opacity-90 transition-colors mt-auto"
      >
        {t('common:viewDetails')}
      </Link>
    </motion.div>
  );
};

export default CertificationCardComponent;
