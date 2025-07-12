// src/pages/ExperiencesPage/ExperiencesPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { experiencesPageData } from '../../data/pages/experiencesData';
import { staggerContainer } from '../../hooks/animations';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import ExperiencesSection from './components/Sections/ExperiencesSection';
import CalendarExperiencesSection from './components/Sections/CalendarExperiencesSection';
import CoursesSection from './components/Sections/CoursesSection';
import DestinationsSection from './components/Sections/DestinationsSection';
import CtaComponent from '../../components/CtaComponent';

/**
 * Renders the main "Experiences" page.
 * This component assembles all the sections that showcase the different
 * types of experiences offered, such as the calendar, courses, and destinations.
 */
const ExperiencesPage = () => {
  const { t } = useTranslation('experiencesPage');
  const { seo, header, customTripCta } = experiencesPageData;

  return (
    <div>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
        imageUrl={header.imageUrl}
        url='/experiencias'
      />

      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        exit='exit'>
        <HeaderComponent
          sectionData={header}
          translationNS='experiencesPage'
        />
        <ExperiencesSection />
        <CalendarExperiencesSection />
        <CoursesSection />
        <DestinationsSection />
        <CtaComponent
          sectionData={customTripCta}
          translationNS='experiencesPage'
        />
      </motion.div>
    </div>
  );
};

export default ExperiencesPage;
