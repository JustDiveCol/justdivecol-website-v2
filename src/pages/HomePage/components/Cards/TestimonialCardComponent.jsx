import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { fadeInUp } from '../../../../hooks/animations';

import { QuoteIcon } from '../../../../assets/icons/QuoteIcon';
import { StarRating } from '../../../../assets/icons/StarRating';

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
