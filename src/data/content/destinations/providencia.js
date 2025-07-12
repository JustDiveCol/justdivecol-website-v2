// src/data/content/destinations/providencia.js

// Import all local images for this destination.
import providencia_header_background from '../../../assets/images/page-specific/destinations/providencia/providencia-header-background.webp';
import providencia_card from '../../../assets/images/page-specific/destinations/providencia/providencia-card.webp';
import providencia_gallery_01 from '../../../assets/images/page-specific/destinations/providencia/providencia-gallery-01.webp';
import providencia_gallery_02 from '../../../assets/images/page-specific/destinations/providencia/providencia-gallery-02.webp';
import providencia_gallery_03 from '../../../assets/images/page-specific/destinations/providencia/providencia-gallery-03.webp';
import providencia_gallery_04 from '../../../assets/images/page-specific/destinations/providencia/providencia-gallery-04.webp';
import providencia_gallery_05 from '../../../assets/images/page-specific/destinations/providencia/providencia-gallery-05.webp';
import providencia_gallery_06 from '../../../assets/images/page-specific/destinations/providencia/providencia-gallery-06.webp';

/**
 * Data structure for the Providencia destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const providenciaDestination = {
  // --- Metadata ---
  id: 'providencia', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'provName', // Translation key for the destination's name.

  // --- Card Data ---
  // Used for the destination card on the Experiences page.
  card: {
    descriptionKey: 'provCardDescription',
    imageUrl: providencia_card,
    link: '/destinos/providencia',
  },

  // --- Page Content ---
  // Contains all the data needed to build the destination's detail page.
  page: {
    headerImageUrl: providencia_header_background,
    destinationInfo: {
      titleKey: 'provInfoTitle',
      paragraphs: ['provInfoP1', 'provInfoP2'],
    },
    diveSites: {
      titleKey: 'provDiveSitesTitle',
      sites: [
        {
          id: 'el-planchon',
          nameKey: 'provDiveSite1Name',
          descriptionKey: 'provDiveSite1Desc',
        },
        {
          id: 'felipes-place',
          nameKey: 'provDiveSite2Name',
          descriptionKey: 'provDiveSite2Desc',
        },
        {
          id: 'nicks-place',
          nameKey: 'provDiveSite3Name',
          descriptionKey: 'provDiveSite3Desc',
        },
        {
          id: 'piedra-tortuga',
          nameKey: 'provDiveSite4Name',
          descriptionKey: 'provDiveSite4Desc',
        },
      ],
    },
    gallery: {
      titleKey: 'provGalleryTitle',
      images: [
        providencia_gallery_01,
        providencia_gallery_02,
        providencia_gallery_03,
        providencia_gallery_04,
        providencia_gallery_05,
        providencia_gallery_06,
      ],
    },
    details: {
      titleKey: 'provDetailsTitle',
      items: [
        { labelKey: 'provDetailLabel1', valueKey: 'provDetailValue1' },
        { labelKey: 'provDetailLabel2', valueKey: 'provDetailValue2' },
        { labelKey: 'provDetailLabel3', valueKey: 'provDetailValue3' },
        { labelKey: 'provDetailLabel4', valueKey: 'provDetailValue4' },
        { labelKey: 'provDetailLabel5', valueKey: 'provDetailValue5' },
      ],
    },
    uniqueFinds: {
      titleKey: 'provUniqueFindsTitle',
      items: [
        'provUniqueFind1',
        'provUniqueFind2',
        'provUniqueFind3',
        'provUniqueFind4',
      ],
    },
  },

  // --- SEO Content ---
  seo: {
    titleKey: 'provSeoTitle',
    descriptionKey: 'provSeoDesc',
  },
};
