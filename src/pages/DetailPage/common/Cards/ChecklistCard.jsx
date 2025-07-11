import React from 'react';

import { CheckIcon } from '../../../../assets/icons/CheckIcon';

const ChecklistCard = () => {
  return (
    //   {/* {requirements && ( */}
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {/* {requirements.title} */}
        Card Title
      </h3>
      <ul className='space-y-3'>
        {/* {requirements.items.map((item) => ( */}
        <li
          // key={item}
          className='flex items-start'>
          <div className='flex-shrink-0 w-6 mt-1'>
            <CheckIcon />
          </div>
          <span className='ml-2 font-serif text-brand-neutral/90'>
            {/* {item} */}
            Item
          </span>
        </li>
        {/* ))} */}
      </ul>
    </div>
    // {/* )} */};
  );
};

export default ChecklistCard;
