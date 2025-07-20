// src/pages/GearPage/pages/StorePage/components/ProductCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ActionButtonComponent from '../../../../../components/common/Button/ActionButtonComponent';

const ProductCardComponent = ({ productData }) => {
  const { t } = useTranslation('storePage'); // Usamos el namespace de StorePage

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105'>
      <Link
        to={productData.link}
        className='block overflow-hidden h-48'>
        {' '}
        {/* Enlace a la página de detalle del producto */}
        <img
          src={productData.image}
          alt={t(productData.nameKey)}
          className='w-full h-full object-cover'
        />
      </Link>
      <div className='p-4 flex flex-col flex-grow'>
        <h3 className='text-xl font-bold text-brand-primary-dark mb-2'>
          {t(productData.nameKey)}
        </h3>
        <p className='text-brand-primary-medium text-sm mb-3 flex-grow'>
          {t(productData.descriptionKey)}
        </p>
        <div className='flex justify-between items-center mt-auto'>
          <span className='text-2xl font-bold text-brand-cta-orange'>
            ${productData.price.toFixed(2)}
          </span>
          <ActionButtonComponent
            to={productData.link} // Podría ser un enlace a una función de "añadir al carrito" en el futuro
            text={t('viewProductButton', 'Ver Producto')}
            className='px-4 py-2 text-sm bg-brand-cta-green hover:bg-brand-cta-green/90'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCardComponent;
