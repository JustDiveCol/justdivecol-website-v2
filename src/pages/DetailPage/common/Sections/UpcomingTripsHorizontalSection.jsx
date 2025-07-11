import React from 'react';

import TripsCard from '../Cards/TripsCard';

const UpcomingTripsHorizontalSection = () => {
  return (
    <div
      id='available-trips-section'
      className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        Próximos Viajes
      </h3>
      {/* {availableTrips && availableTrips.length > 0 ? ( */}
      <div className='space-y-4'>
        {/* {availableTrips.map((trip) => ( */}
        <TripsCard />
        {/* ))} */}
      </div>
      {/* ) : ( */}
      <div>
        <p className='font-serif text-sm text-brand-neutral/80'>
          Las próximas fechas están en camino. ¡Empieza a alistar tus aletas!
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default UpcomingTripsHorizontalSection;
