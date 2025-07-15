// src/data/content/divesites/_index.js
import { santaMartaDivesites } from './santa-marta-divesites.js';
// import { providenciaDivesites } from './providencia-divesites.js';
// Import other destination-specific dive site files here

const allDivesitesArray = [
  ...santaMartaDivesites,
  // ...providenciaDivesites,
  // ... spread other dive site arrays here
];

export const divesitesById = allDivesitesArray.reduce((acc, diveSite) => {
  acc[diveSite.id] = diveSite;
  return acc;
}, {});

export const allDivesites = allDivesitesArray; // This will now contain all dive sites as a single array

/**
 * Finds a specific dive site by its ID.
 * @param {string} diveSiteId - The ID of the dive site to find.
 * @returns {object|null} The dive site data object, or null if not found.
 */
export const getDiveSiteDetails = (diveSiteId) => {
  return divesitesById[diveSiteId] || null;
};

/**
 * Finds all dive sites for a specific destination.
 * @param {string} destinationId - The ID of the destination.
 * @returns {Array} An array of dive site data objects for the given destination.
 */
export const getDivesitesByDestination = (destinationId) => {
  return allDivesites.filter(
    (diveSite) => diveSite.destinationId === destinationId
  );
};
