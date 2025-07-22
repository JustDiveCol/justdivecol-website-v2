// src/data/content/destinations/santa-marta.js

import { destinationTemplate } from './destinationTemplate';
import {
  STATUS,
  IMAGE_VARIANTS,
  ROUTES,
  CATEGORY_REGION,
  SHARED_TRANSLATION_KEYS,
  BUTTON_TYPES,
} from '@/data/global/constants';
import { LOGO_MAIN } from '@/data/global/assets';

import headerBackground from '../../../assets/images/page-specific/destinations/santa-marta/header-background.webp';
import cardImage from '../../../assets/images/page-specific/destinations/santa-marta/card-image.webp';
import gallery01 from '../../../assets/images/page-specific/destinations/santa-marta/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/destinations/santa-marta/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/destinations/santa-marta/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/destinations/santa-marta/gallery-04.webp';

// Base example for Santa Marta destination
const _santaMarta = {
  ...destinationTemplate,

  // --- Metadata ---
  id: 'santa-marta',
  slug: 'santa-marta',
  status: STATUS.published,
  type: 'destination',
  coords: [-74.19505030742204, 11.232133282203762], // [lng, lat]
  country: 'CO', // ISO country code
  minZoom: 9,
  maxZoom: 16,
  nameKey: 'smName', // i18n key for "Santa Marta"
  categoryKey: CATEGORY_REGION.regionCaribe, // e.g., Caribe colombiano
  createdAt: '2025-07-22T18:33:06Z',
  updatedAt: '2025-07-22T18:33:06Z',

  // --- SEO ---
  seo: {
    titleKey: 'smSeoTitle',
    descriptionKey: 'smSeoDesc',
    keywords: 'smSeoKeywords',
    imageUrl: headerBackground,
    url: '', // will be assigned dynamically
  },

  // --- Header ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'smHeaderTitle',
    subtitleKey: 'smHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'XYZ',
    },
  },

  // --- Description ---
  description: {
    titleKey: 'smDescTitle',
    paragraphs: ['smDescP1', 'smDescP2'],
  },

  // --- Card ---
  card: {
    backgroundImage: cardImage,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.mainLogo,
    textOverlayKey: SHARED_TRANSLATION_KEYS.destinationsTextOverlayKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'XYZ',
    },
    variant: IMAGE_VARIANTS.horizontal,
    linkPath: '', // will be assigned dynamically
  },

  // Details
  details: {
    titleKey: SHARED_TRANSLATION_KEYS.destinationsDetailsTitleKey,
    items: [
      { labelKey: 'smDetailLabel1', valueKey: 'smDetailValue1' },
      { labelKey: 'smDetailLabel2', valueKey: 'smDetailValue2' },
      { labelKey: 'smDetailLabel3', valueKey: 'smDetailValue3' },
      { labelKey: 'smDetailLabel4', valueKey: 'smDetailValue4' },
      { labelKey: 'smDetailLabel5', valueKey: 'smDetailValue5' },
    ],
  },

  // --- Dive Sites ---
  diveSites: {
    titleKey: SHARED_TRANSLATION_KEYS.destinationsDiveSitesTitleKey,
    sites: [
      { id: 'barco-hundido', nameKey: 'smDiveSite1Name', descriptionKey: 'smDiveSite1Desc' },
      { id: 'natalia', nameKey: 'smDiveSite2Name', descriptionKey: 'smDiveSite2Desc' },
      { id: 'piedra-del-medio', nameKey: 'smDiveSite3Name', descriptionKey: 'smDiveSite3Desc' },
      { id: 'isla-aguja', nameKey: 'smDiveSite4Name', descriptionKey: 'smDiveSite4Desc' },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'smUniqueFindsTitle',
    items: ['smFind1', 'smFind2', 'smFind3', 'smFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'smGalleryTitle',
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'smGal1Alt',
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'XYZ',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
      {
        backgroundImage: gallery02,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'smGal2Alt',
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'XYZ',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
      {
        backgroundImage: gallery03,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'smGal3Alt',
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'XYZ',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
      {
        backgroundImage: gallery04,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'smGal4Alt',
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'XYZ',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
    ],
  },
  // --- CTA ---
  cta: {
    textKey: SHARED_TRANSLATION_KEYS.destinationCtaTextButtonKey,
    translationNS: 'common',
    action: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.destinationWhatsappMessageKey,
      whatsAppMessageNS: 'common',
    },
  },

  // Linked experiences (IDs)
  experienceIds: [],
};

// Dynamically assign URL based on slug
_santaMarta.seo.url = `${ROUTES.destinations}/${_santaMarta.slug}`;
_santaMarta.card.linkPath = `${ROUTES.destinations}/${_santaMarta.slug}`;

export const santaMartaDestination = _santaMarta;
