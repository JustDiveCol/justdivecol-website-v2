// src/pages/SafetyPage/components/Sections/EquipmentSection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animations and Child Components
import { staggerContainer, fadeInUp } from '../../../hooks/animations';
import { EquipmentCardComponent } from '../Card/EquipmentCardComponent';

// Icons
import { BcdIcon } from '../../../assets/icons/BcdIcon';
import { ComputerIcon } from '../../../assets/icons/ComputerIcon';
import { ScubaRegulatorIcon } from '../../../assets/icons/ScubaRegulatorIcon';

/**
 * Renders the "Equipment" section of the Safety page.
 * It displays a title, subtitle, and a grid of cards for each piece of equipment.
 *
 * @param {object} props - The component props.
 * @param {object} props.equipmentData - The data object for this section.
 * @param {string} props.equipmentData.titleKey - The translation key for the section title.
 * @param {string} props.equipmentData.subtitleKey - The translation key for the section subtitle.
 * @param {object[]} props.equipmentData.items - An array of equipment item objects.
 */
const EquipmentSection = ({ equipmentData }) => {
  const { t } = useTranslation('safety');

  // Maps icon string identifiers from data to the actual imported icon components.
  const iconMap = {
    regulator: <ScubaRegulatorIcon />,
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
              icon={iconMap[item.icon]} // The resolved icon component is passed as a prop.
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EquipmentSection;
