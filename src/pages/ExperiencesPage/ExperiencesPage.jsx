// src/pages/ExperiencesPage/ExperiencesPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data and animations
import { experiencesData } from '../../data/pages/experiencesData';
import { homePageData } from '../../data/pages/homeData';
import { staggerContainer } from '../../hooks/animations';

// Components
import SEOComponent from '../../components/ui/SEOComponent';
import ExperiencesSection from '../HomePage/components/Sections/ExperiencesSection';
import CalendarExperiencesSection from './components/Sections/CalendarExperiencesSection';
import DestinationsSection from '../ExperiencesPage/components/Sections/DestinationsSection';
import CtaComponent from '../../components/CtaComponent';

// Providers
import CertificationSection from './components/Sections/CertificationsSection';
import { NAMESPACES } from '../../data/global/constants';

const ExperiencesPage = () => {
  const { t } = useTranslation([NAMESPACES.EXPERIENCES_PAGE, NAMESPACES.COMMON]);
  const { seo, customTripCta } = experiencesData;
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
        <CalendarExperiencesSection translationNS={NAMESPACES.EXPERIENCES_PAGE} />

        <ExperiencesSection
          translationNS={NAMESPACES.HOME_PAGE}
          titleKey={titleKey}
          subtitleKey={subtitleKey}
          categories={categories}
        />

        <CertificationSection translationNS={NAMESPACES.EXPERIENCES_PAGE} />

        <DestinationsSection translationNS={NAMESPACES.EXPERIENCES_PAGE} />

        <CtaComponent sectionData={customTripCta} translationNS={NAMESPACES.EXPERIENCES_PAGE} />
      </motion.div>
    </div>
  );
};

export default ExperiencesPage;
