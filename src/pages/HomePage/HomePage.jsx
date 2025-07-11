// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { homePageData } from '../../data/pages/homeData.js';

// Import all the necessary components for this page
import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeroSection from './components/Sections/HeroSection.jsx';
import ExperiencesSection from './components/Sections/ExperiencesSection.jsx';
import SafetySection from './components/Sections/SafetySection.jsx';
import TestimonialsSection from './components/Sections/TestimonialsSection.jsx';
import CtaComponent from '../../components/CtaComponent.jsx';

import { staggerContainer } from '../../hooks/animations.js';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <SEOComponent
        title={t(homePageData.seo.titleKey)}
        description={t(homePageData.seo.descriptionKey)}
      />

      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'>
        {/* All the sections of the homepage, in order */}
        <HeroSection />
        <ExperiencesSection />
        <SafetySection />
        <TestimonialsSection />
        <CtaComponent
          sectionData={homePageData.finalCta}
          translationNS='home'
        />
      </motion.div>
    </>
  );
};

export default HomePage;
