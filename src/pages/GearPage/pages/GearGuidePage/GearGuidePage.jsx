// src/pages/GearPage/pages/GearGuidePage/GearGuidePage.jsx
import React from 'react';
import CategoryProductsSection from './sections/CategoryProductsSection';
import GearGuideStepSection from './sections/GearGuideStepSection';
import MultipleCtaComponent from '../../../../components/MultipleCtaComponent';

import { gearGuidePageData } from '../../../../data/pages/gearGuidePageData';

const GearGuidePage = () => {
  const majorSteps = gearGuidePageData.majorSteps;
  const cta = gearGuidePageData.cta;

  return (
    <div className='bg-brand-neutral min-h-screen'>
      <div className='pt-[4rem]'>
        {' '}
        <CategoryProductsSection />
        {/* Iteramos sobre los 'majorSteps' para renderizar cada GearGuideStepSection */}
        {majorSteps.map((majorStep) => (
          <GearGuideStepSection
            key={majorStep.id}
            banner={majorStep.banner}
            products={majorStep.products}
            translationNS={'gearGuidePage'}
          />
        ))}
        <MultipleCtaComponent
          sectionData={cta}
          translationNS='gearGuidePage'
        />
      </div>
    </div>
  );
};

export default GearGuidePage;
