// src/pages/ContactPage/ContactPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { contactPageData as data } from '../../data/pages/contactData.js';
import { staggerContainer, fadeInUp } from '../../hooks/animations.js';

import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeaderComponent from '../../components/HeaderComponent.jsx';
import ContactInfoSection from './components/Sections/ContactInfoSection.jsx';
import WhatsAppCtaSection from './components/Sections/WhatsAppCtaSection.jsx';

const ContactPage = () => {
  const { t } = useTranslation('contact');
  const { seo, header, contactInfo, whatsAppAction } = data;

  // We build the WhatsApp URL here, using the translated message
  const prefilledText = t(whatsAppAction.prefilledMessageKey);
  const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

  return (
    <motion.div
      variants={staggerContainer}
      initial='initial'
      animate='animate'
      exit='exit'>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
      />
      <HeaderComponent
        sectionData={header}
        translationNS='contact'
      />
      <motion.section
        variants={fadeInUp}
        className='py-20 px-4'>
        <div className='container mx-auto grid md:grid-cols-2 gap-12 items-start'>
          <ContactInfoSection contactInfoData={contactInfo} />
          <WhatsAppCtaSection
            whatsAppActionData={whatsAppAction}
            whatsappUrl={whatsappUrl}
          />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage;
