// src/data/pages/experiences.js
import { experienceCategories } from '../global/sharedData';

import headerBackground from '../../assets/images/page-specific/experiences/header-background.webp';
import ctaBackground from '../../assets/images/page-specific/experiences/cta-background.webp';

import {
  BUTTON_TYPES,
  CAT_TYPE,
  NAMESPACES,
  ROUTES,
  SHARED_TRANSLATION_KEYS,
} from '../global/constants';
import { LOGO_MAIN } from '../global/assets';

export const experiencesData = {
  // === SEO SECTION ===
  seo: {
    titleKey: 'expSeoTitle', // experiences
    descriptionKey: 'expSeoDesc', // experiences
    keywords: 'expSeoKeywords', // experiences
    imageUrl: headerBackground,
    url: ROUTES.experiences,
  },

  // === CALENDAR SECTION ===
  upcomingTrips: {
    titleKey: 'expAvailableTitle', // experiences
    subtitleKey: 'expAvailableSubtitle', // experiences
    pastTitleKey: 'expPastTripsTitle', // experiences
  },
  noUpcomingTrips: {
    titleKey: 'expNoUpcomingTripsTitle', // experiences
    subtitleKey: 'expNoUpcomingTripsSubtitle', // experiences
    ctaTextKey: 'expNoUpcomingTripsCtaText', // experiences
    ctaAction: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: 'expNoUpcomingTripsCtaMessage', // experiences
    },
  },

  // === FEATURED EXPERIENCES SECTION ===
  featuredExperiences: {
    titleKey: 'homeExpTitle',
    subtitleKey: 'homeExpSubtitle',

    categories: experienceCategories.map((cat) => ({
      ...cat,
      link: cat.id === CAT_TYPE.CUSTOM ? `${ROUTES.contact}` : `${ROUTES.experiences}#${cat.id}`,
      translationNS: NAMESPACES.HOME,
    })),
  },

  // === CATALOG ===
  fullCatalog: {
    courses: {
      sectionId: 'certification',
      titleKey: 'expCatalogCoursesTitle', // experiences
    },
    destinations: {
      sectionId: 'destination',
      titleKey: 'expCatalogDestsTitle', // experiences
      subtitleKey: 'expCatalogOtherDestsTitle', // experiences
    },
  },

  // === CTA ===
  customTripCta: {
    backgroundImage: ctaBackground,
    titleKey: 'expCtaTitle',
    subtitleKey: 'expCtaSubtitle',
    ctaButton: {
      textKey: SHARED_TRANSLATION_KEYS.CONTACT_TEXT_BUTTON,
      translationNS: NAMESPACES.COMMON,
      action: {
        type: BUTTON_TYPES.whatsapp,
        whatsAppMessageKey: SHARED_TRANSLATION_KEYS.GENERAL_WHATSAPP_MESSAGE,
        whatsAppMessageNS: NAMESPACES.COMMON,
      },
      containerClassName: 'pt-6',
    },
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
};
