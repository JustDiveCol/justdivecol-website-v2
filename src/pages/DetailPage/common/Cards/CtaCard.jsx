// src/pages/DetailPage/common/Cards/CtaCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent';

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

  if (
    !ctaData ||
    !ctaData.titleKey ||
    !ctaData.buttonTextKey ||
    !ctaData.ctaAction
  ) {
    return null;
  }

  return (
    <div className='bg-brand-primary-light p-6 rounded-lg shadow-lg text-center'>
      <h3 className='text-xl font-bold text-brand-white mb-6'>
        {t(ctaData.titleKey)}
      </h3>

      <ButtonComponent
        action={ctaData.ctaAction}
        textKey={ctaData.buttonTextKey}
        translationNS={translationNS}
        className='text-sm'
      />
    </div>
  );
};

export default CtaCard;
