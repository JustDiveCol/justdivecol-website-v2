// src/pages/DetailPage/CertificationPage/CertificationPage.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import CertificationLayout from './Layout/CertificationLayout';
import SEOComponent from '../../../components/shared/SEOComponent';
import { useCertifications } from '@/data/content/certifications/DataProvider';
import { useExperiences } from '@/data/content/experiences/DataProvider';
import { staggerContainer } from '../../../hooks/animations';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

/**
 * Renders the detail page for a specific certification.
 * It fetches certification data based on the 'certificationSlug' from the URL,
 * handles loading and error states, and then passes the data to the CertificationLayout component.
 */
const CertificationPage = () => {
  const { certificationSlug } = useParams(); // Get the dynamic certificationSlug from the URL.
  const { t } = useTranslation([NAMESPACES.CERTIFICATIONS, NAMESPACES.COMMON]); // New namespace for translations

  const { certifications } = useCertifications(); // Get all certifications from the Context
  const { experiences } = useExperiences();

  // State for managing course data, associated trips, loading, and error status.
  const [certificationData, setCertificationData] = useState(null);
  const [availableTrips, setAvailableTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch course details when the component mounts or the courseId changes.
  useEffect(() => {
    setIsLoading(true);
    setError(false);

    // 1. Find the certification based on the slug
    const foundCertification = certifications.find((cert) => cert.slug === certificationSlug);

    if (foundCertification) {
      setCertificationData(foundCertification);

      // --- Lógica para calcular 'availableTrips' (sesiones de experiencia relacionadas) ---
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const filteredAvailableTrips = experiences.reduce((acc, exp) => {
        (exp.sessions || []).forEach((session) => {
          // Un viaje está disponible si la sesión está vinculada a esta certificación
          // Y está en el futuro/hoy, Y tiene disponibilidad 'available' o 'last'.
          const isRelatedToCert =
            session.certificationIds && session.certificationIds.includes(foundCertification.id);
          const sessionEndDate = new Date(session.endDate);
          const isFutureOrToday = sessionEndDate >= today;
          const isAvailableOrLast =
            session.availability === 'available' || session.availability === 'last';

          if (isRelatedToCert && isFutureOrToday && isAvailableOrLast) {
            // Empujar la sesión enriquecida para que UpcomingTripSection la entienda
            acc.push({
              ...session,
              experienceDetails: {
                // Adjunta detalles de la experiencia padre
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
        return acc;
      }, []);

      setAvailableTrips(filteredAvailableTrips); // <-- ¡Actualizar el estado con los viajes filtrados!
    } else {
      setError(true);
    }

    setIsLoading(false);
    // Dependencias: el slug de la certificación, y los datos de certificaciones y experiencias (del contexto)
  }, [certificationSlug, certifications, experiences]);

  // --- Render based on state ---

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-brand-white text-2xl">
        {t(SHARED_TRANSLATION_KEYS.LOADING_LABEL)}...
      </div>
    );
  }

  if (error || !certificationData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOComponent
        title={t(certificationData.seo.titleKey, { ns: NAMESPACES.CERTIFICATIONS })} // Use new namespace
        description={t(certificationData.seo.descriptionKey, { ns: NAMESPACES.CERTIFICATIONS })} // Use new namespace
        keywords={t(certificationData.seo.keywords, { ns: NAMESPACES.CERTIFICATIONS })} // Use new namespace
        imageUrl={certificationData.seo.imageUrl}
        url={certificationData.seo.url} // The URL should already be complete from `attachCertificationUrls`
      />{' '}
      <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
        {' '}
        {/* Consistent with ExperiencesPage initial/animate/exit */}{' '}
        <CertificationLayout
          certificationData={certificationData}
          availableTrips={availableTrips}
          translationNS={NAMESPACES.CERTIFICATIONS}
        />{' '}
        {/* Pass renamed prop */}
      </motion.div>
    </>
  );
};

export default CertificationPage;
