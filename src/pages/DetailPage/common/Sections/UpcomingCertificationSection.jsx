import React from 'react';
import { useTranslation } from 'react-i18next';
import CertificationCard from '../Cards/CertificationCard';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders a section that displays a responsive, centered grid of available courses.
 * This component replaces the separate Horizontal and Vertical versions.
 *
 * @param {object} props - The component props.
 * @param {object[]} props.availableCertifications - An array of certification data objects to display.
 * @param {string} props.titleKey - The translation key for the section's title.
 * @param {string} [props.noCertificationsMessageKey] - Optional: The translation key for the message shown when no certifications are available.
 * @param {string} props.translationNS - The i18next namespace to use for the section title.
 */
const UpcomingCertificationSection = ({
  availableCertifications,
  titleKey,
  noCertificationsMessageKey,
  translationNS,
}) => {
  const { t, i18n } = useTranslation([translationNS, NAMESPACES.CERTIFICATIONS, NAMESPACES.COMMON]);

  if (!titleKey || !availableCertifications) {
    return null;
  }

  return (
    <div
      id="available-certifications-section"
      className="bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24"
    >
      <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl leading-tight font-bold text-brand-white mb-4">
        {t(titleKey, { ns: translationNS })}
      </h3>
      {availableCertifications.length > 0 ? (
        // --- Contenedor Flexbox para un diseño centrado y adaptable ---
        <div className="flex flex-wrap gap-6 justify-center pt-4 border-t border-brand-primary-light/40">
          {availableCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certData={certification}
              translationNS={NAMESPACES.CERTIFICATIONS}
            />
          ))}
        </div>
      ) : (
        // Mensaje que se muestra si no hay cursos
        noCertificationsMessageKey && (
          <div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-neutral/80 pt-4 border-t border-brand-primary-light/40">
              {t(noCertificationsMessageKey, { ns: translationNS })}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default UpcomingCertificationSection;
