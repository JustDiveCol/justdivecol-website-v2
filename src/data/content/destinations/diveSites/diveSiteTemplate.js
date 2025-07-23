// src/data/content/destinations/diveSiteTemplate.js
import { IMAGE_VARIANTS } from '@/data/global/constants';

// Defines the shape of a dive site object within a destination
export const diveSiteTemplate = {
  // --- Basic metadata ---
  id: '', // unique identifier for the dive site, e.g., 'bajo-del-pescador'
  destinationId: '', // ID of the related destination, e.g., 'santa-marta'
  nameKey: '', // translation key for the dive site name
  descriptionP1Key: '', // translation key for first paragraph description
  descriptionP2Key: '', // optional second paragraph description key

  // --- Dive specifics ---
  maxDepth: '', // e.g., '18 m / 60 ft'
  levelRequiredId: '', // ID from DIVE_LEVELS, e.g., 'open-water-diver'
  difficultyId: '', // ID from DIVE_DIFFICULTIES, e.g., 'easy'
  typeIds: [], // array of IDs from DIVE_TYPES, e.g., ['reef']
  conditionsIds: [], // array of IDs from DIVE_CONDITIONS, e.g., ['boat-entry']
  tagsIds: [], // array of IDs from DIVE_TAGS, e.g., ['reef-fish']

  entryTypeId: [], // ID from DIVE_ENTRY_TYPES (e.g., 'boat-entry' | 'shore-entry')

  // --- Location ---
  coordinates: [], // GeoJSON [lng, lat] for map pin, e.g., [-74.19631, 11.31663]

  // --- Gallery / photos ---
  photos: [
    // array of { backgroundImage, mainLogo, mainLogoAltKey, photoCreditKey, variant }
    // {
    //   backgroundImage: '',
    //   mainLogo: '',
    //   mainLogoAltKey: '',
    //   photoCreditKey: '',
    //   variant: IMAGE_VARIANTS.horizontal,
    // }
  ],

  // --- Optional video ---
  videoUrl: '', // embed URL for a dive site video
};
