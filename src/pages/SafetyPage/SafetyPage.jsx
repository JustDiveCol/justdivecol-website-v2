// src/pages/SafetyPage/SafetyPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data sources and animations
import { safetyPageData as data } from '../../data/pages/safetyData.js';
import { staggerContainer } from '../../hooks/animations.js';

// UI and Section Components
import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeaderComponent from '../../components/HeaderComponent.jsx';
import ProtocolsSection from './Sections/ProtocolsSection.jsx';
import EquipmentSection from './Sections/EquipmentSection.jsx';
import CertificationsSection from './Sections/CertificationsSection.jsx';

/**
 * Renders the main "Safety" page.
 * This component assembles all the sections related to safety protocols,
 * equipment, and certifications.
 */
export const SafetyPage = () => {
  const { t } = useTranslation('safety');
  const { seo, header, protocols, equipment, certifications } = data;

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
        imageUrl={header.imageUrl}
        url="/seguridad"
      />

      <HeaderComponent sectionData={header} translationNS="safety" />

      <ProtocolsSection protocolsData={protocols} translationNS={'safety'} />
      <EquipmentSection equipmentData={equipment} translationNS={'safety'} />
      <CertificationsSection certificationsData={certifications} translationNS={'safety'} />
    </motion.div>
  );
};

export default SafetyPage;
