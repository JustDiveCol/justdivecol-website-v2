// src/pages/HomePage/components/Sections/TestimonialsSection.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { homePageData } from '../../../../data/pages/homeData';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';
import TestimonialCardComponent from '../Cards/TestimonialCardComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders the "Testimonials" section for the homepage.
 * It displays a title and a grid of customer testimonials.
 */
const TestimonialsSection = ({ translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  const { titleKey, items } = homePageData.testimonials;

  return (
    <section className="bg-gradient-to-b from-brand-primary-dark to-[#061a3a] py-12 px-4">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto text-center"
      >
        <motion.h2 variants={fadeInUp} className="heading-2 text-brand-white">
          {t(titleKey)}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((testimonial) => (
            <TestimonialCardComponent
              key={testimonial.id}
              cardData={testimonial}
              translationNS={translationNS}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
