// src/data/pages/contact.js
import contact_header_background from '../../assets/images/page-specific/contact/contact-header-background.webp'; // Placeholder, replace with your image

import logo from '../../assets/images/logos/logo.png';

export const contactPageData = {
  seo: {
    titleKey: 'contactSeoTitle',
    descriptionKey: 'contactSeoDesc',
    keywords: 'contactSeoKeywords',
    imageUrl: contact_header_background,
    url: '/contacto',
  },
  header: {
    backgroundImage: contact_header_background,
    titleKey: 'contactHeaderTitle',
    subtitleKey: 'contactHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'contactHeaderMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: '',
    // textOverlayKey: '',
    photoCreditKey: 'contactHeaderPhotoCredit',
  },

  contactInfo: {
    titleKey: 'contactInfoTitle',
    email: 'info@justdivecol.com', // This data doesn't need translation
    phone: '+57 311 522 0316', // This data doesn't need translation
    socials: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/justdivecol/',
        icon: 'instagram',
      },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@just.dive.col',
        icon: 'tiktok',
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/@JustDiveCol',
        icon: 'youtube',
      }, // Corrected link
    ],
  },
  whatsAppAction: {
    titleKey: 'contactWhatsAppTitle',
    descriptionKey: 'contactWhatsAppDesc',
    ctaTextKey: 'contactWhatsAppButton',
    prefilledMessageKey: 'contactWhatsAppMessage',
  },
  cta: {
    backgroundImage: contact_header_background,
    titleKey: 'contactCtaTitle',
    subtitleKey: 'contactCtaSubtitle',
    ctaTextKey: 'contactCtaText',
    ctaLink: '/contacto',
    mainLogo: logo,
    mainLogoAltKey: 'contactCtaMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'contactCtaComplementaryLogoAlt',
    // textOverlayKey: 'contactCtaTextOverlay',
    photoCreditKey: 'contactCtaPhotoCredit',
  },
};
