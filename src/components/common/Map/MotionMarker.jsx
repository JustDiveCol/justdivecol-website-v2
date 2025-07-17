// src/components/map/MotionMarker.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MotionMarker = ({ IconComponent, isSelected }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.3 }}
    transition={{ type: 'spring', stiffness: 120, damping: 10 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--color-brand-primary-dark)',
      borderRadius: '9999px',
      backgroundColor: isSelected
        ? 'var(--color-brand-cta-orange)'
        : 'var(--color-brand-white)',
      width: '100%',
      height: '100%',
      pointerEvents: 'auto',
      transition: 'background-color 0.3s ease',
    }}>
    <motion.div
      whileHover={{ scale: 1.6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
      <IconComponent
        className={
          isSelected ? 'text-white w-4 h-4' : 'text-brand-primary-dark w-4 h-4'
        }
      />
    </motion.div>
  </motion.div>
);

export default MotionMarker;
