// src/data/global/diveSiteOptions.js

/**
 * Predefined dive levels.
 * The 'id' is used in dive site data, and 'translationKey' is used for i18n.
 */
export const DIVE_LEVELS = [
  { id: 'dsd', translationKey: 'dsdLevelKey' },
  { id: 'open-water-diver', translationKey: 'openWaterDiverLevelKey' },
  {
    id: 'advanced-open-water-diver',
    translationKey: 'advancedOpenWaterDiverLevelKey',
  },
  { id: 'technical-diver', translationKey: 'technicalDiverLevelKey' },
  { id: 'any', translationKey: 'anyLevelKey' },
];

/**
 * Predefined dive difficulties.
 */
export const DIVE_DIFFICULTIES = [
  { id: 'easy', translationKey: 'easyDifficultyKey' },
  { id: 'medium', translationKey: 'mediumDifficultyKey' },
  { id: 'hard', translationKey: 'hardDifficultyKey' },
  { id: 'expert', translationKey: 'expertDifficultyKey' },
];

/**
 * Predefined dive types (e.g., Reef, Wall, Wreck).
 */
export const DIVE_TYPES = [
  { id: 'reef', translationKey: 'reefTypeKey' }, // Icon: Reef.jsx
  { id: 'wreck', translationKey: 'wreckTypeKey' }, // Icon: Wreck.jsx
  { id: 'wall', translationKey: 'wallTypeKey' }, // Icon: Wall.jsx
  { id: 'pinnacle', translationKey: 'pinnacleTypeKey' }, // Icon: Pinnacle.jsx
  { id: 'cavern', translationKey: 'cavernTypeKey' }, // Icon: Cave.jsx
  { id: 'cave', translationKey: 'caveTypeKey' }, // Icon: Cave.jsx
  { id: 'drift', translationKey: 'driftTypeKey' }, // Icon: Drift.jsx
  { id: 'muck', translationKey: 'muckTypeKey' }, // Icon: Muck.jsx
  { id: 'blue-hole', translationKey: 'blueHoleTypeKey' }, // Icon: BlueHole.jsx
  { id: 'cenote', translationKey: 'cenoteTypeKey' }, // Icon: Cave.jsx
  { id: 'freshwater', translationKey: 'freshwaterTypeKey' }, // Icon: FreshWater.jsx
  { id: 'artificial-reef', translationKey: 'artificialReefTypeKey' }, // Icon: ArtificialReef.jsx
];

/**
 * Predefined dive conditions.
 */
export const DIVE_CONDITIONS = [
  { id: 'current', translationKey: 'currentConditionKey' },
  { id: 'mild-current', translationKey: 'mildCurrentConditionKey' },
  { id: 'moderate-current', translationKey: 'moderateCurrentConditionKey' },
  { id: 'strong-current', translationKey: 'strongCurrentConditionKey' },
  { id: 'deep', translationKey: 'deepConditionKey' },
  { id: 'visibility', translationKey: 'visibilityConditionKey' },
  {
    id: 'variable-visibility',
    translationKey: 'variableVisibilityConditionKey',
  },
  { id: 'good-visibility', translationKey: 'goodVisibilityConditionKey' },
  { id: 'limited-visibility', translationKey: 'limitedVisibilityConditionKey' },
  { id: 'thermocline', translationKey: 'thermoclineConditionKey' },
  { id: 'surge', translationKey: 'surgeConditionKey' },
  { id: 'surface', translationKey: 'surfaceConditionKey' },
  { id: 'rough-surface', translationKey: 'roughSurfaceConditionKey' },
  { id: 'calm-surface', translationKey: 'calmSurfaceConditionKey' },
  { id: 'entry', translationKey: 'entryConditionKey' },
  { id: 'boat-entry', translationKey: 'boatEntryConditionKey' },
  { id: 'shore-entry', translationKey: 'shoreEntryConditionKey' },
  { id: 'night', translationKey: 'nightConditionKey' },
];

/**
 * Predefined dive tags grouped by categories for better organization.
 */
