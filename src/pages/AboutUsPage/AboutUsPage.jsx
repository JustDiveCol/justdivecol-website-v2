// src/pages/AboutUsPage/AboutUsPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { aboutUsPageData } from '../../data/pages/aboutUsData.js';
import { contactPageData } from '../../data/pages/contactData.js';

import { staggerContainer } from '../../hooks/animations.js';

import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeaderComponent from '../../components/HeaderComponent.jsx';
import HistorySection from './components/Sections/HistorySection.jsx';
import TeamSection from './components/Sections/TeamSection.jsx';
import CommitmentSection from './components/Sections/CommitmentSection.jsx';
import CtaComponent from '../../components/CtaComponent.jsx';

export const AboutUsPage = () => {
  const { t } = useTranslation('aboutUs');
  const { seo, header, history, team, commitment } = aboutUsPageData;

  return (
    <>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
      />

      <motion.di
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        exit='exit'>
        <HeaderComponent
          sectionData={header}
          translationNS='aboutUs'
        />
        <HistorySection historyData={history} />
        <TeamSection teamData={team} />
        <CommitmentSection commitmentData={commitment} />
        <CtaComponent
          sectionData={contactPageData.header}
          translationNS='contact'
        />
      </motion.di>
    </>
  );
};

export default AboutUsPage;
