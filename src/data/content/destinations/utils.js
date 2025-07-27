// src/data/content/destinations/utils.js

import { destinations as rawDestinations } from './index';
import { diveSites as rawDiveSites } from './diveSites';
import { ROUTES } from '@/data/global/constants';

/**
 * Helper function: Attach dynamic URL and linkPath fields to each destination.
 * @param {Array} destinations - Array of raw destination objects.
 * @returns {Array} Array of destination objects with seo.url and card.linkPath populated.
 */
function attachDestinationUrls(destinations) {
  return destinations.map((dest) => {
    const url = `${ROUTES.destinations}/${dest.slug}`;
    return {
      ...dest,
      seo: {
        ...dest.seo,
        url,
      },
      card: {
        ...dest.card,
        linkPath: url,
      },
    };
  });
}

/**
 * Helper function: Group dive sites by destinationId and attach to destinations.
 * @param {Array} destinations - Array of destination objects (already with URLs).
 * @param {Array} diveSites - Array of all raw dive site objects.
 * @returns {Array} Array of destination objects, each with a 'diveSites' property.

 */
function groupDiveSitesByDestination(destinations, diveSites) {
  const sitesByDest = diveSites.reduce((acc, site) => {
    const key = site.destinationId; // Asegúrate que site.destinationId existe y es correcto
    if (!acc[key]) acc[key] = [];
    acc[key].push(site);
    return acc;
  }, {});

  return destinations.map((dest) => ({
    ...dest,
    diveSites: sitesByDest[dest.id] || [], // Asigna los diveSites encontrados o un array vacío
  }));
}

/**
 * Returns an array of all destinations, enriched with their URLs and attached dive sites.
 * This is the main function to be called by the DataProvider.
 * @returns {Array} Array of enriched destination objects.
 */
export function getEnrichedDestinations() {
  // Paso 1: Adjuntar URLs a los destinos base
  const destinationsWithUrls = attachDestinationUrls(rawDestinations);

  // Paso 2: Agrupar y adjuntar los sitios de buceo a los destinos con URLs
  const finalEnrichedDestinations = groupDiveSitesByDestination(destinationsWithUrls, rawDiveSites);

  return finalEnrichedDestinations;
}
