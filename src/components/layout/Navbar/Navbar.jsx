import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { navLinks } from '../../../data/global/navbarData';
import LanguageSwitcherComponent from '../../ui/LanguageSwitcherComponent';
import logo from '../../../assets/images/logos/logo.png';

import { MenuIcon, CloseIcon, ChevronDownIcon } from '../../../assets/icons/NavbarIcons';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

const Navbar = () => {
  const { t, i18n } = useTranslation(NAMESPACES.NAVBAR);
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState(navLinks);
  const [hiddenLinks, setHiddenLinks] = useState([]);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const langRef = useRef(null);
  const moreRef = useRef(null);
  const linkRefs = useRef({});

  const GAP = 24;
  const MORE_BUTTON_WIDTH = 80;

  const calculateVisibleLinks = () => {
    if (!navContainerRef.current || window.innerWidth < 768) {
      setVisibleLinks(navLinks);
      setHiddenLinks([]);
      return;
    }

    requestAnimationFrame(() => {
      const containerWidth = navContainerRef.current.offsetWidth;
      const logoWidth = logoRef.current?.offsetWidth || 0;
      const langWidth = langRef.current?.offsetWidth || 0;
      const availableSpace =
        containerWidth - logoWidth - langWidth - MORE_BUTTON_WIDTH - GAP * (navLinks.length + 3);

      let currentWidth = 0;
      const newVisible = [];
      const newHidden = [];

      navLinks.forEach((link) => {
        const ref = linkRefs.current[link.nameKey];
        const linkWidth = ref?.offsetWidth || 0;

        if (currentWidth + linkWidth + GAP < availableSpace) {
          newVisible.push(link);
          currentWidth += linkWidth + GAP;
        } else {
          newHidden.push(link);
        }
      });

      if (
        JSON.stringify(newVisible) !== JSON.stringify(visibleLinks) ||
        JSON.stringify(newHidden) !== JSON.stringify(hiddenLinks)
      ) {
        setVisibleLinks(newVisible);
        setHiddenLinks(newHidden);
      }
    });
  };

  useEffect(() => {
    const observer = new ResizeObserver(calculateVisibleLinks);
    const resizeHandler = () => calculateVisibleLinks();

    if (navContainerRef.current) observer.observe(navContainerRef.current);
    window.addEventListener('resize', resizeHandler);

    const timeout = setTimeout(calculateVisibleLinks, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeHandler);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const delayedResize = setTimeout(() => {
      calculateVisibleLinks();
    }, 0);
    return () => clearTimeout(delayedResize);
  }, [i18n.language, location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreMenuOpen(false);
  }, [location]);

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/store/home') return location.pathname.startsWith('/store');
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-primary-dark/80 backdrop-blur-md text-brand-white p-4 fixed w-full top-0 z-50"
    >
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="select-none container mx-auto flex justify-between items-center"
      >
        <NavLink
          ref={logoRef}
          to="/"
          className="transition-transform duration-300 hover:scale-105 flex-shrink-0"
        >
          <img src={logo} alt="JustDiveCol Logo" className="h-12 w-auto" />
        </NavLink>

        {/* Escritorio */}
        <div
          ref={navContainerRef}
          className="hidden md:flex flex-grow justify-end space-x-6 items-center"
        >
          {visibleLinks.map((link) => {
            const isActive = isLinkActive(link.path);
            return (
              <NavLink
                key={link.nameKey}
                ref={(el) => (linkRefs.current[link.nameKey] = el)}
                to={link.path}
                className={`relative group text-sm font-semibold uppercase tracking-wider whitespace-nowrap ${
                  isActive
                    ? 'text-brand-cta-orange'
                    : 'text-white hover:text-brand-cta-orange/80 transition-colors'
                }`}
              >
                {t(link.nameKey)}
                <span
                  className={`absolute bottom-[-2px] left-0 w-full h-0.5 bg-brand-cta-orange transition-transform duration-300 origin-center ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </NavLink>
            );
          })}

          {hiddenLinks.length > 0 && (
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className="flex items-center text-sm font-semibold uppercase tracking-wider hover:text-brand-cta-orange/80 transition-colors cursor-pointer"
              >
                {t(SHARED_TRANSLATION_KEYS.MORE_LABEL)}
                <ChevronDownIcon
                  className={`w-5 h-5 ml-1 transition-transform duration-200 ${
                    isMoreMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-brand-primary-dark/95 backdrop-blur-sm rounded-md shadow-lg ring-1 ring-white/10"
                  >
                    <div className="py-1">
                      {hiddenLinks.map((link) => {
                        const isActive = isLinkActive(link.path);
                        return (
                          <NavLink
                            key={link.nameKey}
                            to={link.path}
                            className={`block px-4 py-2 text-sm font-semibold uppercase ${
                              isActive
                                ? 'text-brand-cta-orange'
                                : 'text-white hover:bg-brand-primary-light'
                            }`}
                          >
                            {t(link.nameKey)}
                          </NavLink>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div ref={langRef}>
            <LanguageSwitcherComponent />
          </div>
        </div>

        {/* Móvil */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcherComponent />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="ml-4"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 items-center">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                  <NavLink
                    key={link.nameKey}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-center py-2 text-white hover:bg-brand-primary-medium rounded-md text-sm font-semibold uppercase tracking-wider w-full ${
                      isActive ? 'text-brand-cta-orange' : ''
                    }`}
                  >
                    {t(link.nameKey)}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
