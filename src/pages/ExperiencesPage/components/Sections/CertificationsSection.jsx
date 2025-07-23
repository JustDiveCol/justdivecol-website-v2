// src/pages/ExperiencesPage/components/Sections/CertificationSection.jsx
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { experiencesData } from '../../../../data/pages/experiencesData';

import { useCertifications } from '@/data/content/certifications/DataProvider';
import { useExperiences } from '@/data/content/experiences/DataProvider';
import { staggerContainer } from '../../../../hooks/animations';

import CertficationCardComponent from '../Cards/CertificationCardComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders the "Courses & Certifications" section of the Experiences page.
 * It fetches all published courses and displays them as cards.
 */
const CertificationSection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);
  const { sectionId, titleKey } = experiencesData.fullCatalog.courses;

  // Get all certifications and experiences with sessions
  const { certifications } = useCertifications();
  const { experiences } = useExperiences();

  const certificationsWithStatus = React.useMemo(() => {
    return certifications.map((cert) => {
      const relatedSessions = [];
      experiences.forEach((exp) => {
        (exp.sessions || []).forEach((session) => {
          if (
            Array.isArray(session.certificationIds) &&
            session.certificationIds.includes(cert.id)
          ) {
            relatedSessions.push(session);
          }
        });
      });

      const hasAvailable = relatedSessions.some((s) => s.availability === 'available');
      const hasLast = relatedSessions.some((s) => s.availability === 'last');
      let availability = 'soldOut';
      if (hasAvailable) availability = 'available';
      else if (hasLast) availability = 'last';

      return { ...cert, availability };
    });
  }, [certifications, experiences]);

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
          {certificationsWithStatus.map((cert) => (
            <CertficationCardComponent
              key={cert.id}
              certData={cert}
              translationNS={NAMESPACES.CERTIFICATIONS_DETAIL}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationSection;
