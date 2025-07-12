// src/pages/AboutUsPage/components/Sections/HistorySection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

/**
 * Renders the "Our History" section with a title, paragraphs, and a feature image.
 *
 * @param {object} props - The component props.
 * @param {object} props.historyData - The data object for this section.
 * @param {string} props.historyData.titleKey - The translation key for the section title.
 * @param {string[]} props.historyData.paragraphs - An array of translation keys for the paragraphs.
 * @param {string} props.historyData.imageUrl - The URL for the section's image.
 */
const HistorySection = ({ historyData }) => {
  const { t } = useTranslation('aboutUs');

  return (
    <motion.section
      variants={staggerContainer}
      className='py-20 px-4 bg-brand-primary-dark'>
      <div className='container mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <motion.div variants={fadeInUp}>
          <h2 className='text-3xl md:text-4xl font-sans font-bold text-brand-white mb-6'>
            {t(historyData.titleKey)}
          </h2>
          <div className='space-y-4 font-serif text-lg text-brand-neutral/90 text-justify'>
            {historyData.paragraphs.map((pKey) => (
              <p key={pKey}>{t(pKey)}</p>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className='h-[500px] rounded-lg overflow-hidden shadow-2xl'>
          <img
            src={historyData.imageUrl}
            alt={t(historyData.titleKey)}
            className='w-full h-full object-cover'
            loading='lazy'
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HistorySection;
