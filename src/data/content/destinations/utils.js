// src/data/content/destinations/utils.js

import { destinations as rawDestinations } from './index';
import { ROUTES } from '@/data/global/constants';

/**
 * Attach dynamic URL and linkPath fields to each destination.
 * @returns Array of destination objects with seo.url and card.linkPath populated.
 */
export function attachDestinationUrls() {
  return rawDestinations.map((dest) => {
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
