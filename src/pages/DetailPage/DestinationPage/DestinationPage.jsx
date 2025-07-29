// src/pages/DetailPage/DestinationPage/DestinationPage.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// UI, Layout, and Animation
import SEOComponent from '../../../components/shared/SEOComponent';
import DestinationLayout from './Layout/DestinationLayout';
import { staggerContainer } from '../../../hooks/animations';

// Data fetching utilities
import { useDestinations } from '@/data/content/destinations/DataProvider';
import { useExperiences } from '@/data/content/experiences/DataProvider';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

/**
 * Renders the detail page for a specific destination.
 * It fetches destination data and its associated upcoming trips based on the 'destinationSlug'
 * from the URL, handles loading/error states, and passes the data to the DestinationLayout.
 */
const DestinationPage = () => {
  const { destinationSlug } = useParams();
  // Namespace para la página de detalle de destino
  const { t } = useTranslation([
    NAMESPACES.DESTINATIONS,
    NAMESPACES.COMMON,
    NAMESPACES.DESTINATION_DETAIL_PAGE,
  ]);

  // Get data from Context Providers
  const { destinations } = useDestinations();
  const { experiences } = useExperiences();

  // State for managing destination data, trips, loading, and errors.
  const [destinationData, setDestinationData] = useState(null);
  const [upcomingTrips, setUpcomingTrips] = useState([]); // Este array debe contener sesiones enriquecidas
  const [topDiveSites, setTopDiveSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch all necessary data when the destinationId changes.
  useEffect(() => {
    setIsLoading(true);
    setError(false);

    // Find the destination by its slug from the context data
    const foundDestination = destinations.find((dest) => dest.slug === destinationSlug);

    if (foundDestination) {
      setDestinationData(foundDestination); // Establecer el destino encontrado

      // --- Lógica para calcular 'upcomingTrips' (sesiones de experiencia) ---
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const filteredUpcomingTrips = []; // Array para almacenar las sesiones que cumplen las condiciones

      experiences.forEach((exp) => {
        // Iterar sobre cada experiencia base
        // Si la experiencia base está vinculada a este destino
        // (usamos exp.destinationId porque así lo tienes en _santaMartaExperience.js)
        if (exp.destinationId === foundDestination.id) {
          (exp.sessions || []).forEach((session) => {
            // Iterar sobre las sesiones de esa experiencia
            const sessionEndDate = new Date(session.endDate);
            // Solo si la sesión está en el futuro (o hoy) y tiene disponibilidad 'available' o 'last'
            if (
              sessionEndDate >= today &&
              (session.availability === 'available' || session.availability === 'last')
            ) {
              // Empujar la SESIÓN ENRIQUECIDA para que UpcomingTripSection la entienda
              filteredUpcomingTrips.push({
                ...session, // Copiar todas las propiedades de la sesión
                experienceDetails: {
                  // Adjuntar detalles de la experiencia padre (exp)
                  id: exp.id,
                  slug: exp.slug,
                  titleKey: exp.titleKey,
                  subtitleKey: exp.subtitleKey,
                  nameKey: exp.nameKey, // Para el nombre de la experiencia
                  header: exp.header,
                  seo: exp.seo,
                },
              });
            }
          });
        }
      });

      // Opcional: ordenar los viajes futuros por fecha de inicio
      filteredUpcomingTrips.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

      setUpcomingTrips(filteredUpcomingTrips); // Actualizar el estado con los viajes filtrados

      // --- Lógica para calcular 'topDiveSites' ---
      // Recopilar TODOS los diveSites de TODOS los destinos y filtrar por isTopSite
      const allGlobalDiveSites = destinations.flatMap((dest) => dest.diveSites || []);
      const filteredTopDiveSites = allGlobalDiveSites.filter((site) => site.isTopSite);
      setTopDiveSites(filteredTopDiveSites);
    } else {
      setError(true); // Si el destino no se encuentra, establecer error
    }

    setIsLoading(false); // Finalizar el estado de carga
  }, [destinationSlug, destinations, experiences]); // Dependencias del efecto

  // --- Render based on state ---

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-brand-white text-2xl">
        {t(SHARED_TRANSLATION_KEYS.LOADING_LABEL)}...
      </div>
    );
  }

  if (error || !destinationData) {
    return <Navigate to={NAMESPACES.NOT_FOUND_PAGE} replace />; // Usar la constante para la ruta 404
  }

  return (
    <>
      <SEOComponent
        title={t(destinationData.seo.titleKey, { ns: NAMESPACES.DESTINATIONS })}
        description={t(destinationData.seo.descriptionKey, { ns: NAMESPACES.DESTINATIONS })}
        keywords={t(destinationData.seo.keywords, { ns: NAMESPACES.DESTINATIONS })}
        imageUrl={destinationData.seo.imageUrl}
        url={destinationData.seo.url}
      />
      <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
        <DestinationLayout
          destinationData={destinationData}
          upcomingTrips={upcomingTrips}
          topDiveSites={topDiveSites}
        />
      </motion.div>
    </>
  );
};

export default DestinationPage;
