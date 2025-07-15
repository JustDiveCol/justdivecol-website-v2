// src/data/global/shared.js

import experience_category_courses from '../../assets/images/page-specific/experiences/experience-category-courses.webp';
import experience_category_experiences from '../../assets/images/page-specific/experiences/experience-category-experiences.webp';
import experience_category_private from '../../assets/images/page-specific/experiences/experience-category-private.webp';

import logo from '../../assets/images/logos/logo.png';
import padi from '../../assets/images/logos/padi.png';

// This data is shared between the Home page and the Experiences page
export const experienceCategories = [
  {
    id: 'certificacion',
    backgroundImage: experience_category_courses,
    titleKey: 'expCardCertificacionTitle',
    categoryKey: 'expCardCertificacionCategory',
    mainLogo: logo,
    mainLogoAltKey: 'expCardCertificacionMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'expCardCertificacionComplementaryLogoAlt',
    photoCreditKey: 'expCardCertificacionPhotoCredit',
  },
  {
    id: 'exploracion',
    backgroundImage: experience_category_experiences,
    titleKey: 'expCardCertificacionTitle',
    categoryKey: 'expCardCertificacionCategory',
    mainLogo: logo,
    mainLogoAltKey: 'expCardCertificacionMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'expCardCertificacionComplementaryLogoAlt',
    photoCreditKey: 'expCardCertificacionPhotoCredit',
  },
  {
    id: 'privados',
    backgroundImage: experience_category_private,
    titleKey: 'expCardCertificacionTitle',
    categoryKey: 'expCardCertificacionCategory',
    mainLogo: logo,
    mainLogoAltKey: 'expCardCertificacionMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'expCardCertificacionComplementaryLogoAlt',
    photoCreditKey: 'expCardCertificacionPhotoCredit',
  },
];
