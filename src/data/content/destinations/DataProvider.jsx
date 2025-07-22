// src/data/content/destinations/DataProvider.jsx
import React, { createContext, useContext, useMemo } from 'react';
import { attachDestinationUrls } from './utils';

// Create a context for destinations
const DestinationContext = createContext(null);

/**
 * Provider component that supplies destinations with computed URLs and linkPaths
 */
export function DestinationProvider({ children }) {
  const value = useMemo(() => {
    // Enrich raw destinations with dynamic URL fields
    const destinations = attachDestinationUrls();
    return { destinations };
  }, []);

  return <DestinationContext.Provider value={value}>{children}</DestinationContext.Provider>;
}

/**
 * Hook to consume the destinations context
 */
export function useDestinations() {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error('useDestinations must be used within a <DestinationProvider>');
  }
  return context;
}
