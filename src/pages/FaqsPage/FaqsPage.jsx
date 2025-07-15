import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { faqsData } from '../../data/pages/faqsData';
import { staggerContainer } from '../../hooks/animations';

import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import FaqsComponent from './FaqsComponent';

const FaqsPage = () => {
  const { t } = useTranslation('privacyPolicy');

  return (
    <>
      <SEOComponent
        title={t(faqsData.seo.titleKey)}
        description={t(faqsData.seo.descriptionKey)}
        imageUrl={faqsData.header.headerImageUrl}
        url='/faqs'
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <HeaderComponent
          sectionData={faqsData.header}
          translationNS='faqs'
        />
        <div className='container mx-auto py-16 px-4'>
          {/* Solo un mapeo de sections aquí */}
          {faqsData.sections.map((section) => (
            <FaqsComponent
              key={section.id}
              renderData={section}
              translationNS={'faqs'}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default FaqsPage;
