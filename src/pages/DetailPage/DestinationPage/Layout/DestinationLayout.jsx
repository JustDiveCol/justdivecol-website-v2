// src/pages/DetailPage/DestinationPage/Layout/DestinationLayout.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer } from '../../../../hooks/animations';
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import UpcomingTripsVerticalSection from '../../common/Sections/UpcomingTripsVerticalSection'; // Using vertical as per your last request
import CtaCard from '../../common/Cards/CtaCard';
import { contactPageData } from '../../../../data/pages/contactData';
import { experiencesPageData } from '../../../../data/pages/experiencesData'; // Import experiencesPageData to get reusable CTA keys

const DestinationLayout = ({ destinationData, upcomingTrips }) => {
  const { t } = useTranslation([
    'destinations',
    'common',
    'contact',
    'experiencesPage',
  ]); // Add 'experiencesPage' namespace

  if (!destinationData || !destinationData.page) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-2xl'>
        Destination data incomplete.
      </div>
    );
  }

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
          titleKey: destinationData.page.destinationInfo.titleKey,
          subtitleKey: destinationData.page.destinationInfo.titleKey,
          imageUrl: destinationData.page.headerImageUrl,
        }}
        translationNS='destinations'
      />

      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        <main className='lg:col-span-2 space-y-16 lg:sticky top-24 h-fit'>
          <DescriptionSection
            descriptionData={destinationData.page.destinationInfo}
            translationNS='destinations'
          />

          <section>
            <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
              {t(destinationData.page.diveSites.titleKey, {
                ns: 'destinations',
              })}
            </h2>
            <div className='space-y-6'>
              {destinationData.page.diveSites.sites.map((site) => (
                <div key={site.id}>
                  <h3 className='text-2xl font-sans font-semibold text-brand-cta-green'>
                    {t(site.nameKey, { ns: 'destinations' })}
                  </h3>
                  <p className='mt-1 font-serif text-brand-neutral/90'>
                    {t(site.descriptionKey, { ns: 'destinations' })}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <GallerySection
            galleryData={destinationData.page.gallery}
            translationNS='destinations'
          />
        </main>

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

          {/* CORRECTED: Using CtaCard instead of CtaComponent */}
          <CtaCard
            ctaData={{
              titleKey: experiencesPageData.customTripCta.titleKey, // Reusing key from experiencesPageData
              buttonTextKey: experiencesPageData.customTripCta.ctaTextKey, // Reusing key
              link: whatsappUrl, // Use the generated WhatsApp URL
              isExternal: true, // It's an external link
            }}
            translationNS='experiencesPage' // Namespace where these keys are defined
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default DestinationLayout;
