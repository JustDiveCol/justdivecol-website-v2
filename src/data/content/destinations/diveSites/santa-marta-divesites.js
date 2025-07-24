// src/data/content/destinations/santa-marta-divesites.js
import {
  DIVE_CONDITIONS,
  DIVE_DIFFICULTIES,
  DIVE_LEVELS,
  DIVE_TAG_CATEGORIES,
  DIVE_TYPES,
} from '@/data/global/diveSiteOptions';
import { diveSiteTemplate } from './diveSiteTemplate';

import logo from '@/assets/images/logos/logo.png';
import { IMAGE_VARIANTS } from '@/data/global/constants';

/**
 * Example dive sites data for Santa Marta, extending diveSiteTemplate
 */
export const santaMartaDivesites = [
  {
    ...diveSiteTemplate,
    id: 'bajo-del-pescador',
    destinationId: 'santa-marta',
    isTopSite: true,
    nameKey: 'bajoDelPescadorName',
    descriptionKey: 'bajoDelPescadorDesc',
    descriptionP1Key: 'bajoDelPescadorDescP1',
    descriptionP2Key: 'bajoDelPescadorDescP2',

    maxDepth: '18 m / 60 ft',
    levelRequiredId: 'open-water-diver', // e.g., 'open-water-diver'
    difficultyId: 'easy', // 'easy'
    typeIds: ['reef'],
    conditionsIds: [],
    tagsIds: [],

    coordinates: [-74.19631, 11.31663],

    photos: [
      {
        backgroundImage: 'https://placehold.co/600x400/3498db/ffffff?text=Bajo+del+Pescador',
        mainLogo: logo,
        mainLogoAltKey: 'bajoDelPescadorMainLogoAlt',
        photoCreditKey: 'bajoDelPescadorPhotoCredit',
        variant: IMAGE_VARIANTS.horizontal,
      },
    ],

    videoUrl: 'https://www.youtube.com/embed/example',
  },
];
