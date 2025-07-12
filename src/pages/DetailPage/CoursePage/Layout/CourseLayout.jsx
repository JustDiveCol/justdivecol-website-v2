// src/pages/DetailPage/CoursePage/Layout/CourseLayout.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animation variants and data
import { staggerContainer } from '../../../../hooks/animations';
import { contactPageData } from '../../../../data/pages/contactData';

// Reusable section and card components
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import CurriculumSection from '../../common/Sections/CurriculumSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import CtaCard from '../../common/Cards/CtaCard';
import UpcomingTripsHorizontalSection from '../../common/Sections/UpcomingTripsHorizontalSection';

/**
 * The main layout component for the course detail page.
 * It assembles all the necessary sections and cards to display course information.
 *
 * @param {object} props - The component props.
 * @param {object} props.courseData - The complete data object for the course.
 * @param {object[]} props.availableTrips - An array of trip objects where this course can be taken.
 */
const CourseLayout = ({ courseData, availableTrips }) => {
  const { t } = useTranslation(['courses', 'common', 'contact']);

  // Construct a pre-filled WhatsApp URL for course inquiries.
  const prefilledText = t('courseInquiryMessage', {
    ns: 'contact',
    courseName: t(courseData.header.titleKey, { ns: 'courses' }),
  });
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

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

      {/* Main two-column layout for the page content. */}
      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        {/* Main content column (left) */}
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

        {/* Sidebar column (right) */}
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
          <UpcomingTripsHorizontalSection
            availableTrips={availableTrips}
            titleKey='availableTripsTitle'
            noTripsMessageKey='noUpcomingTrips'
            translationNS='courses'
          />

          {/* This CTA is conditional: its content changes based on whether trips are available. */}
          <CtaCard
            ctaData={
              availableTrips && availableTrips.length > 0
                ? {
                    titleKey: 'courseCtaAvailableTitle',
                    buttonTextKey: 'courseCtaAvailableButton',
                    link: '/politicas', // Link to policies page if trips are scheduled.
                    isExternal: false,
                  }
                : {
                    titleKey: courseData.cta.titleKey,
                    buttonTextKey: courseData.cta.buttonTextKey,
                    link: whatsappUrl, // Link to WhatsApp if no trips are scheduled.
                    isExternal: true,
                  }
            }
            translationNS='courses'
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default CourseLayout;
