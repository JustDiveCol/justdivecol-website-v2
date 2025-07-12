// src/data/content/courses/padi-advanced-open-water-diver.js

// Import all local images for this course.
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

  // --- Page Header & Card Display ---
  header: {
    titleKey: 'aowdHeaderTitle',
    subtitleKey: 'aowdHeaderSubtitle',
    headerImageUrl: aowd_header_background, // For the detail page banner.
    imageUrl: aowd_card_image, // For the course card on the experiences page.
  },

  // --- Main Content ---
  description: {
    titleKey: 'aowdDescTitle',
    paragraphs: ['aowdDescP1', 'aowdDescP2'],
  },
  details: {
    titleKey: 'aowdDetailsTitle',
    items: [
      { labelKey: 'aowdDetailLabel1', valueKey: 'aowdDetailValue1' },
      { labelKey: 'aowdDetailLabel2', valueKey: 'aowdDetailValue2' },
    ],
  },
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

  // --- Lists for Checklist Cards ---
  requirements: {
    titleKey: 'aowdReqsTitle',
    items: ['aowdReqItem1', 'aowdReqItem2', 'aowdReqItem3', 'aowdReqItem4'],
  },
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

  // --- Visuals ---
  gallery: {
    titleKey: 'aowdGalleryTitle',
    images: [
      aowd_gallery_01,
      aowd_gallery_02,
      aowd_gallery_03,
      aowd_gallery_04,
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
