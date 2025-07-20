// src/data/content/courses/padi-open-water-diver.js

// Import all local images for this course.
import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

import owd_header_background from '../../../assets/images/page-specific/courses/open-water/owd-header-background.webp';
import owd_card_image from '../../../assets/images/page-specific/courses/open-water/owd-card-image.webp';
import owd_gallery_01 from '../../../assets/images/page-specific/courses/open-water/owd-gallery-01.webp';
import owd_gallery_02 from '../../../assets/images/page-specific/courses/open-water/owd-gallery-02.webp';
import owd_gallery_03 from '../../../assets/images/page-specific/courses/open-water/owd-gallery-03.webp';
import owd_gallery_04 from '../../../assets/images/page-specific/courses/open-water/owd-gallery-04.webp';

/**
 * Data structure for the PADI Open Water Diver course.
 * This object serves as the single source of truth for all content related to this course.
 */
export const padiOpenWaterDiverCourse = {
  // --- Metadata ---
  id: 'padi-open-water-diver', // Unique identifier for the course.
  status: 'published', // 'published' or 'draft'.
  type: 'certification', // The type of experience.

  // --- SEO Content ---
  seo: {
    titleKey: 'owdSeoTitle',
    descriptionKey: 'owdSeoDesc',
    keywords: 'owdSeoKeywords',
    imageUrl: owd_header_background,
    url: '/cursos/',
  },

  // --- Header Content ---
  header: {
    backgroundImage: owd_header_background,
    titleKey: 'owdHeaderTitle',
    subtitleKey: 'owdHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'owdHeaderMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'owdHeaderComplementaryLogoAlt',
    // textOverlayKey: 'owdHeaderTextOverlay',
    photoCreditKey: 'owdHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'owdDescTitle',
    paragraphs: ['owdDescP1', 'owdDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: owd_card_image,
    mainLogo: logo,
    mainLogoAltKey: 'owdCardMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'owdCardComplementaryLogoAlt',
    textOverlayKey: 'owdCardTextOverlay',
    photoCreditKey: 'owdCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
  },

  // --- Main Content ---
  details: {
    titleKey: 'owdDetailsTitle',
    durationKey: 'owdDetailDurationValue',
    items: [
      { labelKey: 'owdDetailLabel1', valueKey: 'owdDetailValue1' },
      { labelKey: 'owdDetailLabel2', valueKey: 'owdDetailValue2' },
    ],
  },

  // --- Curriculim Content ---
  curriculum: {
    titleKey: 'owdCurriculumTitle',
    modules: [
      {
        id: 'teoria',
        nameKey: 'owdModule1Name',
        descriptionKey: 'owdModule1Desc',
      },
      {
        id: 'asesoria',
        nameKey: 'owdModule2Name',
        descriptionKey: 'owdModule2Desc',
      },
      {
        id: 'piscina',
        nameKey: 'owdModule3Name',
        descriptionKey: 'owdModule3Desc',
      },
      {
        id: 'mar',
        nameKey: 'owdModule4Name',
        descriptionKey: 'owdModule4Desc',
      },
    ],
    notes: ['owdCurriculumNote1'],
  },

  // --- Requirements ---
  requirements: {
    titleKey: 'owdReqsTitle',
    items: ['owdReqItem1', 'owdReqItem2', 'owdReqItem3', 'owdReqItem4'],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: 'owdIncludedTitle',
    items: [
      'owdIncludeItem1',
      'owdIncludeItem2',
      'owdIncludeItem3',
      'owdIncludeItem4',
      'owdIncludeItem5',
      'owdIncludeItem6',
      'owdIncludeItem7',
      'owdIncludeItem8',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'owdGalleryTitle',
    images: [
      {
        backgroundImage: owd_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'owdGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'owdGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'owdGaleryImg1TextOverlay',
        photoCreditKey: 'owdGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: owd_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'owdGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'owdGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'owdGaleryImg2TextOverlay',
        photoCreditKey: 'owdGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: owd_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'owdGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'owdGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'owdGaleryImg3TextOverlay',
        photoCreditKey: 'owdGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: owd_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'owdGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'owdGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'owdGaleryImg4TextOverlay',
        photoCreditKey: 'owdGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },

  // --- Call to Action ---
  // Used if no trips are scheduled for this course.
  cta: {
    titleKey: 'owdCtaTitle',
    buttonTextKey: 'owdCtaButtonText',
    link: '/contacto',
  },
};
