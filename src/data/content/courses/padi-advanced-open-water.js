// src/data/content/courses/padi-advanced-open-water-diver.js

// Import all local images for this course.
import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

import aowd_header_background from '../../../assets/images/page-specific/courses/advanced-open-water/aowd-header-background.webp';
import aowd_card_image from '../../../assets/images/page-specific/courses/advanced-open-water/aowd-card-image.webp';
import aowd_gallery_01 from '../../../assets/images/page-specific/courses/advanced-open-water/aowd-gallery-01.webp';
import aowd_gallery_02 from '../../../assets/images/page-specific/courses/advanced-open-water/aowd-gallery-02.webp';
import aowd_gallery_03 from '../../../assets/images/page-specific/courses/advanced-open-water/aowd-gallery-03.webp';
import aowd_gallery_04 from '../../../assets/images/page-specific/courses/advanced-open-water/aowd-gallery-04.webp';

/**
 * Data structure for the PADI Open Water Diver course.
 * This object serves as the single source of truth for all content related to this course.
 */
export const padiAdvancedOpenWaterDiverCourse = {
  // --- Metadata ---
  id: 'padi-advanced-open-water-diver', // Unique identifier for the course.
  status: 'published', // 'published' or 'draft'.
  type: 'certification', // The type of experience.

  // --- SEO Content ---
  seo: {
    titleKey: 'aowdSeoTitle',
    descriptionKey: 'aowdSeoDesc',
  },

  // --- Page Header ---
  header: {
    backgroundImage: aowd_header_background,
    titleKey: 'aowdHeaderTitle',
    subtitleKey: 'aowdHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'aowdHeaderMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'aowdHeaderComplementaryLogoAlt',
    // textOverlayKey: 'aowdHeaderTextOverlay',
    photoCreditKey: 'aowdHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'aowdDescTitle',
    paragraphs: ['aowdDescP1', 'aowdDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: aowd_card_image,
    mainLogo: logo,
    mainLogoAltKey: 'aowdCardMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'aowdCardComplementaryLogoAlt',
    textOverlayKey: 'aowdCardTextOverlay',
    photoCreditKey: 'aowdCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
  },

  // --- Main Content ---
  details: {
    titleKey: 'aowdDetailsTitle',
    items: [
      { labelKey: 'aowdDetailLabel1', valueKey: 'aowdDetailValue1' },
      { labelKey: 'aowdDetailLabel2', valueKey: 'aowdDetailValue2' },
    ],
  },

  // --- Curriculim Content ---
  curriculum: {
    titleKey: 'aowdCurriculumTitle',
    modules: [
      {
        id: 'inmersion-profunda',
        nameKey: 'aowdModule1Name',
        descriptionKey: 'aowdModule1Desc',
      },
      {
        id: 'navegacion',
        nameKey: 'aowdModule2Name',
        descriptionKey: 'aowdModule2Desc',
      },
      {
        id: 'aventuras',
        nameKey: 'aowdModule3Name',
        descriptionKey: 'aowdModule3Desc',
      },
    ],
    notes: ['aowdCurriculumNote1'],
  },

  // --- Requirements ---
  requirements: {
    titleKey: 'aowdReqsTitle',
    items: ['aowdReqItem1', 'aowdReqItem2', 'aowdReqItem3', 'aowdReqItem4'],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: 'aowdIncludedTitle',
    items: [
      'aowdIncludeItem1',
      'aowdIncludeItem2',
      'aowdIncludeItem3',
      'aowdIncludeItem4',
      'aowdIncludeItem5',
      'aowdIncludeItem6',
      'aowdIncludeItem7',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'aowdGalleryTitle',
    images: [
      {
        backgroundImage: aowd_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'aowdGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'aowdGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'aowdGaleryImg1TextOverlay',
        photoCreditKey: 'aowdGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: aowd_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'aowdGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'aowdGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'aowdGaleryImg2TextOverlay',
        photoCreditKey: 'aowdGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: aowd_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'aowdGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'aowdGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'aowdGaleryImg3TextOverlay',
        photoCreditKey: 'aowdGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: aowd_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'aowdGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAlt: 'aowdGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'aowdGaleryImg4TextOverlay',
        photoCreditKey: 'aowdGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },

  // --- Call to Action ---
  // Used if no trips are scheduled for this course.
  cta: {
    titleKey: 'aowdCtaTitle',
    buttonTextKey: 'aowdCtaButtonText',
    link: '/contacto',
  },
};
