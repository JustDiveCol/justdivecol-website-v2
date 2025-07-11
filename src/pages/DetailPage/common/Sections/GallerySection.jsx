import React from 'react';
import { useTranslation } from 'react-i18next';

const GallerySection = ({ galleryData, translationNS }) => {
  const { t } = useTranslation(translationNS); // Use the passed namespace

  if (!galleryData || !galleryData.images || galleryData.images.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
        {t(galleryData.titleKey)} {/* Use data and translate */}
      </h2>
      <div className='grid grid-cols-2 gap-4'>
        {galleryData.images.map((imgUrl, i) => (
          <img
            key={i}
            src={imgUrl}
            alt={`${t(galleryData.titleKey)} photo ${i + 1}`} // Dynamic alt text
            className='rounded-lg shadow-lg'
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
