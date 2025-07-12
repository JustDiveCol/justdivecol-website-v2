// src/pages/DetailPage/DestinationPage/Layout/DestinationLayout.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animation variants and data
import { staggerContainer } from '../../../../hooks/animations';
import { contactPageData } from '../../../../data/pages/contactData';
import { experiencesPageData } from '../../../../data/pages/experiencesData';

// Reusable section and card components
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import UpcomingTripsVerticalSection from '../../common/Sections/UpcomingTripsVerticalSection';
import CtaCard from '../../common/Cards/CtaCard';
import DiveSitesSection from '../../common/Sections/DiveSitesSection';

/**
 * The main layout component for the destination detail page.
 * It assembles all the necessary sections and cards to display destination information.
 *
 * @param {object} props - The component props.
 * @param {object} props.destinationData - The complete data object for the destination.
 * @param {object[]} props.upcomingTrips - An array of trip objects scheduled for this destination.
 */
const DestinationLayout = ({ destinationData, upcomingTrips }) => {
  // Loads multiple i18next namespaces required for this layout.
  const { t } = useTranslation([
    'destinations',
    'common',
    'contact',
    'experiencesPage',
  ]);

  // A guard clause to prevent rendering if the essential page data is missing.
  if (!destinationData || !destinationData.page) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Destination data incomplete.
      </div>
    );
  }

  // Construct a pre-filled WhatsApp URL for destination-specific inquiries.
  const prefilledText = t('contactWhatsAppMessage', {
    ns: 'contact',
    destinationName: t(destinationData.nameKey, { ns: 'destinations' }),
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
      exit='hidden'
      className='bg-brand-primary-dark text-brand-neutral'>
      <HeaderComponent
        sectionData={{
          // Note: Using destinationInfo.titleKey for both title and subtitle
          // might be intentional or a placeholder. Review if a separate subtitleKey is needed.
          titleKey: destinationData.nameKey,
          subtitleKey: destinationData.card.descriptionKey,
          headerImageUrl: destinationData.page.headerImageUrl,
        }}
        translationNS='destinations'
      />

      {/* Main two-column layout for the page content. */}
      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        {/* Main content column (left) with a sticky position on large screens. */}
        <main className='lg:col-span-2 space-y-16 lg:sticky top-24 h-fit'>
          <DescriptionSection
            descriptionData={destinationData.page.destinationInfo}
            translationNS='destinations'
          />

          <DiveSitesSection
            diveSiteData={destinationData.page.diveSites}
            translationNS={'destinations'}
          />

          <GallerySection
            galleryData={destinationData.page.gallery}
            translationNS='destinations'
          />
        </main>

        {/* Sidebar column (right) with a sticky position on large screens. */}
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          <DetailsCard
            detailsData={destinationData.page.details}
            translationNS='destinations'
          />

          <ChecklistCard
            checklistData={{
              titleKey: destinationData.page.uniqueFinds.titleKey,
              items: destinationData.page.uniqueFinds.items,
            }}
            translationNS='destinations'
          />

          <UpcomingTripsVerticalSection
            availableTrips={upcomingTrips}
            titleKey='destinationUpcomingTripsTitle'
            noTripsMessageKey='noUpcomingTrips'
            translationNS='destinations'
          />

          {/* This CTA reuses keys from experiencesPageData for a consistent message about custom trips. */}
          <CtaCard
            ctaData={{
              titleKey: experiencesPageData.customTripCta.titleKey,
              buttonTextKey: experiencesPageData.customTripCta.ctaTextKey,
              link: whatsappUrl,
              isExternal: true,
            }}
            translationNS='experiencesPage'
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default DestinationLayout;
