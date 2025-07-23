// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Para detectar el idioma del navegador
import HttpBackend from 'i18next-http-backend'; // Para cargar los archivos JSON vía HTTP/AJAX

// Importa tus constantes de NAMESPACES.
// Asegúrate de que esta ruta sea correcta y que NAMESPACES esté definido.
import { NAMESPACES } from '@/data/global/constants';

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

export default i18n;
