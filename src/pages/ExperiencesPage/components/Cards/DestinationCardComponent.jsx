// src/pages/ExperiencesPage/components/Cards/DestinationCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { formatDateRange } from '../../../../utils/formatters';
import { fadeInUp } from '../../../../hooks/animations';

const DestinationCardComponent = ({ destinationData }) => {
  const { t, i18n } = useTranslation(['destinations', 'common']);
  const { id, nameKey, card, upcomingTrips } = destinationData;

  return (
    <motion.div
      variants={fadeInUp}
      className='bg-brand-primary-medium rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-sm'>
      <img
        src={card.imageUrl}
        alt={t(nameKey)}
        className='w-full h-56 object-cover'
      />
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-2xl font-bold font-sans text-brand-white'>
          {t(nameKey)}
        </h3>
        <p className='mt-2 font-serif text-brand-neutral flex-grow'>
          {t(card.descriptionKey)}
        </p>
        <div className='mt-4 pt-4 border-t border-brand-primary-light/20'>
          <h4 className='font-sans font-semibold text-brand-white mb-2'>
            {t('common:upcomingDates')}
          </h4>
          {upcomingTrips.length > 0 ? (
            <ul className='space-y-2'>
              {upcomingTrips.map((trip) => (
                <li key={trip.id}>
                  <Link
                    to={`/expediciones/${trip.id}`}
                    className='block bg-brand-primary-dark p-3 rounded-md hover:bg-brand-primary-light transition-colors text-left'>
                    <span className='font-serif text-brand-neutral'>
                      {formatDateRange(
                        trip.details.startDate,
                        trip.details.endDate,
                        i18n.language,
                        t
                      )}
                    </span>
                    <span className='text-xs text-brand-cta-orange ml-2'>
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className='font-serif text-sm text-brand-neutral/70'>
              {t('common:noScheduledDates')}
            </p>
          )}
        </div>
      </div>
      <Link
        to={`/destinos/${id}`}
        className='block bg-brand-cta-orange text-center text-brand-white font-bold uppercase p-3 hover:bg-opacity-90 transition-colors mt-auto'>
        {t('common:exploreDestination')}
      </Link>
    </motion.div>
  );
};
export default DestinationCardComponent;
