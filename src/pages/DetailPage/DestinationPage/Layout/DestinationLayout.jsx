// src/pages/DetailPage/DestinationPage/Layout/DestinationLayout.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animation variants and data
import { staggerContainer } from '../../../../hooks/animations';
import { experiencesPageData } from '../../../../data/pages/experiencesData';
import MapComponent from '../../../MapPage/components/MapComponent';

// Reusable section and card components
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import UpcomingTripSection from '../../common/Sections/UpcomingTripSection';
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
  const { t } = useTranslation(['destinations', 'map']);

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='bg-brand-primary-dark text-brand-neutral'>
      <HeaderComponent
        sectionData={destinationData.header}
        translationNS='destinations'
      />

      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        {/* ... (main content column remains the same) ... */}
        <main className='lg:col-span-2 space-y-16 lg:sticky top-24 h-fit'>
          <DescriptionSection
            descriptionData={destinationData.description}
            translationNS='destinations'
          />
          <DiveSitesSection
            diveSiteData={destinationData.diveSites}
            translationNS={'destinations'}
          />
          <section className='relative bg-brand-primary-medium p-6 rounded-lg shadow-lg overflow-visible z-0'>
            <h3 className='text-2xl font-bold text-brand-white mb-4'>
              {t('map:mapHeaderSubtitle')}
            </h3>
            <MapComponent destinationId={destinationData.id} />
          </section>
          <GallerySection
            galleryData={destinationData.gallery}
            translationNS='destinations'
          />
        </main>

        {/* --- Sidebar column --- */}
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          <DetailsCard
            detailsData={destinationData.details}
            translationNS='destinations'
          />
          <ChecklistCard
            checklistData={{
              titleKey: destinationData.uniqueFinds.titleKey,
              items: destinationData.uniqueFinds.items,
            }}
            translationNS='destinations'
          />
          <UpcomingTripSection
            availableTrips={upcomingTrips}
            titleKey='availableTripsTitle'
            translationNS='destinations'
            fallbackContent={{
              messageKey: 'noUpcomingTripsMessage',
              // --- AÑADE ESTE BLOQUE ---
              // Pasa los valores dinámicos para el mensaje de fallback
              messageValues: {
                destinationName: t(destinationData.nameKey),
              },
              // --- FIN DEL CAMBIO ---
              buttonTextKey: 'noUpcomingTripsCtaButton',
              buttonAction: {
                type: 'whatsapp',
                whatsAppMessageKey: 'noUpcomingTripsWhatsAppMessage',
                whatsAppMessageValues: {
                  destinationName: t(destinationData.nameKey),
                },
              },
            }}
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default DestinationLayout;
