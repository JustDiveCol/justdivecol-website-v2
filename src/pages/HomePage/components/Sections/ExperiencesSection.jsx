// src/pages/HomePage/components/Sections/ExperiencesSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer, fadeInUp } from '@/hooks/animations';
import SimpleCardComponent from '@/components/common/Card/SimpleCardComponent';

/**
 * Renders a flexible "Featured Experiences" section.
 * It receives all dynamic content via props, making it reusable across pages.
 *
 * @param {object} props
 * @param {string} props.translationNS - Translation namespace.
 * @param {string} props.titleKey - Key for the title.
 * @param {string} props.subtitleKey - Key for the subtitle.
 * @param {Array} props.categories - Array of experience card data.
 */
const ExperiencesSection = ({ translationNS = 'home', titleKey, subtitleKey, categories }) => {
  const { t } = useTranslation([translationNS, 'common']);

  if (!Array.isArray(categories) || categories.length === 0) return null;

  return (
    <section className="bg-brand-primary-dark py-12 px-4">
      <motion.div variants={staggerContainer} className="container mx-auto text-center">
        <motion.h2 variants={fadeInUp} className="heading-2 text-brand-white">
          {t(titleKey)}
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-subtitle-2 text-brand-neutral mt-2">
          {t(subtitleKey)}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {categories.map((card, index) => (
            <SimpleCardComponent key={index} {...card} translationNS={translationNS} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperiencesSection;
