// src/data/global/shared.js

import categoryCertification from '../../assets/images/page-specific/experiences/category-certification.webp';
import categoryDestination from '../../assets/images/page-specific/experiences/category-experiences.webp';
import categoryCustom from '../../assets/images/page-specific/experiences/category-private.webp';

import { LOGO_MAIN, PADI_LOGO } from './assets';
import { SHARED_TRANSLATION_KEYS } from './constants';

// This data is shared between the Home page and the Experiences page
export const experienceCategories = [
  {
    id: 'certification',
    backgroundImage: categoryCertification,
    titleKey: 'expCardCertificacionTitle',
    categoryKey: 'expCardCertificacionCategory',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    complementaryLogo: PADI_LOGO.padiLogo,
    complementaryLogoAltKey: PADI_LOGO.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  {
    id: 'destination',
    backgroundImage: categoryDestination,
    titleKey: 'expCardExploracionTitle',
    categoryKey: 'expCardExploracionCategory',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  {
    id: 'custom',
    backgroundImage: categoryCustom,
    titleKey: 'expCardPrivadosTitle',
    categoryKey: 'expCardPrivadosCategory',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: '@giovannidiveservicesl',
    },
  },
];
