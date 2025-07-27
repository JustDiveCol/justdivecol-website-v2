// src/data/content/destinations/malpelo.js

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

import headerBackground from '../../../assets/images/page-specific/destinations/malpelo/header-background.webp';
import cardImage from '../../../assets/images/page-specific/destinations/malpelo/card-image.webp';
import gallery01 from '../../../assets/images/page-specific/destinations/malpelo/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/destinations/malpelo/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/destinations/malpelo/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/destinations/malpelo/gallery-04.webp';
import gallery05 from '../../../assets/images/page-specific/destinations/malpelo/gallery-05.webp';
import gallery06 from '../../../assets/images/page-specific/destinations/malpelo/gallery-06.webp';

// Base example for Malpelo destination
const _malpelo = {
  ...destinationTemplate,

  // --- Metadata ---
  id: 'malpelo',
  slug: 'malpelo',
  status: STATUS.published,
  type: 'destination',
  coords: [-81.60887212529883, 4.00274441005682], // [lng, lat]
  country: 'CO', // ISO country code
  minZoom: 10.5,
  maxZoom: 16,
  nameKey: 'malpName', // i18n key for "Malpelo"
  descriptionKey: 'malpDescription',
  categoryKey: CATEGORY_REGION.regionPacifico, // e.g., Caribe colombiano
  createdAt: '2025-07-24T20:56:22Z',
  updatedAt: '2025-07-24T20:56:22Z',

  // --- SEO ---
  seo: {
    titleKey: 'malpSeoTitle',
    descriptionKey: 'malpSeoDesc',
    keywords: 'malpSeoKeywords',
    imageUrl: headerBackground,
    url: '', // will be assigned dynamically
  },

  // --- Header ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'malpHeaderTitle',
    subtitleKey: 'malpHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'XYZ',
    },
  },

  // --- Description ---
  description: {
    titleKey: 'malpDescTitle',
    paragraphs: ['malpDescP1', 'malpDescP2'],
  },

  // --- Card ---
  card: {
    backgroundImage: cardImage,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    textOverlayKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_EXTREME_TEXT_OVERLAY,
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
      { labelKey: 'malpDetailLabel1', valueKey: 'malpDetailValue1' },
      { labelKey: 'malpDetailLabel2', valueKey: 'malpDetailValue2' },
      { labelKey: 'malpDetailLabel3', valueKey: 'malpDetailValue3' },
      { labelKey: 'malpDetailLabel4', valueKey: 'malpDetailValue4' },
      { labelKey: 'malpDetailLabel5', valueKey: 'malpDetailValue5' },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_UNIQUE_FIDS_TITLE,
    items: ['malpUniqueFind1', 'malpUniqueFind2', 'malpUniqueFind3', 'malpUniqueFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_GALLERY_TITLE,
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'malpGal1Alt',
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
        altTextKey: 'malpGal2Alt',
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
        altTextKey: 'malpGal3Alt',
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
        altTextKey: 'malpGal4Alt',
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
          text: 'XYZ',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
      {
        backgroundImage: gallery05,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'malpGal4Alt',
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
          text: 'XYZ',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
      {
        backgroundImage: gallery06,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'malpGal4Alt',
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
_malpelo.seo.url = `${ROUTES.destinations}/${_malpelo.slug}`;
_malpelo.card.linkPath = `${ROUTES.destinations}/${_malpelo.slug}`;

export const malpeloDestination = _malpelo;
