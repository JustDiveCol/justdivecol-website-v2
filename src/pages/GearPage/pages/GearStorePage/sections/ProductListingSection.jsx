// src/pages/GearPage/pages/StorePage/sections/ProductListingSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { storeProductsData } from '../../../../../data/pages/storeProductsData'; // Importa los datos de productos
import ProductCardComponent from '../components/ProductCardComponent'; // Importa la tarjeta de producto

const ProductListingSection = () => {
  const { t } = useTranslation('storePage');

  return (
    <section className='py-16 bg-brand-neutral'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-brand-primary-dark mb-12'>
          {t(
            storeProductsData.sectionTitleKey,
            'Nuestros Productos Destacados'
          )}
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {storeProductsData.products.map((product) => (
            <ProductCardComponent
              key={product.id}
              productData={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListingSection;
