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

import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

/**
 * Data structure for the Santa Marta destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const santaMartaDestination = {
  // --- Metadata ---
  id: 'santa-marta', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'smName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'smSeoTitle',
    descriptionKey: 'smSeoDesc',
  },

  // --- Header Content ---
  header: {
    backgroundImage: santa_marta_header_background,
    titleKey: 'smHeaderTitle',
    subtitleKey: 'smHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'smHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'smHeaderComplementaryLogoAlt',
    // textOverlayKey: 'smHeaderTextOverlay',
    photoCreditKey: 'smHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'smDescTitle',
    paragraphs: ['smDescP1', 'smDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: santa_marta_card,
    mainLogo: logo,
    mainLogoAltKey: 'smCardMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'smCardComplementaryLogoAlt',
    textOverlayKey: 'smCardTextOverlay',
    photoCreditKey: 'smCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'smCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
  details: {
    titleKey: 'smDetailsTitle',
    items: [
      { labelKey: 'smDetailLabel1', valueKey: 'smDetailValue1' },
      { labelKey: 'smDetailLabel2', valueKey: 'smDetailValue2' },
      { labelKey: 'smDetailLabel3', valueKey: 'smDetailValue3' },
      { labelKey: 'smDetailLabel4', valueKey: 'smDetailValue4' },
      { labelKey: 'smDetailLabel5', valueKey: 'smDetailValue5' },
    ],
  },

  // --- Divesites ---
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

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'smUniqueFindsTitle',
    items: ['smUniqueFind1', 'smUniqueFind2', 'smUniqueFind3', 'smUniqueFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'smGalleryTitle',
    images: [
      {
        backgroundImage: santa_marta_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'smGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'smGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'smGaleryImg1TextOverlay',
        photoCreditKey: 'smGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: santa_marta_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'smGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'smGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'smGaleryImg2TextOverlay',
        photoCreditKey: 'smGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: santa_marta_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'smGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'smGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'smGaleryImg3TextOverlay',
        photoCreditKey: 'smGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: santa_marta_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'smGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'smGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'smGaleryImg4TextOverlay',
        photoCreditKey: 'smGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: santa_marta_gallery_05,
        mainLogo: logo,
        mainLogoAltKey: 'smGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'smGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'smGaleryImg5TextOverlay',
        photoCreditKey: 'smGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: santa_marta_gallery_06,
        mainLogo: logo,
        mainLogoAltKey: 'smGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'smGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'smGaleryImg6TextOverlay',
        photoCreditKey: 'smGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
