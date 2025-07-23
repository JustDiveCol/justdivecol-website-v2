import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CertificationCard = ({ certData }) => {
  const { t } = useTranslation(['certifications', 'common']);

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
        <h3 className="text-xl font-bold text-brand-white mb-4 leading-tight">
          {t(certNameKey, { ns: 'certifications' })}
        </h3>
      </div>

      <span className="mt-4 inline-block text-sm font-semibold text-brand-cta-orange">
        {t('common:viewDetails')} &rarr;
      </span>
    </Link>
  );
};

export default CertificationCard;
