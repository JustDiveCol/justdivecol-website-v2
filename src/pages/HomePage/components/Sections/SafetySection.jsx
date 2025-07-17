// src/pages/HomePage/components/Sections/SafetySection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { homePageData } from '../../../../data/pages/homeData';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';
import SafetyCardComponent from '../Cards/SafetyCardComponent';

/**
 * Renders the "Safety" section for the homepage.
 * It displays a title, subtitle, a grid of safety points, and a call-to-action button.
 */
const SafetySection = () => {
  const { t } = useTranslation('home');
  const { safety: data } = homePageData;

  return (
    <section className='bg-brand-primary-medium py-20 px-4'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, amount: 0.2 }}
        className='container mx-auto text-center text-brand-white'>
        {/* Section title and subtitle */}
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl  font-bold uppercase'>
          {t(data.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-3xl mx-auto  text-lg text-brand-neutral'>
          {t(data.subtitleKey)}
        </motion.p>

        {/* Grid of safety feature cards */}
        <motion.div
          variants={staggerContainer}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.2 }}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-12'>
          {data.points.map((item) => (
            <SafetyCardComponent
              key={item.id}
              item={item}
              translationNS='home'
            />
          ))}
        </motion.div>

        {/* Call-to-action button linking to the main Safety page. */}
        <motion.div variants={fadeInUp}>
          <Link
            to={data.ctaLink}
            className='inline-block mt-16 bg-brand-cta-orange text-brand-white  font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-cta-yellow'>
            {t(data.ctaTextKey)}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SafetySection;
