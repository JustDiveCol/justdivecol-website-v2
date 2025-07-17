import React from 'react';
import { Link } from 'react-router-dom';

const CoursesCard = ({ courseData, t }) => {
  if (
    !courseData ||
    !courseData.id ||
    !courseData.header ||
    !courseData.header.titleKey
  ) {
    return null;
  }

  const courseNameKey = courseData.header.titleKey;

  return (
    <Link
      key={courseData.id}
      to={`/cursos/${courseData.id}`}
      // --- CAMBIOS CLAVE AQUÍ ---
      // 1. Reemplazamos 'block' por 'flex flex-col' para controlar el layout interno.
      // 2. Añadimos 'w-full max-w-xs' para que sea responsivo pero con un ancho máximo.
      // 3. 'h-full' asegura que todas las tarjetas en una misma fila tengan la misma altura.
      className='flex flex-col h-full w-full max-w-xs bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300'>
      {/* Este div crece para ocupar el espacio disponible, empujando el enlace "Ver Detalles" hacia abajo. */}
      <div className='flex-grow'>
        <h3 className='text-xl font-bold text-brand-white mb-4'>
          {t(courseNameKey, { ns: 'courses' })}
        </h3>
      </div>

      {/* Este enlace ahora se alineará consistentemente en la parte inferior de la tarjeta. */}
      <span className='mt-4 inline-block text-sm font-semibold text-brand-cta-orange'>
        {t('common:viewDetails')} &rarr;
      </span>
    </Link>
  );
};

export default CoursesCard;
