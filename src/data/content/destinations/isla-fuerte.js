// src/data/content/destinations/isla-fuerte.js

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

import headerBackground from '../../../assets/images/page-specific/destinations/isla-fuerte/header-background.webp';
import cardImage from '../../../assets/images/page-specific/destinations/isla-fuerte/card-image.webp';
import gallery01 from '../../../assets/images/page-specific/destinations/isla-fuerte/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/destinations/isla-fuerte/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/destinations/isla-fuerte/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/destinations/isla-fuerte/gallery-04.webp';
import gallery05 from '../../../assets/images/page-specific/destinations/isla-fuerte/gallery-05.webp';
import gallery06 from '../../../assets/images/page-specific/destinations/isla-fuerte/gallery-06.webp';

// Base example for Isla Fuerte destination
const _islaFuerte = {
  ...destinationTemplate,

  // --- Metadata ---
  id: 'isla-fuerte',
  slug: 'isla-fuerte',
  status: STATUS.published,
  type: 'destination',
  coords: [-76.18084146986835, 9.388325391303937], // [lng, lat]
  country: 'CO', // ISO country code
  minZoom: 10.5,
  maxZoom: 15,
  nameKey: 'ifName', // i18n key for "Isla Fuerte"
  descriptionKey: 'ifDescription',
  categoryKey: CATEGORY_REGION.regionCaribe, // e.g., Caribe colombiano
  createdAt: '2025-07-24T20:58:49Z',
  updatedAt: '2025-07-24T20:58:49Z',

  // --- SEO ---
  seo: {
    titleKey: 'ifSeoTitle',
    descriptionKey: 'ifSeoDesc',
    keywords: 'ifSeoKeywords',
    imageUrl: headerBackground,
    url: '', // will be assigned dynamically
  },

  // --- Header ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'ifHeaderTitle',
    subtitleKey: 'ifHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'XYZ',
    },
  },

  // --- Description ---
  description: {
    titleKey: 'ifDescTitle',
    paragraphs: ['ifDescP1', 'ifDescP2'],
  },

  // --- Card ---
  card: {
    backgroundImage: cardImage,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
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
      { labelKey: 'ifDetailLabel1', valueKey: 'ifDetailValue1' },
      { labelKey: 'ifDetailLabel2', valueKey: 'ifDetailValue2' },
      { labelKey: 'ifDetailLabel3', valueKey: 'ifDetailValue3' },
      { labelKey: 'ifDetailLabel4', valueKey: 'ifDetailValue4' },
      { labelKey: 'ifDetailLabel5', valueKey: 'ifDetailValue5' },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_UNIQUE_FIDS_TITLE,
    items: ['ifUniqueFind1', 'ifUniqueFind2', 'ifUniqueFind3', 'ifUniqueFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_GALLERY_TITLE,
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'ifGal1Alt',
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
        altTextKey: 'ifGal2Alt',
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
        altTextKey: 'ifGal3Alt',
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
        altTextKey: 'ifGal4Alt',
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
        altTextKey: 'ifGal4Alt',
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
        altTextKey: 'ifGal4Alt',
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
_islaFuerte.seo.url = `${ROUTES.destinations}/${_islaFuerte.slug}`;
_islaFuerte.card.linkPath = `${ROUTES.destinations}/${_islaFuerte.slug}`;

export const islaFuerteDestination = _islaFuerte;
