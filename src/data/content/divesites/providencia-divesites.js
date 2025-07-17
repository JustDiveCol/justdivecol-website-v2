// src/data/content/divesites/santa-marta-divesites.js

import logo from '../../../assets/images/logos/logo.png';

export const providenciaCenter = [-81.37406, 13.353007];
export const providenciaZoom = 10;

export const providenciaDivesites = {
  id: 'providencia',
  center: [-74.207543, 11.236111],
  zoom: 10,
  minZoom: 10,
  maxZoom: 16,
  sites: [
    {
      id: 'bajo-del-pescador-sm',
      nameKey: 'bajoDelPescadorSmName',
      destinationId: 'providencia',
      coordinates: [-74.19631, 11.31663],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~18m (60 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'good-visibility'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'bajoDelPescadorSmDescriptionP1',
      descriptionP2Key: 'bajoDelPescadorSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'turtles',
        'warm-water',
        'beginner-friendly',
        'biodiversity-hotspot',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=bajoDelPescadorSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'bajoDelPescadorSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'bajoDelPescadorSmXXComplementaryLogoAlt',
          // textOverlayKey: 'bajoDelPescadorSmXXTextOverlay',
          photoCreditKey: 'bajoDelPescadorSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },

    // ... other dive sites
  ],
};
