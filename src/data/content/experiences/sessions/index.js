// src/data/content/experiences/sessions/index.js

// Import session modules here
import { expSantaMartaSep2025Session } from './exp-santa-marta-sep-2025';
import { expSantaMartaOct2025Session } from './exp-santa-marta-oct-2025';
import { expSantaMartaNov2025Session } from './exp-santa-marta-nov-2025';
// ... import additional session files as created

/**
 * Array of all session objects.
 * Each session corresponds to a concrete date range / availability block.
 */
export const sessions = [
  expSantaMartaSep2025Session,
  expSantaMartaOct2025Session,
  expSantaMartaNov2025Session,
  // add more sessions here
];
