// src/data/global/shared.js

import experience_category_courses from '../../assets/images/page-specific/experiences/experience-category-courses.webp';
import experience_category_experiences from '../../assets/images/page-specific/experiences/experience-category-experiences.webp';
import experience_category_private from '../../assets/images/page-specific/experiences/experience-category-private.webp';

// This data is shared between the Home page and the Experiences page
export const experienceCategories = [
  {
    id: 'certificacion',
    titleKey: 'expCardCertificacionTitle',
    categoryKey: 'expCardCertificacionCategory',
    imageUrl: experience_category_courses,
  },
  {
    id: 'exploracion',
    titleKey: 'expCardExploracionTitle',
    categoryKey: 'expCardExploracionCategory',
    imageUrl: experience_category_experiences,
  },
  {
    id: 'privados',
    titleKey: 'expCardPrivadosTitle',
    categoryKey: 'expCardPrivadosCategory',
    imageUrl: experience_category_private,
  },
];
