// src/pages/GearPage/pages/StorePage/StorePage.jsx
import React from 'react';
import StoreBannerSection from './sections/StoreBannerSection';
import ProductListingSection from './sections/ProductListingSection'; // Importa la nueva sección
import GearGuideCtaSection from '../../sections/GearCtaSection';

const StorePage = () => {
  return (
    <div className='bg-brand-neutral'>
      <div className='pt-[3.5rem]'>
        <StoreBannerSection
          titleKey='storeBannerTitle'
          subtitleKey='storeBannerSubtitle'
          backgroundImage='/assets/images/gear/store-banner.jpg'
        />

        {/* Integra el ProductListingSection aquí */}
        <ProductListingSection />

        <GearGuideCtaSection />
      </div>
    </div>
  );
};

export default StorePage;
