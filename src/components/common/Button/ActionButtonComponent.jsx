// src/components/common/Button/ActionButtonComponent.jsx
import React, { useState } from 'react';
import { motion } from 'motion/react';

/**
 * A floating action button that reveals text on hover.
 * Can function as a standard button or a link.
 *
 * @param {object} props - The component props.
 * @param {string} props.text - The text to display on hover.
 * @param {React.ReactNode} props.icon - The icon to display.
 * @param {function} [props.onClick] - Optional click handler for button behavior.
 * @param {boolean} [props.isLink=false] - If true, the component renders as an 'a' tag.
 * @param {string} [props.href='#'] - The URL for the link if isLink is true.
 */
const ActionButtonComponent = ({
  text,
  icon,
  onClick,
  isLink = false,
  href = '#',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Conditionally render as a 'button' or an 'a' tag based on the isLink prop.
  const Component = isLink ? 'a' : 'button';

  const handleClick = (e) => {
    if (onClick) onClick(e);
    // Ensure the button retracts if the user clicks and moves the mouse away quickly.
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
