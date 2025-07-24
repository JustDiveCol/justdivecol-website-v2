export const SHARED_TRANSLATION_KEYS = {
  // --- Common ---
  VIEW_CALENDAR: 'common:viewCalendar',
  PHOTO_CREDIT_PREFIX: 'common:photoCreditPrefix',
  EXPERIENCES_TEXT_BUTTON: 'common:experiencesTextButton',
  DIVE_SITES_TEXT_BUTTON: 'common:divesitesTextButton',
  ABOUT_US_TEXT_BUTTON: 'common:aboutUsTextButton',
  SAFETY_TEXT_BUTTON: 'common:safetyTextButton',
  CONTACT_TEXT_BUTTON: 'common:contactTextButton',
  STORE_TEXT_BUTTON: 'common:storeTextButton',
  VIEW_DETAILS_LABEL: 'common:viewDetails',
  DAY_LABEL: 'common:day',
  LOADING_LABEL: 'common:loading',
  UPCOMING_DATES_LABEL: 'common:upcomingDates',
  EXPLORE_DESTINATION_LABEL: 'common:exploreDestination',
  ARIA_PREV_LABEL: 'common:ariaPrevious',
  ARIA_GO_TO_PAGE_LABEL: 'common:ariaGoToPage',
  ARIA_NEXT_LABEL: 'common:ariaNext',
  MORE_LABEL: 'common:moreLabel',
  DURATION_FORMAT: 'common:durationFormat',
  DATES_NOT_AVAILABLE: 'common:datesNotAvailable',
  STATUS_AVAILABLE_TEXT: 'common:statusAvailable',
  STATUS_LAST_SEATS_TEXT: 'common:statusLastSeats',
  STATUS_SOLD_OUT_TEXT: 'common:statusSoldOut',
  STATUS_COMPLETE_TEXT: 'common:statusCompleted',
  STATUS_UPCOMING_TEXT: 'common:statusUpcoming',


  // --- Contact ---
  GENERAL_WHATSAPP_MESSAGE: 'contact:generalWhatsappMessage',
  EXPERIENCE_WHATSAPP_MESSAGE: 'contact:experienceWhatsappMessage',
  DESTINATION_WHATSAPP_MESSAGE: 'contact:destinationWhatsappMessage',
  CERTIFICATION_WHATSAPP_MESSAGE: 'contact:certificationWhatsappMessage',
  CUSTOM_WHATSAPP_MESSAGE: 'contact:customWhatsappMessage',
  FOLLOW_US_TEXT: 'contact:contactFollowUs',

  // --- Certifications ---
  CERTIFICATIONS_TEXT_OVERLAY: 'certifications:certificationsTextOverlay',

  CERTIFICATIONS_DEFAULT_NOTE: 'certifications:certificationsDefaultNote',

  CERTIFICATIONS_DETAILS_TITLE: 'certifications:certificationsDetailsTitle',
  CERTIFICATIONS_REQUIREMENTS_TITLE: 'certifications:certificationsRequirementsTitle',
  CERTIFICATIONS_CURRICULUM_TITLE: 'certifications:certificationsCurriculumTitle',
  CERTIFICATIONS_INCLUDED_TITLE: 'certifications:certificationsIncludedTitle',
  CERTIFICATIONS_GALLERY_TITLE: 'certifications:certificationsGalleryTitle',

  CERTIFICATIONS_AVAILABLE_TRIP_TITLE: 'certifications:certificationsAvailableTrip',
  CERTIFICATIONS_NOT_AVAILABLE_TRIP_TITLE: 'certifications:certificationsNotAvailableTrip',

  CERTIFICATION_CTA_BUTTON: 'certifications:certificationCtaTextButton',

  // --- Destinations ---
  DESTINATIONS_TEXT_OVERLAY: 'destinations:destinationsTextOverlay',
  DESTINATIONS_EXTREME_TEXT_OVERLAY: 'destinations:destinationsExtremeTextOverlay',

  DESTINATIONS_DETAILS_TITLE: 'destinations:destinationsDetailsTitle',
  DESTINATIONS_DIVE_SITES_TITLE: 'destinations:destinationsDiveSitesTitle',
  DESTINATIONS_MAP_TITLE: 'destinations:destinationsMapTitle',
  DESTINATIONS_GALLERY_TITLE: 'destinations:destinationsGalleryTitle',
  DESTINATIONS_UNIQUE_FIDS_TITLE: 'destinations:destinationsUniqueFindsTitle',

  DESTINATIONS_AVAILABLE_TRIPS_TITLE: 'destinations:destinationsAvailableTrip',
  DESTINATIONS_NOT_AVAILABLE_TRIPS_TITLE: 'destinations:destinationsNotAvailableTrip',

  DESTINATION_CTA_BUTTON: 'destinations:destinationCtaTextButton',

  // --- Experiences ---
  EXPERIENCES_DETAILS_TITLE: 'experiences:experiencesDetailsTitle',
  EXPERIENCES_PAYMENT_TITLE: 'experiences:experiencesPaymentTitle',
  EXPERIENCES_ITINERARY_TITLE: 'experiences:experiencesItineraryTitle',
  EXPERIENCES_INCLUDED_TITLE: 'experiences:experiencesIncludedTitle',
  EXPERIENCES_NOT_INCLUDED_TITLE: 'experiences:experiencesNotIncludedTitle',
  EXPERIENCES_GALLERY_TITLE: 'experiences:experiencesGalleryTitle',

  EXPERIENCES_DEFAULT_NOTE: 'experiences:experiencesDefaultNote',
  EXPERIENCES_DEFAULT_PAYMENT_NOTE: 'experiences:experiencesDefaultPaymentNote',
  EXPERIENCES_DEFAULT_ITINERARY_NOTE_1: 'experiences:experiencesDefaultItineraryNote1',
  EXPERIENCES_DEFAULT_ITINERARY_NOTE_2: 'experiences:experiencesDefaultItineraryNote2',

  EXPERIENCE_CTA_BUTTON: 'experiences:experinceCtaTextButton',
  
  EXPERIENCE_WITH_TRIPS_TITLE: 'experiencesPage:expWithTripsTitle',
  EXPERIENCE_WITH_NO_TRIPS_TITLE: 'experiencesPage:expWithoutTripsTitle',

  // --- Map ---
  MAP_LABEL: 'map:mapLabel',
  CLEAR_FILTERS_LABEL: 'map:clearFiltersLabel',
  SEARCH_PLACEHOLDER_TEXT: 'map:searchPlaceholder',
  VIEW_MORE_LABEL: 'map:viewMoreLabel',
  MAP_DISCLAMER_TITLE: 'map:mapDisclaimerTitle',
  MAP_DISCLAIMER_TEXT: 'map:mapDisclaimerText',
  MAP_ALL_LABEL: 'map:allLabel',

  // --- Divesites ---
  DESTINATION_LABEL: 'divesites:destinationLabel',
  TYPE_LABEL: 'divesites:typeLabel',
  NO_OPTIONS_AVAILABLE_LABEL: 'divesites:noOptionsAvailable',
  DIFFICULTY_LABEL: 'divesites:difficultyLabel',
  SHOWING_SITES_COUNT_FULL_TEXT: 'divesites:showingSitesCountFull',
  NO_MATCHING_SITES_LABEL: 'divesites:noMatchingSites',
  DEPTH_LABEL: 'divesites:depthLabel',
  LEVEL_REQUIRED_LABEL: 'divesites:levelRequiredLabel',
  CONDITIONS_LABEL: 'divesites:conditionsLabel',
  TAGS_LABEL: 'divesites:tagsLabel',
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
