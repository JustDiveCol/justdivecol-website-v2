// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { homePageData } from '@/data/pages/homeData.js';
import { staggerContainer } from '@/hooks/animations.js';
import { NAMESPACES } from '@/data/global/constants';

import SEOComponent from '@/components/ui/SEOComponent.jsx';
import HeroSection from '@/pages/HomePage/components/Sections/HeroSection.jsx';
import ExperiencesSection from '@/pages/HomePage/components/Sections/ExperiencesSection.jsx';
import SafetySection from '@/pages/HomePage/components/Sections/SafetySection.jsx';
import TestimonialsSection from '@/pages/HomePage/components/Sections/TestimonialsSection.jsx';
import CtaComponent from '@/components/CtaComponent.jsx';

const HomePage = () => {
  const { t } = useTranslation(NAMESPACES.HOME_PAGE);

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
        <HeroSection translationNS={NAMESPACES.HOME_PAGE} />

        <ExperiencesSection
          translationNS={NAMESPACES.HOME_PAGE}
          titleKey={homePageData.featuredExperiences.titleKey}
          subtitleKey={homePageData.featuredExperiences.subtitleKey}
          categories={homePageData.featuredExperiences.categories}
        />
        <SafetySection translationNS={NAMESPACES.HOME_PAGE} />

        {homePageData.testimonials?.items?.length > 0 && (
          <TestimonialsSection translationNS={NAMESPACES.HOME_PAGE} />
        )}

        <CtaComponent sectionData={homePageData.finalCta} translationNS={NAMESPACES.HOME_PAGE} />
      </motion.div>
    </>
  );
};

export default HomePage;
