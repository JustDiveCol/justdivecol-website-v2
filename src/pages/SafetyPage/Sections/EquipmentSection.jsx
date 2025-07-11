// src/pages/SafetyPage/components/Sections/EquipmentSection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { staggerContainer, fadeInUp } from '../../../hooks/animations';

import { RegulatorIcon } from '../../../assets/icons/RegulatorIcon';
import { BcdIcon } from '../../../assets/icons/BcdIcon';
import { ComputerIcon } from '../../../assets/icons/ComputerIcon';

import { EquipmentCardComponent } from '../Card/EquipmentCardComponent';

const EquipmentSection = ({ equipmentData }) => {
  const { t } = useTranslation('safety');
  const iconMap = {
    regulator: <RegulatorIcon />,
    bcd: <BcdIcon />,
    computer: <ComputerIcon />,
  };

  return (
    <motion.section
      variants={staggerContainer}
      className='py-20 px-4 bg-brand-primary-medium border-t-2 border-brand-primary-light/10'>
      <div className='container mx-auto text-center'>
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
          {t(equipmentData.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
          {t(equipmentData.subtitleKey)}
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {equipmentData.items.map((item) => (
            <EquipmentCardComponent
              key={item.id}
              itemData={item}
              icon={iconMap[item.icon]}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EquipmentSection;
