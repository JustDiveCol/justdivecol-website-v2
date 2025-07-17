import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { termsAndConditionData } from '../../data/pages/termsAndConditionsData';
import { staggerContainer } from '../../hooks/animations';

import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RenderComponent from '../../components/common/Component/RenderComponent';

const TermsAndConditionsPage = () => {
  const { t } = useTranslation('termsAndConditions');

  return (
    <>
      <SEOComponent
        title={t(termsAndConditionData.seo.titleKey)}
        description={t(termsAndConditionData.seo.descriptionKey)}
        keywords={t(termsAndConditionData.seo.keywords)}
        imageUrl={termsAndConditionData.seo.imageUrl}
        url={termsAndConditionData.seo.url}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <HeaderComponent
          sectionData={termsAndConditionData.header}
          translationNS='termsAndConditions'
        />
        <div className='container mx-auto py-16 px-4'>
          {/* Solo un mapeo de sections aquí */}
          {termsAndConditionData.sections.map((section) => (
            <RenderComponent
              key={section.id}
              renderData={section}
              translationNS={'termsAndConditions'}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TermsAndConditionsPage;
