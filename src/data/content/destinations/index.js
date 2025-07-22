// src/data/content/destinations/index.js

// Import each destination module here
import { santaMartaDestination } from './santa-marta';
// import { providenciaDestination } from './providencia';
// import other destinations as you create them

/**
 * Array of all destination objects.
 * This serves as the single source of truth for raw destination data.
 */
export const destinations = [
  santaMartaDestination,
  // providenciaDestination,
  // add new destinations here
];
