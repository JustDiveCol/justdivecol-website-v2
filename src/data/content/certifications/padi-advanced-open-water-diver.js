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

import headerBackground from '../../../assets/images/page-specific/certifications/advanced-open-water/header-background.webp';
import cardImage from '../../../assets/images/page-specific/certifications/advanced-open-water/card-image.webp';
import gallery01 from '../../../assets/images/page-specific/certifications/advanced-open-water/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/certifications/advanced-open-water/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/certifications/advanced-open-water/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/certifications/advanced-open-water/gallery-04.webp';

export const padiAdvancedOpenWaterDiverCertification = {
  // --- Template ---
  ...certificationTemplate,

  // --- Metadata ---
  id: 'padi-advanced-open-water-diver',
  slug: 'advanced-open-water-diver',
  status: STATUS.published,
  type: 'certification',
  category: CERTIFICATION_CATEGORIES.aowd,
  languages: [LANGUAGES.ES, LANGUAGES.EN],
  createdAt: '2025-07-22T17:31:03Z',
  updatedAt: '2025-07-22T17:31:03Z',
  prerequisites: [],

  // --- SEO ---
  seo: {
    titleKey: 'aowdSeoTitle',
    descriptionKey: 'aowdSeoDesc',
    keywords: 'aowdSeoKeywords',
    imageUrl: headerBackground,
    url: '', // Se rellenará luego con el helper
  },

  // --- Header ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'aowdHeaderTitle',
    subtitleKey: 'aowdHeaderSubtitle',
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
    titleKey: 'aowdDescTitle',
    paragraphs: ['aowdDescP1', 'aowdDescP2'],
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
    durationKey: 'aowdDetailDurationValue',
    items: [{ labelKey: 'aowdDetailLabel1', valueKey: 'aowdDetailValue1' }],
  },

  // --- Curriculum ---
  curriculum: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsCurriculumTitleKey,
    modules: [
      { id: 'deep-dive', nameKey: 'aowdModule1Name', descriptionKey: 'aowdModule1Desc' },
      {
        id: 'underwater-navigation',
        nameKey: 'aowdModule2Name',
        descriptionKey: 'aowdModule2Desc',
      },
      { id: 'adventures', nameKey: 'aowdModule3Name', descriptionKey: 'aowdModule3Desc' },
    ],
    notes: [SHARED_TRANSLATION_KEYS.certificationsDefaultNoteKey, 'aowdCurriculumNote1'],
    learningObjectives: ['aowdObj1', 'aowdObj2', 'aowdObj3', 'aowdObj4', 'aowdObj5', 'aowdObj6'],
    estimatedTimePerModule: { theory: 2 },
  },

  // --- Requirements ---
  requirements: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsRequirementsTitleKey,
    items: ['aowdReqItem1', 'aowdReqItem2', 'aowdReqItem3', 'aowdReqItem4'],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: SHARED_TRANSLATION_KEYS.certificationsIncludedTiteKey,
    items: [
      'aowdIncludeItem1',
      'aowdIncludeItem2',
      'aowdIncludeItem3',
      'aowdIncludeItem4',
      'aowdIncludeItem5',
      'aowdIncludeItem6',
      'aowdIncludeItem7',
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
        altTextKey: 'aowdGaleryImg1Alt',
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
        altTextKey: 'aowdGaleryImg2Alt',
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
        altTextKey: 'aowdGaleryImg3Alt',
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
        altTextKey: 'aowdGaleryImg4Alt',
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
