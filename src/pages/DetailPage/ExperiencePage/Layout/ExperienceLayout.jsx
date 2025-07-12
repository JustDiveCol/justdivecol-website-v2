// src/pages/DetailPage/ExperiencePage/Layout/ExperienceLayout.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animation variants and data
import { staggerContainer } from '../../../../hooks/animations';
import { paymentMethodsData } from '../../../../data/global/paymentMethodsData';
import { contactPageData } from '../../../../data/pages/contactData';
import { publishedExperiences } from '../../../../data/content/experiences/_index';

// Reusable section and card components
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import PaymentCard from '../../common/Cards/PaymentCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import CtaCard from '../../common/Cards/CtaCard';
import UpcomingTripsHorizontalSection from '../../common/Sections/UpcomingTripsHorizontalSection';
import UpcomingCoursesHorizontalSection from '../../common/Sections/UpcomingCoursesHorizontalSection';
import ItinerarySection from '../../common/Sections/ItinerarySection';
import { InfoIcon } from '../../../../assets/icons/InfoIcon';

/**
 * The main layout component for the experience detail page.
 * It assembles all necessary sections and cards to display experience information.
 *
 * @param {object} props - The component props.
 * @param {object} props.experienceData - The complete data object for the experience/trip.
 * @param {object[]} props.offeredCoursesData - An array of course data objects offered with this trip.
 */
const ExperienceLayout = ({ experienceData, offeredCoursesData }) => {
  const { t } = useTranslation([
    'experiences',
    'common',
    'payment',
    'contact',
    'courses',
    'destinations',
  ]);

  // A guard clause to prevent rendering if the essential page data is missing.
  if (!experienceData) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Experience data incomplete.
      </div>
    );
  }

  // --- Logic and Data Preparation ---

  // For simplicity, we only show the "What's Included" for the first offered course.
  const primaryCourseData = offeredCoursesData?.[0] || null;

  // Construct a pre-filled WhatsApp URL for experience-specific inquiries.
  const prefilledText = t('contactWhatsAppMessage', {
    ns: 'contact',
    experienceName: t(experienceData.nameKey, { ns: 'experiences' }),
  });
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

  // Find other upcoming trips to the same destination to show as alternatives.
  const otherTripsToThisDestination = experienceData.destinationId
    ? publishedExperiences.filter(
        (trip) =>
          trip.destinationId === experienceData.destinationId &&
          trip.id !== experienceData.id && // Exclude the current trip.
          new Date(trip.details.endDate) >= new Date().setHours(0, 0, 0, 0)
      )
    : [];

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'>
      <HeaderComponent
        sectionData={experienceData.header}
        translationNS='experiences'
      />

      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8 items-start'>
        {/* --- Main Content Column (Left) --- */}
        <main className='lg:col-span-2 space-y-16 lg:sticky top-24 h-fit'>
          {otherTripsToThisDestination.length > 0 && (
            <UpcomingTripsHorizontalSection
              availableTrips={otherTripsToThisDestination}
              titleKey='expOtherTripsTitle'
              noTripsMessageKey='noUpcomingTrips'
              translationNS='experiences'
            />
          )}

          <DescriptionSection
            descriptionData={experienceData.description}
            translationNS='experiences'
          />

          {experienceData.itinerary && (
            <ItinerarySection
              itineraryData={experienceData.itinerary}
              translationNS='experiences'
            />
          )}

          {offeredCoursesData && offeredCoursesData.length > 0 && (
            <UpcomingCoursesHorizontalSection
              availableCourses={offeredCoursesData}
              titleKey={experienceData.offeredCourses.titleKey}
              noTripsMessageKey='noUpcomingTrips'
              translationNS='experiences'
            />
          )}

          <GallerySection
            galleryData={experienceData.gallery}
            translationNS='experiences'
          />
        </main>

        {/* --- Sidebar Column (Right) --- */}
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          <DetailsCard
            detailsData={experienceData.details}
            translationNS='experiences'
          />
          <PaymentCard
            paymentData={paymentMethodsData}
            translationNS='payment'
          />
          <ChecklistCard
            checklistData={experienceData.whatIsIncluded}
            translationNS='experiences'
            type='included'
          />

          {/* If a course is offered, show what's included with that course as well. */}
          {primaryCourseData && (
            <ChecklistCard
              checklistData={primaryCourseData.whatIsIncluded}
              translationNS='courses'
              type='included'
            />
          )}

          <ChecklistCard
            checklistData={experienceData.whatIsNotIncluded}
            translationNS='experiences'
            type='excluded'
          />

          <CtaCard
            ctaData={{
              titleKey: experienceData.cta.titleKey,
              buttonTextKey: experienceData.cta.buttonTextKey,
              link: whatsappUrl,
              isExternal: true,
            }}
            translationNS='experiences'
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default ExperienceLayout;
