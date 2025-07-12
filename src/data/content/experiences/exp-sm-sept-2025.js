// src/data/content/experiences/exp-sm-sept-2025.js

// Import all local images for this specific experience.
import sm_sept_2025_header_background from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-header-background.webp';
import sm_sept_2025_gallery_01 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-01.webp';
import sm_sept_2025_gallery_02 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-02.webp';
import sm_sept_2025_gallery_03 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-03.webp';
import sm_sept_2025_gallery_04 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-04.webp';

/**
 * Data structure for the "Santa Marta - September 2025" experience.
 * This object is the single source of truth for all content related to this trip.
 */
export const expSmSept2025 = {
  // --- Metadata ---
  id: 'experiencia-santa-marta-sept-2025', // Unique identifier for the trip.
  status: 'published', // 'published' or 'draft'.
  destinationId: 'santa-marta', // Crucial link to the corresponding destination data file.
  type: 'trip', // Type of experience.
  nameKey: 'expsmsept25Name', // Translation key for the trip's name.

  // --- SEO Content ---
  seo: {
    titleKey: 'expsmsept25SeoTitle',
    descriptionKey: 'expsmsept25SeoDesc',
  },

  // --- Page Content ---
  header: {
    titleKey: 'expsmsept25HeaderTitle',
    subtitleKey: 'expsmsept25HeaderSubtitle',
    headerImageUrl: sm_sept_2025_header_background,
  },
  description: {
    titleKey: 'expsmsept25DescTitle',
    paragraphs: ['expsmsept25DescP1', 'expsmsept25DescP2'],
  },
  details: {
    titleKey: 'expsmsept25DetailsTitle',
    startDate: '2025-09-26',
    endDate: '2025-09-29',
    items: [
      {
        labelKey: 'expsmsept25DetailLabel1',
        valueKey: 'expsmsept25DetailValue1',
      },
      {
        labelKey: 'expsmsept25DetailLabel2',
        valueKey: 'expsmsept25DetailValue2',
      },
      {
        labelKey: 'expsmsept25DetailLabel3',
        valueKey: 'expsmsept25DetailValue3',
      },
      {
        labelKey: 'expsmsept25DetailLabel4',
        valueKey: 'expsmsept25DetailValue4',
      },
    ],
  },
  itinerary: {
    titleKey: 'expsmsept25ItineraryTitle',
    days: [
      {
        day: 1,
        titleKey: 'expsmsept25ItineraryDay1Title',
        descriptionKey: 'expsmsept25ItineraryDay1Desc',
      },
      {
        day: 2,
        titleKey: 'expsmsept25ItineraryDay2Title',
        descriptionKey: 'expsmsept25ItineraryDay2Desc',
      },
      {
        day: 3,
        titleKey: 'expsmsept25ItineraryDay3Title',
        descriptionKey: 'expsmsept25ItineraryDay3Desc',
      },
      {
        day: 4,
        titleKey: 'expsmsept25ItineraryDay4Title',
        descriptionKey: 'expsmsept25ItineraryDay4Desc',
      },
    ],
    notes: ['expsmsept25ItineraryNote1', 'expsmsept25ItineraryNote2'],
  },
  whatIsIncluded: {
    titleKey: 'expsmsept25IncludedTitle',
    items: [
      'expsmsept25IncludeItem1',
      'expsmsept25IncludeItem2',
      'expsmsept25IncludeItem3',
      'expsmsept25IncludeItem4',
    ],
  },
  whatIsNotIncluded: {
    titleKey: 'expsmsept25NotIncludedTitle',
    items: [
      'expsmsept25NotIncludeItem1',
      'expsmsept25NotIncludeItem2',
      'expsmsept25NotIncludeItem3',
      'expsmsept25NotIncludeItem4',
    ],
  },

  // --- Associated Content ---
  offeredCourses: {
    titleKey: 'expsmsept25OfferedCoursesTitle',
    ids: ['padi-open-water-diver'], // Array of course IDs offered on this trip.
  },

  // --- Visuals ---
  gallery: {
    titleKey: 'expsmsept25GalleryTitle',
    images: [
      sm_sept_2025_gallery_01,
      sm_sept_2025_gallery_02,
      sm_sept_2025_gallery_03,
      sm_sept_2025_gallery_04,
    ],
  },

  // --- Final Call to Action ---
  cta: {
    titleKey: 'expsmsept25CtaTitle',
    buttonTextKey: 'expsmsept25CtaButtonText',
    link: '/contacto',
  },
};
