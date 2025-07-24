// src/pages/DetailPage/common/Cards/DetailsCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CalendarIcon } from '../../../../assets/icons/SocialIcons';
import { ClockIcon } from '../../../../assets/icons/UtilIcons';
import { formatPrice } from '../../../../utils/formatters'; // <-- ¡Importa la función desde utilitarios!
import AvailabilityBadgeComponent from '../../../../components/common/Component/AvailabilityBadgeComponent'; // Asegúrate que esta ruta es correcta
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders a card that displays a list of key-value pairs, such as course or trip details.
 *
 * @param {object} props - The component props.
 * @param {object} props.detailsData - The data object for the details list.
 * @param {string} props.detailsData.titleKey - The translation key for the card's title.
 * @param {object[]} props.detailsData.items - An array of objects, each representing a detail item.
 * @param {string} props.detailsData.items[].labelKey - The translation key for the detail's label.
 * @param {string} props.detailsData.items[].valueKey - The translation key for the detail's value.
 * @param {number} props.sessionPrice - The price of the specific session. // NUEVA PROP
 * @param {string} props.sessionCurrency - The currency of the specific session (e.g., 'COP', 'USD'). // NUEVA PROP
 * @param {string} props.sessionAvailability - The availability status of the specific session. // NUEVA PROP
 * @param {string} props.dateRange - Formatted string for the date range.
 * @param {string} props.duration - Formatted string for the duration.
 * @param {string} props.translationNS - The i18next namespace for the translations.
 */
const DetailsCard = ({
  detailsData,
  sessionPrice, // Desestructurar nueva prop
  sessionCurrency, // Desestructurar nueva prop
  sessionAvailability, // Desestructurar nueva prop
  dateRange,
  duration,
  translationNS,
}) => {
  const { t, i18n } = useTranslation([translationNS, NAMESPACES.COMMON]); // Formato de array

  // Do not render the component if there is no data to display.
  // Podrías querer mostrar al menos el precio o fechas aunque no haya items en detailsData.
  // Ajusta esta condición si la tarjeta debe mostrarse siempre que tenga precio o fechas.
  if (!detailsData && !sessionPrice && !dateRange && !duration) {
    return null;
  }

  return (
    <div className="bg-brand-primary-medium p-6 rounded-lg shadow-lg">
      {/* Título de la tarjeta */}
      <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl leading-tight font-bold text-brand-white mb-4">
        {detailsData?.titleKey ? t(detailsData.titleKey) : ''} {/* Acceso seguro al titleKey */}
      </h3>

      {/* Bloque para Precio y Disponibilidad de la Sesión */}
      {(sessionPrice || sessionAvailability) && (
        <div className="flex flex-wrap items-center justify-between mt-2 mb-4 pt-4 border-t border-brand-primary-light/40">
          {sessionPrice && (
            <div className="flex items-center text-brand-white text-xl font-bold">
              <span className="text-base sm:text-base md:text-lg lg:text-xl leading-tight text-brand-cta-green">
                {formatPrice(sessionPrice, sessionCurrency, i18n.language)}
              </span>{' '}
              {/* Llamada a la función global */}
            </div>
          )}
          {sessionAvailability && (
            <div>
              <AvailabilityBadgeComponent status={sessionAvailability} />
            </div>
          )}
        </div>
      )}

      {/* Bloque para Fechas y Duración */}
      {(dateRange || duration) && (
        <div className="flex flex-col md:flex-row md:items-center md:justify-center text-brand-cta-green/80 mt-2 mb-4 pt-4 border-t border-brand-primary-light/40">
          {/* Bloque de Fecha */}
          {dateRange && (
            <div className="flex flex-row md:flex-col items-center md:justify-center text-sm mb-2 md:mb-0 md:mr-6">
              <CalendarIcon className="h-4 w-4 mr-1.5 md:mr-0 md:mb-1" />
              <span className="text-center">{dateRange}</span>
            </div>
          )}
          {/* Bloque de Duración */}
          {duration && (
            <div className="flex flex-row md:flex-col items-center md:justify-center text-sm">
              <ClockIcon className="h-4 w-4 mr-1.5 md:mr-0 md:mb-1" />
              <span className="text-center">{duration}</span>
            </div>
          )}
        </div>
      )}

      {/* Lista de Detalles Clave-Valor */}
      {detailsData?.items &&
        detailsData.items.length > 0 /* Acceso seguro y verificación de longitud */ && (
          <ul className="space-y-3 pt-4 border-t border-brand-primary-light/40">
            {detailsData.items.map((item, index) => (
              <li key={item.labelKey || index} className="grid grid-cols-3 gap-4 items-center">
                <span className="text-xs sm:text-base col-span-1 text-brand-neutral/80">
                  {t(item.labelKey)}:
                </span>
                <span className="text-xs sm:text-base col-span-2 text-brand-white text-right">
                  {t(item.valueKey)}
                </span>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default DetailsCard;
