// src/pages/DetailPage/ExperiencePage/Layout/ExperienceLayout.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer } from '../../../../hooks/animations';
import HeaderComponent from '../../../../components/HeaderComponent';
import UpcomingTripsHorizontalSection from '../../common/Sections/UpcomingTripsHorizontalSection';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import PaymentCard from '../../common/Cards/PaymentCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import CtaCard from '../../common/Cards/CtaCard';
import UpcomingCoursesHorizontalSection from '../../common/Sections/UpcomingCoursesHorizontalSection'; // For offered courses

import { paymentMethodsData } from '../../../../data/global/paymentMethodsData';
import { contactPageData } from '../../../../data/pages/contactData';
import { publishedExperiences } from '../../../../data/content/experiences/_index';
import { InfoIcon } from '../../../../assets/icons/InfoIcon'; // Ensure InfoIcon is imported

const ExperienceLayout = ({ experienceData, offeredCoursesData }) => {
  const { t, i18n } = useTranslation([
    'experiences',
    'common',
    'payment',
    'contact',
    'courses',
    'destinations',
  ]);

  if (!experienceData) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Experience data incomplete.
      </div>
    );
  }

  // Define primaryCourseData if an offered course exists (assuming first in array is primary)
  const primaryCourseData =
    offeredCoursesData && offeredCoursesData.length > 0
      ? offeredCoursesData[0]
      : null;

  const prefilledText = t('contactWhatsAppMessage', {
    ns: 'contact',
    experienceName: t(experienceData.nameKey, { ns: 'experiences' }),
  });
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

  const otherTripsToThisDestination = experienceData.destinationId
    ? publishedExperiences.filter(
        (trip) =>
          trip.destinationId === experienceData.destinationId &&
          trip.id !== experienceData.id && // Exclude current trip
          new Date(trip.details.endDate) >= new Date().setHours(0, 0, 0, 0)
      )
    : [];

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'>
      {/* Header */}
      <HeaderComponent
        sectionData={experienceData.header}
        translationNS='experiences'
      />

      {/* Main content container (2 columns on desktop) */}
      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8 items-start'>
        {/* Main content column */}
        {/* REVERTED: Removed ref and style from here */}
        <main className='lg:col-span-2 space-y-16 lg:sticky top-24 h-fit'>
          {/* Upcoming Trips Section (showing other trips to this destination) */}
          {otherTripsToThisDestination.length > 0 && (
            <UpcomingTripsHorizontalSection
              availableTrips={otherTripsToThisDestination}
              titleKey='expOtherTripsTitle'
              noTripsMessageKey='noUpcomingTrips'
              translationNS='experiences'
            />
          )}

          {/* Description Section */}
          <DescriptionSection
            descriptionData={experienceData.description}
            translationNS='experiences'
          />

          {/* Itinerary Section */}
          {experienceData.itinerary &&
            experienceData.itinerary.days?.length > 0 && (
              <section>
                <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
                  {t(experienceData.itinerary.titleKey, { ns: 'experiences' })}
                </h2>
                <div className='space-y-6'>
                  {experienceData.itinerary.days.map((dayData) => (
                    <div key={dayData.day}>
                      <h3 className='text-2xl font-sans font-semibold text-brand-cta-green'>
                        {t(dayData.titleKey, { ns: 'experiences' })}
                      </h3>
                      <p className='mt-1 font-serif text-brand-neutral/90'>
                        {t(dayData.descriptionKey, { ns: 'experiences' })}
                      </p>
                    </div>
                  ))}
                </div>
                {experienceData.itinerary.notes &&
                  experienceData.itinerary.notes.length > 0 && (
                    <div className='mt-6 space-y-2'>
                      {experienceData.itinerary.notes.map((noteKey, index) => (
                        <div
                          key={index}
                          className='flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80'>
                          <InfoIcon />
                          <p className='font-serif text-sm'>
                            {t(noteKey, { ns: 'experiences' })}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
              </section>
            )}

          {/* Offered Courses Section - Using UpcomingCoursesHorizontalSection */}
          {offeredCoursesData && offeredCoursesData.length > 0 && (
            <UpcomingCoursesHorizontalSection
              availableCourses={offeredCoursesData}
              titleKey={experienceData.offeredCourses.titleKey}
              noTripsMessageKey='noUpcomingTrips'
              translationNS='experiences'
            />
          )}

          {/* Gallery Section */}
          <GallerySection
            galleryData={experienceData.gallery}
            translationNS='experiences'
          />
        </main>

        {/* Sidebar with key information */}
        {/* REVERTED: Removed ref, style, and 'relative' class if it was only for the hook */}
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          {/* Details Card */}
          <DetailsCard
            detailsData={experienceData.details}
            translationNS='experiences'
          />

          {/* Payment Methods */}
          <PaymentCard
            paymentData={paymentMethodsData}
            translationNS='payment'
          />

          {/* What Is Included (for the Experience/Trip) */}
          <ChecklistCard
            checklistData={experienceData.whatIsIncluded}
            translationNS='experiences'
            type='included'
          />

          {/* NEW CARD: What Is Included (for the Course) */}
          {primaryCourseData && (
            <ChecklistCard
              checklistData={primaryCourseData.whatIsIncluded}
              translationNS='courses'
              type='included'
            />
          )}

          {/* What Is NOT Included (for the Experience) */}
          <ChecklistCard
            checklistData={experienceData.whatIsNotIncluded}
            translationNS='experiences'
            type='excluded'
          />

          {/* Call to Action (CtaCard) */}
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
