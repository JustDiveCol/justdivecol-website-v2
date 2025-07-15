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

import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

/**
 * Data structure for the Providencia destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const providenciaDestination = {
  // --- Metadata ---
  id: 'providencia', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'provName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'provSeoTitle',
    descriptionKey: 'provSeoDesc',
  },

  // --- Header Content ---
  header: {
    backgroundImage: providencia_header_background,
    titleKey: 'provHeaderTitle',
    subtitleKey: 'provHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'provHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'provHeaderComplementaryLogoAlt',
    // textOverlayKey: 'provHeaderTextOverlay',
    photoCreditKey: 'provHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'provDescTitle',
    paragraphs: ['provDescP1', 'provDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: providencia_card,
    mainLogo: logo,
    mainLogoAltKey: 'provCardMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'provCardComplementaryLogoAlt',
    textOverlayKey: 'provCardTextOverlay',
    photoCreditKey: 'provCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'provCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
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

  // --- Divesites ---
  diveSites: {
    titleKey: 'provDiveSitesTitle',
    sites: [
      {
        id: 'barco-hundido',
        nameKey: 'provDiveSite1Name',
        descriptionKey: 'provDiveSite1Desc',
      },
      {
        id: 'natalia',
        nameKey: 'provDiveSite2Name',
        descriptionKey: 'provDiveSite2Desc',
      },
      {
        id: 'piedra-medio',
        nameKey: 'provDiveSite3Name',
        descriptionKey: 'provDiveSite3Desc',
      },
      {
        id: 'isla-aguja',
        nameKey: 'provDiveSite4Name',
        descriptionKey: 'provDiveSite4Desc',
      },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'provUniqueFindsTitle',
    items: [
      'provUniqueFind1',
      'provUniqueFind2',
      'provUniqueFind3',
      'provUniqueFind4',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'provGalleryTitle',
    images: [
      {
        backgroundImage: providencia_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'provGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'provGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'provGaleryImg1TextOverlay',
        photoCreditKey: 'provGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: providencia_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'provGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'provGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'provGaleryImg2TextOverlay',
        photoCreditKey: 'provGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: providencia_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'provGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'provGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'provGaleryImg3TextOverlay',
        photoCreditKey: 'provGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: providencia_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'provGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'provGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'provGaleryImg4TextOverlay',
        photoCreditKey: 'provGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: providencia_gallery_05,
        mainLogo: logo,
        mainLogoAltKey: 'provGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'provGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'provGaleryImg5TextOverlay',
        photoCreditKey: 'provGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: providencia_gallery_06,
        mainLogo: logo,
        mainLogoAltKey: 'provGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'provGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'provGaleryImg6TextOverlay',
        photoCreditKey: 'provGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
