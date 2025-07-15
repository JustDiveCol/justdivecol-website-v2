import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { fadeInUp } from '../../hooks/animations';

const FaqsComponent = ({ renderData, translationNS }) => {
  const { t } = useTranslation(translationNS);

  return (
    <motion.section
      variants={fadeInUp}
      className='mb-12'>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
        {t(renderData.titleKey)}
      </h2>
      <ul className='space-y-3 list-inside font-serif text-brand-neutral text-justify'>
        {renderData.points.map((point, index) => (
          <li key={index}>
            {t(point.pointKey)}
            {point.subPoints && point.subPoints.length > 0 && (
              // Usamos <ol> para los subpuntos con letras 'a, b, c'
              <ol className='ml-6 mt-2 space-y-2 list-none list-outside text-brand-neutral/60'>
                {point.subPoints.map((subPointKey, subIndex) => (
                  <li key={subIndex}>{t(subPointKey)}</li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default FaqsComponent;
