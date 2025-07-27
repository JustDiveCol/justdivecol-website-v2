import background from '../../assets/images/page-specific/not-found/background.webp';

import { LOGO_MAIN } from '../global/assets';
import { IMAGE_VARIANTS, ROUTES } from '../global/constants';

export const notFoundData = {
  titleKey: 'notFoundTitle',
  subtitleKey: 'notFoundSubtitle',
  ctaTextKey: 'notFoundCtaText',

  seo: {
    titleKey: 'notFoundSeoTitle',
    descriptionKey: 'notFoundSeoDesc',
    keywords: 'notFoundSeoKeywords',
    imageUrl: background,
    url: ROUTES.notFound,
  },
  image: {
    backgroundImage: background,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    variant: IMAGE_VARIANTS.fullscreen,
  },
};
