// src/data/pages/contact.js
import contact_header_background from '../../assets/images/page-specific/contact/contact-header-background.webp'; // Placeholder, replace with your image

import { BUTTON_TYPES, NAMESPACES, ROUTES, SHARED_TRANSLATION_KEYS } from '../global/constants';
import { LOGO_MAIN } from '../global/assets';

export const contactPageData = {
  seo: {
    titleKey: 'contactSeoTitle',
    descriptionKey: 'contactSeoDesc',
    keywords: 'contactSeoKeywords',
    imageUrl: contact_header_background,
    url: ROUTES.contact,
  },
  header: {
    backgroundImage: contact_header_background,
    titleKey: 'contactHeaderTitle',
    subtitleKey: 'contactHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },

  contactInfo: {
    titleKey: 'contactInfoTitle',
    email: 'info@justdivecol.com',
    emailSubjectKey: 'contactEmailSubject',
    emailBodyKey: 'contactEmailBody',
    phone: '+57 311 522 0316',
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
      },
    ],
  },
  whatsAppAction: {
    titleKey: 'contactWhatsAppTitle',
    descriptionKey: 'contactWhatsAppDesc',
    ctaTextKey: SHARED_TRANSLATION_KEYS.contactTextButtonKey,
    ctaAction: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.generalWhatsappMessageKey,
      whatsAppMessageNS: NAMESPACES.COMMON,
    },
  },
  cta: {
    backgroundImage: contact_header_background,
    titleKey: 'contactCtaTitle',
    subtitleKey: 'contactCtaSubtitle',
    ctaTextKey: SHARED_TRANSLATION_KEYS.contactTextButtonKey,
    ctaAction: {
      type: BUTTON_TYPES.whatsapp,
      whatsAppMessageKey: SHARED_TRANSLATION_KEYS.generalWhatsappMessageKey,
    },
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
};
