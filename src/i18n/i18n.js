// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// --- Import all namespaces for each language ---

// Global Namespaces
import navbarEN from './locals/en/navbar.js';
import footerEN from './locals/en/footer.js';
import paymentEN from './locals/en/payment.js';
import commonEN from './locals/en/common.js';

// Page-specific Namespaces
import homeEN from './locals/en/home.js';
import experiencesPageEN from './locals/en/experiencesPage.js';
import aboutUsEN from './locals/en/aboutUs.js';
import safetyEN from './locals/en/safety.js';
import contactEN from './locals/en/contact.js';

// Content Collections Namespaces
import coursesEN from './locals/en/courses.js';
import destinationsEN from './locals/en/destinations.js';
import experiencesEN from './locals/en/experiences.js';
import policiesEN from './locals/en/policies.js';

// --- Spanish Imports ---
import navbarES from './locals/es/navbar.js';
import footerES from './locals/es/footer.js';
import paymentES from './locals/es/payment.js';
import commonES from './locals/es/common.js';

import homeES from './locals/es/home.js';
import experiencesPageES from './locals/es/experiencesPage.js';
import aboutUsES from './locals/es/aboutUs.js';
import safetyES from './locals/es/safety.js';
import contactES from './locals/es/contact.js';

import coursesES from './locals/es/courses.js';
import destinationsES from './locals/es/destinations.js';
import experiencesES from './locals/es/experiences.js';
import policiesES from './locals/es/policies.js';

const resources = {
  // English resources
  en: {
    navbar: navbarEN,
    footer: footerEN,
    payment: paymentEN,
    home: homeEN,
    experiencesPage: experiencesPageEN,
    aboutUs: aboutUsEN,
    safety: safetyEN,
    contact: contactEN,
    courses: coursesEN,
    destinations: destinationsEN,
    experiences: experiencesEN,
    common: commonEN,
    policies: policiesEN,
  },
  // Spanish resources
  es: {
    navbar: navbarES,
    footer: footerES,
    payment: paymentES,
    home: homeES,
    experiencesPage: experiencesPageES,
    aboutUs: aboutUsES,
    safety: safetyES,
    contact: contactES,
    courses: coursesES,
    destinations: destinationsES,
    experiences: experiencesES,
    common: commonES,
    policies: policiesES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Default language
  fallbackLng: 'en', // Fallback language

  // Array with all the namespaces you have created
  ns: [
    'navbar',
    'footer',
    'payment',
    'home',
    'experiencesPage',
    'aboutUs',
    'safety',
    'contact',
    'courses',
    'destinations',
    'experiences',
    'common',
    'policies',
  ],

  // It's useful to have a default, though we often specify it
  defaultNS: 'home',

  interpolation: {
    escapeValue: false, // React already protects from XSS
  },
});

export default i18n;
