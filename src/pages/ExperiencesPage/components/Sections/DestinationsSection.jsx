// src/pages/ExperiencesPage/components/Sections/DestinationsSection.jsx
import React, { useRef, useState, useLayoutEffect, useEffect, useMemo } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { experiencesPageData } from '../../../../data/pages/experiencesData';

import { useDestinations } from '@/data/content/destinations/DataProvider';
import { useExperiences } from '@/data/content/experiences/DataProvider';

import DestinationCardComponent from '../Cards/DestinationCardComponent';

const SCROLL_SPEED = 15; // px por segundo para autoscroll

/** Componente reutilizable de carrusel */
const CarouselSection = ({ title, items }) => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const resumeTimer = useRef(null);
  const [shouldResume, setShouldResume] = useState(false);
  const [shouldCenter, setShouldCenter] = useState(false);

  // Mide y actualiza límites
  const updateConstraints = () => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const maxDrag = inner.scrollWidth - outer.offsetWidth;
    const newLeft = -maxDrag;

    setConstraints((prev) => {
      return prev.left === newLeft ? prev : { left: newLeft, right: 0 };
    });

    setShouldCenter(maxDrag <= 0); // <--- ¡Aquí lo importante!
  };

  // Inicia el bucle desde la posición actual
  const startAutoScroll = () => {
    const currentX = x.get();
    const { left } = constraints;
    const distToLeft = Math.abs(left - currentX);
    const distToStart = Math.abs(0 - left);
    const totalDist = distToLeft + distToStart;
    const duration = totalDist / SCROLL_SPEED;

    controls.start({
      x: [currentX, left, 0],
      transition: { duration, ease: 'linear', repeat: Infinity },
    });
  };

  // Montaje: medir y arrancar autoscroll
  useLayoutEffect(() => {
    updateConstraints();
  }, []);

  // Resize para recalcular
  useEffect(() => {
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  // Cuando constraints esté listo, lanzamos el scroll
  useEffect(() => {
    if (constraints.left < 0) startAutoScroll();
  }, [constraints.left]);

  // Manejo de interacción: pausa y programa reanudar mediante estado
  const handleInteractionStart = () => {
    controls.stop();
    clearTimeout(resumeTimer.current);
  };
  const handleInteractionEnd = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setShouldResume(true), 2000);
  };

  // Efecto que, tras 2s de inactividad, reanuda la animación
  useEffect(() => {
    if (shouldResume && constraints.left < 0) {
      startAutoScroll();
      setShouldResume(false);
    }
  }, [shouldResume]);

  return (
    <div className="mb-12">
      <h3 className="text-subtitle-2 font-semibold text-brand-white mb-6">{title}</h3>
      <div ref={outerRef} className="overflow-hidden">
        <motion.div
          ref={innerRef}
          style={{ x }}
          className={`flex items-stretch gap-8 ${shouldCenter ? 'justify-center' : ''}`}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          animate={controls}
          onDragStart={handleInteractionStart}
          onDragEnd={handleInteractionEnd}
          onPointerDown={handleInteractionStart}
          onPointerUp={handleInteractionEnd}
        >
          {items.map((dest) => (
            <div key={dest.id} className="flex-shrink-0">
              <DestinationCardComponent destinationData={dest} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const DestinationsSection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, 'common']);
  const { sectionId } = experiencesPageData.fullCatalog.destinations;

  const { destinations } = useDestinations(); // Obtiene todos los destinos del contexto
  const { experiences } = useExperiences(); // Obtiene todas las experiencias del contexto para los trips

  const destinationsWithUpcomingTrips = useMemo(() => {
    return destinations.map((dest) => {
      const upcomingTrips = [];
      experiences.forEach((exp) => {
        (exp.sessions || []).forEach((session) => {
          // Verificar si la sesión está en alguna de las experiencias vinculadas al destino
          // O si la sesión tiene un ID de destino que coincide con el destino actual
          if (
            (Array.isArray(exp.destinationIds) && exp.destinationIds.includes(dest.id)) || // Si la experiencia está vinculada al destino
            session.destinationId === dest.id // Si la sesión individual está vinculada al destino (asumo que existe esta prop)
          ) {
            // Solo si la sesión está disponible o 'last' (puedes ajustar esta lógica si es diferente)
            if (session.availability === 'available' || session.availability === 'last') {
              upcomingTrips.push(session);
            }
          }
        });
      });

      return { ...dest, upcomingTrips };
    });
  }, [destinations, experiences]); // Recalcular si destinos o experiencias cambian

  const active = destinationsWithUpcomingTrips.filter((d) => d.upcomingTrips.length > 0);
  const inactive = destinationsWithUpcomingTrips.filter((d) => d.upcomingTrips.length === 0);

  return (
    <section
      id={sectionId}
      className="py-12 px-4 border-t-2 border-brand-primary-light/20 scroll-mt-20 text-center"
    >
      <div className="container mx-auto">
        <h2 className="heading-2 text-brand-white">
          {t(experiencesPageData.fullCatalog.destinations.titleKey)}
        </h2>

        {/* Carrusel de destinos con viajes activos */}
        <CarouselSection title={t('expWithTrips')} items={active} />

        {/* Carrusel de destinos sin viajes */}
        <CarouselSection title={t('expWithoutTrips')} items={inactive} />
      </div>
    </section>
  );
};

export default DestinationsSection;
