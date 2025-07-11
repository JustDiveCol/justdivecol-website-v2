// src/pages/AboutUsPage/components/Cards/TeamCardComponent.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../../hooks/animations';
import { StarIcon } from '../../../../assets/icons/StarIcon';

const TeamCardComponent = ({ memberData }) => {
  const { t } = useTranslation('aboutUs');

  return (
    <motion.div
      variants={fadeInUp}
      className='bg-brand-primary-dark p-6 rounded-lg shadow-xl text-center flex flex-col h-full'>
      <img
        src={memberData.imageUrl}
        alt={t(memberData.nameKey)}
        className='w-32 h-32 rounded-full mx-auto object-cover border-4 border-brand-cta-green'
      />
      <h3 className='mt-4 text-2xl font-sans font-bold text-brand-white'>
        {t(memberData.nameKey)}
      </h3>
      <p className='text-md font-sans font-semibold text-brand-cta-orange uppercase tracking-wider'>
        {t(memberData.roleKey)}
      </p>
      <p className='mt-4 font-serif text-brand-neutral/80 flex-grow text-justify'>
        {t(memberData.bioKey)}
      </p>

      {memberData.funFacts && (
        <div className='mt-6 border-t border-brand-primary-light/20 pt-4 text-left'>
          <ul className='space-y-2'>
            {memberData.funFacts.map((factKey) => (
              <li
                key={factKey}
                className='flex items-start text-sm'>
                <StarIcon />
                <span className='text-brand-neutral/90 ml-2'>{t(factKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default TeamCardComponent;
