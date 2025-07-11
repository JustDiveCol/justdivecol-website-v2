import React from 'react';

const GallerySection = () => {
  return (
    // {/* {gallery && ( */}
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
        {/* {gallery.title} */}
        Gallery Title
      </h2>
      <div className='grid grid-cols-2 gap-4'>
        {/* {gallery.images.map((img, i) => ( */}
        <img
          // key={i}
          // src={img}
          // alt={`${header.title} foto ${i + 1}`}
          className='rounded-lg shadow-lg'
        />
        {/* ))} */}
      </div>
    </section>
    //   {/* )} */}
  );
};

export default GallerySection;
