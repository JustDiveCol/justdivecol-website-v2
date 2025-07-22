export const SHARED_TRANSLATION_KEYS = {
  photoCreditPrefixKey: 'commonPhotoCreditPrefix',

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
  experiences: '/experiences/',
  divesites: 'divesites/',
  about: '/about/',
  safety: '/safety/',
  contact: '/contact/',
  destinations: '/destinations/',

  mainStore: 'gear/*',
  store: '/gear',

  certificationDetail: 'certifications/:certificationId',
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
