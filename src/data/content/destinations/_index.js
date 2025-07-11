// src/data/content/destinations/_index.js
import { publishedExperiences } from '../experiences/_index.js';
import { santaMartaDestination } from './santa-marta.js'; // Imports the full object

// This should reference the full object imported from santa-marta.js
export const destinationsById = {
  'santa-marta': santaMartaDestination,
};

export const allDestinations = Object.values(destinationsById);

export const publishedDestinations = allDestinations.filter(
  (dest) => dest.status === 'published'
);

/**
 * Gets all published destinations and attaches their respective upcoming trips.
 * @returns {Array} An array of destination objects, each with an 'upcomingTrips' array property.
 */
export const getDestinationsWithUpcomingTrips = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return publishedDestinations.map((destination) => {
    const associatedTrips = publishedExperiences
      .filter(
        (trip) =>
          trip.destinationId === destination.id &&
          new Date(trip.details.endDate) >= today
      )
      .sort(
        (a, b) => new Date(a.details.startDate) - new Date(b.details.startDate)
      );

    return {
      ...destination,
      upcomingTrips: associatedTrips,
    };
  });
};
