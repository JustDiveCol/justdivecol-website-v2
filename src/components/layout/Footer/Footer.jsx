import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Data Imports
import { footerData } from '../../../data/global/footerData.js';
import { contactPageData } from '../../../data/pages/contactData.js';

// Asset Imports
import logo from '../../../assets/images/logos/logo.png';
import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from '../../../assets/icons/SocialIcons.jsx';
import { ChevronUpIcon } from '../../../assets/icons/ChevronIcons.jsx';
import { ScubaMaskIcon } from '../../../assets/icons/DiverIcons.jsx';

import { SHARED_TRANSLATION_KEYS } from '@/data/global/constants.js';

const Footer = () => {
  const { t } = useTranslation(['footer', 'contact', 'navbar', 'common']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = {
    instagram: <InstagramIcon className="w-6 h-6" />,
    tiktok: <TikTokIcon className="w-6 h-6" />,
    youtube: <YouTubeIcon className="w-6 h-6" />,
  };

  const prefilledText = t(SHARED_TRANSLATION_KEYS.generalWhatsappMessageKey, { ns: 'common' });
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(/\s/g, '')}?text=${encodeURIComponent(prefilledText)}`;

  const subject = encodeURIComponent(
    t(contactPageData.contactInfo.emailSubjectKey, { ns: 'contact' })
  );
  const body = encodeURIComponent(t(contactPageData.contactInfo.emailBodyKey, { ns: 'contact' }));
  const emailLink = `mailto:${contactPageData.contactInfo.email}?subject=${subject}&body=${body}`;

  return (
    <footer
      className="bg-gradient-to-t from-brand-primary-dark to-brand-primary-medium text-brand-neutral/80 relative select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      draggable={false}
    >
      <div className="container mx-auto px-8 py-16 text-center">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src={logo}
              alt="JustDiveCol Logo"
              className="h-10 w-auto"
              draggable={false}
              style={{ WebkitUserDrag: 'none' }}
            />
          </Link>
          <p className="mt-4 text-base-xs max-w-xl">{t(footerData.sloganKey)}</p>
          <p className="mt-2 text-base-xs max-w-xl font-semibold text-brand-white">
            {t(footerData.closingMessageKey)}
          </p>

          <div className="flex justify-center items-center space-x-6 mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="text-brand-neutral/70 hover:text-brand-cta-orange transition-all duration-300 hover:scale-110 inline-block"
            >
              <WhatsappIcon className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${contactPageData.contactInfo.email}?subject=${encodeURIComponent(t('contactEmailSubject', { ns: 'contact' }))}&body=${encodeURIComponent(t('contactEmailBody', { ns: 'contact' }))}`}
              title="Email"
              className="text-brand-neutral/70 hover:text-brand-cta-orange transition-all duration-300 hover:scale-110 inline-block"
            >
              <MailIcon className="w-6 h-6" />
            </a>
            {contactPageData.contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="text-brand-neutral/70 hover:text-brand-cta-orange transition-all duration-300 hover:scale-110 inline-block"
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center my-10">
          <div className="flex-grow border-t border-brand-primary-light/20" />
          <div className="px-4">
            <ScubaMaskIcon className="h-8 w-8 text-brand-cta-orange" />
          </div>
          <div className="flex-grow border-t border-brand-primary-light/20" />
        </div>

        {/* Navigation links */}
        <div className="text-center mb-8">
          <h3 className="heading-6 font-bold text-brand-white mb-4">
            {t(footerData.importantLinksTitle, { ns: 'navbar' })}
          </h3>
          {footerData.navLinks.map((link) => (
            <Link
              key={link.nameKey}
              to={link.path}
              className="text-brand-neutral/80 hover:text-brand-cta-orange transition-colors text-xs p-2"
            >
              {t(link.nameKey, { ns: 'navbar' })}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs">
          <p>
            &copy; {new Date().getFullYear()} {t(footerData.copyrightKey)}
          </p>
          <p className="text-xs text-brand-neutral/60 mt-1">{t(footerData.creditsKey)}</p>
        </div>
      </div>

      {/* Scroll-to-top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-brand-cta-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon />
        </button>
      )}
    </footer>
  );
};

export default Footer;
