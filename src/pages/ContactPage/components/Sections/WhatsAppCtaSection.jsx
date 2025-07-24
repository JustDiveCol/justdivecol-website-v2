// src/pages/ContactPage/components/WhatsAppCtaSection.jsx
import { useTranslation } from 'react-i18next';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders a call-to-action section that prompts the user to start a WhatsApp chat.
 *
 * @param {object} props - The component props.
 * @param {object} props.whatsAppActionData - The data object for the CTA content.
 * @param {string} props.whatsAppActionData.titleKey - The translation key for the title.
 * @param {string} props.whatsAppActionData.descriptionKey - The translation key for the description.
 * @param {string} props.whatsAppActionData.ctaTextKey - The translation key for the button text.
 * @param {string} props.whatsappUrl - The fully constructed WhatsApp URL with a pre-filled message.
 */
const WhatsAppCtaSection = ({ translationNS, whatsAppActionData }) => {
  const { t } = useTranslation(
    translationNS === NAMESPACES.COMMON ? NAMESPACES.COMMON : [translationNS, NAMESPACES.COMMON]
  );
  return (
    <div className="bg-brand-primary-medium p-8 rounded-lg text-center">
      <h2 className="heading-4 font-bold mb-4 text-brand-white">
        {t(whatsAppActionData.titleKey)}
      </h2>
      <p className="text-base-xs text-brand-neutral mb-6">{t(whatsAppActionData.descriptionKey)}</p>
      <ButtonComponent
        action={whatsAppActionData.ctaAction}
        textKey={whatsAppActionData.ctaTextKey}
        translationNS={NAMESPACES.COMMON}
      />
    </div>
  );
};

export default WhatsAppCtaSection;
