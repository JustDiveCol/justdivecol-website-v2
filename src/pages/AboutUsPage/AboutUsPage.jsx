// src/pages/AboutUsPage/AboutUsPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

// Data sources for this page's content
import { aboutUsPageData } from '../../data/pages/aboutUsData.js';
import { contactPageData } from '../../data/pages/contactData.js';

// Animation variants
import { staggerContainer } from '../../hooks/animations.js';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeaderComponent from '../../components/HeaderComponent.jsx';
import HistorySection from './components/Sections/HistorySection.jsx';
import TeamSection from './components/Sections/TeamSection.jsx';
import CommitmentSection from './components/Sections/CommitmentSection.jsx';
import CtaComponent from '../../components/CtaComponent.jsx';
import { NAMESPACES } from '@/data/global/constants.js';

/**
 * Renders the "About Us" page.
 * This component assembles all the sections that constitute the page.
 */
export const AboutUsPage = () => {
  const { t } = useTranslation([NAMESPACES.ABOUT_US_PAGE, NAMESPACES.COMMON]);

  // Destructure page-specific data for cleaner access in the JSX.
  const { seo, header, history, team, commitment } = aboutUsPageData;

  return (
    <>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
        keywords={t(seo.keywords)}
        imageUrl={seo.imageUrl}
        url={seo.url}
      />

      <motion.div // Typo corrected from <motion.di>
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <HeaderComponent sectionData={header} translationNS={NAMESPACES.ABOUT_US_PAGE} />

        <HistorySection historyData={history} translationNS={NAMESPACES.ABOUT_US_PAGE} />

        <TeamSection teamData={team} translationNS={NAMESPACES.ABOUT_US_PAGE} />

        <CommitmentSection commitmentData={commitment} translationNS={NAMESPACES.ABOUT_US_PAGE} />

        {/* The final CTA reuses data from the contact page for consistency. */}
        <CtaComponent
          sectionData={contactPageData.cta}
          translationNS={[NAMESPACES.CONTACT, NAMESPACES.COMMON]}
        />
      </motion.div>
    </>
  );
};

export default AboutUsPage;
