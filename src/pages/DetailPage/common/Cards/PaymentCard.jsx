// src/pages/DetailPage/common/Cards/PaymentCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { BankIcon } from '../../../../assets/icons/BankIcon';
import { LinkIcon } from '../../../../assets/icons/LinkIcon';
// import { CreditCardIcon } from '../../../../assets/icons/CreditCardIcon'; // Example for a new icon

// Maps icon string identifiers from data to the actual imported icon components.
// To add a new icon, import it above and add a new entry to this object.
const paymentIcons = {
  link: <LinkIcon />,
  bank: <BankIcon />,
  // creditCard: <CreditCardIcon />,
};

/**
 * Renders a card displaying a list of available payment methods.
 *
 * @param {object} props - The component props.
 * @param {object} props.paymentData - The data object for payment methods.
 * @param {string} props.paymentData.titleKey - The translation key for the card's title.
 * @param {object[]} props.paymentData.methods - An array of payment method objects.
 * @param {string} props.paymentData.methods[].id - A unique identifier for the method.
 * @param {string} props.paymentData.methods[].icon - The key to look up in the paymentIcons map.
 * @param {string} props.paymentData.methods[].nameKey - The translation key for the method's name.
 * @param {string} props.paymentData.methods[].descriptionKey - The translation key for the method's description.
 * @param {string} props.translationNS - The i18next namespace for translations.
 */
const PaymentCard = ({ paymentData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  // Do not render if the necessary data is not provided.
  if (
    !paymentData ||
    !paymentData.methods ||
    !paymentData.methods.length === 0
  ) {
    return null;
  }

  return (
    <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
      <h3 className='text-xl font-sans font-bold text-brand-white mb-4'>
        {t(paymentData.titleKey)}
      </h3>
      <ul className='space-y-4'>
        {paymentData.methods.map((method) => (
          <li
            key={method.id}
            className='flex items-start'>
            <div className='flex-shrink-0 w-6 mt-1 text-brand-cta-green'>
              {/* Dynamically render the correct icon based on the map. */}
              {paymentIcons[method.icon]}
            </div>
            <div className='ml-3'>
              <h4 className='font-sans font-semibold text-brand-white'>
                {t(method.nameKey)}
              </h4>
              <p className='font-serif text-sm text-brand-neutral/80 text-justify'>
                {t(method.descriptionKey)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentCard;
