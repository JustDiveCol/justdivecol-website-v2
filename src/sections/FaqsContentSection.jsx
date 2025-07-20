// src/pages/GearPage/pages/GearFaqsPage/sections/FaqsContentSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { ChevronDownIcon } from '../assets/icons/ChevronIcons';

import {
  faqStagger,
  faqFadeUp,
  chevronToggle,
  sectionFadeInUp,
} from '../hooks/animations';

const MotionChevron = motion.create(ChevronDownIcon);

const FaqsContentSection = ({ faqsData, translationNS }) => {
  const { t } = useTranslation(translationNS);
  const [openFaqId, setOpenFaqId] = useState(null);
  const shouldReduce = useReducedMotion();

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className='py-16 bg-brand-neutral rounded-2xl'>
      <div className='container mx-auto px-4'>
        {/* Main title for the entire FAQ page */}
        <h2 className='text-3xl md:text-4xl font-bold text-center text-brand-primary-dark mb-12'>
          {t(faqsData.overallTitleKey)}
        </h2>

        <div className='max-w-3xl mx-auto'>
          {/* Loop through each FAQ SECTION */}
          {faqsData.faqs.map((faqSection) => (
            <motion.div
              key={faqSection.id}
              className='mb-8'
              variants={sectionFadeInUp}
              initial='hidden'
              animate='show'>
              {/* Section Title (H3) for each group of FAQs */}
              <h3 className='text-2xl md:text-3xl font-bold text-brand-primary-dark mb-6 text-left'>
                {t(faqSection.sectionTitleKey)}
              </h3>

              {/* Inner loop for individual FAQs within this specific section */}
              <motion.div
                className='faqs-list' // Optional class for styling the list itself
                {...(!shouldReduce && {
                  variants: faqStagger,
                  initial: 'initial',
                  animate: 'animate',
                  viewport: { once: true, amount: 0.2 },
                })}>
                {faqSection.faqs.map(
                  (
                    faq // CHANGED: Loop through FAQs within this section
                  ) => (
                    <motion.div
                      key={faq.id}
                      variants={faqFadeUp}
                      className='mb-4 border border-brand-neutral/50 rounded-lg overflow-hidden shadow-sm'>
                      <button
                        className='w-full flex justify-between items-center p-4 bg-brand-white text-brand-primary-dark font-semibold text-left focus:outline-none focus:bg-brand-neutral/30 transition-colors duration-200'
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={openFaqId === faq.id}>
                        <span className='text-lg'>{t(faq.questionKey)}</span>
                        {shouldReduce ? (
                          <ChevronDownIcon className='w-6 h-6' />
                        ) : (
                          <MotionChevron
                            variants={chevronToggle}
                            initial='closed'
                            animate={openFaqId === faq.id ? 'open' : 'closed'}
                            className='w-6 h-6'
                          />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {openFaqId === faq.id &&
                          (shouldReduce ? (
                            <div className='px-4 pb-4 pt-2 bg-brand-neutral text-brand-primary-medium leading-relaxed'>
                              <p>{t(faq.answerKey)}</p>
                            </div>
                          ) : (
                            <motion.div
                              className='px-4 pb-4 pt-2 bg-brand-neutral text-brand-primary-medium leading-relaxed transition-max open'
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}>
                              <p>{t(faq.answerKey)}</p>
                            </motion.div>
                          ))}
                      </AnimatePresence>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsContentSection;
