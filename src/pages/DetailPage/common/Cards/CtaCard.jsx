// src/pages/DetailPage/common/Cards/CtaCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Accept ctaData and translationNS as props
const CtaCard = ({ ctaData, translationNS }) => {
  const { t } = useTranslation(translationNS); // Use the passed namespace

  // Render nothing if ctaData is not provided or if essential keys are missing
  if (!ctaData || !ctaData.titleKey || !ctaData.buttonTextKey) {
    return null;
  }

  // Determine if it's an external link or an internal React Router link
  const isExternalLink = ctaData.isExternal || ctaData.link.startsWith('http');

  const CtaContent = (
    <>
      <h3 className='text-2xl font-sans font-bold text-brand-white'>
        {t(ctaData.titleKey)} {/* Use data and translate */}
      </h3>
      <span className='mt-4 inline-block w-full bg-brand-cta-orange text-brand-white font-sans font-bold uppercase py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-cta-yellow'>
        {t(ctaData.buttonTextKey)} {/* Use data and translate */}
      </span>
    </>
  );

  return (
    <div className='bg-brand-primary-light p-6 rounded-lg shadow-lg text-center'>
      {isExternalLink ? (
        <a
          href={ctaData.link}
          target='_blank'
          rel='noopener noreferrer'
          className='block'>
          {' '}
          {/* Ensure the anchor tag is a block element to fill width */}
          {CtaContent}
        </a>
      ) : (
        <Link
          to={ctaData.link}
          className='block'>
          {' '}
          {/* Ensure the Link component is a block element to fill width */}
          {CtaContent}
        </Link>
      )}
    </div>
  );
};

export default CtaCard;
