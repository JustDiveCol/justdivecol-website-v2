// src/pages/GearPage/pages/GearHomePage/sections/GearHomeCardsSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { gearHomePageData } from '../../../../../data/pages/gearHomePageData';

import { staggerContainer } from '../../../../../hooks/animations'; // Reutilizar animación

import SimpleCardComponent from '../../../../../components/common/Card/SimpleCardComponent'; // Reutilizar el componente de tarjeta

const GearHomeCardsSection = () => {
  const { t } = useTranslation('gearHomePage');

  const cards = gearHomePageData.cards;

  return (
    <section className='py-16 bg-brand-neutral'>
      {' '}
      {/* Opcional: cambiar el color de fondo si es diferente al GearPage */}
      <motion.div
        variants={staggerContainer}
        className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-brand-primary-dark mb-12'>
          {t(cards.titleKey)}
        </h2>
        <motion.div
          variants={staggerContainer}
          className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {cards.gearCategoriesData.map((card) => (
            <SimpleCardComponent
              key={card.id}
              cardData={card}
              translationNS='gearHomePage'
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GearHomeCardsSection;
