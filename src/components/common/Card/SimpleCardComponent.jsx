// components/common/Card/SimpleCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../hooks/animations';

/**
 * A reusable card component that can act as a page link or a smooth-scrolling anchor.
 * @param {object} cardData - Object containing card details (link, imageUrl, categoryKey, titleKey).
 */
const SimpleCardComponent = ({ cardData }) => {
  const { t } = useTranslation('home');

  const { imageUrl, link, categoryKey, titleKey } = cardData;

  // Determine if the link is an anchor (starts with #) or a page route.
  const isAnchorLink = link.startsWith('#');

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Reusable card content to avoid repetition.
  const cardContent = (
    <>
      <div
        className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
      <div className='relative h-full flex flex-col justify-end p-6 text-white'>
        <p className='font-sans text-sm uppercase tracking-widest text-brand-cta-orange font-semibold'>
          {t(categoryKey)}
        </p>
        <h3 className='mt-2 text-2xl md:text-3xl font-sans font-bold'>
          {t(titleKey)}
        </h3>
      </div>
    </>
  );

  return (
    <motion.div
      variants={fadeInUp}
      className='relative group h-96 rounded-lg overflow-hidden shadow-2xl w-full'>
      {isAnchorLink ? (
        // If it's an anchor, render a button with the onClick handler.
        <button
          onClick={handleScroll}
          className='block h-full w-full text-left'>
          {cardContent}
        </button>
      ) : (
        // If it's a normal route, render a React Router Link.
        <Link
          to={link}
          className='block h-full w-full'>
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default SimpleCardComponent;
