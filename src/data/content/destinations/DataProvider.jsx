// src/data/content/destinations/DataProvider.jsx
import React, { createContext, useContext, useMemo } from 'react';
import { getEnrichedDestinations } from './utils'; // Importa la función unificada desde utils

// Crea un contexto para los destinos
const DestinationContext = createContext(null);

/**
 * Componente Provider que suministra los destinos con URLs calculadas y sitios de buceo adjuntos.
 */
export function DestinationProvider({ children }) {
  const value = useMemo(() => {
    // Llama a la función unificada de utils para obtener todos los destinos enriquecidos
    const enrichedDestinations = getEnrichedDestinations();
    return { destinations: enrichedDestinations };
  }, []); // El array de dependencias está vacío porque los datos son estáticos

  return <DestinationContext.Provider value={value}>{children}</DestinationContext.Provider>;
}

/**
 * Hook para consumir el contexto de los destinos.
 */
export function useDestinations() {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error('useDestinations debe usarse dentro de <DestinationProvider>');
  }
  return context;
}
