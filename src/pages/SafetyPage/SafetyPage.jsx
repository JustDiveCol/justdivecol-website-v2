// src/pages/SafetyPage/SafetyPage.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Data and Animations
import { safetyPageData as data } from '../../data/pages/safetyData.js';
import { staggerContainer } from '../../hooks/animations.js';

// Layout and Reusable Components
import SEOComponent from '../../components/ui/SEOComponent.jsx';
import HeaderComponent from '../../components/HeaderComponent.jsx';

// Page-specific Sections
import ProtocolsSection from './Sections/ProtocolsSection.jsx';
import EquipmentSection from './Sections/EquipmentSection.jsx';
import CertificationsSection from './Sections/CertificationsSection.jsx';

export const SafetyPage = () => {
  const { t } = useTranslation('safety');
  const { seo, header, protocols, equipment, certifications } = data;

  return (
    <motion.div
      variants={staggerContainer}
      initial='initial'
      animate='animate'
      exit='exit'>
      <SEOComponent
        title={t(seo.titleKey)}
        description={t(seo.descriptionKey)}
      />

      <HeaderComponent
        sectionData={header}
        translationNS='safety'
      />

      <ProtocolsSection protocolsData={protocols} />
      <EquipmentSection equipmentData={equipment} />
      <CertificationsSection certificationsData={certifications} />
    </motion.div>
  );
};

export default SafetyPage;
