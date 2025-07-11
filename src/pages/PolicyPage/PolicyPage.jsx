// src/pages/PolicyPage/PolicyPage.jsx
import React from 'react';
import { motion } from 'motion/react'; // Use motion/react for consistency
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Import the new data file
import { policyPageData } from '../../data/pages/policyPageData';
// Import existing components from your project structure
import SEOComponent from '../../components/ui/SEOComponent'; //
import HeaderComponent from '../../components/HeaderComponent'; //
// Import animations from your hooks folder
import { staggerContainer, fadeInUp } from '../../hooks/animations'; //

const PolicyPage = () => {
  const { t } = useTranslation('policies'); // Use the new 'policies' namespace

  return (
    <>
      <SEOComponent
        title={t(policyPageData.seo.titleKey, { ns: 'policies' })}
        description={t(policyPageData.seo.descriptionKey, { ns: 'policies' })}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <HeaderComponent
          sectionData={policyPageData.header}
          translationNS='policies' // Specify namespace for header
        />
        <div className='container mx-auto py-16 px-4'>
          {policyPageData.sections.map((section) => (
            <motion.section
              key={section.id}
              variants={fadeInUp} // Use fadeInUp animation for consistent page entry
              className='mb-12'>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
                {t(section.titleKey, { ns: 'policies' })}{' '}
                {/* Translate section title */}
              </h2>
              <ul className='space-y-3 list-disc list-inside font-serif text-brand-neutral/90'>
                {section.points.map((pointKey, index) => (
                  <li key={index}>
                    {t(pointKey, { ns: 'policies' })}{' '}
                    {/* Translate each point */}
                  </li>
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
