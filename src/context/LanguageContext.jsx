// src/context/LanguageContext.jsx
import React, { createContext, useState, useMemo, useEffect } from 'react';
import i18n from '../i18n/i18n';

/**
 * React context to provide language state throughout the application.
 */
export const LanguageContext = createContext();

/**
 * Provides the language state and the function to update it to its children.
 * It also synchronizes the language state with the i18next library.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 */
export const LanguageProvider = ({ children }) => {
  // Inicializa el estado 'language' con el idioma de i18n
  // Usamos una función para `useState` para asegurar que i18n.language se evalúe de forma lazy.
  // Proporcionamos un fallback seguro ('es') si i18n.language aún no está disponible o es vacío.
  const [language, setLanguage] = useState(() => {
    const initialLng = i18n.language || i18n.options.fallbackLng?.[0] || 'es';
    return initialLng.length > 0 ? initialLng : 'es';
  });
  // Añade un estado para indicar si i18n está listo y las traducciones cargadas
  const [isReady, setIsReady] = useState(false);

  // Este efecto es para la SINCRONIZACIÓN INICIAL y para escuchar EVENTOS de i18n.
  useEffect(() => {
    const syncLanguageState = (lng) => {
      // Solo actualiza si el idioma es una cadena válida y diferente al estado actual
      // O si isReady es false (primera sincronización).
      if (typeof lng === 'string' && lng.length > 0 && (lng !== language || !isReady)) {
        setLanguage(lng);
        setIsReady(true);
      }
    };

    // --- PRIMERA CARGA DE LA APP: Asegurar que el estado inicial se sincronice correctamente ---
    // i18next emite 'initialized' cuando i18n.init() ha terminado su trabajo inicial (detectar idioma, cargar fallback).
    // i18next emite 'loaded' cuando todos los namespaces iniciales se han cargado.
    // i18next emite 'languageChanged' cada vez que el idioma activo cambia.

    // Comprobamos si i18n ya está listo (ej. en recargas rápidas o si ya se inicializó).
    // Esto asegura que el estado 'language' y 'isReady' se establezcan lo antes posible.
    if (i18n.isInitialized && i18n.isLoaded) {
      syncLanguageState(i18n.language);
    } else {
      // Si i18n aún no está listo, esperamos a que termine su inicialización y carga.
      // 'loaded' es una señal fuerte de que las traducciones están disponibles.
      i18n.on('loaded', () => syncLanguageState(i18n.language));
      // 'languageChanged' también es importante para cualquier cambio posterior o si el 'loaded' no captura la inicial.
      i18n.on('languageChanged', syncLanguageState);
    }

    // Función de limpieza para desuscribirse de los eventos cuando el componente se desmonte.
    return () => {
      i18n.off('loaded', syncLanguageState);
      i18n.off('languageChanged', syncLanguageState);
    };
  }, []); // Se ejecuta solo una vez al montar el componente.

  // Este efecto es para INICIAR el CAMBIO DE IDIOMA en i18n cuando el estado 'language' de React cambia.
  // Es disparado por setLanguage (desde el LanguageSwitcher o el propio syncLanguageState).
  useEffect(() => {
    // Si i18n.language ya es el mismo que nuestro estado 'language', y ya estamos listos, no hacemos nada.
    // Esto previene llamadas redundantes y asegura que el cambio sea intencional.
    if (i18n.language === language && isReady) {
      return;
    }

    // Si el idioma es una cadena válida y no está vacío, procedemos con el cambio.
    if (typeof language === 'string' && language.length > 0) {
      setIsReady(false); // Ponemos isReady a false mientras se carga el nuevo idioma
      i18n
        .changeLanguage(language)
        .then(() => setIsReady(true)) // Una vez que la promesa se resuelve (carga completa), está listo.
        .catch((error) => {
          setIsReady(true); // Importante: establecer a true incluso si hay error, para evitar un spinner infinito.
        });
    } else {
      setIsReady(true); // Considerar listo para no bloquear la app
    }
  }, [language, isReady]); // Dependencia en 'language' y 'isReady' para que se ejecute correctamente.

  // useMemo asegura que el objeto de valor de contexto solo se recree cuando
  // el estado 'language' o 'isReady' cambie, evitando re-renders innecesarios.
  const value = useMemo(() => ({ language, setLanguage, isReady }), [language, isReady]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
