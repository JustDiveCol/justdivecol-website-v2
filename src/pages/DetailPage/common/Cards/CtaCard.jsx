// src/pages/DetailPage/common/Cards/CtaCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Renders a call-to-action (CTA) card with a title and a prominent button.
 * The button can act as an internal React Router Link or a standard external anchor tag.
 *
 * @param {object} props - The component props.
 * @param {object} props.ctaData - The data object for the CTA.
 * @param {string} props.ctaData.titleKey - The translation key for the card's title.
 * @param {string} props.ctaData.buttonTextKey - The translation key for the button's text.
 * @param {string} props.ctaData.link - The destination URL or path.
 * @param {boolean} [props.ctaData.isExternal=false] - If true, renders an 'a' tag for external links.
 * @param {string} props.translationNS - The i18next namespace for translations.
 */
const CtaCard = ({ ctaData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Do not render if essential data is missing.
  if (!ctaData || !ctaData.titleKey || !ctaData.buttonTextKey) {
    return null;
  }

  // Determine if the link is external (opens in a new tab) or an internal route.
  const isExternalLink = ctaData.isExternal || ctaData.link.startsWith('http');

  const CtaContent = (
    <>
      <h3 className='text-xl font-bold text-brand-white mb-4'>
        {t(ctaData.titleKey)}
      </h3>
      <span className='mt-4 inline-block w-full bg-brand-cta-orange text-brand-white font-bold uppercase py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-cta-yellow'>
        {t(ctaData.buttonTextKey)}
      </span>
    </>
  );

  return (
    <div className='bg-brand-primary-light p-6 rounded-lg shadow-lg text-center'>
      {isExternalLink ? (
        // Use a standard anchor tag for external links.
        <a
          href={ctaData.link}
          target='_blank'
          rel='noopener noreferrer'
          className='block'>
          {CtaContent}
        </a>
      ) : (
        // Use React Router's Link component for internal navigation.
        <Link
          to={ctaData.link}
          className='block'>
          {CtaContent}
        </Link>
      )}
    </div>
  );
};

export default CtaCard;
