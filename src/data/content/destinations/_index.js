// src/data/content/destinations/_index.js
import { publishedExperiences } from '../experiences/_index.js';
import { santaMartaDestination } from './santa-marta.js';
import { providenciaDestination } from './providencia.js';
import { islaFuerteDestination } from './isla-fuerte.js';
import { malpeloDestination } from './malpelo.js';
// --- Import other destination data files here as you create them ---

/**
 * A central registry of all available destinations, indexed by their unique ID.
 * To add a new destination, import it above and add it to this object.
 */
export const destinationsById = {
  'santa-marta': santaMartaDestination,
  providencia: providenciaDestination,
  'isla-fuerte': islaFuerteDestination,
  malpelo: malpeloDestination,
};

// An array containing all destination objects.
export const allDestinations = Object.values(destinationsById);

// An array containing only the destinations marked with status: 'published'.
export const publishedDestinations = allDestinations.filter(
  (dest) => dest.status === 'published'
);

/**
 * Gets all published destinations and attaches their respective upcoming trips.
 * This function is used to populate the main "Destinations" section on the Experiences page.
 * @returns {object[]} An array of destination objects, each with an added 'upcomingTrips' array property.
 */
export const getDestinationsWithUpcomingTrips = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to the start of the day.

  return publishedDestinations.map((destination) => {
    // For each destination, find all future trips that match its ID.
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
