// src/pages/AboutUsPage/components/Cards/TeamCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';

import { StarIcon } from '../../../../assets/icons/NavbarIcons';

/**
 * Displays a card with information about a team member.
 *
 * @param {object} props - The component props.
 * @param {object} props.memberData - The data object for the team member.
 * @param {string} props.memberData.imageUrl - The URL for the member's avatar image.
 * @param {string} props.memberData.nameKey - The translation key for the member's name.
 * @param {string} props.memberData.roleKey - The translation key for the member's role.
 * @param {string} props.memberData.bioKey - The translation key for the member's biography.
 * @param {string[]} [props.memberData.funFacts] - An optional array of translation keys for fun facts.
 */
const TeamCardComponent = ({ memberData, translationNS = 'about' }) => {
  const { t } = useTranslation([translationNS, 'common']);

  const { imageUrl, nameKey, roleKey, bioKey, funFacts = [] } = memberData;

  return (
    <motion.div
      variants={fadeInUp}
      className="w-[90%] sm:w-[45%] lg:w-[30%] max-w-xs sm:max-w-sm md:max-w-md bg-brand-primary-dark rounded-lg shadow-2xl flex flex-col items-center text-center text-brand-white overflow-hidden"
    >
      {/* Profile Image */}
      <img
        src={imageUrl}
        alt={t(nameKey)}
        className="w-32 h-32 rounded-full mt-6 object-cover border-4 border-brand-cta-green"
        loading="lazy"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      />
      {/* Name & Role */}
      <div className="mt-4 px-4">
        <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-brand-white">
          {t(nameKey)}
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-brand-cta-orange mt-1">
          {t(roleKey)}
        </p>
      </div>
      {/* Bio */}
      <p className="mt-4 px-6 text-xs sm:text-sm text-brand-neutral/80 text-justify leading-relaxed flex-grow">
        {t(bioKey)}
      </p>
      {/* Fun Facts (optional) */}
      {funFacts.length > 0 && (
        <div className="mt-6 w-full border-t border-brand-primary-light/20 px-6 pt-4 text-left">
          <ul className="space-y-2">
            {funFacts.map((factKey) => (
              <li key={factKey} className="flex items-start text-xs text-brand-neutral/90">
                <StarIcon className="w-4 h-4 mt-0.5 text-brand-cta-yellow flex-shrink-0" />
                <span className="ml-2">{t(factKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="h-6" /> {/* Spacer to prevent tight crop */}
    </motion.div>
  );
};

export default TeamCardComponent;
