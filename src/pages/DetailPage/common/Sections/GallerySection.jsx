// src/pages/DetailPage/common/Sections/GallerySection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Renders a section with a title and a grid of images.
 *
 * @param {object} props - The component props.
 * @param {object} props.galleryData - The data object for the gallery.
 * @param {string} props.galleryData.titleKey - The translation key for the section title.
 * @param {string[]} props.galleryData.images - An array of image URLs.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const GallerySection = ({ galleryData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Do not render if there is no gallery data or no images.
  if (!galleryData || !galleryData.images || galleryData.images.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
        {t(galleryData.titleKey)}
      </h2>
      <div className='grid grid-cols-2 gap-4'>
        {galleryData.images.map((imgUrl, i) => (
          <img
            key={i}
            src={imgUrl}
            // Dynamic alt text improves accessibility and SEO.
            alt={`${t(galleryData.titleKey)} photo ${i + 1}`}
            className='rounded-lg shadow-lg'
            loading='lazy' // Prevents images from loading until they are close to the viewport.
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
