// src/pages/DetailPage/common/Cards/TripsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importar useTranslation
import { formatDateRange } from '../../../../utils/formatters';
import { NAMESPACES, ROUTES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants'; // Importar NAMESPACES y ROUTES
import { CREYENTES_LOGO } from '@/data/global/assets';

/**
 * Renders a card that summarizes an upcoming trip (session) and links to its detail page.
 *
 * @param {object} props - The component props.
 * @param {object} props.tripData - The data object for the trip (which is actually an enriched session object).
 * @param {string} props.tripData.id - Unique identifier for the trip (session).
 * @param {string} props.tripData.startDate - The start date of the session.
 * @param {string} props.tripData.endDate - The end date of the session.
 * @param {string} props.tripData.slug - The slug for the session.
 * @param {object} props.tripData.experienceDetails - Contains details of the parent experience.
 * @param {string} props.tripData.experienceDetails.titleKey - The translation key for the parent experience's title.
 * @param {string} props.tripData.experienceDetails.slug - The slug for the parent experience.
 */
const TripsCard = ({ tripData }) => {
  // Eliminar lang y t de las props, usar useTranslation internamente
  const { t, i18n } = useTranslation([NAMESPACES.COMMON, NAMESPACES.EXPERIENCES]); // Cargar namespaces necesarios

  // A guard clause to prevent rendering if essential data is missing.
  if (
    !tripData ||
    !tripData.id ||
    !tripData.startDate || // Fechas ahora directas en la sesión
    !tripData.endDate || // Fechas ahora directas en la sesión
    !tripData.experienceDetails ||
    !tripData.experienceDetails.titleKey || // Título de la experiencia padre
    !tripData.experienceDetails.slug // Slug de la experiencia padre para el Link
  ) {
    return null;
  }

  // Extraer las propiedades directamente del objeto de sesión (tripData)
  const { id, startDate, endDate, slug: sessionSlug, experienceDetails, founders } = tripData;
  const experienceTitleKey = experienceDetails.titleKey; // La clave del título de la experiencia padre
  const experienceSlug = experienceDetails.slug; // El slug de la experiencia padre

  return (
    <Link
      key={id} // Usar el id de la sesión como key
      // RUTA NUEVA: /experiences/:experienceSlug/:sessionSlug
      to={`${ROUTES.experiences}/${experienceSlug}/${sessionSlug}`}
      className="block bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:hover:scale-105 transition-all duration-300 relative overflow-visible"
    >
      {/* Founders Logo - static position */}
      {founders && (
        <img
          src={CREYENTES_LOGO.creyentesLogo}
          alt={
            CREYENTES_LOGO.altKey
              ? t(CREYENTES_LOGO.altKey, { ns: NAMESPACES.COMMON })
              : 'Founders Logo'
          }
          className="absolute -top-4 -right-4 w-16 h-16 object-contain z-20"
        />
      )}

      <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-white mb-4">
        {t(experienceTitleKey, { ns: NAMESPACES.EXPERIENCES })}{' '}
        {/* Traducir el título de la experiencia padre */}
      </h3>
      <p className="mt-1 text-xs text-brand-neutral/80">
        {formatDateRange(
          startDate, // Fechas directamente de la sesión
          endDate, // Fechas directamente de la sesión
          i18n.language, // Usar i18n.language
          t // Pasar la función de traducción
        )}
      </p>
      <span className="mt-4 inline-block text-xs font-semibold text-brand-cta-orange ">
        {t(SHARED_TRANSLATION_KEYS.VIEW_DETAILS_LABEL)} &rarr;
      </span>
    </Link>
  );
};

export default TripsCard;
