// src/data/pages/underConstructionData.js
import background from '../../assets/images/page-specific/under-construction/background.webp';

import { LOGO_MAIN } from '../global/assets';
import { IMAGE_VARIANTS, ROUTES } from '../global/constants';

export const underConstructionData = {
  seo: {
    titleKey: 'underConstructionSeoTitle',
    descriptionKey: 'underConstructionSeoDesc',
    keywords: 'underConstructionSeoKeywords',
    imageUrl: background,
    url: ROUTES.underConstruction,
  },

  titleKey: 'underConstructionTitle',
  subtitleKey: 'underConstructionSubtitle',
  ctaTextKey: 'underConstructionCtaText',
  ctaLink: ROUTES.home,

  image: {
    backgroundImage: background,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    variant: IMAGE_VARIANTS.fullscreen,
  },
};
