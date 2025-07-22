// src/data/content/certifications/padi-open-water-diver.js

import { certificationTemplate } from './certificationTemplate';

import {
  BUTTON_TYPES,
  CERTIFICATION_CATEGORIES,
  IMAGE_VARIANTS,
  LANGUAGES,
  SHARED_TRANSLATION_KEYS,
  STATUS,
} from '@/data/global/constants';
import { LOGO_MAIN, PADI_LOGO } from '@/data/global/assets';

import headerBackground from '../../../assets/images/page-specific/certifications/rescue-diver/header-background.webp';
import cardImage from '../../../assets/images/page-specific/certifications/rescue-diver/card-image.webp';
import gallery01 from '../../../assets/images/page-specific/certifications/rescue-diver/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/certifications/rescue-diver/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/certifications/rescue-diver/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/certifications/rescue-diver/gallery-04.webp';

export const padiRescueDiverCertification = {
  // --- Template ---
  ...certificationTemplate,

  // --- Metadata ---
  id: 'padi-rescue-diver',
  slug: 'rescue-diver',
  status: STATUS.published,
  type: 'certification',
  category: CERTIFICATION_CATEGORIES.rd,
  languages: [LANGUAGES.ES, LANGUAGES.EN],
  createdAt: '2025-07-22T17:31:03Z',
  updatedAt: '2025-07-22T17:31:03Z',
  prerequisites: [],

  // --- SEO ---
  seo: {
    titleKey: 'rdSeoTitle',
    descriptionKey: 'rdSeoDesc',
    keywords: 'rdSeoKeywords',
    imageUrl: headerBackground,
    url: '', // Se rellenará luego con el helper
  },

  // --- Header ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'rdHeaderTitle',
    subtitleKey: 'rdHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    complementaryLogo: PADI_LOGO.padiLogo,
    complementaryLogoAltKey: PADI_LOGO.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },

  // --- Description ---
  description: {
    titleKey: 'rdDescTitle',
    paragraphs: ['rdDescP1', 'rdDescP2'],
  },

  // --- Card ---
  card: {
    backgroundImage: cardImage,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    complementaryLogo: PADI_LOGO.padiLogo,
    complementaryLogoAltKey: PADI_LOGO.altKey,
    textOverlayKey: SHARED_TRANSLATION_KEYS.certificationsTextOverlayKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
    variant: IMAGE_VARIANTS.horizontal,
  },

  // --- Details ---
  details: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsDetailsTitleKey,
    durationKey: 'rdDetailDurationValue',
    items: [
      { labelKey: 'rdDetailLabel1', valueKey: 'rdDetailValue1' },
      { labelKey: 'rdDetailLabel2', valueKey: 'rdDetailValue2' },
    ],
  },

  // --- Curriculum ---
  curriculum: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsCurriculumTitleKey,
    modules: [
      { id: 'prevention-and-rescue', nameKey: 'rdModule1Name', descriptionKey: 'rdModule1Desc' },
      {
        id: 'self-rescue',
        nameKey: 'rdModule2Name',
        descriptionKey: 'rdModule2Desc',
      },
      { id: 'response', nameKey: 'rdModule3Name', descriptionKey: 'rdModule3Desc' },
      { id: 'emergency-management', nameKey: 'rdModule4Name', descriptionKey: 'rdModule4Desc' },
      { id: 'rescue-scenarios', nameKey: 'rdModule5Name', descriptionKey: 'rdModule5Desc' },
    ],
    notes: [SHARED_TRANSLATION_KEYS.certificationsDefaultNoteKey, 'rdCurriculumNote1'],
    learningObjectives: ['rdObj1', 'rdObj2', 'rdObj3', 'rdObj4', 'rdObj5'],
    estimatedTimePerModule: { theory: 2 },
  },

  // --- Requirements ---
  requirements: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsRequirementsTitleKey,
    items: ['rdReqItem1', 'rdReqItem2', 'rdReqItem3', 'rdReqItem4', 'rdReqItem5'],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsIncludedTiteKey,
    items: [
      'rdIncludeItem1',
      'rdIncludeItem2',
      'rdIncludeItem3',
      'rdIncludeItem4',
      'rdIncludeItem5',
      'rdIncludeItem6',
      'rdIncludeItem7',
      'rdIncludeItem8',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsGalleryTiteKey,
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
        altTextKey: 'rdGaleryImg1Alt',
      },
      {
        backgroundImage: gallery02,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
        altTextKey: 'rdGaleryImg2Alt',
      },
      {
        backgroundImage: gallery03,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
        altTextKey: 'rdGaleryImg3Alt',
      },
      {
        backgroundImage: gallery04,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
        altTextKey: 'rdGaleryImg4Alt',
      },
    ],
  },

  // --- CTA ---
  cta: {
    textKey: SHARED_TRANSLATION_KEYS.certificationCtaTextButtonKey,
    translationNS: 'common',
    action: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.certificationWhatsappMessageKey,
      whatsAppMessageNS: 'common',
    },
  },
};
