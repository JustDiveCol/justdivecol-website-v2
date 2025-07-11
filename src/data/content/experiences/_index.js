// src/data/content/experiences/_index.js
import { coursesById } from '../courses/_index.js';
import { expSmSept2025 } from './exp-sm-sept-2025.js';

// --- As you create new trip files, import them here ---
// import { expMalpelo2026 } from './exp-malpelo-2026.js';

/**
 * An object containing all experiences, indexed by their unique ID.
 * This allows for very fast lookups, e.g., experiencesById['expedicion-santa-marta-sept-2025']
 */
export const experiencesById = {
  'expedicion-santa-marta-sept-2025': expSmSept2025,
  // 'expedicion-malpelo-2026': expMalpelo2026,
};

/**
 * An array of all experience objects, useful for administrative lists.
 */
export const allExperiences = Object.values(experiencesById);

/**
 * An array containing only the experiences marked with status: 'published'.
 * This is what you will typically use to display content on the live site.
 */
export const publishedExperiences = allExperiences.filter(
  (exp) => exp.status === 'published'
);

/**
 * Finds all published experiences for a specific destination ID.
 * @param {string} destId - The ID of the destination (e.g., 'santa-marta').
 * @returns {Array} - An array of experience objects.
 */
export const getExperiencesByDestination = (destId) => {
  return publishedExperiences.filter((exp) => exp.destinationId === destId);
};

/**
 * Finds a specific trip by ID and also gets the full data for any courses it offers.
 * @param {string} tripId - The ID of the experience/trip to find.
 * @returns {object} An object containing { tripData, offeredCoursesData } or null.
 */
export const getExperienceDetails = (tripId) => {
  const tripData = experiencesById[tripId];

  if (!tripData) return null;

  const offeredCoursesData = (tripData.offeredCourses?.ids || [])
    .map((courseId) => coursesById[courseId])
    .filter(Boolean); // .filter(Boolean) removes any undefined/null if a course ID wasn't found

  return { tripData, offeredCoursesData };
};
