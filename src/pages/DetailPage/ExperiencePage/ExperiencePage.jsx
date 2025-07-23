// src/pages/DetailPage/ExperiencePage/ExperiencePage.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// UI, Layout, and Animation
import { staggerContainer } from '../../../hooks/animations';
import SEOComponent from '../../../components/ui/SEOComponent';
import ExperienceLayout from './Layout/ExperienceLayout';

// Data fetching utility
import { useExperiences } from '@/data/content/experiences/DataProvider';
import { useCertifications } from '@/data/content/certifications/DataProvider'; // Necesitarás las certificaciones para filtrar

/**
 * Renders the detail page for a specific experience session.
 * It fetches the parent experience data, the specific session data, and any associated certifications
 * based on the 'experienceSlug' and 'sessionSlug' from the URL.
 * Handles loading/error states and passes the data to the ExperienceLayout.
 */
const ExperiencePage = () => {
  const { experienceSlug, sessionSlug } = useParams(); // Get slugs from the URL.
  const { t } = useTranslation(['experienceDetailPage', 'common']); // Recommended new namespace for clarity

  // Get all experiences and certifications from the Context Providers
  const { experiences } = useExperiences();
  const { certifications } = useCertifications();

  // State for managing experience data, courses, loading, and errors.
  const [experienceData, setExperienceData] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [offeredCertificationsData, setOfferedCertificationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Effect to fetch all necessary data when the tripId changes.
  useEffect(() => {
    setIsLoading(true); // Always reset loading state at the start of effect
    setError(false); // Always reset error state

    // 1. Find the parent experience using experienceSlug
    const foundExperience = experiences.find((exp) => exp.slug === experienceSlug);

    // 2. Find the specific session using sessionSlug
    let foundSession = null;
    if (foundExperience) {
      foundSession = foundExperience.sessions.find((ses) => ses.slug === sessionSlug);
    }

    if (foundExperience && foundSession) {
      setExperienceData(foundExperience);
      setSessionData(foundSession); // Set the specific session data

      // 3. Filter certifications based on sessionData.certificationIds
      const associatedCertifications = certifications.filter(
        (cert) => foundSession.certificationIds && foundSession.certificationIds.includes(cert.id)
      );
      setOfferedCertificationsData(associatedCertifications);
    } else {
      // If experience or session not found, set error
      setError(true);
    }
    setIsLoading(false);
  }, [experienceSlug, sessionSlug, experiences, certifications]);

  // --- Render based on component state ---

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-brand-white text-2xl">
        {t('common:loading')}...
      </div>
    );
  }

  // Check for error OR if either experienceData or sessionData is missing
  if (error || !experienceData || !sessionData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOComponent
        // Use experienceData for SEO, as session data doesn't have its own SEO block
        title={t(experienceData.seo.titleKey, { ns: 'experienceDetailPage' })} // New namespace
        description={t(experienceData.seo.descriptionKey, { ns: 'experienceDetailPage' })} // New namespace
        keywords={t(experienceData.seo.keywords, { ns: 'experienceDetailPage' })} // New namespace
        imageUrl={experienceData.seo.imageUrl}
        url={sessionData.url}
      />
      <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
        <ExperienceLayout
          experienceData={experienceData}
          sessionData={sessionData} // Pass the specific session data
          offeredCertificationsData={offeredCertificationsData} // Pass certifications
        />
      </motion.div>
    </>
  );
};

export default ExperiencePage;
