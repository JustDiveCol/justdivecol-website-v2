// src/data/pages/contact.js
// import contactHeaderImage from '../../assets/contact/contact-header.jpg'; // Placeholder, replace with your image

export const contactPageData = {
  seo: {
    titleKey: 'contactSeoTitle',
    descriptionKey: 'contactSeoDesc',
  },
  header: {
    titleKey: 'contactHeaderTitle',
    subtitleKey: 'contactHeaderSubtitle',
    imageUrl: 'https://placehold.co/1920x600?text=Contact+Header',
    ctaTextKey: 'contactHeaderCtaButton',
    ctaLink: '/contacto',
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
};
