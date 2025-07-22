// src/data/content/experiences/experienceTemplate.js
import { STATUS, IMAGE_VARIANTS, ROUTES } from '@/data/global/constants';

// Defines the shape of an experience object
export const experienceTemplate = {
  // --- Metadata ---
  id: '', // unique identifier
  status: STATUS.draft, // 'published' | 'draft'
  type: 'experience',
  slug: '', // URL-friendly identifier
  titleKey: '', // translation key for display title
  subtitleKey: '', // translation key for subtitle (optional)
  destinationId: '', // ID of related destination
  certificationIds: [], // array of related certification IDs
  languages: [], // array of ISO codes, e.g., ['es', 'en']
  availability: '', // 'available' | 'last' | 'soldOut'
  startDate: '', // ISO date string for start
  endDate: '', // ISO date string for end
  price: 0, // numeric price
  currency: '', // currency code (e.g., 'USD')
  createdAt: '', // ISO date string
  updatedAt: '', // ISO date string

  // --- SEO metadata; url to be computed dynamically ---
  seo: {
    titleKey: '',
    descriptionKey: '',
    keywords: '',
    imageUrl: '',
    url: '', // computed later as `${ROUTES.EXPERIENCES}/${slug}`
  },

  // --- Header content ---
  header: {
    backgroundImage: '',
    titleKey: '',
    subtitleKey: '',
    photoCredit: {
      prefixKey: '',
      text: '',
    },
  },

  // --- Description block ---
  description: {
    titleKey: '',
    paragraphs: [], // array of translation keys
  },

  // --- Detailed content ---
  details: {
    titleKey: '',
    descriptionKey: '',
    items: [
      // array of { labelKey, valueKey }
      // { labelKey: '', valueKey: '' }
    ],
  },

  // --- Payment Plan ---
  paymentPlan: {
    titleKey: '',
    modules: [
      // array of { id, nameKey, descriptionKey }
      // { id: '', nameKey: '', descriptionKey: '' }
    ],
    notes: [], // array of translation keys
  },

  // --- Itinerary ---
  itinerary: {
    titleKey: '',
    days: [
      // array of { day, titleKey, descriptionKey }
      // { day: 1, titleKey: '', descriptionKey: '' }
    ],
    notes: [], // array of translation keys
  },

  // --- Included / Not included ---
  whatIsIncluded: {
    titleKey: '',
    items: [], // array of translation keys
  },
  whatIsNotIncluded: {
    titleKey: '',
    items: [], // array of translation keys
  },

  // --- Optional gallery ---
  gallery: {
    titleKey: '',
    images: [
      // array of { backgroundImage, altTextKey, captionKey, photoCredit: { prefixKey, text }, variant }
      // { backgroundImage: '', altTextKey: '', captionKey: '', photoCredit: { prefixKey: '', text: '' }, variant: IMAGE_VARIANTS.horizontal }
    ],
  },

  // --- Call-to-action button config ---
  cta: {
    textKey: '',
    translationNS: '',
    action: {
      type: '', // 'internal' | 'external' | 'whatsapp'
      path: '',
      whatsAppMessageKey: '',
      whatsAppMessageValues: {},
      whatsAppMessageNS: '',
    },
    animateOnView: false,
    viewportOptions: { once: true, amount: 0.4 },
  },

  // --- Sessions for multiple dates ---
  sessionIds: [], // array of session identifiers
};
