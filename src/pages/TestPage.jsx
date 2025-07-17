import React from 'react';
import MapComponent from '../components/common/Map/MapComponent';
import SimpleMapComponent from '../components/common/Map/SimpleMapComponent';
import MapLayout from '../components/common/Map/MapLayout';

const TestPage = () => {
  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Test Map Page (Santa Marta)</h1>
      {/* Pass 'santa-marta' as the destinationId prop to render only Santa Marta dive sites */}
      <MapComponent destinationId='santa-marta' />
    </div>
  );
};

export default TestPage;
