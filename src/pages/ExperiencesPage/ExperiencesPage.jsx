// src/pages/ExperiencesPage/ExperiencesPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data and animations
import { experiencesData } from '../../data/pages/experiencesData';
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
  const { titleKey, subtitleKey, categories } = experiencesData.featuredExperiences;

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
        <CalendarExperiencesSection
          translationNS={[NAMESPACES.EXPERIENCES_PAGE, NAMESPACES.EXPERIENCES]}
        />

        <ExperiencesSection
          translationNS={[NAMESPACES.EXPERIENCES_PAGE, NAMESPACES.HOME_PAGE]}
          titleKey={titleKey}
          subtitleKey={subtitleKey}
          categories={categories}
        />

        <CertificationSection
          translationNS={[NAMESPACES.EXPERIENCES_PAGE, NAMESPACES.CERTIFICATIONS]}
        />

        <DestinationsSection
          translationNS={[NAMESPACES.EXPERIENCES_PAGE, NAMESPACES.DESTINATIONS]}
        />

        <CtaComponent sectionData={customTripCta} translationNS={NAMESPACES.EXPERIENCES_PAGE} />
      </motion.div>
    </div>
  );
};

export default ExperiencesPage;
