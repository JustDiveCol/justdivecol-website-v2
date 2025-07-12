// src/data/content/destinations/santa-marta.js

// Import all local images for this destination.
import santa_marta_header_background from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-header-background.webp';
import santa_marta_card from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-card.webp';
import santa_marta_gallery_01 from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-gallery-01.webp';
import santa_marta_gallery_02 from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-gallery-02.webp';
import santa_marta_gallery_03 from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-gallery-03.webp';
import santa_marta_gallery_04 from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-gallery-04.webp';
import santa_marta_gallery_05 from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-gallery-05.webp';
import santa_marta_gallery_06 from '../../../assets/images/page-specific/destinations/santa-marta/santa-marta-gallery-06.webp';

/**
 * Data structure for the Santa Marta destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const santaMartaDestination = {
  // --- Metadata ---
  id: 'santa-marta', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'smName', // Translation key for the destination's name.

  // --- Card Data ---
  // Used for the destination card on the Experiences page.
  card: {
    descriptionKey: 'smCardDescription',
    imageUrl: santa_marta_card,
    link: '/destinos/santa-marta',
  },

  // --- Page Content ---
  // Contains all the data needed to build the destination's detail page.
  page: {
    headerImageUrl: santa_marta_header_background,
    destinationInfo: {
      titleKey: 'smInfoTitle',
      paragraphs: ['smInfoP1', 'smInfoP2'],
    },
    diveSites: {
      titleKey: 'smDiveSitesTitle',
      sites: [
        {
          id: 'barco-hundido',
          nameKey: 'smDiveSite1Name',
          descriptionKey: 'smDiveSite1Desc',
        },
        {
          id: 'natalia',
          nameKey: 'smDiveSite2Name',
          descriptionKey: 'smDiveSite2Desc',
        },
        {
          id: 'piedra-medio',
          nameKey: 'smDiveSite3Name',
          descriptionKey: 'smDiveSite3Desc',
        },
        {
          id: 'isla-aguja',
          nameKey: 'smDiveSite4Name',
          descriptionKey: 'smDiveSite4Desc',
        },
      ],
    },
    gallery: {
      titleKey: 'smGalleryTitle',
      images: [
        santa_marta_gallery_01,
        santa_marta_gallery_02,
        santa_marta_gallery_03,
        santa_marta_gallery_04,
        santa_marta_gallery_05,
        santa_marta_gallery_06,
      ],
    },
    details: {
      titleKey: 'smDetailsTitle',
      items: [
        { labelKey: 'smDetailLabel1', valueKey: 'smDetailValue1' },
        { labelKey: 'smDetailLabel2', valueKey: 'smDetailValue2' },
        { labelKey: 'smDetailLabel3', valueKey: 'smDetailValue3' },
        { labelKey: 'smDetailLabel4', valueKey: 'smDetailValue4' },
      ],
    },
    uniqueFinds: {
      titleKey: 'smUniqueFindsTitle',
      items: [
        'smUniqueFind1',
        'smUniqueFind2',
        'smUniqueFind3',
        'smUniqueFind4',
      ],
    },
  },

  // --- SEO Content ---
  seo: {
    titleKey: 'smSeoTitle',
    descriptionKey: 'smSeoDesc',
  },
};
