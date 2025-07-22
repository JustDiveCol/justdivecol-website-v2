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
export const galapagosDestination = {
  // --- Metadata ---
  id: 'galapagos', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'galapagosName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'galapagosSeoTitle',
    descriptionKey: 'galapagosSeoDesc',
    keywords: 'galapagosSeoKeywords',
    imageUrl: headerBackground,
    url: '/destinos/',
  },

  // --- Header Content ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'galapagosHeaderTitle',
    subtitleKey: 'galapagosHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'galapagosHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'galapagosHeaderComplementaryLogoAlt',
    // textOverlayKey: 'galapagosHeaderTextOverlay',
    photoCreditKey: 'galapagosHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'galapagosDescTitle',
    paragraphs: ['galapagosDescP1', 'galapagosDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: imageCard,
    mainLogo: logo,
    mainLogoAltKey: 'galapagosCardMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'galapagosCardComplementaryLogoAlt',
    textOverlayKey: 'galapagosCardTextOverlay',
    photoCreditKey: 'galapagosCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'galapagosCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
  details: {
    titleKey: 'galapagosDetailsTitle',
    items: [
      { labelKey: 'galapagosDetailLabel1', valueKey: 'galapagosDetailValue1' },
      { labelKey: 'galapagosDetailLabel2', valueKey: 'galapagosDetailValue2' },
      { labelKey: 'galapagosDetailLabel3', valueKey: 'galapagosDetailValue3' },
      { labelKey: 'galapagosDetailLabel4', valueKey: 'galapagosDetailValue4' },
      { labelKey: 'galapagosDetailLabel5', valueKey: 'galapagosDetailValue5' },
    ],
  },

  // --- Divesites ---
  diveSites: {
    titleKey: 'galapagosDiveSitesTitle',
    sites: [
      {
        id: 'barco-hundido',
        nameKey: 'galapagosDiveSite1Name',
        descriptionKey: 'galapagosDiveSite1Desc',
      },
      {
        id: 'natalia',
        nameKey: 'galapagosDiveSite2Name',
        descriptionKey: 'galapagosDiveSite2Desc',
      },
      {
        id: 'piedra-medio',
        nameKey: 'galapagosDiveSite3Name',
        descriptionKey: 'galapagosDiveSite3Desc',
      },
      {
        id: 'isla-aguja',
        nameKey: 'galapagosDiveSite4Name',
        descriptionKey: 'galapagosDiveSite4Desc',
      },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'galapagosUniqueFindsTitle',
    items: [
      'galapagosUniqueFind1',
      'galapagosUniqueFind2',
      'galapagosUniqueFind3',
      'galapagosUniqueFind4',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'galapagosGalleryTitle',
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: logo,
        mainLogoAltKey: 'galapagosGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'galapagosGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'galapagosGaleryImg1TextOverlay',
        photoCreditKey: 'galapagosGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery02,
        mainLogo: logo,
        mainLogoAltKey: 'galapagosGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'galapagosGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'galapagosGaleryImg2TextOverlay',
        photoCreditKey: 'galapagosGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery03,
        mainLogo: logo,
        mainLogoAltKey: 'galapagosGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'galapagosGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'galapagosGaleryImg3TextOverlay',
        photoCreditKey: 'galapagosGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery04,
        mainLogo: logo,
        mainLogoAltKey: 'galapagosGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'galapagosGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'galapagosGaleryImg4TextOverlay',
        photoCreditKey: 'galapagosGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery05,
        mainLogo: logo,
        mainLogoAltKey: 'galapagosGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'galapagosGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'galapagosGaleryImg5TextOverlay',
        photoCreditKey: 'galapagosGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery06,
        mainLogo: logo,
        mainLogoAltKey: 'galapagosGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'galapagosGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'galapagosGaleryImg6TextOverlay',
        photoCreditKey: 'galapagosGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
