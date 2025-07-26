// src/data/content/experiences/santa-marta.js

import { experienceTemplate } from './experienceTemplate';

import {
  STATUS,
  IMAGE_VARIANTS,
  ROUTES,
  CURRENCY,
  LANGUAGES,
  AVAILABILITY,
  SHARED_TRANSLATION_KEYS,
  BUTTON_TYPES,
  NAMESPACES,
} from '@/data/global/constants';
import { LOGO_MAIN } from '@/data/global/assets';

import headerBackground from '../../../assets/images/page-specific/experiences/santa-marta/header-background.webp';
import gallery01 from '../../../assets/images/page-specific/experiences/santa-marta/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/experiences/santa-marta/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/experiences/santa-marta/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/experiences/santa-marta/gallery-04.webp';

// General Santa Marta experience with multiple sessions
const _santaMartaExperience = {
  ...experienceTemplate,
  // --- Metadata ---
  id: 'exp-santa-marta',
  status: STATUS.draft,
  type: 'experience',
  slug: 'santa-marta',
  titleKey: 'expSmTitle',
  subtitleKey: 'expSmSubtitle',
  destinationId: 'santa-marta',
  certificationIds: [],
  languages: [LANGUAGES.ES, LANGUAGES.EN],
  availability: AVAILABILITY.available,
  startDate: '',
  endDate: '',
  price: 0,
  currency: CURRENCY.COP,
  createdAt: '2025-07-24T20:25:19Z',
  updatedAt: '2025-07-24T20:25:19Z',

  // --- SEO metadata; url to be computed dynamically ---
  seo: {
    titleKey: 'expSmSeoTitle',
    descriptionKey: 'expSmSeoDesc',
    keywords: 'expSmKeywords',
    imageUrl: headerBackground,
    url: '', // computed later as `${ROUTES.EXPERIENCES}/${slug}`
  },

  // --- Header content ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'expSmHeaderTitle',
    subtitleKey: 'expSmHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },

  // --- Description block ---
  description: {
    titleKey: 'expSmDescTitle',
    paragraphs: ['expSmDescP1', 'expSmDescP2'],
  },

  // --- Detailed content ---
  details: {
    titleKey: SHARED_TRANSLATION_KEYS.EXPERIENCES_DETAILS_TITLE,
    descriptionKey: 'expSmDetailsDesc',
    items: [
      {
        labelKey: 'expSmDetailLabel1',
        valueKey: 'expSmDetailValue1',
      },
      {
        labelKey: 'expSmDetailLabel2',
        valueKey: 'expSmDetailValue2',
      },
      {
        labelKey: 'expSmDetailLabel3',
        valueKey: 'expSmDetailValue3',
      },
    ],
  },

  // --- Itinerary ---
  itinerary: {
    titleKey: SHARED_TRANSLATION_KEYS.EXPERIENCES_ITINERARY_TITLE,
    days: [
      {
        day: 1,
        titleKey: 'expSmItineraryDay1Title',
        descriptionKey: 'expSmItineraryDay1Desc',
      },
      {
        day: 2,
        titleKey: 'expSmItineraryDay2Title',
        descriptionKey: 'expSmItineraryDay2Desc',
      },
      {
        day: 3,
        titleKey: 'expSmItineraryDay3Title',
        descriptionKey: 'expSmItineraryDay3Desc',
      },
      {
        day: 4,
        titleKey: 'expSmItineraryDay4Title',
        descriptionKey: 'expSmItineraryDay4Desc',
      },
    ],
    notes: [
      SHARED_TRANSLATION_KEYS.EXPERIENCES_DEFAULT_ITINERARY_NOTE_1,
      SHARED_TRANSLATION_KEYS.EXPERIENCES_DEFAULT_ITINERARY_NOTE_2,
    ],
  },

  // --- Included / Not included ---
  whatIsIncluded: {
    titleKey: SHARED_TRANSLATION_KEYS.EXPERIENCES_INCLUDED_TITLE,
    items: ['expSmIncludeItem1', 'expSmIncludeItem2', 'expSmIncludeItem3', 'expSmIncludeItem4'],
  },
  whatIsNotIncluded: {
    titleKey: SHARED_TRANSLATION_KEYS.EXPERIENCES_NOT_INCLUDED_TITLE,
    items: [
      'expSmNotIncludeItem1',
      'expSmNotIncludeItem2',
      'expSmNotIncludeItem3',
      'expSmNotIncludeItem4',
    ],
  },

  // --- Optional gallery ---
  gallery: {
    titleKey: SHARED_TRANSLATION_KEYS.EXPERIENCES_GALLERY_TITLE,
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
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
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
      {
        backgroundImage: gallery03,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
      {
        backgroundImage: gallery04,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
      },
    ],
  },

  // --- CTA ---
  cta: {
    buttonTextKey: SHARED_TRANSLATION_KEYS.EXPERIENCES_CTA_TEXT_BUTTON,
    translationNS: NAMESPACES.COMMON,
    action: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.EXPERIENCE_WHATSAPP_MESSAGE,
      whatsAppMessageNS: NAMESPACES.CONTACT,
    },
  },

  // --- Sessions for multiple dates ---
  sessionIds: [], // array of session identifiers
};

// Compute URLs dynamically
_santaMartaExperience.seo.url = `${ROUTES.experiences}/${_santaMartaExperience.slug}`;

export const santaMartaExperience = _santaMartaExperience;
