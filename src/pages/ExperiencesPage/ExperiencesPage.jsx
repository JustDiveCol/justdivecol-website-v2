// src/pages/ExperiencesPage/ExperiencesPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data and animations
import { experiencesPageData } from '@/data/pages/experiencesData';
import { homePageData } from '@/data/pages/homeData';
import { staggerContainer } from '@/hooks/animations';

// Components
import SEOComponent from '@/components/ui/SEOComponent';
import ExperiencesSection from '@/pages/HomePage/components/Sections/ExperiencesSection.jsx';
import CalendarExperiencesSection from './components/Sections/CalendarExperiencesSection';
import CoursesSection from '@/pages/ExperiencesPage/components/Sections/CoursesSection';
import DestinationsSection from '@/pages/ExperiencesPage/components/Sections/DestinationsSection';
import CtaComponent from '@/components/CtaComponent';

// Providers
import CertificationSection from './components/Sections/CertificationsSection';

const ExperiencesPage = () => {
  const { t } = useTranslation('experiencesPage');
  const { seo, customTripCta } = experiencesPageData;
  const { titleKey, subtitleKey, categories } = homePageData.featuredExperiences;

  return (
    <div>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
        keywords={t(seo.keywords)}
        imageUrl={seo.imageUrl}
        url={seo.url}
      />

      <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
        <CalendarExperiencesSection translationNS="experiencesPage" />

        <ExperiencesSection
          translationNS="home"
          titleKey={titleKey}
          subtitleKey={subtitleKey}
          categories={categories}
        />

        <CertificationSection translationNS={'experiencesPage'} />
        {/* <CoursesSection translationNS="experiencesPage" /> */}
        <DestinationsSection translationNS="experiencesPage" />
        <CtaComponent sectionData={customTripCta} translationNS="experiencesPage" />
      </motion.div>
    </div>
  );
};

export default ExperiencesPage;
