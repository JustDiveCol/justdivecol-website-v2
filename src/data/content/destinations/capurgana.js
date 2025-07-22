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
export const capurganaDestination = {
  // --- Metadata ---
  id: 'capurgana', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'capurganaName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'capurganaSeoTitle',
    descriptionKey: 'capurganaSeoDesc',
    keywords: 'capurganaSeoKeywords',
    imageUrl: headerBackground,
    url: '/destinos/',
  },

  // --- Header Content ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'capurganaHeaderTitle',
    subtitleKey: 'capurganaHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'capurganaHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'capurganaHeaderComplementaryLogoAlt',
    // textOverlayKey: 'capurganaHeaderTextOverlay',
    photoCreditKey: 'capurganaHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'capurganaDescTitle',
    paragraphs: ['capurganaDescP1', 'capurganaDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: imageCard,
    mainLogo: logo,
    mainLogoAltKey: 'capurganaCardMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'capurganaCardComplementaryLogoAlt',
    textOverlayKey: 'capurganaCardTextOverlay',
    photoCreditKey: 'capurganaCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'capurganaCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
  details: {
    titleKey: 'capurganaDetailsTitle',
    items: [
      { labelKey: 'capurganaDetailLabel1', valueKey: 'capurganaDetailValue1' },
      { labelKey: 'capurganaDetailLabel2', valueKey: 'capurganaDetailValue2' },
      { labelKey: 'capurganaDetailLabel3', valueKey: 'capurganaDetailValue3' },
      { labelKey: 'capurganaDetailLabel4', valueKey: 'capurganaDetailValue4' },
      { labelKey: 'capurganaDetailLabel5', valueKey: 'capurganaDetailValue5' },
    ],
  },

  // --- Divesites ---
  diveSites: {
    titleKey: 'capurganaDiveSitesTitle',
    sites: [
      {
        id: 'barco-hundido',
        nameKey: 'capurganaDiveSite1Name',
        descriptionKey: 'capurganaDiveSite1Desc',
      },
      {
        id: 'natalia',
        nameKey: 'capurganaDiveSite2Name',
        descriptionKey: 'capurganaDiveSite2Desc',
      },
      {
        id: 'piedra-medio',
        nameKey: 'capurganaDiveSite3Name',
        descriptionKey: 'capurganaDiveSite3Desc',
      },
      {
        id: 'isla-aguja',
        nameKey: 'capurganaDiveSite4Name',
        descriptionKey: 'capurganaDiveSite4Desc',
      },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'capurganaUniqueFindsTitle',
    items: [
      'capurganaUniqueFind1',
      'capurganaUniqueFind2',
      'capurganaUniqueFind3',
      'capurganaUniqueFind4',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'capurganaGalleryTitle',
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: logo,
        mainLogoAltKey: 'capurganaGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'capurganaGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'capurganaGaleryImg1TextOverlay',
        photoCreditKey: 'capurganaGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery02,
        mainLogo: logo,
        mainLogoAltKey: 'capurganaGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'capurganaGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'capurganaGaleryImg2TextOverlay',
        photoCreditKey: 'capurganaGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery03,
        mainLogo: logo,
        mainLogoAltKey: 'capurganaGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'capurganaGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'capurganaGaleryImg3TextOverlay',
        photoCreditKey: 'capurganaGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery04,
        mainLogo: logo,
        mainLogoAltKey: 'capurganaGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'capurganaGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'capurganaGaleryImg4TextOverlay',
        photoCreditKey: 'capurganaGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery05,
        mainLogo: logo,
        mainLogoAltKey: 'capurganaGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'capurganaGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'capurganaGaleryImg5TextOverlay',
        photoCreditKey: 'capurganaGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery06,
        mainLogo: logo,
        mainLogoAltKey: 'capurganaGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'capurganaGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'capurganaGaleryImg6TextOverlay',
        photoCreditKey: 'capurganaGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
