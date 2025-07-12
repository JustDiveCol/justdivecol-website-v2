// src/data/content/courses/padi-open-water-diver.js

// Import all local images for this course.
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
  },

  // --- Page Header & Card Display ---
  header: {
    titleKey: 'owdHeaderTitle',
    subtitleKey: 'owdHeaderSubtitle',
    headerImageUrl: owd_header_background, // For the detail page banner.
    imageUrl: owd_card_image, // For the course card on the experiences page.
  },

  // --- Main Content ---
  description: {
    titleKey: 'owdDescTitle',
    paragraphs: ['owdDescP1', 'owdDescP2'],
  },
  details: {
    titleKey: 'owdDetailsTitle',
    items: [
      { labelKey: 'owdDetailLabel1', valueKey: 'owdDetailValue1' },
      { labelKey: 'owdDetailLabel2', valueKey: 'owdDetailValue2' },
    ],
  },
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

  // --- Lists for Checklist Cards ---
  requirements: {
    titleKey: 'owdReqsTitle',
    items: ['owdReqItem1', 'owdReqItem2', 'owdReqItem3', 'owdReqItem4'],
  },
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

  // --- Visuals ---
  gallery: {
    titleKey: 'owdGalleryTitle',
    images: [owd_gallery_01, owd_gallery_02, owd_gallery_03, owd_gallery_04],
  },

  // --- Call to Action ---
  // Used if no trips are scheduled for this course.
  cta: {
    titleKey: 'owdCtaTitle',
    buttonTextKey: 'owdCtaButtonText',
    link: '/contacto',
  },
};
