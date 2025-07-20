// src/components/common/Component/AvailabilityBadgeComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AvailabilityBadgeComponent = ({ status, className = '' }) => {
  const { t } = useTranslation('common');

  const statusMap = {
    available: {
      text: t('statusAvailable', 'Disponible'),
      className: 'bg-brand-cta-green text-brand-primary-dark',
      animationType: 'pulse-infinite',
    },
    last: {
      text: t('statusLastSeats', 'Últimos Cupos'),
      className: 'bg-brand-cta-yellow text-brand-primary-dark',
      animationType: 'pulse-infinite',
    },
    soldOut: {
      text: t('statusSoldOut', 'Agotado'),
      className: 'bg-red-500 text-brand-primary-dark',
      animationType: 'pulse-finite',
    },
    // --- Nuevo estado para viajes pasados ---
    completed: {
      text: t('statusCompleted', 'Finalizado'),
      className: 'bg-gray-500 text-white',
      animationType: 'none', // Sin animación
    },
  };

  const data = statusMap[status];
  if (!data) return null;

  let animationProps = {
    initial: { scale: 1 },
    animate: { scale: 1 },
    transition: {},
  };

  if (data.animationType === 'pulse-infinite') {
    animationProps.animate = {
      scale: [1, 1.1, 1],
      opacity: [1, 0.9, 1],
    };
    animationProps.transition = {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    };
  } else if (data.animationType === 'pulse-finite') {
    animationProps.animate = {
      scale: [1, 1.2, 1, 1.1, 1],
    };
    animationProps.transition = {
      duration: 0.8,
      repeat: 2,
      ease: 'easeInOut',
      delay: 0.2,
    };
  }
  // Si animationType es 'none', no se añaden props de animación extra.

  const sizeClass =
    status === 'soldOut' ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs';

  return (
    <motion.span
      {...animationProps}
      className={`inline-block rounded-full font-semibold ${data.className} ${sizeClass} ${className}`}>
      {data.text}
    </motion.span>
  );
};

export default AvailabilityBadgeComponent;
