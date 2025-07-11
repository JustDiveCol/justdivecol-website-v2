// src/pages/DetailPage/common/Cards/PaymentCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import { CreditCardIcon } from '../../../../assets/icons/CreditCardIcon'; // Ensure this is imported if used
import { BankIcon } from '../../../../assets/icons/BankIcon';
import { LinkIcon } from '../../../../assets/icons/LinkIcon';

// Map icon names from data to actual icon components
const paymentIcons = {
  link: <LinkIcon />,
  bank: <BankIcon />,
  // creditCard: <CreditCardIcon />, // Add this if you introduce a credit card icon in your data
};

// Accept paymentData and translationNS as props
const PaymentCard = ({ paymentData, translationNS }) => {
  const { t } = useTranslation(translationNS); // Use the passed namespace

  // Render nothing if paymentData is not provided or if there are no methods
  if (
    !paymentData ||
    !paymentData.methods ||
    paymentData.methods.length === 0
  ) {
    return null;
  }

  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-xl font-sans font-bold text-brand-white mb-4'>
        {t(paymentData.titleKey)} {/* Use data and translate */}
      </h3>
      <ul className='space-y-4'>
        {paymentData.methods.map((method) => (
          <li
            key={method.id}
            className='flex items-start'>
            <div className='flex-shrink-0 w-6 mt-1 text-brand-cta-green'>
              {paymentIcons[method.icon]}{' '}
              {/* Render the correct icon based on the map */}
            </div>
            <div className='ml-3'>
              <h4 className='font-sans font-semibold text-brand-white'>
                {t(method.nameKey)} {/* Use data and translate */}
              </h4>
              <p className='font-serif text-sm text-brand-neutral/80 text-justify'>
                {t(method.descriptionKey)} {/* Use data and translate */}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentCard;
