// src/pages/GearPage/pages/GearHomePage/GearHomePage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { gearHomePageData } from '../../../../data/pages/gearHomePageData';

import { staggerContainer } from '../../../../hooks/animations';

import SEOComponent from '../../../../components/ui/SEOComponent';
import GearHomeHeroSection from './sections/GearHomeHeroSection';
import GearHomeContentSection from './sections/GearHomeContentSection';
import GearHomeCardsSection from './sections/GearHomeCardsSection';
import MultipleCtaComponent from '../../../../components/MultipleCtaComponent';

const GearHomePage = () => {
  const ctaData = gearHomePageData.cta;

  return (
    <>
      {/* SEO */}
      <SEOComponent />
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'>
        <GearHomeHeroSection />
        <GearHomeContentSection />
        <GearHomeCardsSection />
        <MultipleCtaComponent
          sectionData={ctaData}
          translationNS='gearHomePage'
        />
      </motion.div>
    </>
  );
};

export default GearHomePage;
