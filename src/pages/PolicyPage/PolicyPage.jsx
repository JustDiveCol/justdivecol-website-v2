// src/pages/PolicyPage/PolicyPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { policyPageData } from '../../data/pages/policyPageData';
import { staggerContainer } from '../../hooks/animations';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RenderComponent from '../../components/common/Component/RenderComponent';

/**
 * Renders the "Policies & Regulations" page.
 * It dynamically displays sections and points from a dedicated data file.
 */
const PolicyPage = () => {
  const { t } = useTranslation('policies'); // Use the 'policies' namespace.

  return (
    <>
      <SEOComponent
        title={t(policyPageData.seo.titleKey, { ns: 'policies' })}
        description={t(policyPageData.seo.descriptionKey, { ns: 'policies' })}
        imageUrl={policyPageData.header.headerImageUrl}
        url='/politicas'
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <HeaderComponent
          sectionData={policyPageData.header}
          translationNS='policies'
        />
        <div className='container mx-auto py-16 px-4'>
          {/* Solo un mapeo de sections aquí */}
          {policyPageData.sections.map((section) => (
            <RenderComponent
              key={section.id}
              renderData={section}
              translationNS={'policies'}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default PolicyPage;
