// src/data/content/experiences/exp-sm-sept-2025.js

// Import all local images for this specific experience.
import sm_sept_2025_header_background from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-header-background.webp';
import sm_sept_2025_gallery_01 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-01.webp';
import sm_sept_2025_gallery_02 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-02.webp';
import sm_sept_2025_gallery_03 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-03.webp';
import sm_sept_2025_gallery_04 from '../../../assets/images/page-specific/experiences/santa-marta-sept-2025/sm-sept-2025-gallery-04.webp';

import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

/**
 * Data structure for the "Santa Marta - September 2025" experience.
 * This object is the single source of truth for all content related to this trip.
 */
export const experienciaSantaMartaSeptiembre2025 = {
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
    keywords: 'expsmsept25SeoKeywords',
    imageUrl: sm_sept_2025_header_background,
    url: '/experiencias/',
  },

  // --- Availability ---
  availability: 'available', // 'available' or 'last' or 'soldOut'

  // --- Page Header ---
  header: {
    backgroundImage: sm_sept_2025_header_background,
    titleKey: 'expsmsept25HeaderTitle',
    subtitleKey: 'expsmsept25HeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'expsmsept25HeaderMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'expsmsept25HeaderComplementaryLogoAlt',
    // textOverlayKey: 'expsmsept25HeaderTextOverlay',
    photoCreditKey: 'expsmsept25HeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'expsmsept25DescTitle',
    paragraphs: ['expsmsept25DescP1', 'expsmsept25DescP2'],
  },

  // --- Main Content ---
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

  // --- Payment Plan ---
  paymentPlan: {
    titleKey: 'paymentPlanTitle',
    modules: [
      {
        id: 'payment1',
        nameKey: 'paymentPlanStep1Name',
        descriptionKey: 'paymentPlanStep1Desc',
      },
      {
        id: 'payment2',
        nameKey: 'paymentPlanStep2Name',
        descriptionKey: 'paymentPlanStep2Desc',
      },
      {
        id: 'payment3',
        nameKey: 'paymentPlanStep3Name',
        descriptionKey: 'paymentPlanStep3Desc',
      },
    ],
    notes: ['paymentPlanNote1'],
  },

  // --- Itinerary Content ---
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

  // --- Included ---
  whatIsIncluded: {
    titleKey: 'expsmsept25IncludedTitle',
    items: [
      'expsmsept25IncludeItem1',
      'expsmsept25IncludeItem2',
      'expsmsept25IncludeItem3',
      'expsmsept25IncludeItem4',
    ],
  },

  // --- NOT Included ---
  whatIsNotIncluded: {
    titleKey: 'expsmsept25NotIncludedTitle',
    items: [
      'expsmsept25NotIncludeItem1',
      'expsmsept25NotIncludeItem2',
      'expsmsept25NotIncludeItem3',
      'expsmsept25NotIncludeItem4',
    ],
  },

  // --- Offered Courses ---
  offeredCourses: {
    titleKey: 'expsmsept25OfferedCoursesTitle',
    ids: ['padi-open-water-diver'], // Array of course IDs offered on this trip.
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'expsmsept25GalleryTitle',
    images: [
      {
        backgroundImage: sm_sept_2025_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'expsmsept25GaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'expsmsept25GaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'expsmsept25GaleryImg1TextOverlay',
        photoCreditKey: 'expsmsept25GaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: sm_sept_2025_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'expsmsept25GaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'expsmsept25GaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'expsmsept25GaleryImg2TextOverlay',
        photoCreditKey: 'expsmsept25GaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: sm_sept_2025_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'expsmsept25GaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'expsmsept25GaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'expsmsept25GaleryImg3TextOverlay',
        photoCreditKey: 'expsmsept25GaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: sm_sept_2025_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'expsmsept25GaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'expsmsept25GaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'expsmsept25GaleryImg4TextOverlay',
        photoCreditKey: 'expsmsept25GaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },

  // --- Final Call to Action ---
  cta: {
    titleKey: 'expsmsept25CtaTitle',
    buttonTextKey: 'expsmsept25CtaButtonText',
    ctaAction: {
      type: 'whatsapp',
      whatsAppMessageKey: 'expsmsept25CtaWhatsAppMessage',
    },
  },
};
