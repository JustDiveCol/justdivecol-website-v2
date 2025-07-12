// src/data/content/destinations/malpelo.js

// Import all local images for this destination.
import malpelo_header_background from '../../../assets/images/page-specific/destinations/malpelo/malpelo-header-background.webp';
import malpelo_card from '../../../assets/images/page-specific/destinations/malpelo/malpelo-card.webp';
import malpelo_gallery_01 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-01.webp';
import malpelo_gallery_02 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-02.webp';
import malpelo_gallery_03 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-03.webp';
import malpelo_gallery_04 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-04.webp';
import malpelo_gallery_05 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-05.webp';
import malpelo_gallery_06 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-06.webp';

/**
 * Data structure for the malpelo destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const malpeloDestination = {
  // --- Metadata ---
  id: 'malpelo', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'malpName', // Translation key for the destination's name.

  // --- Card Data ---
  // Used for the destination card on the Experiences page.
  card: {
    descriptionKey: 'malpCardDescription',
    imageUrl: malpelo_card,
    link: '/destinos/malpelo',
  },

  // --- Page Content ---
  // Contains all the data needed to build the destination's detail page.
  page: {
    headerImageUrl: malpelo_header_background,
    destinationInfo: {
      titleKey: 'malpInfoTitle',
      paragraphs: ['malpInfoP1', 'malpInfoP2'],
    },
    diveSites: {
      titleKey: 'malpDiveSitesTitle',
      sites: [
        {
          id: 'el-planchon',
          nameKey: 'malpDiveSite1Name',
          descriptionKey: 'malpDiveSite1Desc',
        },
        {
          id: 'felipes-place',
          nameKey: 'malpDiveSite2Name',
          descriptionKey: 'malpDiveSite2Desc',
        },
        {
          id: 'nicks-place',
          nameKey: 'malpDiveSite3Name',
          descriptionKey: 'malpDiveSite3Desc',
        },
        {
          id: 'piedra-tortuga',
          nameKey: 'malpDiveSite4Name',
          descriptionKey: 'malpDiveSite4Desc',
        },
      ],
    },
    gallery: {
      titleKey: 'malpGalleryTitle',
      images: [
        malpelo_gallery_01,
        malpelo_gallery_02,
        malpelo_gallery_03,
        malpelo_gallery_04,
        malpelo_gallery_05,
        malpelo_gallery_06,
      ],
    },
    details: {
      titleKey: 'malpDetailsTitle',
      items: [
        { labelKey: 'malpDetailLabel1', valueKey: 'malpDetailValue1' },
        { labelKey: 'malpDetailLabel2', valueKey: 'malpDetailValue2' },
        { labelKey: 'malpDetailLabel3', valueKey: 'malpDetailValue3' },
        { labelKey: 'malpDetailLabel4', valueKey: 'malpDetailValue4' },
        { labelKey: 'malpDetailLabel5', valueKey: 'malpDetailValue5' },
      ],
    },
    uniqueFinds: {
      titleKey: 'malpUniqueFindsTitle',
      items: [
        'malpUniqueFind1',
        'malpUniqueFind2',
        'malpUniqueFind3',
        'malpUniqueFind4',
      ],
    },
  },

  // --- SEO Content ---
  seo: {
    titleKey: 'malpSeoTitle',
    descriptionKey: 'malpSeoDesc',
  },
};
