// src/pages/ContactPage/components/WhatsAppCtaSection.jsx
import { useTranslation } from 'react-i18next';

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
const WhatsAppCtaSection = ({ whatsAppActionData, whatsappUrl }) => {
  const { t } = useTranslation('contact');
  return (
    <div className='bg-brand-primary-medium p-8 rounded-lg text-center'>
      <h2 className='text-3xl font-bold mb-4 text-brand-white'>
        {t(whatsAppActionData.titleKey)}
      </h2>
      <p className=' text-brand-neutral mb-6'>
        {t(whatsAppActionData.descriptionKey)}
      </p>
      <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block bg-brand-cta-orange text-brand-white font-bold uppercase text-lg px-10 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50'>
        {t(whatsAppActionData.ctaTextKey)}
      </a>
    </div>
  );
};

export default WhatsAppCtaSection;
