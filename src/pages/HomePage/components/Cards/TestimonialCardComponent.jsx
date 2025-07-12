// src/pages/HomePage/components/Cards/TestimonialCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../../../../hooks/animations';
import { QuoteIcon } from '../../../../assets/icons/QuoteIcon';
import { StarRating } from '../../../../assets/icons/StarRating';

/**
 * Renders a card displaying a customer testimonial.
 *
 * @param {object} props - The component props.
 * @param {object} props.cardData - The data object for the testimonial.
 * @param {string} props.cardData.quoteKey - The translation key for the testimonial quote.
 * @param {string} props.cardData.nameKey - The translation key for the customer's name.
 * @param {string} props.cardData.originKey - The translation key for the customer's origin (e.g., trip or course).
 * @param {number} props.cardData.rating - The star rating, from 1 to 5.
 * @param {string} props.cardData.avatarUrl - The URL for the customer's avatar image.
 */
const TestimonialCardComponent = ({ cardData }) => {
  const { t } = useTranslation('home');

  const { quoteKey, nameKey, originKey, rating, avatarUrl } = cardData;

  return (
    <motion.div
      variants={fadeInUp}
      className='bg-gradient-to-br from-brand-primary-medium/50 to-brand-primary-dark p-8 rounded-lg shadow-2xl flex flex-col border border-brand-primary-light/10'>
      <div className='flex-shrink-0'>
        <QuoteIcon />
      </div>

      <p className='mt-6 text-left font-serif text-brand-neutral/90 flex-grow text-lg'>
        "{t(quoteKey)}"
      </p>

      <div className='mt-6 border-t border-brand-primary-light/20 pt-6 flex items-center space-x-4'>
        <img
          src={avatarUrl}
          alt={t(nameKey)}
          className='h-14 w-14 rounded-full object-cover border-2 border-brand-cta-green'
          loading='lazy' // Defer image loading to improve initial page performance.
        />
        <div className='text-left'>
          <StarRating rating={rating} />
          <h4 className='mt-1 font-sans font-bold text-brand-white'>
            {t(nameKey)}
          </h4>
          <p className='font-serif text-sm text-brand-neutral/80'>
            {t(originKey)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCardComponent;
