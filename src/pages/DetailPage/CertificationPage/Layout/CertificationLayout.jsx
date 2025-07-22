import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { staggerContainer } from '../../../../hooks/animations';
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import CurriculumSection from '../../common/Sections/CurriculumSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import UpcomingTripSection from '../../common/Sections/UpcomingTripSection';

const CertificationLayout = ({ certificationData, availableTrips, translationNS }) => {
  const { t } = useTranslation([translationNS, 'common']);

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
      {' '}
      {/* Consistent with parent component animations */}{' '}
      <HeaderComponent sectionData={certificationData.header} translationNS={translationNS} />{' '}
      <div className="container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 space-y-16 lg:sticky top-24 h-fit">
          <DescriptionSection
            descriptionData={certificationData.description}
            translationNS={translationNS}
          />
          <CurriculumSection
            curriculumData={certificationData.curriculum}
            translationNS={translationNS}
          />
          <GallerySection galleryData={certificationData.gallery} translationNS={translationNS} />
        </main>
        <aside className="lg:col-span-1 space-y-8 lg:sticky top-24 h-fit">
          <DetailsCard detailsData={certificationData.details} translationNS={translationNS} />
          <ChecklistCard
            checklistData={certificationData.whatIsIncluded}
            translationNS={translationNS}
            type="included"
          />
          <ChecklistCard
            checklistData={certificationData.requirements}
            translationNS={translationNS}
            type="requirements"
          />
          <UpcomingTripSection
            availableTrips={availableTrips}
            titleKey="availableTripsTitle"
            translationNS={translationNS}
            fallbackContent={{
              messageKey: 'noUpcomingTripsMessage',
              messageValues: {
                courseName: t(certificationData.header.titleKey),
              },
              buttonTextKey: 'noUpcomingTripsCtaButton',
              buttonAction: {
                type: 'whatsapp',
                whatsAppMessageKey: 'noUpcomingTripsWhatsAppMessage',
                whatsAppMessageValues: {
                  courseName: t(certificationData.header.titleKey),
                },
              },
            }}
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default CertificationLayout;
