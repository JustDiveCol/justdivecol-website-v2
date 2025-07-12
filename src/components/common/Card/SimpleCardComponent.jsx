// src/components/common/Card/SimpleCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../hooks/animations';

/**
 * A reusable card component that can act as a page link or a smooth-scrolling anchor.
 *
 * @param {object} props - The component props.
 * @param {object} props.cardData - Object containing the card's data.
 * @param {string} props.cardData.link - The destination path. If it starts with '#', it's treated as an anchor link.
 * @param {string} props.cardData.imageUrl - The URL for the card's background image.
 * @param {string} props.cardData.categoryKey - The translation key for the category text.
 * @param {string} props.cardData.titleKey - The translation key for the main title.
 */
const SimpleCardComponent = ({ cardData }) => {
  const { t } = useTranslation('home');

  const { imageUrl, link, categoryKey, titleKey } = cardData;

  // Determine if the link is for an in-page anchor or a separate route.
  const isAnchorLink = link.startsWith('#');

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Memoize the card content to avoid re-creating it on every render.
  const cardContent = React.useMemo(
    () => (
      <>
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Gradient overlay to ensure text is readable over the background. */}
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
    ),
    [imageUrl, categoryKey, titleKey, t]
  );

  return (
    <motion.div
      variants={fadeInUp}
      className='relative group h-96 rounded-lg overflow-hidden shadow-2xl w-full'>
      {isAnchorLink ? (
        // Render a button for anchor links to handle the custom scroll behavior.
        <button
          onClick={handleScroll}
          className='block h-full w-full text-left'>
          {cardContent}
        </button>
      ) : (
        // Render a React Router Link for standard page navigation.
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
