// src/components/ui/FloatingActionsComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { contactPageData } from '../../data/pages/contactData.js';

import ActionButtonComponent from '../common/Button/ActionButtonComponent.jsx';

import { CalendarIcon, WhatsappIcon } from '../../assets/icons/SocialIcons.jsx';
import { NAMESPACES, ROUTES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants.js';

/**
 * Renders a set of floating action buttons on the right side of the screen.
 * Provides quick access to key actions like viewing the calendar and chatting on WhatsApp.
 */
const FloatingActionsComponent = () => {
  // Loads the NAMESPACES.COMMON and 'contact' namespaces for translations.
  const { t } = useTranslation([NAMESPACES.COMMON, NAMESPACES.CONTACT]);
  const navigate = useNavigate();

  // The pre-filled text is prepared here and passed down to the action button.
  const prefilledText = t(SHARED_TRANSLATION_KEYS.GENERAL_WHATSAPP_MESSAGE, {
    ns: NAMESPACES.COMMON,
  });
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

  /**
   * Navigates to the experiences page and then smoothly scrolls
   * to the upcoming trips section.
   */
  const handleNavigateAndScroll = () => {
    navigate(`${ROUTES.experiences}`);
    // A timeout is necessary to ensure the new page has rendered
    // before attempting to scroll to the target element.
    setTimeout(() => {
      // TODO: Ensure this ID matches the one in ExperiencesPage.
      const targetElement = document.getElementById('upcoming-trips-section');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
      className="fixed top-1/2 -translate-y-1/2 right-0 flex flex-col space-y-2 z-50"
    >
      <ActionButtonComponent
        text={t(SHARED_TRANSLATION_KEYS.VIEW_CALENDAR)}
        icon={<CalendarIcon className="w-6 h-6" />}
        onClick={handleNavigateAndScroll}
      />
      <ActionButtonComponent
        text={t(SHARED_TRANSLATION_KEYS.CONTACT_TEXT_BUTTON)}
        icon={<WhatsappIcon className="w-6 h-6" />}
        isLink={true}
        href={whatsappUrl}
      />
    </motion.div>
  );
};

export default FloatingActionsComponent;
