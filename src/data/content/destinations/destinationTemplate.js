// src/data/content/destinations/destinationTemplate.js

import { STATUS, IMAGE_VARIANTS } from '@/data/global/constants';

// Defines the shape of a destination object
export const destinationTemplate = {
  id: '', // unique string
  status: STATUS.draft, // 'published' | 'draft'
  type: 'destination',
  slug: '', // URL-friendly identifier
  coords: [0, 0], // GeoJSON format [longitude, latitude]
  country: '', // country code or name
  minZoom: 9, // minimum map zoom level
  maxZoom: 16, // maximum map zoom level
  nameKey: '', // translation key for display name
  categoryKey: '', // e.g. region or type of destination
  createdAt: '', // ISO date string
  updatedAt: '', // ISO date string

  // SEO metadata; url will be set dynamically based on slug
  seo: {
    titleKey: '',
    descriptionKey: '',
    keywords: '',
    imageUrl: '',
    url: '', // will be assigned dynamically
  },

  // Header content
  header: {
    backgroundImage: '',
    titleKey: '',
    subtitleKey: '',
    mainLogo: '',
    mainLogoAltKey: '',
    complementaryLogo: '',
    complementaryLogoAltKey: '',
    photoCredit: {
      prefixKey: '',
      text: '',
    },
  },

  // Brief description block
  description: {
    titleKey: '',
    paragraphs: [], // array of translation keys
  },

  // Card configuration for listings
  card: {
    backgroundImage: '',
    mainLogo: '',
    mainLogoAltKey: '',
    textOverlayKey: '',
    photoCredit: {
      prefixKey: '',
      text: '',
    },
    variant: IMAGE_VARIANTS.horizontal,
    linkPath: '', // e.g. `/destinos/${slug}`
  },

  // Detailed info items
  details: {
    titleKey: '',
    items: [
      // array of { labelKey, valueKey }
      /* { labelKey: '', valueKey: '' } */
    ],
  },

  // Dive sites or points of interest
  diveSites: {
    titleKey: '',
    sites: [
      // array of { id, nameKey, descriptionKey }
      /* { id: '', nameKey: '', descriptionKey: '' } */
    ],
  },

  // Unique finds or highlights
  uniqueFinds: {
    titleKey: '',
    items: [], // array of translation keys
  },

  // Photo gallery
  gallery: {
    titleKey: '',
    images: [
      // array of { backgroundImage, altTextKey, captionKey, variant }
      /* {
           backgroundImage: '',
           altTextKey: '',
           captionKey: '',
           photoCredit: { prefixKey: '', text: '' },
           variant: IMAGE_VARIANTS.horizontal
         } */
    ],
  },

  // References to linked experiences
  experienceIds: [], // array of experience IDs
};
