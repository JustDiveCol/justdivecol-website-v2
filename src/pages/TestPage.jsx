import React from 'react';
import ImageComponent from '../components/common/Image/ImageComponent';

const TestPage = () => {
  return (
    <ImageComponent
      imageData={{
        backgroundImage: 'https://placehold.co/600x400?text=Hello+World',
        altText: 'imageCredits.sharkPhoto',
        variant: 'fullscreen',
      }}
      translationNS='home'
    />
  );
};

export default TestPage;
