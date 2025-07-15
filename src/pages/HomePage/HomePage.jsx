// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { homePageData } from '../../data/pages/homeData.js';

// Animation variants
import { staggerContainer } from '../../hooks/animations.js';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeroSection from './components/Sections/HeroSection.jsx';
import ExperiencesSection from './components/Sections/ExperiencesSection.jsx';
import SafetySection from './components/Sections/SafetySection.jsx';
import TestimonialsSection from './components/Sections/TestimonialsSection.jsx';
import CtaComponent from '../../components/CtaComponent.jsx';

/**
 * Renders the main homepage of the website.
 * It assembles all the homepage sections in the correct order.
 */
const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <SEOComponent
        title={t(homePageData.seo.titleKey)}
        description={t(homePageData.seo.descriptionKey)}
        imageUrl={homePageData.hero.imageUrl}
        url='/'
      />
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'>
        {/* The sections are rendered in their intended order for the homepage. */}
        <HeroSection />
        <ExperiencesSection />
        <SafetySection />

        {/* Conditionally render testimonials only if there are items to display. */}
        {homePageData.testimonials?.items?.length > 0 && (
          <TestimonialsSection />
        )}

        <CtaComponent
          sectionData={homePageData.finalCta}
          translationNS='home'
        />
      </motion.div>
    </>
  );
};

export default HomePage;
