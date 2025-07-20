// src/hooks/animations.js

/**
 * A Framer Motion variant for a container that staggers the animation of its children.
 * This parent element orchestrates the animation sequence.
 * The `staggerChildren` property creates a delay between each child's animation,
 * making them appear one after another.
 */
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2, // Time delay (in seconds) between each child animation.
      delayChildren: 0.1, // A small delay before the staggering sequence starts.
    },
  },
};

/**
 * A simple "fade in from the bottom" variant for child elements.
 * This can be used by any direct child of a component using `staggerContainer`.
 */
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 50, // Start 50px below its final position.
  },
  animate: {
    opacity: 1,
    y: 0, // Animate to its final y-position.
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/** FAQ list container: tighter, quicker cascade */
export const faqStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/** FAQ item: small slide‑up + fade */
export const faqFadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

/** Chevron open/close rotation for any toggle icon */
export const chevronToggle = {
  closed: {
    rotate: 0,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  open: {
    rotate: 180,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};

/** NEW: Variant for section-level fade-in-up animations */
export const sectionFadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const viewVariants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};
