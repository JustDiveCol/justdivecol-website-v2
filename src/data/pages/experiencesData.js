// src/data/pages/experiences.js
import { experienceCategories } from '../global/sharedData';

import headerBackground from '../../assets/images/page-specific/experiences/experiences-header-background.webp';
import experiences_cta_background from '../../assets/images/page-specific/experiences/experiences-cta-background.webp';

import logo from '../../assets/images/logos/logo.png';
import { ROUTES } from '../global/constants';
// import padi from '../../assets/images/logos/padi.png';

export const experiencesPageData = {
  // === SEO SECTION ===
  seo: {
    titleKey: 'expSeoTitle',
    descriptionKey: 'expSeoDesc',
    keywords: 'expSeoKeywords',
    imageUrl: headerBackground,
    url: ROUTES.experiences,
  },

  // === CALENDAR SECTION ===
  categories: experienceCategories.map((cat) => ({
    ...cat,
    link: `#${cat.id}`,
  })),
  upcomingTrips: {
    titleKey: 'expAvailableTitle',
    subtitleKey: 'expAvailableSubtitle',
    pastTitleKey: 'expPastTripsTitle',
  },
  noUpcomingTrips: {
    titleKey: 'expNoUpcomingTripsTitle',
    subtitleKey: 'expNoUpcomingTripsSubtitle',
    ctaTextKey: 'expNoUpcomingTripsCtaText',
    ctaAction: {
      type: 'whatsapp',
      whatsAppMessageKey: 'expNoUpcomingTripsCtaMessage',
    },
  },
  fullCatalog: {
    courses: {
      sectionId: 'certification',
      titleKey: 'expCatalogCoursesTitle',
    },
    destinations: {
      sectionId: 'destination',
      titleKey: 'expCatalogDestsTitle',
      subtitleKey: 'expCatalogOtherDestsTitle',
    },
  },
  customTripCta: {
    backgroundImage: experiences_cta_background,
    titleKey: 'expCtaTitle',
    subtitleKey: 'expCtaSubtitle',
    ctaButton: {
      textKey: 'contactTextButton',
      translationNS: 'common',
      action: {
        type: 'whatsapp',
        whatsAppMessageKey: 'generalWhatsappMessage',
        whatsAppMessageNS: 'common',
      },
      containerClassName: 'pt-6',
    },
    mainLogo: logo,
    mainLogoAltKey: 'expCtaMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: '',
    // textOverlayKey: '',
    photoCreditKey: 'expCtaPhotoCredit',
  },
};
