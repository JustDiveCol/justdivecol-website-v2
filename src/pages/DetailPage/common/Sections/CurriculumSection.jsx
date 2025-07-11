import React from 'react';

import { InfoIcon } from '../../../../assets/icons/InfoIcon';

const CurriculumSection = () => {
  return (
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
        {/* {curriculum.title} */}
        Curriculum Title
      </h2>
      <div className='space-y-6'>
        {/* {curriculum.modules.map((module) => ( */}
        {/* <div key={module.id}> */}
        <div>
          <h3 className='text-2xl font-sans font-semibold text-brand-cta-green'>
            {/* {module.name} */}
            Module Name
          </h3>
          <p className='mt-1 font-serif text-brand-neutral/90'>
            {/* {module.description} */}
            Module Description
          </p>
        </div>
        {/* ))} */}
      </div>

      {/* {curriculum.notes && curriculum.notes.length > 0 && ( */}
      <div className='mt-6 space-y-2'>
        {/* {curriculum.notes.map((note, index) => ( */}
        <div
          // key={index}
          className='flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80'>
          <InfoIcon />
          {/* <p className='font-serif text-sm'>{note}</p> */}
          <p className='font-serif text-sm'>note</p>
        </div>
        {/* ))} */}
      </div>
      {/* )} */}
    </section>
  );
};

export default CurriculumSection;
