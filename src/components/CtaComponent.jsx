// src/components/CtaComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { staggerContainer, fadeInUp } from '../hooks/animations';

const CTAComponent = ({ sectionData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  const { headerImageUrl, titleKey, subtitleKey, ctaTextKey, ctaLink } =
    sectionData;

  return (
    <section
      className='relative bg-cover bg-center py-24 px-4 text-brand-white'
      style={{ backgroundImage: `url(${headerImageUrl})` }}>
      {/* Adds a dark overlay to ensure text readability over the background image. */}
      <div className='absolute inset-0 bg-brand-primary-dark/80'></div>

      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, amount: 0.3 }}
        className='relative container mx-auto text-center'>
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-sans font-extrabold uppercase'>
          {t(titleKey)}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral'>
          {t(subtitleKey)}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className='mt-10'>
          <Link
            to={ctaLink}
            className='inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-10 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50'>
            {t(ctaTextKey)}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTAComponent;
