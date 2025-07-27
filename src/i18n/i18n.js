// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Para detectar el idioma del navegador
import HttpBackend from 'i18next-http-backend'; // Para cargar los archivos JSON vía HTTP/AJAX

// Importa tus constantes de NAMESPACES.
// Asegúrate de que esta ruta sea correcta y que NAMESPACES esté definido.
import { NAMESPACES } from '@/data/global/constants';

<<<<<<< HEAD
// Global Namespaces
import navbarEN from './locals/en/navbar.js';
import footerEN from './locals/en/footer.js';
import paymentEN from './locals/en/payment.js';
import commonEN from './locals/en/common.js';
=======
i18n
  // 1. Usa el backend HTTP para cargar los archivos de traducción.
  //    Esto significa que i18next hará peticiones GET a URLs como /locales/en/common.json.
  .use(HttpBackend)
  // 2. Usa el detector de idioma del navegador.
  //    Esto permite a i18next detectar el idioma preferido del usuario.
  .use(LanguageDetector)
  // 3. Conecta i18n con React.
  .use(initReactI18next)
  // 4. Inicializa i18n con las configuraciones.
  .init({
    // Lenguajes soportados y el idioma de fallback (por defecto).
    supportedLngs: ['en', 'es'], // Define todos los idiomas que soporta tu aplicación.
    fallbackLng: 'es', // Idioma por defecto si el detectado no está disponible.
>>>>>>> wip/V3

    // Namespaces a cargar por defecto.
    // Esta lista le dice a i18next qué nombres de archivo JSON buscar.
    // Es crucial que los nombres de los archivos JSON en public/locales/ coincidan con estas cadenas.
    ns: [
      NAMESPACES.NAVBAR,
      NAMESPACES.FOOTER,
      NAMESPACES.COMMON,
      NAMESPACES.MAP,
      NAMESPACES.PAYMENT,
      NAMESPACES.CONTACT,
      NAMESPACES.CERTIFICATIONS,
      NAMESPACES.DESTINATIONS,
      NAMESPACES.EXPERIENCES,
      NAMESPACES.DIVESITES,
      NAMESPACES.HOME_PAGE,
      NAMESPACES.EXPERIENCES_PAGE,
      NAMESPACES.ABOUT_US_PAGE,
      NAMESPACES.SAFETY_PAGE,
      NAMESPACES.FAQS_PAGE,
      NAMESPACES.NOT_FOUND_PAGE,
      NAMESPACES.POLICY_PAGE,
      NAMESPACES.PRIVACY_PAGE,
      NAMESPACES.TERMS_PAGE,
      NAMESPACES.UNDER_CONSTRUCTION_PAGE,
    ],
    // El namespace por defecto. Si no especificas 'ns' en 't()', buscará aquí primero.
    defaultNS: NAMESPACES.COMMON,

    // Configuración del backend HTTP.
    // loadPath indica dónde están tus archivos de traducción.
    // {{lng}} se reemplaza por el idioma (ej., 'en', 'es').
    // {{ns}} se reemplaza por el nombre del namespace (ej., 'common', 'certifications').
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

<<<<<<< HEAD
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
import termsAndConditionsES from './locals/es/termsAndConditions.js';
import privacyPolicyES from './locals/es/privacyPolicy.js';
import faqsES from './locals/es/faqs.js';
import notFoundES from './locals/es/notFound.js';
import underConstructionES from './locals/es/underConstruction.js';
import divesitesES from './locals/es/divesites.js';
import mapES from './locals/es/map.js';

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
    termsAndConditions: termsAndConditionsEN,
    privacyPolicy: privacyPolicyEN,
    faqs: faqsEN,
    notFound: notFoundEN,
    underConstruction: underConstructionEN,
    divesites: divesitesEN,
    map: mapEN,
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
    termsAndConditions: termsAndConditionsES,
    privacyPolicy: privacyPolicyES,
    faqs: faqsES,
    notFound: notFoundES,
    underConstruction: underConstructionES,
    divesites: divesitesES,
    map: mapES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Default language
  fallbackLng: 'en', // Fallback language

  // Array with all the namespaces you have created
  ns: [
    'navbar',
    'gearNavbar',
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
    'termsAndConditions',
    'privacyPolicy',
    'faqs',
    'notFound',
    'underConstruction',
    'divesites',
    'map',
  ],

  // It's useful to have a default, though we often specify it
  defaultNS: 'common',

  interpolation: {
    escapeValue: false, // React already protects from XSS
  },
});
=======
    // Opciones de detección de idioma.
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Guarda el idioma detectado en localStorage.
    },

    // Opciones de React para la integración.
    react: {
      useSuspense: false, // Mantén esto en 'false' a menos que estés usando <Suspense>.
    },

    // Modo de depuración para ver logs de i18n en la consola (útil durante el desarrollo).
    debug: false,
    // Desactivar el escape de valores, ya que React ya lo hace por defecto para prevenir XSS.
    interpolation: {
      escapeValue: false,
    },
  });
>>>>>>> wip/V3

export default i18n;
