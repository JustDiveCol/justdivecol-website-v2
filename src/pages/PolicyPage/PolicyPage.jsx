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
  const { t } = useTranslation([NAMESPACES.POLICY_PAGE, NAMESPACES.COMMON]);

  const { seo, header, sections } = policyData;

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
        <HeaderComponent sectionData={header} translationNS={NAMESPACES.POLICY_PAGE} />
        <div className="container mx-auto py-16 px-4">
          {/* Solo un mapeo de sections aquí */}
          {sections.map((section) => (
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
