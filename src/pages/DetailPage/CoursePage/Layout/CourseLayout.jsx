import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer } from '../../../../hooks/animations';

import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import CurriculumSection from '../../common/Sections/CurriculumSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import CtaCard from '../../common/Cards/CtaCard';
import UpcomingTripsHorizontalSection from '../../common/Sections/UpcomingTripsHorizontalSection';
import PaymentCard from '../../common/Cards/PaymentCard';

import { paymentMethodsData } from '../../../../data/global/paymentMethodsData';
import { contactPageData } from '../../../../data/pages/contactData';

const CourseLayout = ({ courseData, availableTrips }) => {
  const { t } = useTranslation(['courses', 'common', 'contact']); // Load necessary namespaces

  // Construct WhatsApp URL for CTA
  const prefilledText = t('contactWhatsAppMessage', {
    ns: 'contact',
    courseName: t(courseData.header.titleKey, { ns: 'courses' }), // Pass course name for inquiry
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
      {/* Header - use courseData for header props */}
      <HeaderComponent
        sectionData={courseData.header} // Pass specific header data from courseData
        translationNS='courses' // Specify namespace for header translations
      />

      {/* Main content container (2-column layout on desktop) */}
      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        {/* Main content column */}
        <main className='lg:col-span-2 space-y-16'>
          {/* Description Section */}
          <DescriptionSection
            descriptionData={courseData.description} // Pass description data
            translationNS='courses' // Specify namespace
          />

          {/* Curriculum Section */}
          <CurriculumSection
            curriculumData={courseData.curriculum} // Pass curriculum data
            translationNS='courses' // Specify namespace
          />

          {/* Gallery Section */}
          <GallerySection
            galleryData={courseData.gallery} // Pass gallery data
            translationNS='courses' // Specify namespace
          />
        </main>

        {/* Sidebar with key information */}
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          {/* Course Details */}
          <DetailsCard
            detailsData={courseData.details} // Pass details data
            translationNS='courses' // Specify namespace
          />

          {/* Payment Methods */}
          <PaymentCard
            paymentData={paymentMethodsData} // Pass payment methods data
            translationNS='payment' // Specify namespace for payment
          />

          {/* What's Included */}
          <ChecklistCard
            checklistData={courseData.whatIsIncluded} // Pass included items data
            translationNS='courses' // Specify namespace
            type='included' // Add a type prop to differentiate styling if needed
          />

          {/* Requirements */}
          <ChecklistCard
            checklistData={courseData.requirements} // Pass requirements data
            translationNS='courses' // Specify namespace
            type='requirements' // Add a type prop to differentiate styling if needed
          />

          {/* Available Trips (can be horizontal or vertical depending on prop) */}
          <UpcomingTripsHorizontalSection
            availableTrips={availableTrips} // Pass available trips
            titleKey='availableTripsTitle' // Key for section title
            noTripsMessageKey='noUpcomingTrips' // Key for no trips message
            translationNS='courses' // Specify namespace
          />

          {/* Call to Action (CTA) - conditional based on available trips */}
          <CtaCard
            ctaData={
              availableTrips && availableTrips.length > 0
                ? {
                    titleKey: 'courseCtaAvailableTitle', //
                    buttonTextKey: 'courseCtaAvailableButton', //
                    link: '/politicas', // Link to policies page
                    isExternal: false,
                  }
                : {
                    titleKey: courseData.cta.titleKey, //
                    buttonTextKey: courseData.cta.buttonTextKey, //
                    link: whatsappUrl, // Use the generated WhatsApp URL
                    isExternal: true, // Mark as external link
                  }
            }
            translationNS='courses' // Specify namespace
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default CourseLayout;
