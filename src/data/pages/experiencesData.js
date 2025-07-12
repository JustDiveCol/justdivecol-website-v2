// src/data/pages/experiences.js
import { experienceCategories } from '../global/sharedData';

import experiences_header_background from '../../assets/images/page-specific/experiences/experiences-header-background.webp';
import experiences_cta_background from '../../assets/images/page-specific/experiences/experiences-cta-background.webp';

export const experiencesPageData = {
  seo: {
    titleKey: 'expSeoTitle',
    descriptionKey: 'expSeoDesc',
  },
  header: {
    titleKey: 'expHeaderTitle',
    subtitleKey: 'expHeaderSubtitle',
    imageUrl: experiences_header_background,
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
    titleKey: 'expCtaTitle',
    subtitleKey: 'expCtaSubtitle',
    ctaTextKey: 'expCtaButton',
    ctaLink: '/contacto',
    imageUrl: experiences_cta_background,
  },
};
