// src/components/ui/LanguageSwitcherComponent.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext'; // Import the context

const LanguageSwitcherComponent = () => {
  // Consume the context to get the current language and the function to change it
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className='flex items-center space-x-3 text-sm font-bold uppercase'>
      <button
        onClick={() => setLanguage('es')}
        // Apply a style if Spanish is the active language
        className={
          language === 'es'
            ? 'text-brand-cta-orange'
            : 'hover:text-brand-cta-orange transition-colors'
        }>
        ES
      </button>
      <span className='text-brand-white/50'>|</span>
      <button
        onClick={() => setLanguage('en')}
        // Apply a style if English is the active language
        className={
          language === 'en'
            ? 'text-brand-cta-orange'
            : 'hover:text-brand-cta-orange transition-colors'
        }>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcherComponent;
