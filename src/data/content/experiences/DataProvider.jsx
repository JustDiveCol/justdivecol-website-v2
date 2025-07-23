// src/data/content/experiences/DataProvider.jsx
import React, { createContext, useContext, useMemo } from 'react';
import { getEnrichedExperiences } from './utils';

// Create a context for experiences
const ExperienceContext = createContext(null);

/**
 * Provider component that supplies experiences with computed URLs and linked sessions
 */
export function ExperienceProvider({ children }) {
  const value = useMemo(() => {
    const experiencesWithSessions = getEnrichedExperiences();
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
