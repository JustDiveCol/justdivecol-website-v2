// src/components/ui/LanguageSwitcherComponent.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import i18n from '../../i18n/i18n';

/**
 * A UI component that allows the user to switch between supported languages.
 * It uses the LanguageContext to get and set the current language.
 */
const LanguageSwitcherComponent = () => {
  // Consume the LanguageContext to get the current language and the setter function.
  const { language, setLanguage } = useContext(LanguageContext);

  // Función asíncrona para manejar el cambio de idioma
  const handleChangeLanguage = async (lng) => {
    // Si el idioma ya es el actual, no hacer nada
    if (lng === language) {
      return;
    }
    try {
      // Llama a i18n.changeLanguage y espera a que los recursos se carguen
      await i18n.changeLanguage(lng);
      // Solo actualiza el estado de React una vez que i18next ha cambiado el idioma
      setLanguage(lng);
    } catch (error) {
      console.error('Failed to change language:', error);
      // Opcional: mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="flex items-center space-x-3 text-sm font-bold uppercase">
      <button
        onClick={() => handleChangeLanguage('es')}
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
        onClick={() => handleChangeLanguage('en')}
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
