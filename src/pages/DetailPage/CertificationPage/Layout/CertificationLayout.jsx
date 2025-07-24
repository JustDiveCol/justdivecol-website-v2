import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { staggerContainer } from '../../../../hooks/animations';
import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import CurriculumSection from '../../common/Sections/CurriculumSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import UpcomingTripSection from '../../common/Sections/UpcomingTripSection';
import { BUTTON_TYPES, NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';
import { ChevronDownIcon } from '@/assets/icons/ChevronIcons';

const FOOTER_HEIGHT_THRESHOLD = 700;

const CertificationLayout = ({ certificationData, availableTrips, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

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
    <motion.div variants={staggerContainer} initial="initial" animate="animate" exit="exit">
      {/* Consistent with parent component animations */}
      <HeaderComponent sectionData={certificationData.header} translationNS={translationNS} />
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
            descriptionData={certificationData.description}
            translationNS={translationNS}
          />
          <CurriculumSection
            curriculumData={certificationData.curriculum}
            translationNS={translationNS}
          />
          <GallerySection galleryData={certificationData.gallery} translationNS={translationNS} />
        </main>
        <aside className="lg:col-span-1 space-y-8 lg:sticky top-24 h-fit">
          <DetailsCard detailsData={certificationData.details} translationNS={translationNS} />
          <ChecklistCard
            checklistData={certificationData.whatIsIncluded}
            translationNS={translationNS}
            type="included"
          />
          <ChecklistCard
            checklistData={certificationData.requirements}
            translationNS={translationNS}
            type="requirements"
          />

          <UpcomingTripSection
            availableTrips={availableTrips}
            titleKey={SHARED_TRANSLATION_KEYS.CERTIFICATIONS_AVAILABLE_TRIP_TITLE}
            translationNS={translationNS}
            fallbackContent={{
              messageKey: SHARED_TRANSLATION_KEYS.CERTIFICATIONS_NOT_AVAILABLE_TRIP_TITLE,
              messageValues: {
                courseName: t(certificationData.header.titleKey),
              },
              buttonTextKey: SHARED_TRANSLATION_KEYS.CERTIFICATION_CTA_BUTTON,
              buttonAction: {
                type: BUTTON_TYPES.whatsapp,
                whatsAppMessageKey: SHARED_TRANSLATION_KEYS.CERTIFICATION_WHATSAPP_MESSAGE,
                whatsAppMessageValues: {
                  courseName: t(certificationData.header.titleKey),
                },
              },
            }}
          />
        </aside>
      </div>
    </motion.div>
  );
};

export default CertificationLayout;
