import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { terms } from '../../data/pages/terms';
import { staggerContainer } from '../../hooks/animations';

import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RenderComponent from '../../components/common/Component/RenderComponent';

const TermsAndConditionsPage = () => {
  const { t } = useTranslation('termsAndConditions');

  return (
    <>
      <SEOComponent
        title={t(terms.seo.titleKey)}
        description={t(terms.seo.descriptionKey)}
        keywords={t(terms.seo.keywords)}
        imageUrl={terms.seo.imageUrl}
        url={terms.seo.url}
      />
      <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="hidden">
        <HeaderComponent sectionData={terms.header} translationNS="termsAndConditions" />
        <div className="container mx-auto py-16 px-4">
          {/* Solo un mapeo de sections aquí */}
          {terms.sections.map((section) => (
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
