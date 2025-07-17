// src/data/content/divesites/_index.js
import { santaMartaDivesites } from './santa-marta-divesites.js';
import { providenciaDivesites } from './providencia-divesites.js';

// Si tienes más destinos después, puedes agregarlos aquí
const destinationConfigs = {
  'santa-marta': santaMartaDivesites,
  providencia: providenciaDivesites,
};

const allDivesitesArray = Object.values(destinationConfigs).flatMap(
  (config) => config.sites
);

export const divesitesById = allDivesitesArray.reduce((acc, diveSite) => {
  acc[diveSite.id] = diveSite;
  return acc;
}, {});

export const allDivesites = allDivesitesArray;

export const getDiveSiteDetails = (diveSiteId) => {
  return divesitesById[diveSiteId] || null;
};

export const getDivesitesByDestination = (destinationId) => {
  return destinationConfigs[destinationId]?.sites || [];
};

const DEFAULT_MAP_CONFIG = {
  center: [-74.297333, 4.570868], // Aproximado al centro del país
  zoom: 4,
  minZoom: 4,
  maxZoom: 16,
};

export const getMapConfigByDestination = (destinationId) => {
  const config = destinationConfigs[destinationId];
  if (!config) return DEFAULT_MAP_CONFIG;

  return {
    center: config.center || DEFAULT_MAP_CONFIG.center,
    zoom: config.zoom || DEFAULT_MAP_CONFIG.zoom,
    minZoom: config.minZoom || DEFAULT_MAP_CONFIG.minZoom,
    maxZoom: config.maxZoom || DEFAULT_MAP_CONFIG.maxZoom,
  };
};

export const allDestinations = Object.keys(destinationConfigs);
