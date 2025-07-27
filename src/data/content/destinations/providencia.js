// src/data/content/destinations/providencia.js

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

import headerBackground from '../../../assets/images/page-specific/destinations/providencia/header-background.webp';
import cardImage from '../../../assets/images/page-specific/destinations/providencia/card-image.webp';
import gallery01 from '../../../assets/images/page-specific/destinations/providencia/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/destinations/providencia/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/destinations/providencia/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/destinations/providencia/gallery-04.webp';
import gallery05 from '../../../assets/images/page-specific/destinations/providencia/gallery-05.webp';
import gallery06 from '../../../assets/images/page-specific/destinations/providencia/gallery-06.webp';

// Base example for Providencia destination
const _providencia = {
  ...destinationTemplate,

  // --- Metadata ---
  id: 'providencia',
  slug: 'providencia',
  status: STATUS.published,
  type: 'destination',
  coords: [-81.37393037398746, 13.352018701427312], // [lng, lat]
  country: 'CO', // ISO country code
  minZoom: 10,
  maxZoom: 15,
  nameKey: 'provName', // i18n key for "Providencia"
  categoryKey: CATEGORY_REGION.regionCaribe, // e.g., Caribe colombiano
  createdAt: '2025-07-22T18:33:06Z',
  updatedAt: '2025-07-22T18:33:06Z',

  // --- SEO ---
  seo: {
    titleKey: 'provSeoTitle',
    descriptionKey: 'provSeoDesc',
    keywords: 'provSeoKeywords',
    imageUrl: headerBackground,
    url: '', // will be assigned dynamically
  },

  // --- Header ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'provHeaderTitle',
    subtitleKey: 'provHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'XYZ',
    },
  },

  // --- Description ---
  description: {
    titleKey: 'provDescTitle',
    paragraphs: ['provDescP1', 'provDescP2'],
  },

  // --- Card ---
  card: {
    backgroundImage: cardImage,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.mainLogo,
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
      { labelKey: 'provDetailLabel1', valueKey: 'provDetailValue1' },
      { labelKey: 'provDetailLabel2', valueKey: 'provDetailValue2' },
      { labelKey: 'provDetailLabel3', valueKey: 'provDetailValue3' },
      { labelKey: 'provDetailLabel4', valueKey: 'provDetailValue4' },
      { labelKey: 'provDetailLabel5', valueKey: 'provDetailValue5' },
    ],
  },

  // --- Dive Sites ---
  diveSites: {
    titleKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_DIVE_SITES_TITLE,
    sites: [
      { id: 'barco-hundido', nameKey: 'provDiveSite1Name', descriptionKey: 'provDiveSite1Desc' },
      { id: 'natalia', nameKey: 'provDiveSite2Name', descriptionKey: 'provDiveSite2Desc' },
      { id: 'piedra-del-medio', nameKey: 'provDiveSite3Name', descriptionKey: 'provDiveSite3Desc' },
      { id: 'isla-aguja', nameKey: 'provDiveSite4Name', descriptionKey: 'provDiveSite4Desc' },
    ],
  },

  // --- Unique Finds ---
  uniqueFinds: {
    titleKey: 'provUniqueFindsTitle',
    items: ['provFind1', 'provFind2', 'provFind3', 'provFind4'],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'provGalleryTitle',
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        altTextKey: 'provGal1Alt',
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
        altTextKey: 'provGal2Alt',
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
        altTextKey: 'provGal3Alt',
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
        altTextKey: 'provGal4Alt',
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
        altTextKey: 'provGal4Alt',
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
        altTextKey: 'provGal4Alt',
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
_providencia.seo.url = `${ROUTES.destinations}/${_providencia.slug}`;
_providencia.card.linkPath = `${ROUTES.destinations}/${_providencia.slug}`;

export const providenciaDestination = _providencia;
