import background from '../../assets/images/page-specific/not-found/background.webp';

import { LOGO_MAIN } from '../global/assets';
import { IMAGE_VARIANTS } from '../global/constants';

export const notFoundData = {
  titleKey: 'notFoundTitle',
  subtitleKey: 'notFoundSubtitle',
  ctaTextKey: 'notFoundCtaText',

  image: {
    backgroundImage: background,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    variant: IMAGE_VARIANTS.fullscreen,
  },
};
