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
  price: 3500000,
  currency: CURRENCY.COP,
  createdAt: '2025-07-22T20:49:38Z',
  updatedAt: '2025-07-22T20:49:38Z',

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
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'XYZ',
    },
  },

  // --- Description block ---
  description: {
    titleKey: 'expSmDescTitle',
    paragraphs: ['expSmDescP1', 'expSmDescP2'],
  },

  // --- Detailed content ---
  details: {
    titleKey: SHARED_TRANSLATION_KEYS.experiencesDetailsTitleKey,
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
      {
        labelKey: 'expSmDetailLabel4',
        valueKey: 'expSmDetailValue4',
      },
    ],
  },

  // --- Payment Plan ---
  paymentPlan: {
    titleKey: SHARED_TRANSLATION_KEYS.experiencesPaymentTitleKey,
    modules: [
      {
        id: 'payment1',
        nameKey: 'paymentPlanStep1Name',
        descriptionKey: 'paymentPlanStep1Desc',
      },
      {
        id: 'payment2',
        nameKey: 'paymentPlanStep2Name',
        descriptionKey: 'paymentPlanStep2Desc',
      },
      {
        id: 'payment3',
        nameKey: 'paymentPlanStep3Name',
        descriptionKey: 'paymentPlanStep3Desc',
      },
    ],
    notes: [SHARED_TRANSLATION_KEYS.experiencesDefaultPaymentNoteKey],
  },

  // --- Itinerary ---
  itinerary: {
    titleKey: SHARED_TRANSLATION_KEYS.experiencesItineraryTitleKey,
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
      SHARED_TRANSLATION_KEYS.experiencesDefaultNoteKey,
      'expSmItineraryNote1',
      'expSmItineraryNote2',
    ],
  },

  // --- Included / Not included ---
  whatIsIncluded: {
    titleKey: SHARED_TRANSLATION_KEYS.experiencesIncludedTitleKey,
    items: ['expSmIncludeItem1', 'expSmIncludeItem2', 'expSmIncludeItem3', 'expSmIncludeItem4'],
  },
  whatIsNotIncluded: {
    titleKey: SHARED_TRANSLATION_KEYS.experiencesNotIncludedTitleKey,
    items: [
      'expSmNotIncludeItem1',
      'expSmNotIncludeItem2',
      'expSmNotIncludeItem3',
      'expSmNotIncludeItem4',
    ],
  },

  // --- Optional gallery ---
  gallery: {
    titleKey: SHARED_TRANSLATION_KEYS.experiencesGalleryTitleKey,
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
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
    textKey: SHARED_TRANSLATION_KEYS.experinceCtaTextButtonKey,
    translationNS: 'common',
    action: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.experienceWhatsappMessageKey,
      whatsAppMessageNS: 'common',
    },
  },

  // --- Sessions for multiple dates ---
  sessionIds: [], // array of session identifiers
};

// Compute URLs dynamically
_santaMartaExperience.seo.url = `${ROUTES.experiences}/${_santaMartaExperience.slug}`;

export const santaMartaExperience = _santaMartaExperience;
