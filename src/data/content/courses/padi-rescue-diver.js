// src/data/content/courses/padi-rescue-diver.js

// Import all local images for this course.
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
  },

  // --- Page Header & Card Display ---
  header: {
    titleKey: 'rdHeaderTitle',
    subtitleKey: 'rdHeaderSubtitle',
    headerImageUrl: rd_header_background, // For the detail page banner.
    imageUrl: rd_card_image, // For the course card on the experiences page.
  },

  // --- Main Content ---
  description: {
    titleKey: 'rdDescTitle',
    paragraphs: ['rdDescP1', 'rdDescP2'],
  },
  details: {
    titleKey: 'rdDetailsTitle',
    items: [
      { labelKey: 'rdDetailLabel1', valueKey: 'rdDetailValue1' },
      { labelKey: 'rdDetailLabel2', valueKey: 'rdDetailValue2' },
    ],
  },
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

  // --- Lists for Checklist Cards ---
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

  // --- Visuals ---
  gallery: {
    titleKey: 'rdGalleryTitle',
    images: [rd_gallery_01, rd_gallery_02, rd_gallery_03, rd_gallery_04],
  },

  // --- Call to Action ---
  // Used if no trips are scheduled for this course.
  cta: {
    titleKey: 'rdCtaTitle',
    buttonTextKey: 'rdCtaButtonText',
    link: '/contacto',
  },
};
