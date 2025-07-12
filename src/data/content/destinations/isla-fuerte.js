// src/data/content/destinations/isla-fuerte.js

// Import all local images for this destination.
import isla_fuerte_header_background from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-header-background.webp';
import isla_fuerte_card from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-card.webp';
import isla_fuerte_gallery_01 from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-gallery-01.webp';
import isla_fuerte_gallery_02 from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-gallery-02.webp';
import isla_fuerte_gallery_03 from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-gallery-03.webp';
import isla_fuerte_gallery_04 from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-gallery-04.webp';
import isla_fuerte_gallery_05 from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-gallery-05.webp';
import isla_fuerte_gallery_06 from '../../../assets/images/page-specific/destinations/isla-fuerte/isla-fuerte-gallery-06.webp';

/**
 * Data structure for the isla-fuerte destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const islaFuerteDestination = {
  // --- Metadata ---
  id: 'isla-fuerte', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'ifName', // Translation key for the destination's name.

  // --- Card Data ---
  // Used for the destination card on the Experiences page.
  card: {
    descriptionKey: 'ifCardDescription',
    imageUrl: isla_fuerte_card,
    link: '/destinos/isla-fuerte',
  },

  // --- Page Content ---
  // Contains all the data needed to build the destination's detail page.
  page: {
    headerImageUrl: isla_fuerte_header_background,
    destinationInfo: {
      titleKey: 'ifInfoTitle',
      paragraphs: ['ifInfoP1', 'ifInfoP2'],
    },
    diveSites: {
      titleKey: 'ifDiveSitesTitle',
      sites: [
        {
          id: 'bajo-bushnell',
          nameKey: 'ifDiveSite1Name',
          descriptionKey: 'ifDiveSite1Desc',
        },
        {
          id: 'el-planchon-pecio',
          nameKey: 'ifDiveSite2Name',
          descriptionKey: 'ifDiveSite2Desc',
        },
        {
          id: 'burbujas',
          nameKey: 'ifDiveSite3Name',
          descriptionKey: 'ifDiveSite3Desc',
        },
        {
          id: 'el-bobito',
          nameKey: 'ifDiveSite4Name',
          descriptionKey: 'ifDiveSite4Desc',
        },
      ],
    },
    gallery: {
      titleKey: 'ifGalleryTitle',
      images: [
        isla_fuerte_gallery_01,
        isla_fuerte_gallery_02,
        isla_fuerte_gallery_03,
        isla_fuerte_gallery_04,
        isla_fuerte_gallery_05,
        isla_fuerte_gallery_06,
      ],
    },
    details: {
      titleKey: 'ifDetailsTitle',
      items: [
        { labelKey: 'ifDetailLabel1', valueKey: 'ifDetailValue1' },
        { labelKey: 'ifDetailLabel2', valueKey: 'ifDetailValue2' },
        { labelKey: 'ifDetailLabel3', valueKey: 'ifDetailValue3' },
        { labelKey: 'ifDetailLabel4', valueKey: 'ifDetailValue4' },
        { labelKey: 'ifDetailLabel5', valueKey: 'ifDetailValue5' },
      ],
    },
    uniqueFinds: {
      titleKey: 'ifUniqueFindsTitle',
      items: [
        'ifUniqueFind1',
        'ifUniqueFind2',
        'ifUniqueFind3',
        'ifUniqueFind4',
      ],
    },
  },

  // --- SEO Content ---
  seo: {
    titleKey: 'ifSeoTitle',
    descriptionKey: 'ifSeoDesc',
  },
};
