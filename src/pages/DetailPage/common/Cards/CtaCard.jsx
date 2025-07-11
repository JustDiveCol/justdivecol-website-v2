import React from 'react';
import { Link } from 'react-router-dom';

const CtaCard = () => {
  return (
    <div className='bg-brand-primary-light p-6 rounded-lg shadow-lg text-center'>
      {/* {availableTrips && availableTrips.length > 0 ? ( */}
      <>
        <h3 className='text-2xl font-sans font-bold text-brand-white'>
          ¿Listo para tu certificación?
        </h3>
        <Link
          to='/proximamente' // Enlaza a la página de seguridad/políticas
          className='mt-4 inline-block w-full bg-brand-cta-orange text-brand-white font-sans font-bold uppercase py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-cta-yellow'>
          Ver Políticas de cancelación
        </Link>
      </>
      {/* ) : ( */}
      <>
        <h3 className='text-2xl font-sans font-bold text-brand-white'>
          {/* {cta.title} */}
          CTA title
        </h3>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          //   to={whatsappUrl}
          className='mt-4 inline-block w-full bg-brand-cta-orange text-brand-white font-sans font-bold uppercase py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-cta-yellow'>
          {/* {cta.buttonText} */}
          Button Text
        </Link>
      </>
      {/* )} */}
    </div>
  );
};

export default CtaCard;
