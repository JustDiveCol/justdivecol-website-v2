// src/data/content/experiences/exp-sm-sept-2025.js

export const expSmSept2025 = {
  // --- METADATA ---
  id: 'expedicion-santa-marta-sept-2025',
  status: 'published',
  destinationId: 'santa-marta', // <-- The crucial link to the destination
  type: 'trip',
  nameKey: 'expsmsept25Name',

  // --- PAGE CONTENT ---
  seo: {
    titleKey: 'expsmsept25SeoTitle',
    descriptionKey: 'expsmsept25SeoDesc',
  },
  header: {
    titleKey: 'expsmsept25HeaderTitle',
    subtitleKey: 'expsmsept25HeaderSubtitle',
    bannerImageUrl:
      'https://placehold.co/1920x600/000/fff?text=Experiencia+Santa+Marta+Banner',
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
      'expsmsept25IncludeItem5',
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
  offeredCourses: {
    titleKey: 'expsmsept25OfferedCoursesTitle',
    ids: ['padi-open-water-diver'],
  },
  gallery: {
    titleKey: 'expsmsept25GalleryTitle',
    images: [
      'https://placehold.co/800x600/000/fff?text=Imagen+1' /*, galleryImg2, etc. */,
    ],
  },
  cta: {
    titleKey: 'expsmsept25CtaTitle',
    buttonTextKey: 'expsmsept25CtaButtonText',
    link: '/contacto',
  },
};
