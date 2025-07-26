// src/data/pages/underConstructionData.js
import background from '../../assets/images/page-specific/under-construction/background.webp';

import { LOGO_MAIN } from '../global/assets';
import { IMAGE_VARIANTS } from '../global/constants';

export const underConstructionData = {
  seo: {
    titleKey: 'underConstructionSeoTitle',
    descriptionKey: 'underConstructionSeoDesc',
  },

  titleKey: 'underConstructionTitle',
  subtitleKey: 'underConstructionSubtitle',
  ctaTextKey: 'underConstructionCtaText',
  ctaLink: '/',

  image: {
    backgroundImage: background,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    variant: IMAGE_VARIANTS.fullscreen,
  },
};
