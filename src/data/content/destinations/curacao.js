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
export const curacaoDestination = {
  // --- Metadata ---
  id: 'curacao', // Unique identifier for the destination.
  status: 'published', // 'published' or 'draft'.
  nameKey: 'curacaoName', // Translation key for the destination's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'curacaoSeoTitle',
    descriptionKey: 'curacaoSeoDesc',
    keywords: 'curacaoSeoKeywords',
    imageUrl: headerBackground,
    url: '/destinos/',
  },

  // --- Header Content ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'curacaoHeaderTitle',
    subtitleKey: 'curacaoHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'curacaoHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'curacaoHeaderComplementaryLogoAlt',
    // textOverlayKey: 'curacaoHeaderTextOverlay',
    photoCreditKey: 'curacaoHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'curacaoDescTitle',
    paragraphs: ['curacaoDescP1', 'curacaoDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: imageCard,
    mainLogo: logo,
    mainLogoAltKey: 'curacaoCardMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'curacaoCardComplementaryLogoAlt',
    textOverlayKey: 'curacaoCardTextOverlay',
    photoCreditKey: 'curacaoCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square

    descriptionKey: 'curacaoCardDescription',
    link: '/destinos/santa-marta',
  },

  // --- Main Content ---
  details: {
    titleKey: 'curacaoDetailsTitle',
    items: [
      { labelKey: 'curacaoDetailLabel1', valueKey: 'curacaoDetailValue1' },
      { labelKey: 'curacaoDetailLabel2', valueKey: 'curacaoDetailValue2' },
      { labelKey: 'curacaoDetailLabel3', valueKey: 'curacaoDetailValue3' },
      { labelKey: 'curacaoDetailLabel4', valueKey: 'curacaoDetailValue4' },
      { labelKey: 'curacaoDetailLabel5', valueKey: 'curacaoDetailValue5' },
    ],
  },

  // --- Divesites ---
  diveSites: {
    titleKey: 'curacaoDiveSitesTitle',
    sites: [
      {
        id: 'barco-hundido',
        nameKey: 'curacaoDiveSite1Name',
        descriptionKey: 'curacaoDiveSite1Desc',
      },
      {
        id: 'natalia',
        nameKey: 'curacaoDiveSite2Name',
        descriptionKey: 'curacaoDiveSite2Desc',
      },
      {
        id: 'piedra-medio',
        nameKey: 'curacaoDiveSite3Name',
        descriptionKey: 'curacaoDiveSite3Desc',
      },
      {
        id: 'isla-aguja',
        nameKey: 'curacaoDiveSite4Name',
        descriptionKey: 'curacaoDiveSite4Desc',
      },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'curacaoUniqueFindsTitle',
    items: ['curacaoUniqueFind1', 'curacaoUniqueFind2', 'curacaoUniqueFind3', 'curacaoUniqueFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'curacaoGalleryTitle',
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: logo,
        mainLogoAltKey: 'curacaoGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'curacaoGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'curacaoGaleryImg1TextOverlay',
        photoCreditKey: 'curacaoGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery02,
        mainLogo: logo,
        mainLogoAltKey: 'curacaoGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'curacaoGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'curacaoGaleryImg2TextOverlay',
        photoCreditKey: 'curacaoGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery03,
        mainLogo: logo,
        mainLogoAltKey: 'curacaoGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'curacaoGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'curacaoGaleryImg3TextOverlay',
        photoCreditKey: 'curacaoGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery04,
        mainLogo: logo,
        mainLogoAltKey: 'curacaoGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'curacaoGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'curacaoGaleryImg4TextOverlay',
        photoCreditKey: 'curacaoGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery05,
        mainLogo: logo,
        mainLogoAltKey: 'curacaoGaleryImg5MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'curacaoGaleryImg5ComplementaryLogoAlt',
        // textOverlayKey: 'curacaoGaleryImg5TextOverlay',
        photoCreditKey: 'curacaoGaleryImg5PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: gallery06,
        mainLogo: logo,
        mainLogoAltKey: 'curacaoGaleryImg6MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'curacaoGaleryImg6ComplementaryLogoAlt',
        // textOverlayKey: 'curacaoGaleryImg6TextOverlay',
        photoCreditKey: 'curacaoGaleryImg6PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },
};
