// src/components/layout/Footer/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Data Imports
import { footerData } from '../../../data/global/footerData.js';
import { contactPageData } from '../../../data/pages/contactData.js';

// Asset Imports
import logo from '../../../assets/images/logos/logo.png';
import { InstagramIcon } from '../../../assets/icons/InstagramIcon.jsx';
import { TikTokIcon } from '../../../assets/icons/TikTokIcon.jsx';
import { YouTubeIcon } from '../../../assets/icons/YouTubeIcon.jsx';
import { MailIcon } from '../../../assets/icons/MailIcon.jsx';
import { WhatsAppIcon } from '../../../assets/icons/WhatsAppIcon.jsx';
import { ArrowUpIcon } from '../../../assets/icons/ArrowUpIcon.jsx';
import { ScubaMaskIcon } from '../../../assets/icons/ScubaMaskIcon.jsx';

/**
 * The main footer component for the website.
 * Includes navigation, contact info, and a scroll-to-top button.
 */
const Footer = () => {
  // Load multiple i18next namespaces for footer-specific and contact data.
  const { t } = useTranslation(['footer', 'contact']);

  const [isVisible, setIsVisible] = useState(false);

  // Effect to show or hide the scroll-to-top button based on scroll position.
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button if the user has scrolled more than 300px down.
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Maps social media icon keys from data to their respective components.
  const socialIcons = {
    instagram: <InstagramIcon />,
    tiktok: <TikTokIcon />,
    youtube: <YouTubeIcon />,
  };

  // Build the WhatsApp URL with a pre-filled message from translation files.
  const prefilledText = t(contactPageData.whatsAppAction.prefilledMessageKey, {
    ns: 'contact',
  });
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(prefilledText)}`;

  return (
    <footer className='bg-gradient-to-t from-brand-primary-dark to-brand-primary-medium text-brand-neutral/80 font-serif relative'>
      <div className='container mx-auto px-8 py-16 text-center'>
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <img
              onContextMenu={(e) => e.preventDefault()}
              src={logo}
              alt='JustDiveCol Logo'
              className='h-10 w-auto'
            />
          </Link>
          <p className='mt-4 text-lg max-w-xl'>{t(footerData.sloganKey)}</p>
          <p className='mt-2 text-sm max-w-xl font-sans font-semibold text-brand-white'>
            {t(footerData.closingMessageKey)}
          </p>

          <div className='flex justify-center items-center space-x-6 mt-8'>
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              title='WhatsApp'
              className='text-brand-neutral/70 hover:text-brand-white transition-colors'>
              <WhatsAppIcon />
            </a>
            <a
              href={`mailto:${contactPageData.contactInfo.email}`}
              title='Email'
              className='text-brand-neutral/70 hover:text-brand-white transition-colors'>
              <MailIcon />
            </a>
            {contactPageData.contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                title={social.name}
                className='text-brand-neutral/70 hover:text-brand-white transition-colors'>
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className='flex items-center justify-center my-10'>
          <div className='flex-grow border-t border-brand-primary-light/20'></div>
          <div className='px-4'>
            <ScubaMaskIcon />
          </div>
          <div className='flex-grow border-t border-brand-primary-light/20'></div>
        </div>

        <div className='text-center mb-8'>
          {' '}
          {/* Centra el contenido y añade un margen inferior */}
          <h3 className='text-xl font-bold text-brand-white mb-4'>
            {t(footerData.importantLinksTitle)}
          </h3>{' '}
          {/* Asume una clave de traducción para el título */}
          {footerData.navLinks.map((link) => (
            <Link
              key={link.nameKey}
              to={link.path}
              className='text-brand-neutral/80 hover:text-brand-cta-orange transition-colors text-sm p-2'>
              {t(link.nameKey)}
            </Link>
          ))}
        </div>

        <div className='text-sm'>
          <p>
            &copy; {new Date().getFullYear()} {t(footerData.copyrightKey)}
          </p>
          <p className='text-xs text-brand-neutral/60 mt-1'>
            {t(footerData.creditsKey)}
          </p>
        </div>
      </div>

      {/* Scroll-to-top button, rendered conditionally */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 bg-brand-cta-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity'
          aria-label='Scroll to top'>
          <ArrowUpIcon />
        </button>
      )}
    </footer>
  );
};

export default Footer;
