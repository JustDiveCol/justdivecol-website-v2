// src/data/global/shared.js

import experience_category_courses from '../../assets/images/page-specific/experiences/experience-category-courses.webp';
import experience_category_experiences from '../../assets/images/page-specific/experiences/experience-category-experiences.webp';
import experience_category_private from '../../assets/images/page-specific/experiences/experience-category-private.webp';

import { LOGO_MAIN, PADI_LOGO } from './assets';
import { SHARED_TRANSLATION_KEYS } from './constants';

// This data is shared between the Home page and the Experiences page
export const experienceCategories = [
  {
    id: 'certification',
    backgroundImage: experience_category_courses,
    titleKey: 'expCardCertificacionTitle',
    categoryKey: 'expCardCertificacionCategory',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    complementaryLogo: PADI_LOGO.padiLogo,
    complementaryLogoAltKey: PADI_LOGO.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  {
    id: 'destination',
    backgroundImage: experience_category_experiences,
    titleKey: 'expCardExploracionTitle',
    categoryKey: 'expCardExploracionCategory',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  {
    id: 'custom',
    backgroundImage: experience_category_private,
    titleKey: 'expCardPrivadosTitle',
    categoryKey: 'expCardPrivadosCategory',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: '@giovannidiveservicesl',
    },
  },
];
