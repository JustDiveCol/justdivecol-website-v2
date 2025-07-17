// src/pages/AboutUsPage/components/Sections/TeamSection.jsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeInUp } from '../../../../hooks/animations';
import TeamCardComponent from '../Cards/TeamCardComponent';

/**
 * Renders the "Meet the Team" section of the page.
 * It displays a title, subtitle, and a grid of TeamCardComponent instances.
 *
 * @param {object} props - The component props.
 * @param {object} props.teamData - The data object for this section.
 * @param {string} props.teamData.titleKey - The translation key for the section title.
 * @param {string} props.teamData.subtitleKey - The translation key for the section subtitle.
 * @param {object[]} props.teamData.members - An array of team member data objects.
 */
const TeamSection = ({ teamData }) => {
  const { t } = useTranslation('aboutUs');
  return (
    <motion.section
      onContextMenu={(e) => e.preventDefault()}
      variants={staggerContainer}
      className='select-none py-20 px-4 bg-brand-primary-medium'>
      <div className='container mx-auto text-center'>
        <motion.h2
          variants={fadeInUp}
          className='text-4xl md:text-5xl font-bold text-brand-white uppercase'>
          {t(teamData.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className='mt-4 max-w-3xl mx-auto  text-lg text-brand-neutral'>
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
