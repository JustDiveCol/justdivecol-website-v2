import React from 'react';
import { motion } from 'motion/react';

import { staggerContainer } from '../../../../hooks/animations';

import HeaderComponent from '../../../../components/HeaderComponent';
import DescriptionSection from '../../common/Sections/DescriptionSection';
import CurriculumSection from '../../common/Sections/CurriculumSection';
import GallerySection from '../../common/Sections/GallerySection';
import DetailsCard from '../../common/Cards/DetailsCard';
import ChecklistCard from '../../common/Cards/ChecklistCard';
import CtaCard from '../../common/Cards/CtaCard';
import UpcomingTripsHorizontalSeciont from '../../common/Sections/UpcomingTripsHorizontalSection';

const header = {
  titleKey: 'Tittle',
  subtitleKey: 'Subtitle',
  imageUrl: 'https://placehold.co/1920x600?text=Banner+Image',
};

const CourseLayout = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'>
      {/* Header */}
      <HeaderComponent sectionData={header} />

      {/* Contenedor principal del contenido (layout de 2 columnas en escritorio) */}
      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        {/* Columna de contenido principal */}
        <main className='lg:col-span-2 space-y-16'>
          {/* Sección de Descripción */}
          <DescriptionSection />

          {/* Sección de Currículo */}
          <CurriculumSection />

          {/* Sección de Galería de Imágenes */}
          <GallerySection />
        </main>

        {/* Barra lateral con información clave */}
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          {/* Detalles del Curso */}
          <DetailsCard />

          {/* Requisitos */}
          <ChecklistCard />

          {/* Qué Incluye */}
          <ChecklistCard />

          {/* Qué NO Incluye */}
          <ChecklistCard />

          {/* Viajes Disponibles (se muestra en la barra lateral) */}
          <UpcomingTripsHorizontalSeciont />

          {/* Llamado a la Acción (CTA) condicional */}
          <CtaCard />
        </aside>
      </div>
    </motion.div>
  );
};

export default CourseLayout;
