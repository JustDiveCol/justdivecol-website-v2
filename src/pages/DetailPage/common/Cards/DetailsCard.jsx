import React from 'react';

const DetailsCard = () => {
  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
        {/* {details.title} */}
        Details Title
      </h3>
      <ul className='space-y-3 font-serif'>
        {/* {details.items.map((item) => ( */}
        <li
          //   key={item.label}
          className='flex items-baseline justify-between gap-4'>
          {/* <span className='text-brand-neutral/80'>{item.label}:</span> */}
          <span className='text-brand-neutral/80'>Item label:</span>
          <span className=' text-brand-white text-right'>
            {/* {item.value} */}
            Item Value
          </span>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default DetailsCard;
