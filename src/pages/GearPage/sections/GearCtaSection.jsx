// src/pages/GearPage/pages/GearGuidePage/sections/GearGuideCtaSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { contactPageData } from '../../../data/pages/contactData';
import { storeProductsData } from '../../../data/pages/storeProductsData';

const GearGuideCtaSection = ({
  titleKey,
  subtitleKey,
  ctaShopTextKey,
  ctaContactTextKey,
  translationNS,
}) => {
  const { t } = useTranslation(translationNS);

  return (
    <section className='py-20 bg-brand-primary-dark text-brand-white'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-5xl font-bold mb-6'>{t(titleKey)}</h2>
        <p className='text-lg md:text-xl max-w-3xl mx-auto mb-10'>
          {t(subtitleKey)}
        </p>

        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to={storeProductsData.seo.url}
            className='inline-block bg-brand-cta-orange text-brand-white font-bold uppercase text-lg px-10 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50'>
            {t(ctaShopTextKey)}
          </Link>
          <Link
            to={contactPageData.cta.ctaLink}
            className='inline-block bg-brand-cta-orange text-brand-white font-bold uppercase text-lg px-10 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50'>
            {t(ctaContactTextKey)}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default GearGuideCtaSection;
