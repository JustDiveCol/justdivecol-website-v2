import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { termsData } from '../../data/pages/termsData';
import { staggerContainer } from '../../hooks/animations';

import SEOComponent from '../../components/shared/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RenderComponent from '../../components/common/Component/RenderComponent';
import { NAMESPACES } from '@/data/global/constants';

const TermsAndConditionsPage = () => {
  const { t } = useTranslation([NAMESPACES.TERMS_PAGE, NAMESPACES.COMMON]);

  const { seo, sections, header } = termsData;

  return (
    <>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
        keywords={t(seo.keywords)}
        imageUrl={seo.imageUrl}
        url={seo.url}
      />
      <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="hidden">
        <HeaderComponent sectionData={header} translationNS={NAMESPACES.TERMS_PAGE} />
        <div className="container mx-auto py-16 px-4">
          {sections.map((section) => (
            <RenderComponent
              key={section.id}
              renderData={section}
              translationNS={NAMESPACES.TERMS_PAGE}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TermsAndConditionsPage;
