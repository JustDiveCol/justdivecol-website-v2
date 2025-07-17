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

import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

/**
 * Data structure for the malpelo destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const malpeloDestination = {
  // --- Metadata ---
  id: 'malpelo', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'malpName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'malpSeoTitle',
    descriptionKey: 'malpSeoDesc',
    keywords: 'malpSeoKeywords',
    imageUrl: malpelo_header_background,
    url: '/destinos/',
  },

  // --- Header Content ---
  header: {
    backgroundImage: malpelo_header_background,
    titleKey: 'malpHeaderTitle',
    subtitleKey: 'malpHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'malpHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'malpHeaderComplementaryLogoAlt',
    // textOverlayKey: 'malpHeaderTextOverlay',
    photoCreditKey: 'malpHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'malpDescTitle',
    paragraphs: ['malpDescP1', 'malpDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: malpelo_card,
    mainLogo: logo,
    mainLogoAltKey: 'malpCardMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'malpCardComplementaryLogoAlt',
    textOverlayKey: 'malpCardTextOverlay',
    photoCreditKey: 'malpCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'malpCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
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

  // --- Divesites ---
  diveSites: {
    titleKey: 'malpDiveSitesTitle',
    sites: [
      {
        id: 'barco-hundido',
        nameKey: 'malpDiveSite1Name',
        descriptionKey: 'malpDiveSite1Desc',
      },
      {
        id: 'natalia',
        nameKey: 'malpDiveSite2Name',
        descriptionKey: 'malpDiveSite2Desc',
      },
      {
        id: 'piedra-medio',
        nameKey: 'malpDiveSite3Name',
        descriptionKey: 'malpDiveSite3Desc',
      },
      {
        id: 'isla-aguja',
        nameKey: 'malpDiveSite4Name',
        descriptionKey: 'malpDiveSite4Desc',
      },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'malpUniqueFindsTitle',
    items: [
      'malpUniqueFind1',
      'malpUniqueFind2',
      'malpUniqueFind3',
      'malpUniqueFind4',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'malpGalleryTitle',
    images: [
      {
        backgroundImage: malpelo_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'malpGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'malpGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'malpGaleryImg1TextOverlay',
        photoCreditKey: 'malpGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: malpelo_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'malpGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'malpGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'malpGaleryImg2TextOverlay',
        photoCreditKey: 'malpGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: malpelo_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'malpGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'malpGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'malpGaleryImg3TextOverlay',
        photoCreditKey: 'malpGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: malpelo_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'malpGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'malpGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'malpGaleryImg4TextOverlay',
        photoCreditKey: 'malpGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: malpelo_gallery_05,
        mainLogo: logo,
        mainLogoAltKey: 'malpGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'malpGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'malpGaleryImg5TextOverlay',
        photoCreditKey: 'malpGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: malpelo_gallery_06,
        mainLogo: logo,
        mainLogoAltKey: 'malpGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'malpGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'malpGaleryImg6TextOverlay',
        photoCreditKey: 'malpGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
