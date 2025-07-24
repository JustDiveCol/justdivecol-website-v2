// src/pages/DetailPage/ExperiencePage/ExperiencePage.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// UI, Layout, and Animation
import { staggerContainer } from '../../../hooks/animations';
import SEOComponent from '../../../components/ui/SEOComponent';
import ExperienceLayout from './Layout/ExperienceLayout';

// Data fetching utility
import { useExperiences } from '@/data/content/experiences/DataProvider';
import { useCertifications } from '@/data/content/certifications/DataProvider';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

const ExperiencePage = () => {
  const { experienceSlug, sessionSlug } = useParams();
  const { t } = useTranslation([
    NAMESPACES.EXPERIENCES,
    NAMESPACES.COMMON,
    NAMESPACES.EXPERIENCE_DETAIL_PAGE,
  ]);

  const { experiences } = useExperiences();
  const { certifications } = useCertifications();

  const [experienceData, setExperienceData] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [offeredCertificationsData, setOfferedCertificationsData] = useState([]);
  const [otherTripsToThisDestination, setOtherTripsToThisDestination] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const foundExperience = experiences.find((exp) => exp.slug === experienceSlug);

    let foundSession = null;
    if (foundExperience) {
      foundSession = foundExperience.sessions.find((ses) => ses.slug === sessionSlug);
    }

    if (foundExperience && foundSession) {
      setExperienceData(foundExperience);
      setSessionData(foundSession);

      const associatedCertifications = certifications.filter(
        (cert) => foundSession.certificationIds && foundSession.certificationIds.includes(cert.id)
      );
      setOfferedCertificationsData(associatedCertifications);

      // --- LÓGICA CLAVE REVISADA PARA otherTripsToThisDestination ---
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const filteredOtherTrips = experiences.reduce((acc, exp) => {
        // Incluir experiencias que están en el mismo destino
        const isSameDestination = exp.destinationId === foundExperience.destinationId;
        // La condición para excluir solo debe ser si es la *misma sesión*
        // o si es una experiencia *completamente diferente* en el mismo destino
        const isCurrentExperience = exp.id === foundExperience.id; // TRUE si es la experiencia que estamos viendo
        const hasSessions = exp.sessions && exp.sessions.length > 0;

        if (isSameDestination && hasSessions) {
          exp.sessions.forEach((session) => {
            const sessionEndDate = new Date(session.endDate);
            const isFutureOrToday = sessionEndDate >= today;
            const isAvailableOrLast =
              session.availability === 'available' || session.availability === 'last';
            const isNotCurrentSession = session.id !== foundSession.id; // Excluir solo la sesión actual

            if (isFutureOrToday && isAvailableOrLast && isNotCurrentSession) {
              acc.push({
                ...session,
                experienceDetails: {
                  id: exp.id,
                  slug: exp.slug,
                  titleKey: exp.titleKey,
                  subtitleKey: exp.subtitleKey,
                  nameKey: exp.nameKey,
                  header: exp.header,
                  seo: exp.seo,
                },
              });
            }
          });
        }
        return acc;
      }, []);

      setOtherTripsToThisDestination(filteredOtherTrips);
    } else {
      setError(true);
    }
    setIsLoading(false);
  }, [experienceSlug, sessionSlug, experiences, certifications]); // Las dependencias deben incluir 'experiences' y 'certifications'

  // --- Render based on component state ---

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-brand-white text-2xl">
        {t(SHARED_TRANSLATION_KEYS.LOADING_LABEL)}...
      </div>
    );
  }

  if (error || !experienceData || !sessionData) {
    return <Navigate to={NAMESPACES.NOT_FOUND_PAGE} replace />;
  }

  return (
    <>
      <SEOComponent
        title={t(experienceData.seo.titleKey, { ns: NAMESPACES.EXPERIENCE_DETAIL_PAGE })}
        description={t(experienceData.seo.descriptionKey, {
          ns: NAMESPACES.EXPERIENCE_DETAIL_PAGE,
        })}
        keywords={t(experienceData.seo.keywords, { ns: NAMESPACES.EXPERIENCE_DETAIL_PAGE })}
        imageUrl={experienceData.seo.imageUrl}
        url={sessionData.url}
      />
      <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
        <ExperienceLayout
          experienceData={experienceData}
          sessionData={sessionData}
          offeredCertificationsData={offeredCertificationsData}
          otherTripsToThisDestination={otherTripsToThisDestination}
          isFounderTrip={sessionData.founders || false}
        />
      </motion.div>
    </>
  );
};

export default ExperiencePage;
