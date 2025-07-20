// src/pages/GearPage/pages/GearGuidePage/sections/GearGuideProductsSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { gearProductsData } from '../../../../../data/global/gearProductsData';
import { gearGuidePageData } from '../../../../../data/pages/gearGuidePageData';

import { staggerContainer } from '../../../../../hooks/animations';

const GearGuideProductsSection = () => {
  const { t } = useTranslation('gearGuidePage');

  return (
    <section className='bg-brand-neutral'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-brand-primary-dark mb-12'>
          {t(gearGuidePageData.titleKey)}
        </h2>

        <div className='relative overflow-hidden py-4'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 gap-x-2 justify-items-center py-2'>
            {' '}
            {/* CHANGED grid-cols and gap-x */}
            {gearProductsData.map((product) => (
              <Link
                key={product.id}
                to={`/gear/guide#${product.id}`}
                className={`relative group w-18 h-18 md:w-21 md:h-21 lg:w-27 lg:h-27 rounded-full overflow-hidden shadow-lg
                            flex items-center justify-center p-1 bg-brand-white transform transition-transform duration-300 hover:scale-110
                            `}>
                <img
                  src={product.src}
                  alt={t(product.nameKey)}
                  className='w-full h-full object-cover rounded-full'
                />
                <div className='absolute inset-0 rounded-full bg-brand-primary-dark/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='text-brand-white text-xs md:text-sm font-semibold uppercase px-2 text-center'>
                    {t(product.nameKey)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GearGuideProductsSection;
