// src/pages/AboutUsPage/components/Sections/HistorySection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer, fadeInUp } from '../../../../hooks/animations';

import ImageComponent from '../../../../components/common/Image/ImageComponent';
import { NAMESPACES } from '@/data/global/constants';

/**
 * Renders the "Our History" section with a title, paragraphs, and a feature image.
 *
 * @param {object} props - The component props.
 * @param {object} props.historyData - The data object for this section.
 * @param {string} props.historyData.titleKey - The translation key for the section title.
 * @param {string[]} props.historyData.paragraphs - An array of translation keys for the paragraphs.
 * @param {string} props.historyData.imageUrl - The URL for the section's image.
 */
const HistorySection = ({ translationNS, historyData }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  return (
    <motion.section variants={staggerContainer} className="py-12 px-4 bg-brand-primary-dark">
      {(() => {
        const hasImage = historyData.image && historyData.image.backgroundImage;
        return (
          <motion.div
            variants={fadeInUp}
            className={`container mx-auto grid ${
              hasImage ? 'md:grid-cols-2' : 'md:grid-cols-1'
            } gap-12 items-center`}
          >
            <div>
              <h2 className="heading-3 font-bold text-brand-white">{t(historyData.titleKey)}</h2>
              <div className="text-subtitle-sm mt-4 text-brand-neutral text-justify">
                {historyData.paragraphs.map((pKey) => (
                  <p key={pKey}>{t(pKey)}</p>
                ))}
              </div>
            </div>
            {hasImage && (
              <div className="px-4">
                <ImageComponent
                  className="rounded-2xl"
                  imageData={historyData.image}
                  translationNS={translationNS}
                />
              </div>
            )}
          </motion.div>
        );
      })()}
    </motion.section>
  );
};

export default HistorySection;
