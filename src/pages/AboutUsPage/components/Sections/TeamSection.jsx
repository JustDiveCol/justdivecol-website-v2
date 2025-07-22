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
const TeamSection = ({ translationNS, teamData }) => {
  const { t } = useTranslation([translationNS, 'common']);
  return (
    <motion.section
      onContextMenu={(e) => e.preventDefault()}
      variants={staggerContainer}
      className="select-none py-12 px-4 bg-brand-primary-medium"
    >
      <div className="container mx-auto text-center">
        <motion.h2 variants={fadeInUp} className="heading-3 font-bold text-brand-white uppercase">
          {t(teamData.titleKey)}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-subtitle-sm mt-4 max-w-3xl mx-auto text-brand-neutral"
        >
          {t(teamData.subtitleKey)}
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="mt-8 flex flex-wrap justify-center gap-8"
        >
          {teamData.members.map((member) => (
            <TeamCardComponent key={member.id} memberData={member} translationNS={translationNS} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
