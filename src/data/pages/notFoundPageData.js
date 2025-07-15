import not_found_background from '../../assets/images/page-specific/not-found/not-found-background.webp';

import logo from '../../assets/images/logos/logo.png';

export const notFoundPageData = {
  titleKey: 'notFoundTitle',
  subtitleKey: 'notFoundSubtitle',
  ctaTextKey: 'notFoundCtaText',

  image: {
    backgroundImage: not_found_background,
    mainLogo: logo,
    mainLogoAltKey: 'notFoundMainLogoAlt',
    // complementaryLogo,
    // complementaryLogoAlt,
    // textOverlayKey,
    // photoCreditKey,
    variant: 'fullscreen', // fullscreen, header, horizontal, vertical, square
  },
};
