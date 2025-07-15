import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const AvailabilityBadgeComponent = ({ status, className = '' }) => {
  const { t } = useTranslation('common');

  const statusMap = {
    available: {
      text: t('statusAvailable'),
      className: 'bg-brand-cta-green text-brand-primary-dark',
      pulse: false,
    },
    last: {
      text: t('statusLastSeats'),
      className: 'bg-brand-cta-yellow  text-brand-primary-dark',
      pulse: true,
    },
    soldOut: {
      text: t('statusSoldOut'),
      className: 'bg-red-500 text-brand-primary-dark',
      pulse: true,
    },
  };

  const data = statusMap[status];
  if (!data) return null;

  return (
    <motion.span
      initial={{ scale: 1 }}
      animate={
        data.pulse
          ? {
              scale: [1, 1.05, 1],
              opacity: [1, 0.9, 1],
            }
          : { scale: 1, opacity: 1 }
      }
      transition={
        data.pulse
          ? {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : {}
      }
      className={`inline-block px-3 py-1 mt-2 rounded-full text-xs font-semibold ${data.className} ${className}`}>
      {data.text}
    </motion.span>
  );
};

export default AvailabilityBadgeComponent;
