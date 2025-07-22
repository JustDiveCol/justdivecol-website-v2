// src/pages/DetailPage/common/Cards/CtaCard.jsx
import React from 'react';
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
 * @param {object} props.ctaData.ctaAction - The action object for ButtonComponent.
 * @param {string} props.translationNS - The i18next namespace for translations.
 */
const CtaCard = ({ ctaData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  if (!ctaData || !ctaData.titleKey || !ctaData.buttonTextKey || !ctaData.ctaAction) {
    return null;
  }

  // Handler to block any dragging of the card container
  const preventDrag = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div
      className="bg-brand-primary-light p-6 rounded-lg shadow-lg text-center select-text"
      role="region"
      aria-label={t(ctaData.titleKey)}
      draggable={false}
      onDragStart={preventDrag}
      onContextMenu={preventDrag}
    >
      <h3 className="text-xl font-bold text-brand-white mb-6">{t(ctaData.titleKey)}</h3>

      <ButtonComponent
        action={ctaData.ctaAction}
        textKey={ctaData.buttonTextKey}
        translationNS={translationNS}
        className="text-sm"
      />
    </div>
  );
};

export default CtaCard;
