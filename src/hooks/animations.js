/**
 * Stagger container variant.
 * This parent element will orchestrate the animation of its children.
 * The `staggerChildren` property creates a delay between each child's animation.
 */
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2, // Time delay (in seconds) between each child animation
      delayChildren: 0.1,
    },
  },
};

/**
 * A simple "fade in from the bottom" variant for child elements.
 * This can be used by any child of a `staggerContainer`.
 */
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
