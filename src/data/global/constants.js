export const SHARED_TRANSLATION_KEYS = {
  photoCreditPrefixKey: 'commonPhotoCreditPrefix',

  // --- Certifications ---
  certificationsTextOverlayKey: 'certificationTextOverlay',

  certificationsDefaultNoteKey: 'certificationsDefaultNote',

  certificationsDetailsTitleKey: 'certificationsDetailsTitle',
  certificationsRequirementsTitleKey: 'certificationsRequirementsTitle',
  certificationsCurriculumTitleKey: 'certificationsCurriculumTitle',
  certificationsIncludedTiteKey: 'certificationsIncludedTite',
  certificationsGalleryTiteKey: 'certificationsGalleryTite',

  // --- Destinations ---
  destinationsTextOverlayKey: 'destinationsTextOverlay',
  destinationsExtremeTextOverlayKey: 'destinationsExtremeTextOverlay',

  destinationsDetailsTitleKey: 'destinationsDetailsTitle',
  destinationsDiveSitesTitleKey: 'destinationsDiveSitesTitle',
  destinationsGalleryTiteKey: 'destinationsGalleryTite',

  // --- Experiences ---
  experiencesDetailsTitleKey: 'experiencesDetailsTitle',
  experiencesPaymentTitleKey: 'experiencesPaymentTitle',
  experiencesItineraryTitleKey: 'experiencesItineraryTitle',
  experiencesIncludedTitleKey: 'experiencesIncludedTitle',
  experiencesNotIncludedTitleKey: 'experiencesNotIncludedTitle',
  experiencesGalleryTitleKey: 'experiencesGalleryTitle',

  experiencesDefaultNoteKey: 'experiencesDefaultNote',
  experiencesDefaultPaymentNoteKey: 'experiencesDefaultPaymentNote',

  // --- Button Texts ---
  experiencesTextButtonKey: 'experiencesTextButton',
  divesitesTextButtonKey: 'divesitesTextButton',
  aboutUsTextButtonKey: 'aboutUsTextButton',
  safetyTextButtonKey: 'safetyTextButton',
  contactTextButtonKey: 'contactTextButton',
  storeTextButtonKey: 'storeTextButton',

  experinceTextButtonKey: 'experinceTextButton',
  certificationTextButtonKey: 'certificationTextButton',
  destinationTextButtonKey: 'destinationTextButton',

  // --- Specific Cta Text Button ---
  experinceCtaTextButtonKey: 'experinceCtaTextButton',
  certificationCtaTextButtonKey: 'certificationCtaTextButton',
  destinationCtaTextButtonKey: 'destinationCtaTextButton',

  // --- Whatsapp Message ---
  generalWhatsappMessageKey: 'generalWhatsappMessage',
  experienceWhatsappMessageKey: 'experienceWhatsappMessage',
  destinationWhatsappMessageKey: 'destinationWhatsappMessage',
  certificationWhatsappMessageKey: 'certificationWhatsappMessage',
  customWhatsappMessageKey: 'customWhatsappMessage',
};

export const ROUTES = {
  home: '/',
  experiences: '/experiences',
  certifications: '/certifications',
  divesites: 'divesites',
  about: '/about',
  safety: '/safety',
  contact: '/contact',
  destinations: '/destinations',

  mainStore: 'gear/*',
  store: '/gear',

  certificationDetail: '/certifications/:certificationSlug',
  experienceDetail: 'experiences/:tripId',
  destinationDetail: 'destinations/:destinationId',

  policy: 'policy',
  terms: '/terms',
  privacy: '/privacy',
  faq: '/faq',

  underConstruction: 'underConstruction',
  notFound: '/404',
};

export const BUTTON_TYPES = {
  internal: 'internal',
  external: 'external',
  whatsapp: 'whatsapp',
};

export const IMAGE_VARIANTS = {
  fullscreen: 'fullscreen',
  header: 'header',
  horizontal: 'horizontal',
  vertical: 'vertical',
  square: 'square',
};

export const LANGUAGES = {
  ES: 'es',
  EN: 'en',
};

export const STATUS = {
  published: 'published',
  draft: 'draft',
};

export const CERTIFICATION_CATEGORIES = {
  owd: 'open-water-diver',
  aowd: 'advanced-open-water-diver',
};

export const CERTIFICATION_IDS = {
  owd: 'padi-open-water-diver',
  aowd: 'padi-advanced-open-water-diver',
};

export const CATEGORY_REGION = {
  regionCaribe: 'regionCaribe',
};

export const CURRENCY = {
  COP: 'COP',
  USD: 'USD',
};

export const AVAILABILITY = {
  available: 'available',
  last: 'last',
  soldOut: 'soldOut',
};
