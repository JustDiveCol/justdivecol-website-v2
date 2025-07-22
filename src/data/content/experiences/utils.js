// src/data/content/experiences/utils.js

import { experiences as rawExperiences } from './index';
import { sessions as rawSessions } from './sessions';
import { ROUTES } from '@/data/global/constants';

/**
 * Enrich raw experiences with SEO and card URLs based on slug
 * @param {Array} experiences
 * @returns {Array}
 */
function attachExperienceUrls(experiences) {
  return experiences.map((exp) => ({
    ...exp,
    seo: {
      ...exp.seo,
      url: `${ROUTES.experiences}/${exp.slug}`,
    },
  }));
}

/**
 * Group sessions by experienceId and enrich each session with its full URL
 * @param {Array} experiences
 * @param {Array} sessions
 * @returns {Object} sessions grouped by experienceId
 */
function groupAndAttachSessionUrls(experiences, sessions) {
  const sessionsByExp = sessions.reduce((acc, ses) => {
    acc[ses.experienceId] = acc[ses.experienceId] || [];
    acc[ses.experienceId].push(ses);
    return acc;
  }, {});

  // Enrich each session with full path
  experiences.forEach((exp) => {
    const base = `${ROUTES.experiences}/${exp.slug}`;
    if (sessionsByExp[exp.id]) {
      sessionsByExp[exp.id] = sessionsByExp[exp.id].map((ses) => ({
        ...ses,
        url: `${base}/${ses.slug}`,
        linkPath: `${base}/${ses.slug}`,
      }));
    }
  });

  return sessionsByExp;
}

/**
 * Returns an array of experiences each with a `sessions` property containing enriched sessions.
 */
export function getEnrichedExperiences() {
  // Step 1: enrich experiences with URLs
  const experiences = attachExperienceUrls(rawExperiences);

  // Step 2: group and enrich sessions
  const sessionsByExp = groupAndAttachSessionUrls(experiences, rawSessions);

  // Step 3: attach sessions to each experience
  return experiences.map((exp) => ({
    ...exp,
    sessions: sessionsByExp[exp.id] || [],
  }));
}
