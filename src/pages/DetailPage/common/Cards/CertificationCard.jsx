import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

const CertificationCard = ({ translationNS, certData }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  if (
    !certData ||
    !certData.id ||
    !certData.header ||
    !certData.header.titleKey ||
    !certData.seo ||
    !certData.seo.url
  ) {
    return null;
  }

  const certNameKey = certData.header.titleKey;

  return (
    <Link
      key={certData.id}
      to={certData.seo.url}
      className="flex flex-col h-full w-full max-w-xs bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <div className="flex-grow">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-white leading-tight">
          {t(certNameKey)}
        </h3>
      </div>

      <span className="mt-4 inline-block text-xs font-semibold text-brand-cta-orange">
        {t(SHARED_TRANSLATION_KEYS.VIEW_DETAILS_LABEL)} &rarr;
      </span>
    </Link>
  );
};

export default CertificationCard;
