// src/pages/DetailPage/DestinationPage/DestinationPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import SEOComponent from '../../../components/ui/SEOComponent';
import DestinationLayout from './Layout/DestinationLayout';
import { destinationsById } from '../../../data/content/destinations/_index';
import { publishedExperiences } from '../../../data/content/experiences/_index';

import { staggerContainer } from '../../../hooks/animations';

const DestinationPage = () => {
  const { destinationId } = useParams();
  const { t } = useTranslation(['destinations', 'common']);

  const [destinationData, setDestinationData] = useState(null);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const baseDestination = destinationsById[destinationId];

    // NEW PRECISE LOG: Check baseDestination.seo immediately
    console.log(
      'DestinationPage: baseDestination.seo (PRECISE CHECK):',
      baseDestination?.seo
    );

    if (baseDestination) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const filteredUpcomingTrips = publishedExperiences
        .filter(
          (trip) =>
            trip.destinationId === destinationId &&
            new Date(trip.details.endDate) >= today
        )
        .sort(
          (a, b) =>
            new Date(a.details.startDate) - new Date(b.details.startDate)
        );

      setDestinationData(baseDestination);
      setUpcomingTrips(filteredUpcomingTrips);
      setIsLoading(false);

      console.log(
        'DestinationPage: baseDestination (entire object):',
        baseDestination
      );
      console.log(
        'DestinationPage: filteredUpcomingTrips:',
        filteredUpcomingTrips
      );
    } else {
      console.error(
        'DestinationPage: Destination ID not found:',
        destinationId
      );
      setError(true);
      setIsLoading(false);
    }
  }, [destinationId]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-brand-white text-2xl'>
        {t('common:loading')}...
      </div>
    );
  }

  if (error || !destinationData || !destinationData.seo) {
    console.error(
      'DestinationPage: Render error - Destination data or SEO information is missing/invalid.',
      { destinationData, error }
    );
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Destination data or SEO information missing. Please check destination ID
        and data structure.
      </div>
    );
  }

  return (
    <>
      <SEOComponent
        title={t(destinationData.seo.titleKey, { ns: 'destinations' })}
        description={t(destinationData.seo.descriptionKey, {
          ns: 'destinations',
        })}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='animate'
        exit='hidden'>
        <DestinationLayout
          destinationData={destinationData}
          upcomingTrips={upcomingTrips}
        />
      </motion.div>
    </>
  );
};

export default DestinationPage;
