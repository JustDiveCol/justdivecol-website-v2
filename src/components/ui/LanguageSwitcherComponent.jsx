// src/components/ui/LanguageSwitcherComponent.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

/**
 * A UI component that allows the user to switch between supported languages.
 * It uses the LanguageContext to get and set the current language.
 */
const LanguageSwitcherComponent = () => {
  // Consume the LanguageContext to get the current language and the setter function.
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="flex items-center space-x-3 text-sm font-bold uppercase">
      <button
        onClick={() => setLanguage('es')}
        // Apply a specific style if this is the active language.
        className={
          language === 'es'
            ? 'text-brand-cta-orange cursor-pointer'
            : 'hover:text-brand-cta-orange transition-colors cursor-pointer'
        }
      >
        ES
      </button>
      <span className="text-brand-white/50">|</span>
      <button
        onClick={() => setLanguage('en')}
        // Apply a specific style if this is the active language.
        className={
          language === 'en'
            ? 'text-brand-cta-orange cursor-pointer'
            : 'hover:text-brand-cta-orange transition-colors cursor-pointer'
        }
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcherComponent;
