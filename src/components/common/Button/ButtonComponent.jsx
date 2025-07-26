// src/components/common/Button/ButtonComponent.jsx
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { contactPageData } from '../../../data/pages/contactData';
import { NAMESPACES } from '@/data/global/constants';

// Default animation variants
const defaultMotionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ButtonComponent = ({
  action,
  textKey,
  translationNS,
  className = '',
  containerClassName = '',
  roundedClass = 'rounded-md',
  motionVariants = defaultMotionVariants,
  motionInitial,
  motionAnimate,
  motionTransition,
  animateOnView = false,
  viewportOptions,
}) => {
  const { t } = useTranslation(
    translationNS === NAMESPACES.COMMON ? NAMESPACES.COMMON : [translationNS, NAMESPACES.COMMON]
  );

  // Calcula el link final según el tipo de acción
  const finalLink = useMemo(() => {
    if (!action) return '/';

    switch (action.type) {
      case 'whatsapp': {
        const prefilledText = t(action.whatsAppMessageKey, {
          ...action.whatsAppMessageValues,
          ns: action.whatsAppMessageNS || translationNS,
        });
        const phoneNumber = contactPageData.contactInfo.phone.replace(/\s/g, '');
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledText)}`;
      }
      case 'external':
        return action.path;
      case 'internal':
      default:
        return action.path || '/';
    }
  }, [action, t, translationNS]);

  const baseButtonClasses = `
    inline-block bg-brand-cta-orange text-brand-white font-bold uppercase
    text-button px-8 py-4 shadow-lg transition-transform duration-300
    hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2
    focus:ring-brand-cta-yellow ${roundedClass}
    ${className}
  `;
  const content = t(textKey, { ns: translationNS });
  const isInternalLink = action?.type === 'internal';

  const Clickable = isInternalLink ? (
    <Link to={finalLink} className={baseButtonClasses}>
      {content}
    </Link>
  ) : (
    <a href={finalLink} target="_blank" rel="noopener noreferrer" className={baseButtonClasses}>
      {content}
    </a>
  );

  const initialProp = motionInitial || (animateOnView ? 'hidden' : undefined);
  const animateProp = motionAnimate || (animateOnView ? 'show' : undefined);
  const transitionProp = motionTransition || (animateOnView ? { duration: 0.5 } : undefined);

  return (
    <motion.div
      variants={motionVariants}
      initial={initialProp}
      animate={animateProp}
      transition={transitionProp}
      viewport={animateOnView ? viewportOptions || { once: true, amount: 0.25 } : undefined}
      className={containerClassName}
    >
      {Clickable}
    </motion.div>
  );
};

export default ButtonComponent;
