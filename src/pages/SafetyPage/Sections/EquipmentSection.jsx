// src/pages/SafetyPage/components/Sections/EquipmentSection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Animations and Child Components
import { staggerContainer, fadeInUp } from '../../../hooks/animations';
import { EquipmentCardComponent } from '../Card/EquipmentCardComponent';

// Icons
import { DiverIcon, ScubaTanksIcon, ComputerIcon } from '../../../assets/icons/DiverIcons';
import { NAMESPACES } from '@/data/global/constants';

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
const EquipmentSection = ({ translationNS, equipmentData }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  // Maps icon string identifiers from data to the actual imported icon components.
  const iconMap = {
    regulator: <ScubaTanksIcon className="h-16 w-16" />,
    bcd: <DiverIcon className="h-16 w-16" />,
    computer: <ComputerIcon className="h-16 w-16" />,
  };

  return (
    <motion.section
      variants={staggerContainer}
      className="py-12 px-4 bg-brand-primary-medium border-t-2 border-brand-primary-light/10"
    >
      <div className="container mx-auto text-center">
        <motion.h2 variants={fadeInUp} className="heading-3 font-bold text-brand-white uppercase">
          {t(equipmentData.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-subtitle-sm mt-4 max-w-3xl mx-auto text-brand-neutral"
        >
          {t(equipmentData.subtitleKey)}
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {equipmentData.items.map((item) => (
            <EquipmentCardComponent
              key={item.id}
              itemData={item}
              icon={iconMap[item.icon]}
              translationNS={translationNS}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EquipmentSection;
