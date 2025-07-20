import map_image from '../../assets/images/backgrounds/map.webp';

import logo from '../../assets/images/logos/logo.png';

export const mapData = {
  seo: {
    titleKey: 'mapSeoTitle',
    descriptionKey: 'mapSeoDesc',
    keywords: 'mapSeoKeywords',
    imageUrl: map_image,
    url: '/mapa',
  },
  header: {
    backgroundImage: 'https://placehold.co/1920x600?text=Maps+Header',
    titleKey: 'mapHeaderTitle',
    subtitleKey: 'mapHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'mapHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'mapHeaderComplementaryLogoAlt',
    // textOverlayKey: 'mapHeaderTextOverlay',
    photoCreditKey: 'mapHeaderPhotoCredit',
  },
  allLabelKey: 'allLabel',
  clearFiltersLabelKey: 'clearFiltersLabel',
  searchPlaceholderKey: 'searchPlaceholder',
  viewMoreLabelKey: 'viewMoreLabel',
  mapLabelKey: 'mapLabel',
};
