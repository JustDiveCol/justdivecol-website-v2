// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { homePageData } from '@/data/pages/homeData.js';

// Animation variants
import { staggerContainer } from '@/hooks/animations.js';

// UI and Section Components
import SEOComponent from '@/components/ui/SEOComponent.jsx';
import HeroSection from '@/pages/HomePage/components/Sections/HeroSection.jsx';
import ExperiencesSection from '@/pages/HomePage/components/Sections/ExperiencesSection.jsx';
import SafetySection from '@/pages/HomePage/components/Sections/SafetySection.jsx';
import TestimonialsSection from '@/pages/HomePage/components/Sections/TestimonialsSection.jsx';
import CtaComponent from '@/components/CtaComponent.jsx';

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
        keywords={t(homePageData.seo.keywords)}
        imageUrl={homePageData.seo.imageUrl}
        url={homePageData.seo.url}
      />
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        {/* The sections are rendered in their intended order for the homepage. */}
        <HeroSection translationNS={'home'} />
        <ExperiencesSection
          translationNS="home"
          titleKey={homePageData.featuredExperiences.titleKey}
          subtitleKey={homePageData.featuredExperiences.subtitleKey}
          categories={homePageData.featuredExperiences.categories}
        />
        <SafetySection translationNS={'home'} />

        {/* Conditionally render testimonials only if there are items to display. */}
        {homePageData.testimonials?.items?.length > 0 && (
          <TestimonialsSection translationNS={'home'} />
        )}

        <CtaComponent sectionData={homePageData.finalCta} translationNS="home" />
      </motion.div>
    </>
  );
};

export default HomePage;
