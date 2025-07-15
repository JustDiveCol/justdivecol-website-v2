import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { privacyPolicyData } from '../../data/pages/privacyPolicyData';
import { staggerContainer } from '../../hooks/animations';

import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RenderComponent from '../../components/common/Component/RenderComponent';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation('privacyPolicy');

  return (
    <>
      <SEOComponent
        title={t(privacyPolicyData.seo.titleKey)}
        description={t(privacyPolicyData.seo.descriptionKey)}
        imageUrl={privacyPolicyData.header.headerImageUrl}
        url='/privacidad'
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <HeaderComponent
          sectionData={privacyPolicyData.header}
          translationNS='privacyPolicy'
        />
        <div className='container mx-auto py-16 px-4'>
          {/* Solo un mapeo de sections aquí */}
          {privacyPolicyData.sections.map((section) => (
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
