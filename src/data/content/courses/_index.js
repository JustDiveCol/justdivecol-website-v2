// src/data/content/courses/_index.js
import { padiOpenWaterDiverCourse } from './padi-open-water-diver.js';
import { publishedExperiences } from '../experiences/_index.js';
// --- Import other course data files here as you create them ---
// import { advancedOpenWaterCourse } from './padi-advanced.js';

/**
 * A central registry of all available courses, indexed by their unique ID.
 * This allows for efficient lookups (e.g., coursesById['padi-open-water-diver']).
 * To add a new course, import it above and add it to this object.
 */
export const coursesById = {
  'padi-open-water-diver': padiOpenWaterDiverCourse,
  // 'padi-advanced-open-water': advancedOpenWaterCourse,
};

// An array containing all course objects, useful for administrative purposes.
export const allCourses = Object.values(coursesById);

// An array containing only the courses marked with status: 'published'.
export const publishedCourses = allCourses.filter(
  (c) => c.status === 'published'
);

/**
 * Gets all published courses and adds a calculated 'availability' status to each.
 * The status is 'statusAvailable' if the course is offered in any upcoming trip,
 * otherwise it is 'statusUpcoming'.
 * @returns {object[]} An array of course objects, each with an added 'availability' property.
 */
export const getCoursesWithAvailability = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to the start of the day.

  // Find all trips that are happening from today onwards.
  const upcomingTrips = publishedExperiences.filter(
    (trip) => new Date(trip.details.endDate) >= today
  );

  return publishedCourses.map((course) => {
    // Check if any upcoming trip offers this specific course.
    const isOffered = upcomingTrips.some((trip) =>
      trip.offeredCourses?.ids.includes(course.id)
    );
    return {
      ...course,
      // The availability key is used for both styling and translation.
      availability: isOffered ? 'statusAvailable' : 'statusUpcoming',
    };
  });
};

/**
 * Finds a specific course by its ID and also finds all upcoming trips that offer it.
 * This is used to populate the course detail pages.
 * @param {string} courseId - The ID of the course to find.
 * @returns {{courseData: object, availableTrips: object[]}|null} An object containing the course data and an array of trips, or null if the course is not found.
 */
export const getCourseDetails = (courseId) => {
  const courseData = coursesById[courseId];

  // If the course doesn't exist, return null to be handled by the page component.
  if (!courseData) {
    return null;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter all published experiences to find trips that offer this course and are in the future.
  const availableTrips = publishedExperiences
    .filter(
      (trip) =>
        trip.offeredCourses?.ids.includes(courseId) &&
        new Date(trip.details.endDate) >= today
    )
    .sort(
      (a, b) => new Date(a.details.startDate) - new Date(b.details.startDate)
    );

  return { courseData, availableTrips };
};
