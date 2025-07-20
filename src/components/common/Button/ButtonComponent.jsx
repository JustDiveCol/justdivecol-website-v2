import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { contactPageData } from '../../../data/pages/contactData';

// Define a simple default variant for the entrance animation (if no specific variants are passed)
const defaultMotionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Reusable button component that can be an internal link (React Router Link)
 * or an external link, with support for animations and translations.
 *
 * @param {object} props - The component properties.
 * @param {string} props.to - The URL the button should navigate to.
 * @param {string} props.textKey - The translation key for the button's text.
 * @param {string} [props.translationNS='common'] - The i18n translation namespace to use.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes directly for the <Link> or <a> tag.
 * @param {string} [props.containerClassName=''] - Additional Tailwind CSS classes for the outer motion.div container.
 * @param {boolean} [props.isExternal=false] - If true, the button will render as an external link (<a> tag).
 * @param {object} [props.motionVariants=defaultMotionVariants] - Framer Motion variants for the animation.
 * @param {object} [props.motionInitial] - Framer Motion 'initial' prop override.
 * @param {object} [props.motionAnimate] - Framer Motion 'animate' prop override.
 * @param {object} [props.motionTransition] - Framer Motion 'transition' prop override.
 * @param {boolean} [props.animateOnView=false] - If true, the button's animation triggers when it enters the viewport.
 * @param {object} [props.viewportOptions] - Framer Motion 'viewport' prop options, used with animateOnView.
 */
const ButtonComponent = ({
  action,
  textKey,
  translationNS = 'common',
  className = '',
  containerClassName = '',
  motionVariants = defaultMotionVariants,
  motionInitial,
  motionAnimate,
  motionTransition,
  animateOnView = false,
  viewportOptions,
}) => {
  const { t } = useTranslation([translationNS, 'common']);

  const finalLink = useMemo(() => {
    if (!action) return '/';

    switch (action.type) {
      case 'whatsapp': {
        const prefilledText = t(action.whatsAppMessageKey, {
          ...action.whatsAppMessageValues,
          ns: action.whatsAppMessageNS || translationNS,
        });

        const phoneNumber = contactPageData.contactInfo.phone.replace(
          /\s/g,
          ''
        );
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          prefilledText
        )}`;
      }
      case 'external':
        return action.path;
      case 'internal':
      default:
        return action.path || '/';
    }
  }, [action, t, translationNS]);

  const baseButtonClasses = `inline-block bg-brand-cta-orange text-brand-white font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:focus:ring-brand-cta-yellow ${className}`;
  const content = t(textKey, { ns: translationNS });

  const isInternalLink = action?.type === 'internal';

  const ButtonContent = isInternalLink ? (
    <Link
      to={finalLink}
      className={baseButtonClasses}>
      {content}
    </Link>
  ) : (
    <a
      href={finalLink}
      target='_blank'
      rel='noopener noreferrer'
      className={baseButtonClasses}>
      {content}
    </a>
  );

  const initialProp = motionInitial || (animateOnView ? 'hidden' : undefined);
  const animateProp = motionAnimate || (animateOnView ? 'show' : undefined);
  const transitionProp =
    motionTransition || (animateOnView ? { duration: 0.5 } : undefined);

  return (
    <motion.div
      variants={motionVariants}
      initial={initialProp}
      animate={animateProp}
      transition={transitionProp}
      viewport={
        animateOnView
          ? viewportOptions || { once: true, amount: 0.25 }
          : undefined
      }
      className={containerClassName}>
      {ButtonContent}
    </motion.div>
  );
};

export default ButtonComponent;
