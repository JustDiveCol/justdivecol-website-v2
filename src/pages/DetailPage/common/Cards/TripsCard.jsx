import React from 'react';
import { Link } from 'react-router-dom';

const TripsCard = () => {
  return (
    <Link
      // key={trip.id}
      // to={`/expediciones/${trip.id}`}
      className='block bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300'>
      <h4 className='font-sans font-bold text-brand-white'>
        {/* {trip.name} */}
        Trip Name
      </h4>
      <p className='mt-1 font-serif text-sm text-brand-neutral/80'>
        {/* {formatDateRange(
                    trip.details.startDate,
                    trip.details.endDate
                  )} */}
        Fecha
      </p>
      <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
        Ver detalles del viaje &rarr;
      </span>
    </Link>
  );
};

export default TripsCard;
