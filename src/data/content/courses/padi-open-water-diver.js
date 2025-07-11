// src/data/content/courses/padi-open-water-diver.js

export const padiOpenWaterDiverCourse = {
  id: 'padi-open-water-diver',
  status: 'published',
  type: 'certification',

  seo: {
    titleKey: 'owdSeoTitle',
    descriptionKey: 'owdSeoDesc',
  },
  header: {
    titleKey: 'owdHeaderTitle',
    subtitleKey: 'owdHeaderSubtitle',
    bannerImageUrl: 'https://placehold.co/1920x600/000/fff?text=Banner',
    imageUrl: 'https://placehold.co/800x600/000/fff?text=Image',
  },
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
    ],
  },
  gallery: {
    titleKey: 'owdGalleryTitle',
    images: [
      'https://placehold.co/800x600/000/fff?text=Imagen+1',
      'https://placehold.co/800x600/000/fff?text=Imagen+2',
      'https://placehold.co/800x600/000/fff?text=Imagen+3',
      'https://placehold.co/800x600/000/fff?text=Imagen+4',
    ],
  },
  cta: {
    titleKey: 'owdCtaTitle',
    buttonTextKey: 'owdCtaButtonText',
    link: '/contacto',
  },
};
