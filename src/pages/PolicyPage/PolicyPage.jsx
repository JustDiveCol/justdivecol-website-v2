// src/pages/PolicyPage/PolicyPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { policyData } from '../../data/pages/policyData';
import { staggerContainer } from '../../hooks/animations';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RenderComponent from '../../components/common/Component/RenderComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders the "Policies & Regulations" page.
 * It dynamically displays sections and points from a dedicated data file.
 */
const PolicyPage = () => {
  const { t } = useTranslation([NAMESPACES.POLICY_PAGE, NAMESPACES.COMMON]); // Use the 'policies' namespace.

  return (
    <>
      <SEOComponent
        title={t(policyData.seo.titleKey)}
        description={t(policyData.seo.descriptionKey)}
        keywords={t(policyData.seo.keywords)}
        imageUrl={policyData.seo.imageUrl}
        url={policyData.seo.url}
      />
      <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="hidden">
        <HeaderComponent sectionData={policyData.header} translationNS={NAMESPACES.POLICY_PAGE} />
        <div className="container mx-auto py-16 px-4">
          {/* Solo un mapeo de sections aquí */}
          {policyData.sections.map((section) => (
            <RenderComponent
              key={section.id}
              renderData={section}
              translationNS={NAMESPACES.POLICY_PAGE}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default PolicyPage;
