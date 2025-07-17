// src/data/content/divesites/santa-marta-divesites.js

import logo from '../../../assets/images/logos/logo.png';

export const santaMartaCenter = [-74.207543, 11.236111];
export const santaMartaZoom = 10;

export const santaMartaDivesites = {
  id: 'santa-marta',
  center: [-74.207543, 11.236111],
  zoom: 10,
  minZoom: 10,
  maxZoom: 16,
  sites: [
    {
      id: 'bajo-del-pescador-sm',
      nameKey: 'bajoDelPescadorSmName',
      destinationId: 'santa-marta',
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
    {
      id: 'barcaza-profunda-sm',
      nameKey: 'barcazaProfundaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.22322, 11.25151],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~40m (~130 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'hard', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['wreck'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'deep', 'good-visibility'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'barcazaProfundaSmDescriptionP1',
      descriptionP2Key: 'barcazaProfundaSmDescriptionP2',
      tagsIds: [
        'historical',
        'technical-dive',
        'reef-fish',
        'hard-corals',
        'warm-water',
        'advanced-only',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=barcazaProfundaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'barcazaProfundaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'barcazaProfundaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'barcazaProfundaSmXXTextOverlay',
          photoCreditKey: 'barcazaProfundaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'barco-hundido-sm',
      nameKey: 'barcoHundidoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.238819, 11.21381],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~30m (~100 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['wreck'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'barcoHundidoSmDescriptionP1',
      descriptionP2Key: 'barcoHundidoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'historical',
        'advanced-only',
        'warm-water',
        'biodiversity-hotspot',
        'swim-throughs',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=barcoHundidoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'barcoHundidoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'barcoHundidoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'barcoHundidoSmXXTextOverlay',
          photoCreditKey: 'barcoHundidoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'caga-pajaro-sm',
      nameKey: 'cagaPajaroSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.20035, 11.32104],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~40m (~130 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'moderate-current',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'cagaPajaroSmDescriptionP1',
      descriptionP2Key: 'cagaPajaroSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'turtles',
        'sharks',
        'barracuda',
        'advanced-only',
        'warm-water',
        'biodiversity-hotspot',
        'deep-dive',
        'historical',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=cagaPajaroSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'cagaPajaroSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'cagaPajaroSmXXComplementaryLogoAlt',
          // textOverlayKey: 'cagaPajaroSmXXTextOverlay',
          photoCreditKey: 'cagaPajaroSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'calderon-sm',
      nameKey: 'calderonSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.235234, 11.212113],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~18m (~60 feet)',
      levelRequiredId: 'none', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'shore-entry', 'good-visibility'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'calderonSmDescriptionP1',
      descriptionP2Key: 'calderonSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'nudibranchs',
        'macro-life',
        'beginner-friendly',
        'warm-water',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=calderonSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'calderonSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'calderonSmXXComplementaryLogoAlt',
          // textOverlayKey: 'calderonSmXXTextOverlay',
          photoCreditKey: 'calderonSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'calichan-sm',
      nameKey: 'calichanSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.20035, 11.32104],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~40m (~130 feet)',
      levelRequiredId: 'none', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'shore-entry',
        'boat-entry',
        'variable-visibility',
        'mild-current',
        'calm-surface',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'calichanSmDescriptionP1',
      descriptionP2Key: 'calichanSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'macro-life',
        'beginner-friendly',
        'advanced-only',
        'deep-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=calichanSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'calichanSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'calichanSmXXComplementaryLogoAlt',
          // textOverlayKey: 'calichanSmXXTextOverlay',
          photoCreditKey: 'calichanSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'cantil-granate-sm',
      nameKey: 'cantilGranateSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19468, 11.30207],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~30m (~100 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['wall'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'cantilGranateSmDescriptionP1',
      descriptionP2Key: 'cantilGranateSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'swim-throughs',
        'night-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=cantilGranateSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'cantilGranateSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'cantilGranateSmXXComplementaryLogoAlt',
          // textOverlayKey: 'cantilGranateSmXXTextOverlay',
          photoCreditKey: 'cantilGranateSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'el-coro-sm',
      nameKey: 'elCoroSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19128, 11.3159],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~40m (~130 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'hard', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['pinnacle'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'moderate-current',
        'strong-current',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'elCoroSmDescriptionP1',
      descriptionP2Key: 'elCoroSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'sharks',
        'macro-life',
        'advanced-only',
        'deep-dive',
        'warm-water',
        'biodiversity-hotspot',
        'caves',
        'swim-throughs',
        'pelagics',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=elCoroSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'elCoroSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'elCoroSmXXComplementaryLogoAlt',
          // textOverlayKey: 'elCoroSmXXTextOverlay',
          photoCreditKey: 'elCoroSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'el-morro-chico-sm',
      nameKey: 'elMorroChicoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.22273, 11.25143],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~30m (~100 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['drift'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'moderate-current',
        'surge',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'elMorroChicoSmDescriptionP1',
      descriptionP2Key: 'elMorroChicoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'soft-corals',
        'hard-corals',
        'drift-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=elMorroChicoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'elMorroChicoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'elMorroChicoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'elMorroChicoSmXXTextOverlay',
          photoCreditKey: 'elMorroChicoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'el-remanso-sm',
      nameKey: 'elRemansoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.20528, 11.27109],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~12m (~40 feet)',
      levelRequiredId: 'none', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'calm-surface',
        'mild-current',
        'good-visibility',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'elRemansoSmDescriptionP1',
      descriptionP2Key: 'elRemansoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'beginner-friendly',
        'warm-water',
        'night-dive',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=elRemansoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'elRemansoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'elRemansoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'elRemansoSmXXTextOverlay',
          photoCreditKey: 'elRemansoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'el-torin-sm',
      nameKey: 'elTorinSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19078, 11.31103],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~20m (~65 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'good-visibility', 'calm-surface'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'elTorinSmDescriptionP1',
      descriptionP2Key: 'elTorinSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'biodiversity-hotspot',
        'warm-water',
        'photography',
        'beginner-friendly',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=elTorinSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'elTorinSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'elTorinSmXXComplementaryLogoAlt',
          // textOverlayKey: 'elTorinSmXXTextOverlay',
          photoCreditKey: 'elTorinSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'inca-inca-sm',
      nameKey: 'incaIncaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.23471, 11.21601],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~12m (~40 feet)',
      levelRequiredId: 'none', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['shore-entry', 'calm-surface', 'good-visibility'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'incaIncaSmDescriptionP1',
      descriptionP2Key: 'incaIncaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'macro-life',
        'beginner-friendly',
        'warm-water',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=incaIncaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'incaIncaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'incaIncaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'incaIncaSmXXTextOverlay',
          photoCreditKey: 'incaIncaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'la-antena-sm',
      nameKey: 'laAntenaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.2, 11.261171],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~18m (~60 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'mild-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'laAntenaSmDescriptionP1',
      descriptionP2Key: 'laAntenaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'nudibranchs',
        'photography',
        'beginner-friendly',
        'warm-water',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=laAntenaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'laAntenaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'laAntenaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'laAntenaSmXXTextOverlay',
          photoCreditKey: 'laAntenaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'la-pecera-sm',
      nameKey: 'laPeceraSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.1917, 11.29571],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~18m (~60 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'calm-surface',
        'good-visibility',
        'mild-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'laPeceraSmDescriptionP1',
      descriptionP2Key: 'laPeceraSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'turtles',
        'beginner-friendly',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=laPeceraSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'laPeceraSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'laPeceraSmXXComplementaryLogoAlt',
          // textOverlayKey: 'laPeceraSmXXTextOverlay',
          photoCreditKey: 'laPeceraSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'la-piedra-del-chivo-sm',
      nameKey: 'laPiedraDelChivoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19479, 11.32248],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~15m (~50 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'calm-surface',
        'good-visibility',
        'mild-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'laPiedraDelChivoSmDescriptionP1',
      descriptionP2Key: 'laPiedraDelChivoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'beginner-friendly',
        'warm-water',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=laPiedraDelChivoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'laPiedraDelChivoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'laPiedraDelChivoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'laPiedraDelChivoSmXXTextOverlay',
          photoCreditKey: 'laPiedraDelChivoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'la-piedra-del-medio-sm',
      nameKey: 'laPiedraDelMedioSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19446, 11.29695],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~25m (~80 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'laPiedraDelMedioSmDescriptionP1',
      descriptionP2Key: 'laPiedraDelMedioSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'barracuda',
        'pelagics',
        'beginner-friendly',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=laPiedraDelMedioSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'laPiedraDelMedioSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'laPiedraDelMedioSmXXComplementaryLogoAlt',
          // textOverlayKey: 'laPiedraDelMedioSmXXTextOverlay',
          photoCreditKey: 'laPiedraDelMedioSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'la-travesia-sm',
      nameKey: 'laTravesiaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19256, 11.30703],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~25m (~80 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['wall'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'laTravesiaSmDescriptionP1',
      descriptionP2Key: 'laTravesiaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'barracuda',
        'pelagics',
        'drift-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'canyons',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=laTravesiaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'laTravesiaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'laTravesiaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'laTravesiaSmXXTextOverlay',
          photoCreditKey: 'laTravesiaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'la-vuelta-negra-sm',
      nameKey: 'laVueltaNegraSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.1905, 11.31878],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~25m (~80 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['wall'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'laVueltaNegraSmDescriptionP1',
      descriptionP2Key: 'laVueltaNegraSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'canyons',
        'overhangs',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=laVueltaNegraSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'laVueltaNegraSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'laVueltaNegraSmXXComplementaryLogoAlt',
          // textOverlayKey: 'laVueltaNegraSmXXTextOverlay',
          photoCreditKey: 'laVueltaNegraSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'langostas-sm',
      nameKey: 'langostasSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19552, 11.285358],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~20m (~65 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'mild-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'langostasSmDescriptionP1',
      descriptionP2Key: 'langostasSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'canyons',
        'swim-throughs',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=laVueltaNegraSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'laVueltaNegraSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'laVueltaNegraSmXXComplementaryLogoAlt',
          // textOverlayKey: 'laVueltaNegraSmXXTextOverlay',
          photoCreditKey: 'laVueltaNegraSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'las-barcazas-sm',
      nameKey: 'lasBarcazasSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.221257, 11.251176],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~35m (~115 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['wreck'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'mild-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'lasBarcazasSmDescriptionP1',
      descriptionP2Key: 'lasBarcazasSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'historical',
        'advanced-only',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'swim-throughs',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=lasBarcazasSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'lasBarcazasSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'lasBarcazasSmXXComplementaryLogoAlt',
          // textOverlayKey: 'lasBarcazasSmXXTextOverlay',
          photoCreditKey: 'lasBarcazasSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'los-carros-sm',
      nameKey: 'losCarrosSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19123, 11.2917],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '',
      levelRequiredId: '', // Using ID from DIVE_LEVELS
      difficultyId: '', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [''], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'losCarrosSmDescriptionP1',
      descriptionP2Key: 'losCarrosSmDescriptionP2',
      tagsIds: [''], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=losCarrosSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'losCarrosSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'losCarrosSmXXComplementaryLogoAlt',
          // textOverlayKey: 'losCarrosSmXXTextOverlay',
          photoCreditKey: 'losCarrosSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'sisiguaca-sm',
      nameKey: 'sisiguacaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.203385, 11.270821],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~20m (~65 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'sisiguacaSmDescriptionP1',
      descriptionP2Key: 'sisiguacaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'barracuda',
        'canyons',
        'swim-throughs',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=sisiguacaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'sisiguacaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'sisiguacaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'sisiguacaSmXXTextOverlay',
          photoCreditKey: 'sisiguacaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'morrito-largo-sm',
      nameKey: 'morritoLargoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.20299, 11.31734],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~75m (~245 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'hard', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['pinnacle'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'strong-current',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'morritoLargoSmDescriptionP1',
      descriptionP2Key: 'morritoLargoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'advanced-only',
        'technical-dive',
        'deep-dive',
        'drift-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'pelagics',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=morritoLargoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'morritoLargoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'morritoLargoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'morritoLargoSmXXTextOverlay',
          photoCreditKey: 'morritoLargoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'morro-gaira-sm',
      nameKey: 'morroGairaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.23959, 11.20806],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~25m (~80 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'mild-current',
        'moderate-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'morroGairaSmDescriptionP1',
      descriptionP2Key: 'morroGairaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'beginner-friendly',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=morroGairaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'morroGairaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'morroGairaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'morroGairaSmXXTextOverlay',
          photoCreditKey: 'morroGairaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'morro-santa-marta-sm',
      nameKey: 'morroSantaMartaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.23193, 11.24918],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~30m (~100 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'strong-current',
        'surge',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'morroSantaMartaSmDescriptionP1',
      descriptionP2Key: 'morroSantaMartaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'barracuda',
        'pelagics',
        'advanced-only',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'historical',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=morroSantaMartaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'morroSantaMartaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'morroSantaMartaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'morroSantaMartaSmXXTextOverlay',
          photoCreditKey: 'morroSantaMartaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'oceano-sm',
      nameKey: 'oceanoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19279, 11.29691],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~30m (~100 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['drift'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'strong-current',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'oceanoSmDescriptionP1',
      descriptionP2Key: 'oceanoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'pelagics',
        'barracuda',
        'drift-dive',
        'advanced-only',
        'deep-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=oceanoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'oceanoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'oceanoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'oceanoSmXXTextOverlay',
          photoCreditKey: 'oceanoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'paneles-sm',
      nameKey: 'panelesSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.20007, 11.32509],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~30m (~100 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'expert', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['pinnacle'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'strong-current',
        'good-visibility',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'panelesSmDescriptionP1',
      descriptionP2Key: 'panelesSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'pelagics',
        'barracuda',
        'turtles',
        'advanced-only',
        'technical-dive',
        'deep-dive',
        'drift-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=panelesSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'panelesSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'panelesSmXXComplementaryLogoAlt',
          // textOverlayKey: 'panelesSmXXTextOverlay',
          photoCreditKey: 'panelesSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'paraiso-sm',
      nameKey: 'paraisoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.1956, 11.28902],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~15m (~50 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'calm-surface',
        'good-visibility',
        'mild-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'paraisoSmDescriptionP1',
      descriptionP2Key: 'paraisoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'beginner-friendly',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=paraisoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'paraisoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'paraisoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'paraisoSmXXTextOverlay',
          photoCreditKey: 'paraisoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'paso-del-angel-sm',
      nameKey: 'pasoDelAngelSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.20135, 11.31801],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~40m (~130 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['drift'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'moderate-current',
        'strong-current',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'pasoDelAngelSmDescriptionP1',
      descriptionP2Key: 'pasoDelAngelSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'angel-fish',
        'moray-eels',
        'lobsters',
        'seahorses',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'pelagics',
        'drift-dive',
        'advanced-only',
        'deep-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=pasoDelAngelSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'pasoDelAngelSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'pasoDelAngelSmXXComplementaryLogoAlt',
          // textOverlayKey: 'pasoDelAngelSmXXTextOverlay',
          photoCreditKey: 'pasoDelAngelSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'playaca-sm',
      nameKey: 'playacaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.197457, 11.26182],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~18m (~60 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'shore-entry',
        'calm-surface',
        'good-visibility',
        'mild-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'playacaSmDescriptionP1',
      descriptionP2Key: 'playacaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'beginner-friendly',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=playacaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'playacaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'playacaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'playacaSmXXTextOverlay',
          photoCreditKey: 'playacaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'punta-aguja-sm',
      nameKey: 'puntaAgujaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19941, 11.31844],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~30m (~100 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['pinnacle'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'moderate-current',
        'calm-surface',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'puntaAgujaSmDescriptionP1',
      descriptionP2Key: 'puntaAgujaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'barracuda',
        'pelagics',
        'turtles',
        'beginner-friendly',
        'advanced-only',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'swim-throughs',
        'canyons',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=puntaAgujaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'puntaAgujaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'puntaAgujaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'puntaAgujaSmXXTextOverlay',
          photoCreditKey: 'puntaAgujaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'punta-cabeza-de-negros-sm',
      nameKey: 'puntaCabezaNegrosSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.2369, 11.20972],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~25m (~80 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'moderate-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'puntaCabezaNegrosSmDescriptionP1',
      descriptionP2Key: 'puntaCabezaNegrosSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'moray-eels',
        'lobsters',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'canyons',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=puntaCabezaNegrosSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'puntaCabezaNegrosSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'puntaCabezaNegrosSmXXComplementaryLogoAlt',
          // textOverlayKey: 'puntaCabezaNegrosSmXXTextOverlay',
          photoCreditKey: 'puntaCabezaNegrosSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'punta-gaira-sm',
      nameKey: 'puntaGairaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.24067, 11.21908],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~15m (~50 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'easy', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'calm-surface',
        'good-visibility',
        'mild-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'puntaGairaSmDescriptionP1',
      descriptionP2Key: 'puntaGairaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'beginner-friendly',
        'warm-water',
        'photography',
        'snorkeling',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=puntaGairaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'puntaGairaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'puntaGairaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'puntaGairaSmXXTextOverlay',
          photoCreditKey: 'puntaGairaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'punta-granate-sm',
      nameKey: 'puntaGranateSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19361, 11.29087],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~20m (~65 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'good-visibility',
        'variable-visibility',
        'mild-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'puntaGranateSmDescriptionP1',
      descriptionP2Key: 'puntaGranateSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'angel-fish',
        'moray-eels',
        'lobsters',
        'nudibranchs',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'pelagics',
        'beginner-friendly',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=puntaGranateSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'puntaGranateSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'puntaGranateSmXXComplementaryLogoAlt',
          // textOverlayKey: 'puntaGranateSmXXTextOverlay',
          photoCreditKey: 'puntaGranateSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'punta-venado-sm',
      nameKey: 'puntaVenadoSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.206387, 11.272809],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~18m (~60 feet)',
      levelRequiredId: 'open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'calm-surface',
        'good-visibility',
        'mild-current',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'puntaVenadoSmDescriptionP1',
      descriptionP2Key: 'puntaVenadoSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'crustaceans',
        'octopus',
        'lobsters',
        'macro-life',
        'night-dive',
        'beginner-friendly',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=puntaVenadoSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'puntaVenadoSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'puntaVenadoSmXXComplementaryLogoAlt',
          // textOverlayKey: 'puntaVenadoSmXXTextOverlay',
          photoCreditKey: 'puntaVenadoSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'salichan-sm',
      nameKey: 'salichanSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19327, 11.31067],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~35m (~115 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['reef'], // Using IDs from DIVE_TYPES
      conditionsIds: [
        'boat-entry',
        'variable-visibility',
        'moderate-current',
        'deep',
      ], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'salichanSmDescriptionP1',
      descriptionP2Key: 'salichanSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'soft-corals',
        'schooling-fish',
        'barracuda',
        'pelagics',
        'advanced-only',
        'deep-dive',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'canyons',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=salichanSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'salichanSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'salichanSmXXComplementaryLogoAlt',
          // textOverlayKey: 'salichanSmXXTextOverlay',
          photoCreditKey: 'salichanSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'salidero-sm',
      nameKey: 'salideroSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.19248, 11.30899],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~14m (~45 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'hard', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['drift'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'variable-visibility', 'strong-current'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'salideroSmDescriptionP1',
      descriptionP2Key: 'salideroSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'hard-corals',
        'schooling-fish',
        'barracuda',
        'pelagics',
        'drift-dive',
        'advanced-only',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=salideroSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'salideroSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'salideroSmXXComplementaryLogoAlt',
          // textOverlayKey: 'salideroSmXXTextOverlay',
          photoCreditKey: 'salideroSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    {
      id: 'el-natalia-sm',
      nameKey: 'elNataliaSmName',
      destinationId: 'santa-marta',
      coordinates: [-74.238627, 11.205035],
      countryKey: 'colombiaCountryKey', // This can stay as a direct translation key if countries are not globally categorized
      maxDepth: '~32m (~105 feet)',
      levelRequiredId: 'advanced-open-water-diver', // Using ID from DIVE_LEVELS
      difficultyId: 'medium', // Using ID from DIVE_DIFFICULTIES
      typeIds: ['wreck'], // Using IDs from DIVE_TYPES
      conditionsIds: ['boat-entry', 'good-visibility', 'mild-current', 'deep'], // Using IDs from DIVE_CONDITIONS
      descriptionP1Key: 'elNataliaSmDescriptionP1',
      descriptionP2Key: 'elNataliaSmDescriptionP2',
      tagsIds: [
        'reef-fish',
        'groupers',
        'schooling-fish',
        'gobies',
        'blennies',
        'hard-corals',
        'soft-corals',
        'macro-life',
        'historical',
        'advanced-only',
        'warm-water',
        'biodiversity-hotspot',
        'photography',
        'swim-throughs',
      ], // Using IDs from DIVE_TAGS
      photos: [
        {
          backgroundImage:
            'https://placehold.co/600x400/3498db/ffffff?text=elNataliaSm+Reef',
          mainLogo: logo,
          mainLogoAltKey: 'elNataliaSmXXMainLogoAlt',
          // complementaryLogo: padi,
          // complementaryLogoAltKey: 'elNataliaSmXXComplementaryLogoAlt',
          // textOverlayKey: 'elNataliaSmXXTextOverlay',
          photoCreditKey: 'elNataliaSmXXPhotoCredit',
          variant: 'horizontal',
        },
      ],
    },
    // ... other dive sites
  ],
};
