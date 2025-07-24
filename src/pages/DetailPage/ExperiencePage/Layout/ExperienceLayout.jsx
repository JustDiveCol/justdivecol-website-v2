// src/pages/DetailPage/ExperiencePage/Layout/ExperienceLayout.jsx
import React, { useMemo, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animation variants and data
import { staggerContainer } from '../../../../hooks/animations';
import { paymentMethodsData } from '../../../../data/global/paymentMethodsData';
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
import UpcomingCertificationsSection from '../../common/Sections/UpcomingCertificationSection';
import ItinerarySection from '../../common/Sections/ItinerarySection';
import MapComponent from '../../../MapPage/components/MapComponent';
import CurriculumCard from '../../common/Cards/CurriculumCard';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';
import { FOUNDERS_LOGO } from '@/data/global/assets';
import { ChevronDownIcon } from '@/assets/icons/ChevronIcons';

const FOOTER_HEIGHT_THRESHOLD = 700;

/**
 * The main layout component for the experience detail page.
 * It assembles all necessary sections and cards to display experience information.
 *
 * @param {object} props - The component props.
 * @param {object} props.experienceData - The complete data object for the experience/trip.
 * @param {object} props.sessionData - The complete data object for the specific session. // Prop from ExperiencePage
 * @param {object[]} props.offeredCertificationsData - An array of certification data objects offered with this session. // Prop from ExperiencePage
 * @param {object[]} props.otherTripsToThisDestination - An array of other upcoming sessions to the same destination. // <-- NEW PROP HERE
 */
const ExperienceLayout = ({
  experienceData,
  sessionData,
  offeredCertificationsData,
  otherTripsToThisDestination,
  isFounderTrip,
}) => {
  const { t, i18n } = useTranslation([
    NAMESPACES.EXPERIENCES_PAGE,
    NAMESPACES.COMMON,
    NAMESPACES.PAYMENT,
    NAMESPACES.CONTACT,
    NAMESPACES.CERTIFICATIONS,
    NAMESPACES.DESTINATIONS,
    NAMESPACES.EXPERIENCES,
    NAMESPACES.MAP,
  ]);

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const checkScrollEnd = () => {
      // CORRECTO: Referencia al documento para el scroll de la página completa
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // El indicador desaparece cuando el usuario está dentro del rango del footer
      const isScrolledIntoFooterArea =
        scrollTop + clientHeight >= scrollHeight - FOOTER_HEIGHT_THRESHOLD;
      setShowScrollIndicator(!isScrolledIntoFooterArea); // Mostrar si NO está en el área del footer
    };

    // La principal área de scroll de la página es generalmente el 'window' o el 'document.documentElement'
    // Si tu layout tiene overflow-y: auto en el main, escucha ese elemento.
    // Asumo que el scroll principal es el de la ventana.
    window.addEventListener('scroll', checkScrollEnd);
    // Ejecutar al montar para establecer el estado inicial
    checkScrollEnd();

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', checkScrollEnd);
    };
  }, []); // Se ejecuta solo una vez al montar

  const { dateRangeText, durationText } = useMemo(() => {
    if (!sessionData?.startDate || !sessionData?.endDate) {
      return { dateRangeText: '', durationText: '' };
    }

    const { startDate, endDate } = sessionData;

    const dateRange = formatDateRange(startDate, endDate, i18n.language, t);

    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);
    const timeDiff = end.getTime() - start.getTime();
    const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));

    const days = dayDiff + 1;
    const nights = days - 1;
    const duration = t(SHARED_TRANSLATION_KEYS.DURATION_FORMAT, { days, nights });

    return { dateRangeText: dateRange, durationText: duration };
  }, [sessionData, t, i18n.language]);

  if (!experienceData || !sessionData) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 text-2xl">
        Experience or session data incomplete.
      </div>
    );
  }

  const primaryCertificationData = offeredCertificationsData?.[0] || null;

  const mainTitleKey = sessionData.titleKey || experienceData.titleKey;

  const headerDataForComponent = {
    ...experienceData.header,
    titleKey: mainTitleKey,
  };

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
      <HeaderComponent
        sectionData={headerDataForComponent}
        translationNS={NAMESPACES.EXPERIENCES}
      />

      {/* Solo se muestra en móvil y si showScrollIndicator es true */}
      {showScrollIndicator && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:hidden z-40">
          {/* Usar fixed */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
              delay: 1,
            }}
            className="absolute bottom-8 z-40 left-1/2 -translate-x-1/2"
          >
            <ChevronDownIcon className="w-10 h-10 text-brand-cta-orange animate-bounce select-none" />
          </motion.div>
        </div>
      )}

      {isFounderTrip && (
        <motion.img
          // Estado inicial: Grande, en el centro de la pantalla, transparente
          initial={{
            opacity: 0,
            scale: 5, // Empieza el doble de grande
            x: '-50%', // Centrado horizontalmente (compensación por left:50%)
            y: '-50%', // Centrado verticalmente (compensación por top:50%)
            top: '50%', // Posición inicial vertical
            left: '50%', // Posición inicial horizontal
          }}
          // Estado final: Tamaño normal, opaco, en la esquina
          animate={{
            opacity: 0.8,
            scale: 1, // Vuelve a su tamaño normal
            x: 0, // Elimina la traslación de centrado
            y: 0, // Elimina la traslación de centrado
            top: '6rem', // Posición final desde arriba (16px, ajusta a tu preferencia)
            right: '1rem', // Posición final desde la derecha (16px, ajusta a tu preferencia)
            left: 'auto', // Asegura que no haya un left interferente
          }}
          // Transición: Suave y con duración
          transition={{
            duration: 2.5, // Duración de la animación (ajusta entre 1 y 2 segundos)
            ease: [0.6, 0.05, 0.01, 0.9], // Una curva de ease más dramática para el efecto de zoom/movimiento
          }}
          src={FOUNDERS_LOGO.foundersLogo}
          alt={
            FOUNDERS_LOGO.altKey
              ? t(FOUNDERS_LOGO.altKey, { ns: NAMESPACES.COMMON })
              : 'Founders Logo'
          }
          className="fixed z-50 w-20 h-20 object-contain" // Solo 'fixed' y dimensiones, el posicionamiento lo hace 'initial' y 'animate'
        />
      )}

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 grid lg:grid-cols-3 gap-8 items-start pt-12">
        {/* --- Main Content Column (Left) --- */}
        <main className="lg:col-span-2 space-y-16 lg:sticky top-24 h-fit">
          {/* Certifications offered */}
          {offeredCertificationsData && offeredCertificationsData.length > 0 && (
            <UpcomingCertificationsSection
              availableCertifications={offeredCertificationsData}
              titleKey={
                experienceData.offeredCertifications?.titleKey || 'offeredCertificationsTitle'
              }
              translationNS={NAMESPACES.EXPERIENCES}
            />
          )}
          {/* Description */}
          <DescriptionSection
            descriptionData={experienceData.description}
            translationNS={NAMESPACES.EXPERIENCES}
          />

          {/* Itinerary */}
          {experienceData.itinerary && (
            <ItinerarySection
              itineraryData={experienceData.itinerary}
              translationNS={NAMESPACES.EXPERIENCES}
            />
          )}
          <GallerySection
            galleryData={experienceData.gallery}
            translationNS={NAMESPACES.EXPERIENCES}
          />
        </main>

        {/* --- Sidebar Column (Right) --- */}
        <aside className="lg:col-span-1 space-y-8 lg:sticky top-24 h-fit">
          {/* Details */}
          <DetailsCard
            detailsData={experienceData.details}
            sessionPrice={sessionData.price}
            sessionCurrency={sessionData.currency}
            sessionAvailability={sessionData.availability}
            dateRange={dateRangeText}
            duration={durationText}
            translationNS={NAMESPACES.EXPERIENCES}
          />
          {/* Payment Plan */}
          <CurriculumCard
            detailsData={sessionData.paymentPlan}
            translationNS={NAMESPACES.EXPERIENCES}
          />

          {/* Payment Options */}
          <PaymentCard paymentData={paymentMethodsData} translationNS={NAMESPACES.PAYMENT} />

          {/* Included Experience */}
          <ChecklistCard
            checklistData={experienceData.whatIsIncluded}
            translationNS={NAMESPACES.EXPERIENCES}
            type="included"
          />

          {/* Included Course */}
          {primaryCertificationData && (
            <ChecklistCard
              checklistData={primaryCertificationData.whatIsIncluded}
              translationNS={NAMESPACES.CERTIFICATIONS}
              type="included"
            />
          )}

          {/* Not Included */}
          <ChecklistCard
            checklistData={experienceData.whatIsNotIncluded}
            translationNS={NAMESPACES.EXPERIENCES}
            type="excluded"
          />

          {/* CTA */}
          <CtaCard
            ctaData={{
              titleKey: experienceData.cta.titleKey,
              buttonTextKey: experienceData.cta.buttonTextKey,
              ctaAction: {
                ...experienceData.cta.action,
                whatsAppMessageKey: 'sessionWhatsappMessageKey',
                whatsAppMessageNS: NAMESPACES.COMMON,
                whatsAppMessageValues: {
                  experienceTitle: t(experienceData.titleKey, { ns: NAMESPACES.EXPERIENCES }),
                  sessionDates: dateRangeText,
                },
              },
            }}
            translationNS={NAMESPACES.EXPERIENCES}
          />
          {otherTripsToThisDestination && otherTripsToThisDestination.length > 0 && (
            <UpcomingTripSection
              availableTrips={otherTripsToThisDestination}
              titleKey="expOtherTripsTitle"
              translationNS={NAMESPACES.EXPERIENCES}
            />
          )}
        </aside>
      </div>

      {/* Map */}
      <section className="w-full bg-brand-primary-medium py-12 md:py-16 mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="heading-4 font-bold text-brand-white mb-4">
            {t(SHARED_TRANSLATION_KEYS.MAP_LABEL)}
          </h3>

          <div className="bg-brand-primary-dark p-4 sm:p-6 rounded-2xl shadow-2xl">
            <div className="rounded-lg overflow-hidden">
              <MapComponent destinationId={experienceData.destinationId} />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExperienceLayout;
