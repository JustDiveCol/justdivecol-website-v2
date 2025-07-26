import headerBackground from '../../assets/images/page-specific/map/header-background.webp';

import { LOGO_MAIN } from '../global/assets';
import { ROUTES, SHARED_TRANSLATION_KEYS } from '../global/constants';

export const mapData = {
  seo: {
    titleKey: 'mapSeoTitle',
    descriptionKey: 'mapSeoDesc',
    keywords: 'mapSeoKeywords',
    imageUrl: headerBackground,
    url: ROUTES.map,
  },
  header: {
    backgroundImage: headerBackground,
    titleKey: 'mapHeaderTitle',
    subtitleKey: 'mapHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: '© OpenStreetMap',
    },
  },
  allLabelKey: 'allLabel',
  clearFiltersLabelKey: 'clearFiltersLabel',
  searchPlaceholderKey: 'searchPlaceholder',
  viewMoreLabelKey: 'viewMoreLabel',
  mapLabelKey: 'mapLabel',
};
