export const SHARED_TRANSLATION_KEYS = {
  photoCreditPrefixKey: 'commonPhotoCreditPrefix',

  // --- Certifications ---
  certificationsTextOverlayKey: 'certificationsTextOverlay',

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
  experiencesDetailsTitleKey: 'experiencesDetailsTitle', // OK
  experiencesPaymentTitleKey: 'experiencesPaymentTitle', // OK
  experiencesItineraryTitleKey: 'experiencesItineraryTitle', // OK
  experiencesIncludedTitleKey: 'experiencesIncludedTitle', // OK
  experiencesNotIncludedTitleKey: 'experiencesNotIncludedTitle', // OK
  experiencesGalleryTitleKey: 'experiencesGalleryTitle', // OK

  experiencesDefaultNoteKey: 'experiencesDefaultNote', // OK
  experiencesDefaultPaymentNoteKey: 'experiencesDefaultPaymentNote', // OK
  experiencesDefaultItineraryNoteKey1: 'experiencesDefaultItineraryNote1', // OK
  experiencesDefaultItineraryNoteKey2: 'experiencesDefaultItineraryNote2', // OK

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
  divesites: '/divesites',
  about: '/about',
  safety: '/safety',
  contact: '/contact',
  destinations: '/destinations',

  mainStore: 'gear/*',
  store: '/gear',

  certificationDetail: '/certifications/:certificationSlug',
  experienceDetail: '/experiences/:experienceSlug/:sessionSlug',
  destinationDetail: '/destinations/:destinationSlug',

  policy: '/policy',
  terms: '/terms',
  privacy: '/privacy',
  faq: '/faq',

  underConstruction: '/underConstruction',
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
  comingSoon: 'comingSoon',
};

export const CAT_TYPE = {
  CERTIFICATION: 'certification',
  DESTINATION: 'destination',
  EXPERIENCE: 'experience',
  CUSTOM: 'custom',
};

export const NAMESPACES = {
  NAVBAR: 'navbar',
  FOOTER: 'footer',
  COMMON: 'common',
  MAP: 'map',
  PAYMENT: 'payment',
  CONTACT: 'contact',
  CERTIFICATIONS: 'certifications',
  DESTINATIONS: 'destinations',
  EXPERIENCES: 'experiences',
  DIVESITES: 'divesites',
  HOME_PAGE: 'homePage',
  EXPERIENCES_PAGE: 'experiencesPage',
  ABOUT_US_PAGE: 'aboutUsPage',
  SAFETY_PAGE: 'safetyPage',
  FAQS_PAGE: 'faqsPage',
  NOT_FOUND_PAGE: 'notFoundPage',
  POLICY_PAGE: 'policyPage',
  PRIVACY_PAGE: 'privacyPage',
  TERMS_PAGE: 'termsPage',
  UNDER_CONSTRUCTION_PAGE: 'underConstructionPage',
};
