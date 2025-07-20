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

const CourseLayout = ({ courseData, availableTrips }) => {
  const { t } = useTranslation('courses');

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'>
      <HeaderComponent
        sectionData={courseData.header}
        translationNS='courses'
      />
      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        <main className='lg:col-span-2 space-y-16 lg:sticky top-24 h-fit'>
          <DescriptionSection
            descriptionData={courseData.description}
            translationNS='courses'
          />
          <CurriculumSection
            curriculumData={courseData.curriculum}
            translationNS='courses'
          />
          <GallerySection
            galleryData={courseData.gallery}
            translationNS='courses'
          />
        </main>
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          <DetailsCard
            detailsData={courseData.details}
            translationNS='courses'
          />
          <ChecklistCard
            checklistData={courseData.whatIsIncluded}
            translationNS='courses'
            type='included'
          />
          <ChecklistCard
            checklistData={courseData.requirements}
            translationNS='courses'
            type='requirements'
          />
          <UpcomingTripSection
            availableTrips={availableTrips}
            titleKey='availableTripsTitle'
            translationNS='courses' // El namespace principal es 'courses'
            fallbackContent={{
              messageKey: 'noUpcomingTripsMessage',
              messageValues: {
                courseName: t(courseData.header.titleKey),
              },
              buttonTextKey: 'noUpcomingTripsCtaButton',
              buttonAction: {
                type: 'whatsapp',
                whatsAppMessageKey: 'noUpcomingTripsWhatsAppMessage',
                whatsAppMessageValues: {
                  courseName: t(courseData.header.titleKey),
                },
              },
            }}
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default CourseLayout;
