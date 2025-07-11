// src/data/pages/experiences.js
import { experienceCategories } from '../global/sharedData';

export const experiencesPageData = {
  seo: {
    titleKey: 'expSeoTitle',
    descriptionKey: 'expSeoDesc',
  },
  header: {
    titleKey: 'expHeaderTitle',
    subtitleKey: 'expHeaderSubtitle',
    imageUrl: 'https://placehold.co/1920x600/000/fff?text=Experience+Banner',
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
    imageUrl:
      'https://placehold.co/1920x600/000/fff?text=Private+Experience+Banner',
  },
};
