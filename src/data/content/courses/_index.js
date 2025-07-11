// src/data/content/courses/_index.js
import { padiOpenWaterDiverCourse } from './padi-open-water-diver.js';
import { publishedExperiences } from '../experiences/_index.js';
// --- Import other courses here as you create them ---
// import { advancedOpenWaterCourse } from './padi-advanced.js';

export const coursesById = {
  'padi-open-water-diver': padiOpenWaterDiverCourse,
  // 'padi-advanced-open-water': advancedOpenWaterCourse,
};

export const allCourses = Object.values(coursesById);
export const publishedCourses = allCourses.filter(
  (c) => c.status === 'published'
);

/**
 * Gets all published courses and adds a calculated 'availability' status
 * based on whether they are offered in any upcoming trips.
 * @returns {Array} An array of course objects with an added 'availability' property.
 */
export const getCoursesWithAvailability = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingTrips = publishedExperiences.filter(
    (trip) => new Date(trip.details.endDate) >= today
  );

  return publishedCourses.map((course) => {
    const isOffered = upcomingTrips.some((trip) =>
      trip.offeredCourses?.ids.includes(course.id)
    );
    return {
      ...course,
      availability: isOffered ? 'statusAvailable' : 'statusUpcoming', // We use keys for translation
    };
  });
};

/**
 * Finds a specific course by its ID and also finds all upcoming trips that offer it.
 * @param {string} courseId - The ID of the course to find.
 * @returns {object} An object containing { courseData, availableTrips } or null if not found.
 */
export const getCourseDetails = (courseId) => {
  const courseData = coursesById[courseId];

  // If the course doesn't exist, return null
  if (!courseData) {
    return null;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter experiences to find matching trips for this course
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
