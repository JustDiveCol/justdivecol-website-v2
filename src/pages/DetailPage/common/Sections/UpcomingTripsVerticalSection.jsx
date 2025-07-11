import React from 'react';
import { Link } from 'react-router-dom';

import TripsCard from '../Cards/TripsCard';

const UpcomingTripsHorizontalSection = () => {
  return (
    <div>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
        Próximos viajes a este destino
      </h2>
      {/* {upcomingTrips && upcomingTrips.length > 0 ? ( */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {/* {upcomingTrips.map((trip) => ( */}
        <Link
          // key={trip.id}
          // to={`/expediciones/${trip.id}`}
          className='block bg-brand-primary-medium p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'>
          <h3 className='text-xl font-sans font-bold text-brand-white'>
            {/* {trip.name} */}
            Trip Name
          </h3>
          <p className='mt-1 font-serif text-brand-neutral/80'>
            {/* {formatDateRange(trip.details.startDate, trip.details.endDate)} */}
            Trip Date
          </p>
          <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
            Ver detalles del viaje &rarr;
          </span>
        </Link>
        {/* ))} */}
      </div>
      {/* ) : ( */}
      {/* // Mensaje que se muestra si no hay viajes disponibles */}
      <div className='bg-brand-primary-medium/50 p-6 rounded-lg text-center'>
        <h1 className='font-serif text-brand-neutral/80'>
          Las próximas fechas están en camino. ¡Empieza a alistar tus aletas!
        </h1>
      </div>
      {/* )} */}
    </div>

    // <div
    //   id='available-trips-section'
    //   className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
    //   <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
    //     Próximos Viajes
    //   </h3>
    //   {/* {availableTrips && availableTrips.length > 0 ? ( */}
    //   <div className='space-y-4'>
    //     {/* {availableTrips.map((trip) => ( */}
    //     <TripsCard />
    //     {/* ))} */}
    //   </div>
    //   {/* ) : ( */}
    //   <div>
    //     <p className='font-serif text-sm text-brand-neutral/80'>
    //       Las próximas fechas están en camino. ¡Empieza a alistar tus aletas!
    //     </p>
    //   </div>
    //   {/* )} */}
    // </div>
  );
};

export default UpcomingTripsHorizontalSection;
