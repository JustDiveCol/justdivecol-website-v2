// src/pages/DetailPage/CertificationPage/CertificationPage.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import CertificationLayout from './Layout/CertificationLayout';
import SEOComponent from '../../../components/ui/SEOComponent';
import { useCertifications } from '@/data/content/certifications/DataProvider';
import { staggerContainer } from '../../../hooks/animations';

/**
 * Renders the detail page for a specific certification.
 * It fetches certification data based on the 'certificationSlug' from the URL,
 * handles loading and error states, and then passes the data to the CertificationLayout component.
 */
const CertificationPage = () => {
  const { certificationSlug } = useParams(); // Get the dynamic certificationSlug from the URL.
  const { t } = useTranslation(['certificationsPage', 'common']); // New namespace for translations

  const { certifications } = useCertifications(); // Get all certifications from the Context

  // State for managing course data, associated trips, loading, and error status.
  const [certificationData, setCertificationData] = useState(null);
  const [availableTrips, setAvailableTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch course details when the component mounts or the courseId changes.
  useEffect(() => {
    setIsLoading(true); // Set loading true at the start of the effect
    setError(false); // Reset error

    // Find the certification based on the slug
    const foundCertification = certifications.find((cert) => cert.slug === certificationSlug);

    if (foundCertification) {
      setCertificationData(foundCertification);
      // Lógica para obtener 'availableTrips' si es necesario.
      // Necesitaríamos una forma de filtrar las experiencias/sesiones relacionadas con esta certificación.
      // Esto podría hacerse aquí o en un hook personalizado si la lógica es compleja.
      // Por ahora, lo dejaremos vacío o requerirá una nueva función.
      setAvailableTrips([]); // Placeholder for now
    } else {
      console.error('Certificación no encontrada para el slug:', certificationSlug);
      setError(true);
    }

    setIsLoading(false);
  }, [certificationSlug, certifications]);

  // --- Render based on state ---

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-brand-white text-2xl">
        {t('common:loading')}...
      </div>
    );
  }

  if (error || !certificationData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOComponent
        title={t(certificationData.seo.titleKey, { ns: 'certificationsPage' })} // Use new namespace
        description={t(certificationData.seo.descriptionKey, { ns: 'certificationsPage' })} // Use new namespace
        keywords={t(certificationData.seo.keywords, { ns: 'certificationsPage' })} // Use new namespace
        imageUrl={certificationData.seo.imageUrl}
        url={certificationData.seo.url} // The URL should already be complete from `attachCertificationUrls`
      />{' '}
      <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
        {' '}
        {/* Consistent with ExperiencesPage initial/animate/exit */}{' '}
        <CertificationLayout
          certificationData={certificationData}
          availableTrips={availableTrips}
          translationNS={'certificationsPage'}
        />{' '}
        {/* Pass renamed prop */}
      </motion.div>
    </>
  );
};

export default CertificationPage;
