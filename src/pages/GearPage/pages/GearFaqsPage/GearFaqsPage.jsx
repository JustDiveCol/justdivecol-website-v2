// src/pages/GearPage/pages/GearFaqsPage/GearFaqsPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import SEOComponent from '../../../../components/ui/SEOComponent';
import HeaderComponent from '../../../../components/HeaderComponent';
import FaqsContentSection from '../../../../sections/FaqsContentSection';
import MultipleCtaComponent from '../../../../components/MultipleCtaComponent';

import { faqStagger } from '../../../../hooks/animations';

import { gearFaqsData } from '../../../../data/pages/gearFaqsData';

const GearFaqsPage = () => {
  const { t } = useTranslation('gearFaqsPage');
  const { titleKey, descriptionKey, keywords, imageUrl, url } =
    gearFaqsData.seo;
  const banner = gearFaqsData.banner;
  const cta = gearFaqsData.cta;
  return (
    <>
      <SEOComponent
        title={t(titleKey)}
        description={t(descriptionKey)}
        keywords={t(keywords)}
        imageUrl={t(imageUrl)}
        url={url}
      />
      <motion.div
        variants={faqStagger}
        initial='initial'
        animate='animate'
        className='pt-[3.5rem] bg-brand-neutral'>
        {/* Header */}
        <HeaderComponent
          sectionData={banner}
          translationNS='gearFaqsPage'
        />

        <FaqsContentSection
          faqsData={gearFaqsData}
          translationNS='gearFaqsPage'
        />

        <MultipleCtaComponent
          sectionData={cta}
          translationNS='gearFaqsPage'
        />
      </motion.div>
    </>
  );
};

export default GearFaqsPage;
