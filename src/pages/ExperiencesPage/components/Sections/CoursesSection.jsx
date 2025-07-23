// src/pages/ExperiencesPage/components/Sections/CoursesSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { experiencesData } from '../../../../data/pages/experiencesData';

import { useCertifications } from '@/data/content/certifications/DataProvider';
import { useExperiences } from '@/data/content/experiences/DataProvider';
import { staggerContainer } from '../../../../hooks/animations';

import CourseCardComponent from '../Cards/CourseCardComponent';

/**
 * Renders the "Courses & Certifications" section of the Experiences page.
 * It fetches all published courses and displays them as cards.
 */
const CoursesSection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { sectionId, titleKey } = experiencesData.fullCatalog.courses;

  // Get all certifications and experiences with sessions
  const { certifications } = useCertifications();
  const { experiences } = useExperiences();

  // Enrich each certification with an availability status
  const coursesWithStatus = certifications.map((cert) => {
    // Reúne todas las sesiones que ofrezcan esta certificación
    const relatedSessions = [];
    experiences.forEach((exp) => {
      (exp.sessions || []).forEach((session) => {
        if (Array.isArray(session.certificationIds) && session.certificationIds.includes(cert.id)) {
          relatedSessions.push(session);
        }
      });
    });

    // DEBUG: muestra qué sesiones encontró para cada cert

    // Determina estado
    const hasAvailable = relatedSessions.some((s) => s.availability === 'available');
    const hasLast = relatedSessions.some((s) => s.availability === 'last');
    let availability = 'soldOut';
    if (hasAvailable) availability = 'available';
    else if (hasLast) availability = 'last';

    return { ...cert, availability };
  });

  return (
    <section id={sectionId} className="py-8 px-4 scroll-mt-20 bg-brand-primary-light">
      <div className="container mx-auto">
        <h2 className="heading-2 text-brand-white text-center uppercase mb-2">{t(titleKey)}</h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {certifications.map((cert) => (
            <CourseCardComponent key={cert.id} certData={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
