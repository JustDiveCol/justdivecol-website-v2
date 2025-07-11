// src/components/common/Button/ActionButtonComponent.jsx
import React, { useState } from 'react';
import { motion } from 'motion/react';

const ActionButtonComponent = ({
  text,
  icon,
  onClick,
  isLink = false,
  href = '#',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const Component = isLink ? 'a' : 'button';

  const handleClick = (e) => {
    if (onClick) onClick(e);
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='flex justify-end'>
      <Component
        onClick={handleClick}
        href={href}
        target={isLink ? '_blank' : undefined}
        rel={isLink ? 'noopener noreferrer' : undefined}
        className='bg-brand-cta-orange text-white p-3 rounded-l-full shadow-lg flex items-center cursor-pointer'>
        <div className='flex-shrink-0'>{icon}</div>
        <motion.div
          animate={{
            width: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
            marginLeft: isHovered ? '0.75rem' : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='overflow-hidden'>
          <span className='font-sans font-bold text-sm whitespace-nowrap'>
            {text}
          </span>
        </motion.div>
      </Component>
    </motion.div>
  );
};

export default ActionButtonComponent;
