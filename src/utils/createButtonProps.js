// src/utils/createButtonProps.js

import { BUTTON_TYPES, NAMESPACES } from '@/data/global/constants';

/**
 * Factory function to generate props for the ButtonComponent.
 *
 * @param {object} config - Configuration object.
 * @param {'internal'|'external'|'whatsapp'} config.type - Type of action.
 * @param {string} config.textKey - Translation key for button label.
 * @param {string} [config.translationNS='common'] - Translation namespace.
 * @param {string} [config.path] - Route path (for internal/external).
 * @param {string} [config.whatsAppMessageKey] - i18n key for prefilled WhatsApp message.
 * @param {object} [config.whatsAppMessageValues] - Optional variables for message interpolation.
 * @param {string} [config.whatsAppMessageNS] - Optional override for message namespace.
 * @param {boolean} [config.animateOnView=false] - If true, enables viewport-triggered animation.
 * @param {string} [config.className] - Optional Tailwind CSS classes.
 * @param {string} [config.containerClassName] - Optional wrapper classes.
 * @returns {object} Props to pass to <ButtonComponent />
 */
export function createButtonProps(config) {
  const {
    type,
    textKey,
    translationNS = NAMESPACES.COMMON,
    path,
    whatsAppMessageKey,
    whatsAppMessageValues,
    whatsAppMessageNS,
    animateOnView = false,
    className = '',
    containerClassName = '',
  } = config;

  const action = (() => {
    if (type === BUTTON_TYPES.whatsapp) {
      return {
        type: BUTTON_TYPES.whatsapp,
        whatsAppMessageKey,
        whatsAppMessageValues,
        whatsAppMessageNS,
      };
    }

    return {
      type,
      path,
    };
  })();

  return {
    textKey,
    translationNS,
    action,
    animateOnView,
    className,
    containerClassName,
  };
}
