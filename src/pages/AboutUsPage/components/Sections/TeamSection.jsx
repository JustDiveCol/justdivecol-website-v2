// src/pages/AboutUsPage/components/Sections/TeamSection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';
import TeamCardComponent from '../Cards/TeamCardComponent';

const TeamSection = ({ teamData }) => {
  const { t } = useTranslation('aboutUs');
  return (
    <motion.section
      variants={staggerContainer}
      className='py-20 px-4 bg-brand-primary-medium'>
      <div className='container mx-auto text-center'>
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
          {t(teamData.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
          {t(teamData.subtitleKey)}
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamData.members.map((member) => (
            <TeamCardComponent
              key={member.id}
              memberData={member}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
