// src/pages/GearPage/pages/GearGuidePage/sections/GearGuideStepSection.jsx
import React from 'react';

import GearGuideStepImageLeftComponent from '../components/GearGuideStepImageLeftComponent';
import GearGuideStepImageRightComponent from '../components/GearGuideStepImageRightComponent';
import HeaderComponent from '../../../../../components/HeaderComponent';

// Ahora el componente GearGuideStepSection recibe los datos de UN SOLO paso mayor
const GearGuideStepSection = ({ banner, products, translationNS }) => {
  return (
    <>
      {/* Renderiza el banner específico de ESTE paso mayor */}
      <HeaderComponent
        sectionData={banner}
        translationNS={translationNS}
        heightClass='h-56'
      />

      {/* Itera a través de los productos de ESTE paso mayor y alterna los componentes de imagen */}
      {products.map((product, index) =>
        // Alterna entre Left y Right según el índice del producto dentro de este paso
        index % 2 === 0 ? (
          <GearGuideStepImageLeftComponent
            key={product.anchorId}
            anchorId={product.anchorId}
            image={product.image}
            imageAltKey={product.imageAltKey}
            whatIsTitleKey={product.whatIsTitleKey}
            whatIsContentKey={product.whatIsContentKey}
            whatToLookForTitleKey={product.whatToLookForTitleKey}
            whatToLookForContentKey={product.whatToLookForContentKey}
            tipsTitleKey={product.tipsTitleKey}
            tipsContentKey={product.tipsContentKey}
            buyLinks={product.buyLinks}
          />
        ) : (
          <GearGuideStepImageRightComponent
            key={product.anchorId}
            anchorId={product.anchorId}
            image={product.image}
            whatIsTitleKey={product.whatIsTitleKey}
            whatIsContentKey={product.whatIsContentKey}
            whatToLookForTitleKey={product.whatToLookForTitleKey}
            whatToLookForContentKey={product.whatToLookForContentKey}
            tipsTitleKey={product.tipsTitleKey}
            tipsContentKey={product.tipsContentKey}
            buyLinks={product.buyLinks}
          />
        )
      )}
    </>
  );
};

export default GearGuideStepSection;
