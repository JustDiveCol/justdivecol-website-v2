import React from 'react';
import { useTranslation } from 'react-i18next';
import TripsCard from '../Cards/TripsCard';
import ButtonComponent from '../../../../components/common/Button/ButtonComponent';

const UpcomingTripSection = ({
  availableTrips,
  titleKey,
  fallbackContent,
  translationNS,
}) => {
  const { t, i18n } = useTranslation([translationNS, 'experiences', 'common']);

  if (!titleKey || !availableTrips) {
    return null;
  }

  return (
    <div
      id='available-trips-section'
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-bold text-brand-white mb-4'>
        {t(titleKey, { ns: translationNS })}
      </h3>
      {availableTrips.length > 0 ? (
        <div className='flex flex-wrap gap-6 justify-center pt-4 border-t border-brand-primary-light/40'>
          {availableTrips.map((trip) => (
            <TripsCard
              key={trip.id}
              tripData={trip}
              translationNS='experiences'
              lang={i18n.language}
              t={t}
            />
          ))}
        </div>
      ) : (
        fallbackContent && (
          <div className='text-center pt-4 border-t border-brand-primary-light/40'>
            <p className='text-sm text-brand-neutral/80'>
              {t(fallbackContent.messageKey, {
                ...fallbackContent.messageValues,
                ns: translationNS,
              })}
            </p>
            <ButtonComponent
              action={fallbackContent.buttonAction}
              textKey={fallbackContent.buttonTextKey}
              translationNS={translationNS}
              containerClassName='mt-6'
              className='text-sm'
            />
          </div>
        )
      )}
    </div>
  );
};

export default UpcomingTripSection;
