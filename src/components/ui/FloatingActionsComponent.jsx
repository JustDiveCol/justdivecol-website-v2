// src/components/ui/FloatingActionsComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { contactPageData } from '../../data/pages/contactData.js';

// Import the new reusable button
import ActionButtonComponent from '../common/Button/ActionButtonComponent.jsx';

// Import icons
import { CalendarIcon } from '../../assets/icons/CalendarIcon.jsx';
import { WhatsAppIcon } from '../../assets/icons/WhatsAppIcon.jsx';

const FloatingActionsComponent = () => {
  // This component already loads the 'common' and 'contact' namespaces
  const { t } = useTranslation(['common', 'contact']);
  const navigate = useNavigate();

  // We translate the texts here, in the parent component
  const prefilledText = t('contactWhatsAppMessage', { ns: 'contact' });
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

  const handleNavigateAndScroll = () => {
    navigate('/experiencias');
    setTimeout(() => {
      // You might need to adjust this ID later
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
      className='fixed top-1/2 -translate-y-1/2 right-0 flex flex-col space-y-2 z-50'>
      <ActionButtonComponent
        text={t('viewCalendar', { ns: 'common' })}
        icon={<CalendarIcon />}
        onClick={handleNavigateAndScroll}
      />
      <ActionButtonComponent
        text={t('chatOnWhatsApp', { ns: 'common' })}
        icon={<WhatsAppIcon />}
        isLink={true}
        href={whatsappUrl}
      />
    </motion.div>
  );
};

export default FloatingActionsComponent;
