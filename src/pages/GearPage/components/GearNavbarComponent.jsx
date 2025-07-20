// src/pages/GearPage/components/GearNavbarComponent.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

import { gearNavLinks } from '../../../data/global/gearNavbarData';
import { MenuIcon, CloseIcon } from '../../../assets/icons/NavbarIcons';

const GearNavbarComponent = () => {
  // 'gearNavbar' será el namespace para las traducciones de esta barra
  const { t } = useTranslation('gearNavbar', 'gearHomePage');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      // Se posiciona 80px debajo de la parte superior (altura de la barra principal)
      className='bg-brand-primary-light/80 backdrop-blur-md text-brand-white p-4 fixed w-full top-[5rem] z-40 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Título (opcional, por ahora solo texto) */}
        <div className='uppercase text-lg font-bold text-brand-cta-orange md:text-xl'>
          {t('gearHomePage:gearSectionTitleKey')}
        </div>

        {/* --- Menú de Escritorio --- */}
        <div className='hidden md:flex flex-grow justify-end space-x-6 items-center'>
          {gearNavLinks.map((link) => (
            <NavLink
              key={link.nameKey}
              to={link.path}
              className={({ isActive }) =>
                `relative group text-sm font-semibold uppercase tracking-wider whitespace-nowrap ${
                  isActive
                    ? 'text-brand-cta-orange'
                    : 'hover:text-brand-cta-orange/80 transition-colors'
                }`
              }>
              {t(link.nameKey)}
              <span className='absolute bottom-[-2px] left-0 w-full h-0.5 bg-brand-cta-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center'></span>
            </NavLink>
          ))}
        </div>

        {/* Botón del Menú Móvil */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle gear menu'
            className='ml-4'>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Panel del Menú Móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden mt-4'>
            <div className='flex flex-col space-y-4 items-center'>
              {gearNavLinks.map((link) => (
                <NavLink
                  key={link.nameKey}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-center py-2 hover:bg-brand-primary-medium rounded-md text-sm font-semibold uppercase tracking-wider w-full ${
                      isActive ? 'text-brand-cta-orange' : ''
                    }`
                  }>
                  {t(link.nameKey)}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default GearNavbarComponent;
