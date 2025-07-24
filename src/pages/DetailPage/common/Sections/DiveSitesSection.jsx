// src/pages/DetailPage/common/Sections/DiveSitesSection.jsx
import { SHARED_TRANSLATION_KEYS } from '@/data/global/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Renders a section listing the notable dive sites for a destination.
 *
 * @param {object} props - The component props.
 * @param {object} props.diveSiteData - The data object for this section.
 * @param {string} props.diveSiteData.titleKey - The translation key for the section title.
 * @param {object[]} props.diveSiteData.sites - An array of dive site objects.
 * @param {string} props.diveSiteData.sites[].id - A unique identifier for the dive site.
 * @param {string} props.diveSiteData.sites[].nameKey - The translation key for the site's name.
 * @param {string} props.diveSiteData.sites[].descriptionKey - The translation key for the site's description.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const DiveSitesSection = ({ diveSiteData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Do not render if there is no data to display.
  if (!diveSiteData || !diveSiteData.sites || diveSiteData.sites.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="heading-4 font-bold text-brand-white mb-6">
        {t(SHARED_TRANSLATION_KEYS.DESTINATIONS_DIVE_SITES_TITLE)}
      </h2>
      <div className="space-y-6">
        {diveSiteData.sites.map((site) => (
          <div key={site.id}>
            <h3 className="text-subtitle font-semibold text-brand-cta-green">{t(site.nameKey)}</h3>
            <p className="text-xs sm:text-xs md:text-sm lg:text-base leading-relaxed mt-1 text-brand-neutral/90 text-justify">
              {t(site.descriptionKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiveSitesSection;
