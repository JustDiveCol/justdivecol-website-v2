// src/pages/DetailPage/common/Sections/DescriptionSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const DescriptionSection = ({ descriptionData, translationNS }) => {
  const { t } = useTranslation(translationNS); // Use the passed namespace

  if (!descriptionData) return null; // Handle cases where data might be missing

  return (
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
        {t(descriptionData.titleKey)} {/* Use data and translate */}
      </h2>
      <div className='space-y-4 font-serif text-lg text-brand-neutral/90'>
        {descriptionData.paragraphs.map((pKey) => (
          <p key={pKey}>{t(pKey)}</p> // Map and translate paragraphs
        ))}
      </div>
    </section>
  );
};

export default DescriptionSection;
