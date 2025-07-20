// src/pages/GearPage/pages/GearGuidePage/components/GearGuideStepContentComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import ButtonComponent from '../../../../../components/common/Button/ButtonComponent';
import ActionButtonComponent from '../../../../../components/common/Button/ActionButtonComponent';

const GearGuideStepContentComponent = ({
  whatIsTitleKey,
  whatIsContentKey,
  whatToLookForTitleKey,
  whatToLookForContentKey,
  tipsTitleKey,
  tipsContentKey,
  buyLinks, // Array de objetos { textKey, url, isExternal }
}) => {
  const { t } = useTranslation('gearGuidePage');

  return (
    <div className='flex-grow text-brand-primary-dark'>
      {/* What Is It */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='text-base sm:text-base md:text-lg lg:text-xl font-bold mb-2'>
        {t(whatIsTitleKey)}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-xs sm:text-xs lg:text-base text-brand-primary-medium leading-relaxed mb-4' // Starts smaller (14px)
      >
        {t(whatIsContentKey)}
      </motion.p>

      {/* What To Look For */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='text-base sm:text-base md:text-lg lg:text-xl font-bold mb-2'>
        {t(whatToLookForTitleKey)}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-xs sm:text-xs lg:text-base text-brand-primary-medium leading-relaxed mb-4' // Starts smaller (14px)
      >
        {t(whatToLookForContentKey)}
      </motion.p>

      {/* Selection Tips */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='text-base sm:text-base md:text-lg lg:text-xl font-bold mb-2'>
        {t(tipsTitleKey)}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-xs sm:text-xs lg:text-base text-brand-primary-medium leading-relaxed mb-4' // Starts smaller (14px)
      >
        {t(tipsContentKey)}
      </motion.p>

      {/* Find Your Gear */}
      {buyLinks && buyLinks.length > 0 && (
        <div className='mt-8'>
          {/* Heading (h4) size adjusted for better mobile readability */}
          <h4 className='text-sm sm:text-sm md:text-md lg:text-lg font-bold mb-2 text-brand-primary-light'>
            {t('buyLinksTitle')}
          </h4>
          <div className='flex flex-wrap gap-4'>
            {buyLinks.map((link, index) => (
              <ButtonComponent
                key={index}
                to={link.url}
                isExternal={link.isExternal}
                textKey={link.textKey}
                translationNS='gearGuidePage'
                className='px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-xs'
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GearGuideStepContentComponent;
