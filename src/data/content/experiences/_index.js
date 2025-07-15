// src/data/content/experiences/_index.js
import { coursesById } from '../courses/_index.js';
import { experienciaSantaMartaSeptiembre2025 } from './experiencia-santa-marta-septiembre-2025.js';
// --- As you create new trip files, import them here. ---
// import { expMalpelo2026 } from './exp-malpelo-2026.js';

/**
 * A central registry of all available experiences, indexed by their unique ID.
 * This allows for efficient lookups (e.g., experiencesById['experiencia-santa-marta-sept-2025']).
 * To add a new experience, import it above and add it to this object.
 */
export const experiencesById = {
  'experiencia-santa-marta-sept-2025': experienciaSantaMartaSeptiembre2025,
  // 'experiencia-malpelo-2026': expMalpelo2026,
};

/**
 * An array of all experience objects, useful for administrative lists or debugging.
 */
export const allExperiences = Object.values(experiencesById);

/**
 * An array containing only the experiences marked with status: 'published'.
 * This is the primary array used to display content on the live site.
 */
export const publishedExperiences = allExperiences.filter(
  (exp) => exp.status === 'published'
);

/**
 * Finds all published experiences for a specific destination ID.
 * @param {string} destId - The ID of the destination (e.g., 'santa-marta').
 * @returns {object[]} An array of experience objects matching the destination.
 */
export const getExperiencesByDestination = (destId) => {
  return publishedExperiences.filter((exp) => exp.destinationId === destId);
};

/**
 * Finds a specific trip by its ID and retrieves the full data object for any courses it offers.
 * This is the primary data-fetching utility for the Experience Detail Page.
 * @param {string} tripId - The ID of the experience/trip to find.
 * @returns {{tripData: object, offeredCoursesData: object[]}|null} An object containing the trip data and an array of its offered courses, or null if not found.
 */
export const getExperienceDetails = (tripId) => {
  const tripData = experiencesById[tripId];

  // If the trip doesn't exist, return null for the page component to handle.
  if (!tripData) return null;

  // Find the full course objects for the IDs listed in the trip data.
  const offeredCoursesData = (tripData.offeredCourses?.ids || [])
    .map((courseId) => coursesById[courseId])
    .filter(Boolean); // .filter(Boolean) elegantly removes any undefined/null results if a course ID was not found.

  return { tripData, offeredCoursesData };
};
