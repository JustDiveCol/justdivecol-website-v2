// src/pages/HomePage/components/Sections/SafetySection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { homePageData } from '../../../../data/pages/homeData';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

import SafetyCardComponent from '../Cards/SafetyCardComponent';
import ButtonComponent from '../../../../components/common/Button/ButtonComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders the "Safety" section for the homepage.
 * It displays a title, subtitle, a grid of safety points, and a call-to-action button.
 */
const SafetySection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);
  const { safety: data } = homePageData;

  return (
    <section className="bg-brand-primary-medium py-12 px-4">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto text-center text-brand-white"
      >
        {/* Section title and subtitle */}
        <motion.h2 variants={fadeInUp} className="heading-2 text-brand-white">
          {t(data.titleKey)}
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-subtitle-2 mt-4 text-brand-neutral">
          {t(data.subtitleKey)}
        </motion.p>

        {/* Grid of safety feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {data.points.map((item) => (
            <SafetyCardComponent key={item.id} item={item} translationNS={translationNS} />
          ))}
        </motion.div>

        {/* Call-to-action button linking to the main Safety page. */}
        <ButtonComponent {...data.ctaButton} containerClassName="mt-16" motionVariants={fadeInUp} />
      </motion.div>
    </section>
  );
};

export default SafetySection;
