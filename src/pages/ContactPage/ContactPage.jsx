// src/pages/ContactPage/ContactPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources for this page
import { contactPageData as data } from '../../data/pages/contactData.js';
import { staggerContainer, fadeInUp } from '../../hooks/animations.js';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeaderComponent from '../../components/HeaderComponent.jsx';
import ContactInfoSection from './components/Sections/ContactInfoSection.jsx';
import WhatsAppCtaSection from './components/Sections/WhatsAppCtaSection.jsx';

/**
 * Renders the main "Contact Us" page.
 * This component fetches contact data, constructs dynamic URLs,
 * and assembles the various sections of the page.
 */
const ContactPage = () => {
  const { t } = useTranslation('contact');

  // Destructure page data for cleaner access in the JSX.
  const { seo, header, contactInfo, whatsAppAction } = data;

  // The WhatsApp URL is constructed here in the parent component because it requires
  // translated text ('prefilledText') and data from different parts of the data object.
  // This keeps the child components purely presentational.
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
        imageUrl={header.imageUrl}
        url='/contacto'
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
