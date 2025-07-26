// src/pages/DetailPage/common/Cards/CtaCard.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import ButtonComponent from '../../../../components/common/Button/ButtonComponent';
import { NAMESPACES } from '@/data/global/constants';

const CtaCard = ({ ctaData, translationNS }) => {
  const { t } = useTranslation([translationNS, NAMESPACES.COMMON]);

  if (!ctaData || !ctaData.buttonTextKey || !ctaData.ctaAction) {
    return null;
  }

  return (
    // El botón flotante debe estar fuera del flujo normal del documento
    <motion.div
      // Estado inicial: invisible y abajo
      initial={{ opacity: 0, y: 100 }}
      // Animación final con bucle: aparece y rebota suavemente
      animate={{
        opacity: 1, // Se vuelve visible
        y: [0, -10, 0], // Sube y baja 10px desde su posición final
      }}
      transition={{
        // Animación de 'y' (rebote): se repite
        y: {
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
        // Animación de 'opacity' (aparición): solo una vez
        opacity: {
          duration: 0.5,
          ease: 'easeOut',
        },
      }}
      className="fixed bottom-16 right-6 z-50 md:right-12"
    >
      <ButtonComponent
        action={ctaData.action}
        textKey={ctaData.buttonTextKey}
        translationNS={translationNS}
        roundedClass="rounded-full"
        className="text-base-xs font-bold uppercase"
      />
    </motion.div>
  );
};

export default CtaCard;
