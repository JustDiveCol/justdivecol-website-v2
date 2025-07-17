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

import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

/**
 * Data structure for the isla-fuerte destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const islaFuerteDestination = {
  // --- Metadata ---
  id: 'isla-fuerte', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'ifName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'ifSeoTitle',
    descriptionKey: 'ifSeoDesc',
  },

  // --- Header Content ---
  header: {
    backgroundImage: isla_fuerte_header_background,
    titleKey: 'ifHeaderTitle',
    subtitleKey: 'ifHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'ifHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'ifHeaderComplementaryLogoAlt',
    // textOverlayKey: 'ifHeaderTextOverlay',
    photoCreditKey: 'ifHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'ifDescTitle',
    paragraphs: ['ifDescP1', 'ifDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: isla_fuerte_card,
    mainLogo: logo,
    mainLogoAltKey: 'ifCardMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'ifCardComplementaryLogoAlt',
    textOverlayKey: 'ifCardTextOverlay',
    photoCreditKey: 'ifCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'ifCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
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

  // --- Divesites ---
  diveSites: {
    titleKey: 'ifDiveSitesTitle',
    sites: [
      {
        id: 'barco-hundido',
        nameKey: 'ifDiveSite1Name',
        descriptionKey: 'ifDiveSite1Desc',
      },
      {
        id: 'natalia',
        nameKey: 'ifDiveSite2Name',
        descriptionKey: 'ifDiveSite2Desc',
      },
      {
        id: 'piedra-medio',
        nameKey: 'ifDiveSite3Name',
        descriptionKey: 'ifDiveSite3Desc',
      },
      {
        id: 'isla-aguja',
        nameKey: 'ifDiveSite4Name',
        descriptionKey: 'ifDiveSite4Desc',
      },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'ifUniqueFindsTitle',
    items: ['ifUniqueFind1', 'ifUniqueFind2', 'ifUniqueFind3', 'ifUniqueFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'ifGalleryTitle',
    images: [
      {
        backgroundImage: isla_fuerte_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'ifGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'ifGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'ifGaleryImg1TextOverlay',
        photoCreditKey: 'ifGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: isla_fuerte_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'ifGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'ifGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'ifGaleryImg2TextOverlay',
        photoCreditKey: 'ifGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: isla_fuerte_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'ifGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'ifGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'ifGaleryImg3TextOverlay',
        photoCreditKey: 'ifGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: isla_fuerte_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'ifGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'ifGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'ifGaleryImg4TextOverlay',
        photoCreditKey: 'ifGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: isla_fuerte_gallery_05,
        mainLogo: logo,
        mainLogoAltKey: 'ifGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'ifGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'ifGaleryImg5TextOverlay',
        photoCreditKey: 'ifGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: isla_fuerte_gallery_06,
        mainLogo: logo,
        mainLogoAltKey: 'ifGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'ifGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'ifGaleryImg6TextOverlay',
        photoCreditKey: 'ifGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
