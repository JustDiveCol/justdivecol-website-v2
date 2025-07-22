// src/data/content/experiences/DataProvider.jsx
import React, { createContext, useContext, useMemo } from 'react';
import { experiences as rawExperiences } from './index';
import { sessions as rawSessions } from './sessions/index';
import { ROUTES } from '@/data/global/constants';

// Create a context for experiences
const ExperienceContext = createContext(null);

/**
 * Provider component that supplies experiences with computed URLs and linked sessions
 */
export function ExperienceProvider({ children }) {
  const value = useMemo(() => {
    // 1) Enrich each experience with its base URLs
    const experiences = rawExperiences.map((exp) => ({
      ...exp,
      seo: {
        ...exp.seo,
        url: `${ROUTES.experiences}/${exp.slug}`,
      },
      card: {
        ...exp.card,
        linkPath: `${ROUTES.experiences}/${exp.slug}`,
      },
    }));

    // 2) Group sessions by experienceId
    const sessionsByExp = rawSessions.reduce((acc, ses) => {
      if (!acc[ses.experienceId]) acc[ses.experienceId] = [];
      acc[ses.experienceId].push(ses);
      return acc;
    }, {});

    // 3) Attach sessions array to each experience, computing session URLs
    const experiencesWithSessions = experiences.map((exp) => {
      const sessions = (sessionsByExp[exp.id] || []).map((ses) => {
        const base = `${ROUTES.experiences}/${exp.slug}`;
        return {
          ...ses,
          url: `${base}/${ses.slug}`,
          linkPath: `${base}/${ses.slug}`,
        };
      });
      return { ...exp, sessions };
    });

    return { experiences: experiencesWithSessions };
  }, []);

  return <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>;
}

/**
 * Hook to consume the experiences context
 */
export function useExperiences() {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useExperiences must be used within <ExperienceProvider>');
  }
  return context;
}
