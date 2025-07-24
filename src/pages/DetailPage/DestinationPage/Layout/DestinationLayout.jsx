// src/pages/DetailPage/DestinationPage/Layout/DestinationLayout.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animation variants and data
import { staggerContainer } from '../../../../hooks/animations';
import MapComponent from '../../../MapPage/components/MapComponent';

// Reusable section and card components
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import UpcomingTripSection from '../../common/Sections/UpcomingTripSection'; // <-- ¡Este es clave!
import DiveSitesSection from '../../common/Sections/DiveSitesSection';
import { BUTTON_TYPES, NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';
import { ChevronDownIcon } from '@/assets/icons/ChevronIcons';

const FOOTER_HEIGHT_THRESHOLD = 700;

/**
 * The main layout component for the destination detail page.
 * It assembles all the necessary sections and cards to display destination information.
 *
 * @param {object} props - The component props.
 * @param {object} props.destinationData - The complete data object for the destination.
 * @param {object[]} props.upcomingTrips - An array of trip objects scheduled for this destination.
 */
const DestinationLayout = ({ destinationData, upcomingTrips, topDiveSites }) => {
  // Loads multiple i18next namespaces required for this layout.
  // Añadir NAMESPACES.EXPERIENCES para las claves de las experiencias/sesiones
  const { t } = useTranslation([
    NAMESPACES.DESTINATIONS,
    NAMESPACES.MAP,
    NAMESPACES.COMMON,
    NAMESPACES.DESTINATION_DETAIL_PAGE,
    NAMESPACES.EXPERIENCES,
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

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bg-brand-primary-dark text-brand-neutral"
    >
      <HeaderComponent
        sectionData={destinationData.header}
        translationNS={NAMESPACES.DESTINATIONS} // Usar el namespace del contenido de destino
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

      <div className="container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 space-y-16 lg:sticky top-24 h-fit">
          <DescriptionSection
            descriptionData={destinationData.description}
            translationNS={NAMESPACES.DESTINATIONS} // Usar el namespace del contenido de destino
          />
          {topDiveSites && topDiveSites.length > 0 && (
            <DiveSitesSection
              diveSiteData={{
                titleKey: SHARED_TRANSLATION_KEYS.TOP_DIVE_SITES_TITLE, // Nueva clave para el título
                sites: topDiveSites, // Pasamos los sitios top filtrados
              }}
              translationNS={NAMESPACES.DIVESITES}
            />
          )}
          <section className="relative bg-brand-primary-medium p-6 rounded-lg shadow-lg overflow-visible z-0">
            <h3 className="heading-4 font-bold text-brand-white mb-4">
              {t(SHARED_TRANSLATION_KEYS.DESTINATIONS_MAP_TITLE)}
              {/* Usar constante y namespace correcto */}
            </h3>
            <MapComponent destinationId={destinationData.id} />
          </section>
          <GallerySection
            galleryData={destinationData.gallery}
            translationNS={NAMESPACES.DESTINATIONS} // Usar el namespace del contenido de destino
          />
        </main>

        <aside className="lg:col-span-1 space-y-8 lg:sticky top-24 h-fit">
          <DetailsCard
            detailsData={destinationData.details}
            translationNS={NAMESPACES.DESTINATIONS} // Usar el namespace del contenido de destino
            // Nota: Si DetailsCard también muestra info de sesión, necesitará esas props aquí
            // sessionPrice={...} sessionCurrency={...} sessionAvailability={...}
          />
          <ChecklistCard
            checklistData={{
              titleKey: destinationData.uniqueFinds.titleKey,
              items: destinationData.uniqueFinds.items,
            }}
            translationNS={NAMESPACES.DESTINATIONS} // Usar el namespace del contenido de destino
          />
          {/* UpcomingTripSection ahora espera sesiones enriquecidas y su titleKey puede ser específico de la página */}
          <UpcomingTripSection
            availableTrips={upcomingTrips} // Pasa las sesiones enriquecidas
            titleKey={SHARED_TRANSLATION_KEYS.DESTINATIONS_AVAILABLE_TRIPS_TITLE} // Clave para el título de esta sección
            translationNS={NAMESPACES.DESTINATION_DETAIL_PAGE} // Namespace para el título de la sección
            fallbackContent={{
              messageKey: SHARED_TRANSLATION_KEYS.DESTINATIONS_NOT_AVAILABLE_TRIPS_TITLE,
              messageValues: {
                destinationName: t(destinationData.nameKey, { ns: NAMESPACES.DESTINATIONS }), // Traducir el nombre del destino
              },
              buttonTextKey: SHARED_TRANSLATION_KEYS.CONTACT_TEXT_BUTTON, // Usar constante de UI_TRANSLATION_KEYS
              buttonAction: {
                type: BUTTON_TYPES.whatsapp,
                whatsAppMessageKey: SHARED_TRANSLATION_KEYS.DESTINATION_WHATSAPP_MESSAGE,
                whatsAppMessageNS: NAMESPACES.COMMON, // El mensaje de WhatsApp es común
                whatsAppMessageValues: {
                  destinationName: t(destinationData.nameKey, { ns: NAMESPACES.DESTINATIONS }), // Traducir el nombre del destino
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
