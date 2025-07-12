// src/pages/PolicyPage/PolicyPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { policyPageData } from '../../data/pages/policyPageData';
import { staggerContainer, fadeInUp } from '../../hooks/animations';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';

/**
 * Renders the "Policies & Regulations" page.
 * It dynamically displays sections and points from a dedicated data file.
 */
const PolicyPage = () => {
  const { t } = useTranslation('policies'); // Use the 'policies' namespace.

  return (
    <>
      <SEOComponent
        title={t(policyPageData.seo.titleKey, { ns: 'policies' })}
        description={t(policyPageData.seo.descriptionKey, { ns: 'policies' })}
        imageUrl={policyPageData.header.imageUrl}
        url='/politicas'
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <HeaderComponent
          sectionData={policyPageData.header}
          translationNS='policies'
        />
        <div className='container mx-auto py-16 px-4'>
          {policyPageData.sections.map((section) => (
            <motion.section
              key={section.id}
              variants={fadeInUp}
              className='mb-12'>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
                {t(section.titleKey, { ns: 'policies' })}
              </h2>
              <ul className='space-y-3 list-disc list-inside font-serif text-brand-neutral/90'>
                {section.points.map((pointKey, index) => (
                  <li key={index}>{t(pointKey, { ns: 'policies' })}</li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default PolicyPage;
