import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';

// Import the icons
import { ShieldCheckIcon } from '../../../../assets/icons/ShieldCheckIcon';
import { CogIcon } from '../../../../assets/icons/CogIcon';
import { ClipboardListIcon } from '../../../../assets/icons/ClipboardListIcon';

// Map keys to Icon components. We can expand this map as needed.
const iconMap = {
  guias: <ShieldCheckIcon />,
  equipos: <CogIcon />,
  protocolos: <ClipboardListIcon />,
};

const SafetyCardComponent = ({ item, translationNS }) => {
  const { t } = useTranslation(translationNS);

  return (
    <motion.div
      variants={fadeInUp}
      className='flex flex-col items-center'>
      <div className='text-brand-cta-green'>{iconMap[item.id]}</div>
      <h3 className='mt-4 text-2xl font-sans font-semibold'>
        {t(item.titleKey)}
      </h3>
      <p className='mt-2 font-serif text-brand-neutral'>
        {t(item.descriptionKey)}
      </p>
    </motion.div>
  );
};

export default SafetyCardComponent;
