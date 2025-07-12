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
  const [language, setLanguage] = useState('es');

  // This effect synchronizes the React state with the i18next instance.
  // Whenever the 'language' state changes, it tells i18next to change its language.
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // useMemo ensures that the context value object is only recreated when the
  // 'language' state changes, preventing unnecessary re-renders of consumers.
  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
