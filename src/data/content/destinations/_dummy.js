// src/data/content/destinations/_dummy.js

// Import all local images for this destination.
// import _dummy_header_background from '../../../assets/images/page-specific/destinations/_dummy/_dummy-header-background.webp';
// import _dummy_card from '../../../assets/images/page-specific/destinations/_dummy/_dummy-card.webp';
// import _dummy_gallery_01 from '../../../assets/images/page-specific/destinations/_dummy/_dummy-gallery-01.webp';
// import _dummy_gallery_02 from '../../../assets/images/page-specific/destinations/_dummy/_dummy-gallery-02.webp';
// import _dummy_gallery_03 from '../../../assets/images/page-specific/destinations/_dummy/_dummy-gallery-03.webp';
// import _dummy_gallery_04 from '../../../assets/images/page-specific/destinations/_dummy/_dummy-gallery-04.webp';
// import _dummy_gallery_05 from '../../../assets/images/page-specific/destinations/_dummy/_dummy-gallery-05.webp';
// import _dummy_gallery_06 from '../../../assets/images/page-specific/destinations/_dummy/_dummy-gallery-06.webp';

/**
 * Data structure for the _dummy destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const _dummyDestination = {
  // --- Metadata ---
  id: '_dummy', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: '_xyzName', // Translation key for the destination's name.

  // --- Card Data ---
  // Used for the destination card on the Experiences page.
  card: {
    descriptionKey: '_xyzCardDescription',
    // imageUrl: _dummy_card,
    imageUrl: 'https://placehold.co/800x600?text=_Dummy+Card',
    link: '/destinos/_dummy',
  },

  // --- Page Content ---
  // Contains all the data needed to build the destination's detail page.
  page: {
    // headerImageUrl: _dummy_header_background,
    headerImageUrl:
      'https://placehold.co/1920x600?text=_Dummy+Header+Background',
    destinationInfo: {
      titleKey: '_xyzInfoTitle',
      paragraphs: ['_xyzInfoP1', '_xyzInfoP2'],
    },
    diveSites: {
      titleKey: '_xyzDiveSitesTitle',
      sites: [
        {
          id: 'el-planchon',
          nameKey: '_xyzDiveSite1Name',
          descriptionKey: '_xyzDiveSite1Desc',
        },
        {
          id: 'felipes-place',
          nameKey: '_xyzDiveSite2Name',
          descriptionKey: '_xyzDiveSite2Desc',
        },
        {
          id: 'nicks-place',
          nameKey: '_xyzDiveSite3Name',
          descriptionKey: '_xyzDiveSite3Desc',
        },
        {
          id: 'piedra-tortuga',
          nameKey: '_xyzDiveSite4Name',
          descriptionKey: '_xyzDiveSite4Desc',
        },
      ],
    },
    gallery: {
      titleKey: '_xyzGalleryTitle',
      images: [
        'https://placehold.co/800x600?text=_Dummy+Galery+1',
        'https://placehold.co/800x600?text=_Dummy+Galery+2',
        'https://placehold.co/800x600?text=_Dummy+Galery+3',
        'https://placehold.co/800x600?text=_Dummy+Galery+4',
        'https://placehold.co/800x600?text=_Dummy+Galery+5',
        'https://placehold.co/800x600?text=_Dummy+Galery+6',
        // _dummy_gallery_01,
        // _dummy_gallery_02,
        // _dummy_gallery_03,
        // _dummy_gallery_04,
        // _dummy_gallery_05,
        // _dummy_gallery_06,
      ],
    },
    details: {
      titleKey: '_xyzDetailsTitle',
      items: [
        { labelKey: '_xyzDetailLabel1', valueKey: '_xyzDetailValue1' },
        { labelKey: '_xyzDetailLabel2', valueKey: '_xyzDetailValue2' },
        { labelKey: '_xyzDetailLabel3', valueKey: '_xyzDetailValue3' },
        { labelKey: '_xyzDetailLabel4', valueKey: '_xyzDetailValue4' },
        { labelKey: '_xyzDetailLabel5', valueKey: '_xyzDetailValue5' },
      ],
    },
    uniqueFinds: {
      titleKey: '_xyzUniqueFindsTitle',
      items: [
        '_xyzUniqueFind1',
        '_xyzUniqueFind2',
        '_xyzUniqueFind3',
        '_xyzUniqueFind4',
      ],
    },
  },

  // --- SEO Content ---
  seo: {
    titleKey: '_xyzSeoTitle',
    descriptionKey: '_xyzSeoDesc',
  },
};
