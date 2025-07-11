// src/context/LanguageContext.jsx
import React, { createContext, useState, useMemo, useEffect } from 'react';
import i18n from '../i18n/i18n'; // <-- Import the i18next instance

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
