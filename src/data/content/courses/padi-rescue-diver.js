// src/data/content/courses/padi-rescue-diver.js

// Import all local images for this course.
import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

import rd_header_background from '../../../assets/images/page-specific/courses/rescue-diver/rd-header-background.webp';
import rd_card_image from '../../../assets/images/page-specific/courses/rescue-diver/rd-card-image.webp';
import rd_gallery_01 from '../../../assets/images/page-specific/courses/rescue-diver/rd-gallery-01.webp';
import rd_gallery_02 from '../../../assets/images/page-specific/courses/rescue-diver/rd-gallery-02.webp';
import rd_gallery_03 from '../../../assets/images/page-specific/courses/rescue-diver/rd-gallery-03.webp';
import rd_gallery_04 from '../../../assets/images/page-specific/courses/rescue-diver/rd-gallery-04.webp';

/**
 * Data structure for the PADI Rescue Diver course.
 * This object serves as the single source of truth for all content related to this course.
 */
export const padiRescueDiverCourse = {
  // --- Metadata ---
  id: 'padi-rescue-diver', // Unique identifier for the course.
  status: 'published', // 'published' or 'draft'.
  type: 'certification', // The type of experience.

  // --- SEO Content ---
  seo: {
    titleKey: 'rdSeoTitle',
    descriptionKey: 'rdSeoDesc',
    keywords: 'rdSeoKeywords',
    imageUrl: rd_header_background,
    url: '/cursos/',
  },

  // --- Page Header ---
  header: {
    backgroundImage: rd_header_background,
    titleKey: 'rdHeaderTitle',
    subtitleKey: 'rdHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'rdHeaderMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'rdHeaderComplementaryLogoAlt',
    // textOverlayKey: 'rdHeaderTextOverlay',
    photoCreditKey: 'rdHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'rdDescTitle',
    paragraphs: ['rdDescP1', 'rdDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: rd_card_image,
    mainLogo: logo,
    mainLogoAltKey: 'rdCardMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'rdCardComplementaryLogoAlt',
    textOverlayKey: 'rdCardTextOverlay',
    photoCreditKey: 'rdCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
  },

  // --- Main Content ---
  details: {
    titleKey: 'rdDetailsTitle',
    items: [
      { labelKey: 'rdDetailLabel1', valueKey: 'rdDetailValue1' },
      { labelKey: 'rdDetailLabel2', valueKey: 'rdDetailValue2' },
    ],
  },

  // --- Curriculim Content ---
  curriculum: {
    titleKey: 'rdCurriculumTitle',
    modules: [
      {
        id: 'conocimientos',
        nameKey: 'rdModule1Name',
        descriptionKey: 'rdModule1Desc',
      },
      {
        id: 'autorrescate',
        nameKey: 'rdModule2Name',
        descriptionKey: 'rdModule2Desc',
      },
      {
        id: 'respuesta',
        nameKey: 'rdModule3Name',
        descriptionKey: 'rdModule3Desc',
      },
      {
        id: 'gestion-emergencias',
        nameKey: 'rdModule4Name',
        descriptionKey: 'rdModule4Desc',
      },
      {
        id: 'rescate',
        nameKey: 'rdModule5Name',
        descriptionKey: 'rdModule5Desc',
      },
    ],
    notes: ['rdCurriculumNote1'],
  },

  // --- Requirements ---
  requirements: {
    titleKey: 'rdReqsTitle',
    items: [
      'rdReqItem1',
      'rdReqItem2',
      'rdReqItem3',
      'rdReqItem4',
      'rdReqItem5',
    ],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: 'rdIncludedTitle',
    items: [
      'rdIncludeItem1',
      'rdIncludeItem2',
      'rdIncludeItem3',
      'rdIncludeItem4',
      'rdIncludeItem5',
      'rdIncludeItem6',
      'rdIncludeItem7',
      'rdIncludeItem8',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'rdGalleryTitle',
    images: [
      {
        backgroundImage: rd_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'rdGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'rdGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'rdGaleryImg1TextOverlay',
        photoCreditKey: 'rdGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: rd_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'rdGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'rdGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'rdGaleryImg2TextOverlay',
        photoCreditKey: 'rdGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: rd_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'rdGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'rdGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'rdGaleryImg3TextOverlay',
        photoCreditKey: 'rdGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: rd_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'rdGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'rdGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'rdGaleryImg4TextOverlay',
        photoCreditKey: 'rdGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },

  // --- Call to Action ---
  // Used if no trips are scheduled for this course.
  cta: {
    titleKey: 'rdCtaTitle',
    buttonTextKey: 'rdCtaButtonText',
    link: '/contacto',
  },
};
