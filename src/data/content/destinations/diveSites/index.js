// src/data/content/destinations/diveSites/index.js
import { santaMartaDivesites } from './santa-marta-divesites';
import { providenciaDivesites } from './providencia-divesites';
import { malpeloDivesites } from './malpelo-divesites';
import { islaFuerteDivesites } from './isla-fuerte-divesites';
// import other diveSites as needed
export const diveSites = [
  ...santaMartaDivesites,
  ...providenciaDivesites,
  ...malpeloDivesites,
  ...islaFuerteDivesites,
];
