// src/data/content/destinations/malpelo.js

// Import all local images for this destination.
import headerBackground from '../../../assets/images/page-specific/destinations/malpelo/malpelo-header-background.webp';
import imageCard from '../../../assets/images/page-specific/destinations/malpelo/malpelo-card.webp';
import gallery01 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-04.webp';
import gallery05 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-05.webp';
import gallery06 from '../../../assets/images/page-specific/destinations/malpelo/malpelo-gallery-06.webp';

import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

/**
 * Data structure for the malpelo destination.
 * This object serves as the single source of truth for all content related to this destination.
 */
export const bcsDestination = {
  // --- Metadata ---
  id: 'bcs', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'bcsName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'bcsSeoTitle',
    descriptionKey: 'bcsSeoDesc',
    keywords: 'bcsSeoKeywords',
    imageUrl: headerBackground,
    url: '/destinos/',
  },

  // --- Header Content ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'bcsHeaderTitle',
    subtitleKey: 'bcsHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'bcsHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'bcsHeaderComplementaryLogoAlt',
    // textOverlayKey: 'bcsHeaderTextOverlay',
    photoCreditKey: 'bcsHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'bcsDescTitle',
    paragraphs: ['bcsDescP1', 'bcsDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: imageCard,
    mainLogo: logo,
    mainLogoAltKey: 'bcsCardMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'bcsCardComplementaryLogoAlt',
    textOverlayKey: 'bcsCardTextOverlay',
    photoCreditKey: 'bcsCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'bcsCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
  details: {
    titleKey: 'bcsDetailsTitle',
    items: [
      { labelKey: 'bcsDetailLabel1', valueKey: 'bcsDetailValue1' },
      { labelKey: 'bcsDetailLabel2', valueKey: 'bcsDetailValue2' },
      { labelKey: 'bcsDetailLabel3', valueKey: 'bcsDetailValue3' },
      { labelKey: 'bcsDetailLabel4', valueKey: 'bcsDetailValue4' },
      { labelKey: 'bcsDetailLabel5', valueKey: 'bcsDetailValue5' },
    ],
  },

  // --- Divesites ---
  diveSites: {
    titleKey: 'bcsDiveSitesTitle',
    sites: [
      {
        id: 'barco-hundido',
        nameKey: 'bcsDiveSite1Name',
        descriptionKey: 'bcsDiveSite1Desc',
      },
      {
        id: 'natalia',
        nameKey: 'bcsDiveSite2Name',
        descriptionKey: 'bcsDiveSite2Desc',
      },
      {
        id: 'piedra-medio',
        nameKey: 'bcsDiveSite3Name',
        descriptionKey: 'bcsDiveSite3Desc',
      },
      {
        id: 'isla-aguja',
        nameKey: 'bcsDiveSite4Name',
        descriptionKey: 'bcsDiveSite4Desc',
      },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'bcsUniqueFindsTitle',
    items: ['bcsUniqueFind1', 'bcsUniqueFind2', 'bcsUniqueFind3', 'bcsUniqueFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'bcsGalleryTitle',
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: logo,
        mainLogoAltKey: 'bcsGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'bcsGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'bcsGaleryImg1TextOverlay',
        photoCreditKey: 'bcsGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery02,
        mainLogo: logo,
        mainLogoAltKey: 'bcsGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'bcsGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'bcsGaleryImg2TextOverlay',
        photoCreditKey: 'bcsGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery03,
        mainLogo: logo,
        mainLogoAltKey: 'bcsGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'bcsGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'bcsGaleryImg3TextOverlay',
        photoCreditKey: 'bcsGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery04,
        mainLogo: logo,
        mainLogoAltKey: 'bcsGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'bcsGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'bcsGaleryImg4TextOverlay',
        photoCreditKey: 'bcsGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery05,
        mainLogo: logo,
        mainLogoAltKey: 'bcsGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'bcsGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'bcsGaleryImg5TextOverlay',
        photoCreditKey: 'bcsGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery06,
        mainLogo: logo,
        mainLogoAltKey: 'bcsGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'bcsGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'bcsGaleryImg6TextOverlay',
        photoCreditKey: 'bcsGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
