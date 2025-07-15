// src/data/pages/experiences.js
import { experienceCategories } from '../global/sharedData';

import experiences_header_background from '../../assets/images/page-specific/experiences/experiences-header-background.webp';
import experiences_cta_background from '../../assets/images/page-specific/experiences/experiences-cta-background.webp';

import logo from '../../assets/images/logos/logo.png';
import padi from '../../assets/images/logos/padi.png';

export const experiencesPageData = {
  seo: {
    titleKey: 'expSeoTitle',
    descriptionKey: 'expSeoDesc',
  },
  header: {
    backgroundImage: experiences_header_background,
    titleKey: 'expHeaderTitle',
    subtitleKey: 'expHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'expHeaderMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: '',
    // textOverlayKey: '',
    photoCreditKey: 'expHeaderPhotoCredit',
  },
  // We reuse the shared categories and add page-specific anchor links
  categories: experienceCategories.map((cat) => ({
    ...cat,
    link: `#${cat.id}`,
  })),
  upcomingTrips: {
    titleKey: 'expTripsTitle',
    subtitleKey: 'expTripsSubtitle',
  },
  fullCatalog: {
    courses: {
      sectionId: 'certificacion', // Matches the category id for anchor linking
      titleKey: 'expCatalogCoursesTitle',
    },
    destinations: {
      sectionId: 'exploracion', // Matches the category id
      titleKey: 'expCatalogDestsTitle',
    },
  },
  customTripCta: {
    backgroundImage: experiences_cta_background,
    titleKey: 'expCtaTitle',
    subtitleKey: 'expCtaSubtitle',
    ctaTextKey: 'expCtaButton',
    ctaLink: '/contacto',
    mainLogo: logo,
    mainLogoAltKey: 'expCtaMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: '',
    // textOverlayKey: '',
    photoCreditKey: 'expCtaPhotoCredit',
  },
};
