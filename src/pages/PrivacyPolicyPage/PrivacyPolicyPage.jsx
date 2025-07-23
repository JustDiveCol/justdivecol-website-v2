import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { privacyData } from '../../data/pages/privacyData';
import { staggerContainer } from '../../hooks/animations';

import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RenderComponent from '../../components/common/Component/RenderComponent';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation('privacyPolicy');

  return (
    <>
      <SEOComponent
        title={t(privacyData.seo.titleKey)}
        description={t(privacyData.seo.descriptionKey)}
        keywords={t(privacyData.seo.keywords)}
        imageUrl={privacyData.seo.imageUrl}
        url={privacyData.seo.url}
      />
      <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="hidden">
        <HeaderComponent sectionData={privacyData.header} translationNS="privacyPolicy" />
        <div className="container mx-auto py-16 px-4">
          {/* Solo un mapeo de sections aquí */}
          {privacyData.sections.map((section) => (
            <RenderComponent
              key={section.id}
              renderData={section}
              translationNS={'privacyPolicy'}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicyPage;
