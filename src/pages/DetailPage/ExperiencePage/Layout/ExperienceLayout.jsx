// src/pages/DetailPage/ExperiencePage/Layout/ExperienceLayout.jsx
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animation variants and data
import { staggerContainer } from '../../../../hooks/animations';
import { paymentMethodsData } from '../../../../data/global/paymentMethodsData';
import { publishedExperiences } from '../../../../data/content/experiences/_index';
import { formatDateRange } from '../../../../utils/formatters';

// Reusable section and card components
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import PaymentCard from '../../common/Cards/PaymentCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import CtaCard from '../../common/Cards/CtaCard';
import UpcomingTripSection from '../../common/Sections/UpcomingTripSection';
import UpcomingCoursesSection from '../../common/Sections/UpcomingCoursesSection';
import ItinerarySection from '../../common/Sections/ItinerarySection';
import MapComponent from '../../../MapPage/components/MapComponent';
import CurriculumCard from '../../common/Cards/CurriculumCard';

/**
 * The main layout component for the experience detail page.
 * It assembles all necessary sections and cards to display experience information.
 *
 * @param {object} props - The component props.
 * @param {object} props.experienceData - The complete data object for the experience/trip.
 * @param {object[]} props.offeredCoursesData - An array of course data objects offered with this trip.
 */
const ExperienceLayout = ({ experienceData, offeredCoursesData }) => {
  const { t, i18n } = useTranslation([
    'experiences',
    'common',
    'payment',
    'contact',
    'courses',
    'destinations',
  ]);

  const { dateRangeText, durationText } = useMemo(() => {
    if (!experienceData?.details) {
      return {};
    }

    const { startDate, endDate } = experienceData.details;
    if (!startDate || !endDate) {
      return {};
    }

    // Use your existing helper for the date range
    const dateRange = formatDateRange(startDate, endDate, i18n.language, t);

    // Calculate the duration
    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);
    const timeDiff = end.getTime() - start.getTime();
    const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));

    const days = dayDiff + 1;
    const nights = days - 1;
    const duration = t('durationFormat', { ns: 'common', days, nights });

    return { dateRangeText: dateRange, durationText: duration };
  }, [experienceData, t, i18n.language]);

  if (!experienceData) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Experience data incomplete.
      </div>
    );
  }

  const primaryCourseData = offeredCoursesData?.[0] || null;

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
            <UpcomingTripSection
              availableTrips={otherTripsToThisDestination}
              titleKey='expOtherTripsTitle'
              translationNS='experiences'
            />
          )}
          {/* Courses offered */}
          {offeredCoursesData && offeredCoursesData.length > 0 && (
            <UpcomingCoursesSection
              availableCourses={offeredCoursesData}
              titleKey={experienceData.offeredCourses.titleKey}
              translationNS='experiences'
            />
          )}
          {/* Description */}
          <DescriptionSection
            descriptionData={experienceData.description}
            translationNS='experiences'
          />

          {/* Itinerary */}
          {experienceData.itinerary && (
            <ItinerarySection
              itineraryData={experienceData.itinerary}
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
          {/* Details */}
          <DetailsCard
            detailsData={experienceData.details}
            dateRange={dateRangeText}
            duration={durationText}
            translationNS='experiences'
          />
          {/* Payment Plan */}
          <CurriculumCard
            detailsData={experienceData.paymentPlan}
            translationNS='experiences'
          />

          {/* Payment Options */}
          <PaymentCard
            paymentData={paymentMethodsData}
            translationNS='payment'
          />

          {/* Included Experience */}
          <ChecklistCard
            checklistData={experienceData.whatIsIncluded}
            translationNS='experiences'
            type='included'
          />

          {/* Included Course */}
          {primaryCourseData && (
            <ChecklistCard
              checklistData={primaryCourseData.whatIsIncluded}
              translationNS='courses'
              type='included'
            />
          )}

          {/* Not Included */}
          <ChecklistCard
            checklistData={experienceData.whatIsNotIncluded}
            translationNS='experiences'
            type='excluded'
          />

          {/* CTA */}
          <CtaCard
            ctaData={{
              titleKey: experienceData.cta.titleKey,
              buttonTextKey: experienceData.cta.buttonTextKey,
              ctaAction: experienceData.cta.ctaAction,
            }}
            translationNS='experiences'
          />
        </aside>
      </div>

      {/* Map */}
      <section className='w-full bg-brand-primary-medium py-12 md:py-16 mt-16'>
        <div className='container mx-auto px-4 md:px-8'>
          <h3 className='text-3xl font-bold text-brand-white mb-4'>
            {t('map:mapLabel')}
          </h3>

          <div className='bg-brand-primary-dark p-4 sm:p-6 rounded-2xl shadow-2xl'>
            <div className='rounded-lg overflow-hidden'>
              <MapComponent destinationId={experienceData.destinationId} />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExperienceLayout;
