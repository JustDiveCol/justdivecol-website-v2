// @/src/components/layout/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { MenuIcon } from '../../../assets/icons/MenuIcon';
import { CloseIcon } from '../../../assets/icons/CloseIcon';

import { navLinks } from '../../../data/global/navbarData';

import logo from '../../../assets/images/logos/logo.png';
import LanguageSwitcherComponent from '../../ui/LanguageSwitcherComponent';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Get the translation function 't' from the 'navbar' namespace
  const { t } = useTranslation('navbar');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-brand-primary-dark/80 backdrop-blur-md text-brand-white p-4 fixed w-full top-0 z-50 font-sans'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo linked to the homepage */}
        <NavLink
          to='/'
          className='transition-transform duration-300 hover:scale-105'>
          <img
            src={logo}
            alt='Company Logo'
            className='h-12 w-auto'
          />
        </NavLink>

        {/* Desktop Menu (visible on screens 'md' and larger) */}
        <div className='hidden md:flex space-x-6 items-center'>
          {navLinks.map((link) => (
            <NavLink
              key={link.nameKey}
              to={link.path}
              className={({ isActive }) =>
                `relative group text-sm font-semibold uppercase tracking-wider
                ${
                  isActive
                    ? 'text-brand-cta-orange'
                    : 'hover:text-brand-cta-orange/80 transition-colors'
                }`
              }>
              {t(link.nameKey)} {/* Translate the link name using its key */}
              {/* Animated underline effect on hover */}
              <span className='absolute bottom-[-2px] left-0 w-full h-0.5 bg-brand-cta-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center'></span>
            </NavLink>
          ))}
          {/* Language switcher for desktop view */}
          <LanguageSwitcherComponent />
        </div>

        {/* Mobile Menu Button (visible on screens smaller than 'md') */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (conditionally rendered) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:hidden mt-4'>
          <div className='flex flex-col space-y-4 items-center'>
            {navLinks.map((link) => (
              <NavLink
                key={link.nameKey}
                to={link.path}
                // Close the menu when a link is clicked
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-center py-2 hover:bg-brand-primary-medium rounded-md text-sm font-semibold uppercase tracking-wider w-full
                        ${isActive ? 'text-brand-cta-orange' : ''}`
                }>
                {t(link.nameKey)}
              </NavLink>
            ))}
            {/* Language switcher for mobile view */}
            <div className='pt-4'>
              <LanguageSwitcherComponent />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
