// src/data/content/certifications/padi-open-water-diver.js

import { certificationTemplate } from './certificationTemplate';

import {
  BUTTON_TYPES,
  CERTIFICATION_CATEGORIES,
  IMAGE_VARIANTS,
  LANGUAGES,
  NAMESPACES,
  SHARED_TRANSLATION_KEYS,
  STATUS,
} from '@/data/global/constants';
import { LOGO_MAIN, PADI_LOGO } from '@/data/global/assets';

import headerBackground from '../../../assets/images/page-specific/certifications/open-water/header-background.webp';
import cardImage from '../../../assets/images/page-specific/certifications/open-water/card-image.webp';
import gallery01 from '../../../assets/images/page-specific/certifications/open-water/gallery-01.webp';
import gallery02 from '../../../assets/images/page-specific/certifications/open-water/gallery-02.webp';
import gallery03 from '../../../assets/images/page-specific/certifications/open-water/gallery-03.webp';
import gallery04 from '../../../assets/images/page-specific/certifications/open-water/gallery-04.webp';

export const padiOpenWaterDiverCertification = {
  // --- Template ---
  ...certificationTemplate,

  // --- Metadata ---
  id: 'padi-open-water-diver',
  slug: 'open-water-diver',
  status: STATUS.published,
  type: 'certification',
  category: CERTIFICATION_CATEGORIES.owd,
  languages: [LANGUAGES.ES, LANGUAGES.EN],
  createdAt: '2025-07-24T20:25:19Z',
  updatedAt: '2025-07-24T20:25:19Z',
  prerequisites: [],

  // --- SEO ---
  seo: {
    titleKey: 'owdSeoTitle',
    descriptionKey: 'owdSeoDesc',
    keywords: 'owdSeoKeywords',
    imageUrl: headerBackground,
    url: '', // Se rellenará luego con el helper
  },

  // --- Header ---
  header: {
    backgroundImage: headerBackground,
    titleKey: 'owdHeaderTitle',
    subtitleKey: 'owdHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    complementaryLogo: PADI_LOGO.padiLogo,
    complementaryLogoAltKey: PADI_LOGO.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },

  // --- Description ---
  description: {
    titleKey: 'owdDescTitle',
    paragraphs: ['owdDescP1', 'owdDescP2'],
  },

  // --- Card ---
  card: {
    backgroundImage: cardImage,
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    complementaryLogo: PADI_LOGO.padiLogo,
    complementaryLogoAltKey: PADI_LOGO.altKey,
    textOverlayKey: SHARED_TRANSLATION_KEYS.CERTIFICATIONS_TEXT_OVERLAY,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
    variant: IMAGE_VARIANTS.horizontal,
  },

  // --- Details ---
  details: {
    titleKey: SHARED_TRANSLATION_KEYS.CERTIFICATIONS_DETAILS_TITLE,
    durationKey: 'owdDetailDurationValue',
    items: [{ labelKey: 'owdDetailLabel1', valueKey: 'owdDetailValue1' }],
  },

  // --- Curriculum ---
  curriculum: {
    titleKey: SHARED_TRANSLATION_KEYS.CERTIFICATIONS_CURRICULUM_TITLE,
    modules: [
      { id: 'theory', nameKey: 'owdModule1Name', descriptionKey: 'owdModule1Desc' },
      { id: 'advice', nameKey: 'owdModule2Name', descriptionKey: 'owdModule2Desc' },
      { id: 'confined-waters', nameKey: 'owdModule3Name', descriptionKey: 'owdModule3Desc' },
      { id: 'open-water', nameKey: 'owdModule4Name', descriptionKey: 'owdModule4Desc' },
    ],
    notes: [SHARED_TRANSLATION_KEYS.CERTIFICATIONS_DEFAULT_NOTE],
    learningObjectives: ['owdObj1', 'owdObj2', 'owdObj3', 'owdObj4', 'owdObj5'],
    estimatedTimePerModule: { theory: 2 },
  },

  // --- Requirements ---
  requirements: {
    titleKey: SHARED_TRANSLATION_KEYS.CERTIFICATIONS_REQUIREMENTS_TITLE,
    items: ['owdReqItem1', 'owdReqItem2', 'owdReqItem3', 'owdReqItem4'],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: SHARED_TRANSLATION_KEYS.CERTIFICATIONS_INCLUDED_TITLE,
    items: [
      'owdIncludeItem1',
      'owdIncludeItem2',
      'owdIncludeItem3',
      'owdIncludeItem4',
      'owdIncludeItem5',
      'owdIncludeItem6',
      'owdIncludeItem7',
      'owdIncludeItem8',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: SHARED_TRANSLATION_KEYS.CERTIFICATIONS_GALLERY_TITLE,
    images: [
      {
        backgroundImage: gallery01,
        mainLogo: LOGO_MAIN.mainLogo,
        mainLogoAltKey: LOGO_MAIN.altKey,
        photoCredit: {
          prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
          text: 'Camilo Beltran @JustDiveCol',
        },
        variant: IMAGE_VARIANTS.horizontal,
        altTextKey: 'owdGalleryImg1Alt',
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
        altTextKey: 'owdGalleryImg2Alt',
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
        altTextKey: 'owdGalleryImg3Alt',
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
        altTextKey: 'owdGalleryImg4Alt',
      },
    ],
  },

  // --- CTA ---
  cta: {
    textKey: SHARED_TRANSLATION_KEYS.CERTIFICATION_CTA_BUTTON,
    translationNS: NAMESPACES.COMMON,
    action: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.CERTIFICATION_WHATSAPP_MESSAGE,
      whatsAppMessageNS: NAMESPACES.COMMON,
    },
  },
};