export const DIVE_TAG_CATEGORIES = [
  {
    id: 'marine-life',
    translationKey: 'marineLifeTagCategory',
    tags: [
      { id: 'sharks', translationKey: 'sharksTag' },
      { id: 'turtles', translationKey: 'turtlesTag' },
      { id: 'manta-rays', translationKey: 'mantaRaysTag' },
      { id: 'whale-sharks', translationKey: 'whaleSharksTag' },
      { id: 'nudibranchs', translationKey: 'nudibranchsTag' },
      { id: 'macro-life', translationKey: 'macroLifeTag' },
      { id: 'schooling-fish', translationKey: 'schoolingFishTag' },
      { id: 'barracuda', translationKey: 'barracudaTag' },
      { id: 'octopus', translationKey: 'octopusTag' },
      { id: 'dolphins', translationKey: 'dolphinsTag' },
      { id: 'seahorses', translationKey: 'seahorsesTag' },
      { id: 'frogfish', translationKey: 'frogfishTag' },
      { id: 'reef-fish', translationKey: 'reefFishTag' },
      { id: 'pelagics', translationKey: 'pelagicsTag' },
    ],
  },
  {
    id: 'dive-characteristics',
    translationKey: 'diveCharacteristicsTagCategory',
    tags: [
      { id: 'photography', translationKey: 'photographyTag' },
      { id: 'night-dive', translationKey: 'nightDiveTag' },
      { id: 'drift-dive', translationKey: 'driftDiveTag' },
      { id: 'deep-dive', translationKey: 'deepDiveTag' },
      { id: 'technical-dive', translationKey: 'technicalDiveTag' },
      { id: 'beginner-friendly', translationKey: 'beginnerFriendlyTag' },
      { id: 'advanced-only', translationKey: 'advancedOnlyTag' },
      { id: 'historical', translationKey: 'historicalTag' },
      { id: 'biodiversity-hotspot', translationKey: 'biodiversityHotspotTag' },
      { id: 'conservation-area', translationKey: 'conservationAreaTag' },
      { id: 'cold-water', translationKey: 'coldWaterTag' },
      { id: 'warm-water', translationKey: 'warmWaterTag' },
    ],
  },
  {
    id: 'features',
    translationKey: 'featuresTagCategory',
    tags: [
      { id: 'swim-throughs', translationKey: 'swimThroughsTag' },
      { id: 'canyons', translationKey: 'canyonsTag' },
      { id: 'caves', translationKey: 'cavesTag' },
      { id: 'overhangs', translationKey: 'overhangsTag' },
      { id: 'soft-corals', translationKey: 'softCoralsTag' },
      { id: 'hard-corals', translationKey: 'hardCoralsTag' },
      { id: 'anemones', translationKey: 'anemonesTag' },
    ],
  },
  {
    id: 'location',
    translationKey: 'locationTagCategory',
    tags: [
      { id: 'caribbean', translationKey: 'caribbeanTag' },
      { id: 'pacific', translationKey: 'pacificTag' },
      { id: 'red-sea', translationKey: 'redSeaTag' },
      { id: 'indian-ocean', translationKey: 'indianOceanTag' },
      { id: 'tropical', translationKey: 'tropicalTag' },
      { id: 'temperate', translationKey: 'temperateTag' },
    ],
  },
];

// Helper functions to easily retrieve options by ID
export const getDiveLevelById = (id) =>
  DIVE_LEVELS.find((level) => level.id === id);
export const getDifficultyById = (id) =>
  DIVE_DIFFICULTIES.find((diff) => diff.id === id);
export const getDiveTypeById = (id) =>
  DIVE_TYPES.find((type) => type.id === id);
export const getDiveConditionById = (id) =>
  DIVE_CONDITIONS.find((condition) => condition.id === id);
export const getDiveTagById = (id) => {
  for (const category of DIVE_TAG_CATEGORIES) {
    const tag = category.tags.find((tagItem) => tagItem.id === id);
    if (tag) return tag;
  }
  return null;
};
