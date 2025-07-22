// src/pages/HomePage/components/Sections/SafetySection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { homePageData } from '../../../../data/pages/homeData';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

import SafetyCardComponent from '../Cards/SafetyCardComponent';
import ButtonComponent from '../../../../components/common/Button/ButtonComponent';

/**
 * Renders the "Safety" section for the homepage.
 * It displays a title, subtitle, a grid of safety points, and a call-to-action button.
 */
const SafetySection = () => {
  const { t } = useTranslation(['home', 'common']);
  const { safety: data } = homePageData;

  return (
    <section className="bg-brand-primary-medium py-20 px-4">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto text-center text-brand-white"
      >
        {/* Section title and subtitle */}
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl  font-bold uppercase">
          {t(data.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-3xl mx-auto  text-lg text-brand-neutral"
        >
          {t(data.subtitleKey)}
        </motion.p>

        {/* Grid of safety feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {data.points.map((item) => (
            <SafetyCardComponent key={item.id} item={item} translationNS="home" />
          ))}
        </motion.div>

        {/* Call-to-action button linking to the main Safety page. */}
        <ButtonComponent
          action={data.ctaAction}
          textKey={data.ctaTextKey}
          translationNS="common"
          className="text-lg px-8 py-4"
          containerClassName="mt-16"
          motionVariants={fadeInUp}
        />
      </motion.div>
    </section>
  );
};

export default SafetySection;
