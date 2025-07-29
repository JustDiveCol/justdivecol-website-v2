// src/pages/HomePage/HomePage.jsx
import React from 'react';

import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { homePageData } from '@/data/pages/homeData.js';
import { experiencesData } from '@/data/pages/experiencesData';
import { staggerContainer } from '@/hooks/animations.js';
import { NAMESPACES } from '@/data/global/constants';

import SEOComponent from '@/components/shared/SEOComponent.jsx';
import HeroSection from '@/pages/HomePage/components/Sections/HeroSection.jsx';
import ExperiencesSection from '@/pages/HomePage/components/Sections/ExperiencesSection.jsx';
import FoundationsSection from '@/pages/HomePage/components/Sections/FoundationsSection.jsx';
import TestimonialsSection from '@/pages/HomePage/components/Sections/TestimonialsSection.jsx';
import CtaComponent from '@/components/CtaComponent.jsx';

const HomePage = () => {
  const { t } = useTranslation(NAMESPACES.HOME_PAGE);

  const { seo, testimonials, finalCta } = homePageData;
  const { featuredExperiences } = experiencesData;

  return (
    <>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
        keywords={t(seo.keywords)}
        imageUrl={seo.imageUrl}
        url={seo.url}
      />
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <HeroSection translationNS={NAMESPACES.HOME_PAGE} />

        <ExperiencesSection
          translationNS={[NAMESPACES.HOME_PAGE, NAMESPACES.EXPERIENCES_PAGE]}
          titleKey={featuredExperiences.titleKey}
          subtitleKey={featuredExperiences.subtitleKey}
          categories={featuredExperiences.categories}
        />
        <FoundationsSection translationNS={NAMESPACES.HOME_PAGE} />

        {testimonials?.items?.length > 0 && (
          <TestimonialsSection translationNS={NAMESPACES.HOME_PAGE} />
        )}

        <CtaComponent sectionData={finalCta} translationNS={NAMESPACES.HOME_PAGE} />
      </motion.div>
    </>
  );
};

export default HomePage;
