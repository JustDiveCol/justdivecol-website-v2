// src/data/content/destinations/santa-marta.js

import { destinationTemplate } from './destinationTemplate';
import {
  STATUS,
  IMAGE_VARIANTS,
  ROUTES,
  CATEGORY_REGION,
  SHARED_TRANSLATION_KEYS,
  BUTTON_TYPES,
  NAMESPACES,
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
  minZoom: 10.5,
  maxZoom: 16,
  nameKey: 'smName', // i18n key for "Santa Marta"
  descriptionKey: 'smDescription',
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
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
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
    textOverlayKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_TEXT_OVERLAY,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'XYZ',
    },
    variant: IMAGE_VARIANTS.horizontal,
    linkPath: '', // will be assigned dynamically
  },

  // Details
  details: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_DETAILS_TITLE,
    items: [
      { labelKey: 'smDetailLabel1', valueKey: 'smDetailValue1' },
      { labelKey: 'smDetailLabel2', valueKey: 'smDetailValue2' },
      { labelKey: 'smDetailLabel3', valueKey: 'smDetailValue3' },
      { labelKey: 'smDetailLabel4', valueKey: 'smDetailValue4' },
      { labelKey: 'smDetailLabel5', valueKey: 'smDetailValue5' },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_UNIQUE_FIDS_TITLE,
    items: ['smUniqueFind1', 'smUniqueFind2', 'smUniqueFind3', 'smUniqueFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_GALLERY_TITLE,
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'smGal1Alt',
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
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
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
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
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
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
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
          text: 'XYZ',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
    ],
  },
  // --- CTA ---
  cta: {
    textKey: SHARED_TRANSLATION_KEYS.DESTINATION_CTA_BUTTON,
    translationNS: NAMESPACES.COMMON,
    action: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.DESTINATION_WHATSAPP_MESSAGE,
      whatsAppMessageNS: NAMESPACES.COMMON,
    },
  },

  // Linked experiences (IDs)
  experienceIds: [],
};

// Dynamically assign URL based on slug
_santaMarta.seo.url = `${ROUTES.destinations}/${_santaMarta.slug}`;
_santaMarta.card.linkPath = `${ROUTES.destinations}/${_santaMarta.slug}`;

export const santaMartaDestination = _santaMarta;
