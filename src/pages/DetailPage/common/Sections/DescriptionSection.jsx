// src/pages/DetailPage/common/Sections/DescriptionSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Renders a standard section with a title and multiple paragraphs of text.
 *
 * @param {object} props - The component props.
 * @param {object} props.descriptionData - The data object for the section.
 * @param {string} props.descriptionData.titleKey - The translation key for the section's title.
 * @param {string[]} props.descriptionData.paragraphs - An array of translation keys for the paragraphs.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const DescriptionSection = ({ descriptionData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Do not render the component if no data is provided.
  if (!descriptionData) return null;

  return (
    <section>
      <h2 className='text-3xl font-bold text-brand-white mb-4'>
        {t(descriptionData.titleKey)}
      </h2>
      <div className='space-y-4 text-lg text-brand-neutral/90'>
        {descriptionData.paragraphs.map((pKey) => (
          <p
            key={pKey}
            className='text-justify'>
            {t(pKey)}
          </p>
        ))}
      </div>
    </section>
  );
};

export default DescriptionSection;
