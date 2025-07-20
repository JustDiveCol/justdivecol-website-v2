// src/pages/GearPage/pages/GearGuidePage/components/GearGuideStepImageLeftComponent.jsx
import React from 'react';
import { motion } from 'motion/react';

import GearGuideStepContentComponent from './GearGuideStepContentComponent';
import ImageComponent from '../../../../../components/common/Image/ImageComponent';

const GearGuideStepImageLeftComponent = ({
  anchorId,
  image,
  whatIsTitleKey,
  whatIsContentKey,
  whatToLookForTitleKey,
  whatToLookForContentKey,
  tipsTitleKey,
  tipsContentKey,
  buyLinks,
}) => {
  return (
    <section
      id={anchorId}
      className='relative bg-brand-neutral scroll-mt-[8.5rem]'>
      <div className='flex flex-col md:flex-row items-stretch'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-shrink-0 w-1/3 mx-auto self-center'>
          <ImageComponent
            imageData={image}
            translationNS='gearGuidePage'
            className='rounded-2xl'
          />
        </motion.div>
        <div className='flex-grow w-full md:w-2/3 container mx-auto px-12 py-6 self-center text-justify'>
          <GearGuideStepContentComponent
            whatIsTitleKey={whatIsTitleKey}
            whatIsContentKey={whatIsContentKey}
            whatToLookForTitleKey={whatToLookForTitleKey}
            whatToLookForContentKey={whatToLookForContentKey}
            tipsTitleKey={tipsTitleKey}
            tipsContentKey={tipsContentKey}
            buyLinks={buyLinks}
          />
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/10 to-transparent z-10'></div>
    </section>
  );
};

export default GearGuideStepImageLeftComponent;
