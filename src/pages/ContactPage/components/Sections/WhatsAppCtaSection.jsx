// src/pages/ContactPage/components/WhatsAppCtaSection.jsx
import { useTranslation } from 'react-i18next';

const WhatsAppCtaSection = ({ whatsAppActionData, whatsappUrl }) => {
  const { t } = useTranslation('contact');
  return (
    <div className='bg-brand-primary-medium p-8 rounded-lg text-center'>
      <h2 className='text-3xl font-sans font-bold mb-4 text-brand-white'>
        {t(whatsAppActionData.titleKey)}
      </h2>
      <p className='font-serif text-brand-neutral mb-6'>
        {t(whatsAppActionData.descriptionKey)}
      </p>
      <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-10 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50'>
        {t(whatsAppActionData.ctaTextKey)}
      </a>
    </div>
  );
};

export default WhatsAppCtaSection;
