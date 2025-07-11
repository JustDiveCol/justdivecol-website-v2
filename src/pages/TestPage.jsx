// src/pages/TestPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { aboutUsPageData } from '../data/pages/aboutUsData';

// Este console.log es crucial. Nos dice si el archivo de datos se importa correctamente.
console.log('Data imported into TestPage:', aboutUsPageData);

export const TestPage = () => {
  const { t } = useTranslation('aboutUs');

  // Verificamos de forma segura si el objeto 'header' existe
  const headerData = aboutUsPageData?.header;

  console.log('Header data inside TestPage component:', headerData);

  // Si el header no existe en los datos, mostramos un error claro en pantalla.
  if (!headerData) {
    return (
      <div className='p-20'>
        <h1 className='text-red-500 text-4xl'>
          ERROR: No se encontró 'aboutUsPageData.header' en el archivo de datos.
        </h1>
      </div>
    );
  }

  // Si todo va bien, intentamos mostrar el título.
  return (
    <div className='p-20'>
      <h1 className='text-white text-4xl'>
        Página de Prueba Cargada Correctamente
      </h1>
      <h2 className='text-cyan-400 text-2xl mt-4'>
        Título del Header: {t(headerData.titleKey)}
      </h2>
    </div>
  );
};
