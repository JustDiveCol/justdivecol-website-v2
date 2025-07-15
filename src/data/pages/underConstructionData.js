// src/data/pages/underConstructionData.js
import under_construction_background from '../../assets/images/page-specific/under-construction/under-construction-background.webp';

import logo from '../../assets/images/logos/logo.png';

export const underConstructionData = {
  seo: {
    titleKey: 'underConstructionSeoTitle',
    descriptionKey: 'underConstructionSeoDesc',
  },

  titleKey: 'underConstructionTitle',
  subtitleKey: 'underConstructionSubtitle',
  ctaTextKey: 'underConstructionCtaText',
  ctaLink: '/', // Link back to the homepage

  image: {
    backgroundImage: under_construction_background,
    mainLogo: logo,
    mainLogoAltKey: 'notFoundMainLogoAlt',
    // complementaryLogo,
    // complementaryLogoAltKey: 'notFoundComplementaryLogoAlt',
    // textOverlayKey: 'notFoundTextOverlay',
    // photoCreditKey: notFoundPhotoCredit,
    variant: 'fullscreen', // fullscreen, header, horizontal, vertical, square
  },
};
