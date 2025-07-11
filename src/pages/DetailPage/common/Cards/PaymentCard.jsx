import React from 'react';

import { CreditCardIcon } from '../../../../assets/icons/CreditCardIcon';
import { BankIcon } from '../../../../assets/icons/BankIcon';
import { LinkIcon } from '../../../../assets/icons/LinkIcon';

const PaymentCard = () => {
  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-xl font-sans font-bold text-brand-white mb-4'>
        {/* {paymentData.title} */}
        Payment Title
      </h3>
      <ul className='space-y-4'>
        {/* {paymentData.methods.map((method) => ( */}
        <li
          // key={method.id}
          className='flex items-start'>
          <div className='flex-shrink-0 w-6 mt-1 text-brand-cta-green'>
            {/* {paymentIcons[method.icon]} */}
            <LinkIcon />
          </div>
          <div className='ml-3'>
            <h4 className='font-sans font-semibold text-brand-white'>
              {/* {method.name} */}
              Name
            </h4>
            <p className='font-serif text-sm text-brand-neutral/80'>
              {/* {method.description} */}
              Description
            </p>
          </div>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default PaymentCard;
