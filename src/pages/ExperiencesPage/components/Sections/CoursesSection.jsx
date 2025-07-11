// src/pages/ExperiencesPage/components/Sections/CoursesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiencesPageData } from '../../../../data/pages/experiencesData';
import { getCoursesWithAvailability } from '../../../../data/content/courses/_index';
import { staggerContainer } from '../../../../hooks/animations';
import CourseCardComponent from '../Cards/CourseCardComponent';

const CoursesSection = () => {
  const { t } = useTranslation('experiencesPage');
  const coursesWithStatus = getCoursesWithAvailability();
  const { sectionId, titleKey } = experiencesPageData.fullCatalog.courses;

  return (
    <section
      id={sectionId}
      className='py-20 px-4 scroll-mt-20'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-sans font-bold text-brand-white text-center mb-12 uppercase'>
          {t(titleKey)}
        </h2>
        <motion.div
          variants={staggerContainer}
          className='flex flex-wrap justify-center gap-8'>
          {coursesWithStatus.map((course) => (
            <CourseCardComponent
              key={course.id}
              courseData={course}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
