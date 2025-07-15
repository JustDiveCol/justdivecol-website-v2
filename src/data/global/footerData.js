// src/data/global/footerData.js

/**
 * Data structure containing the translation keys for the website's footer.
 */
export const footerData = {
  // The main slogan displayed in the footer.
  sloganKey: 'footerSlogan',

  // A closing or secondary message.
  closingMessageKey: 'footerClosingMessage',

  // The copyright text. The year is added automatically in the component.
  copyrightKey: 'footerCopyright',

  // The credits line, e.g., "Designed and built by...".
  creditsKey: 'footerCredits',

  importantLinksTitle: 'footerLinksTitle',

  navLinks: [
    { nameKey: 'policies', path: '/politicas' },
    { nameKey: 'termsAndConditions', path: '/terminos-y-condiciones' },
    { nameKey: 'privacy', path: '/privacidad' },
    { nameKey: 'faqs', path: '/faqs' },
    { nameKey: 'diveSites', path: '/proximamente' },
    { nameKey: 'gear', path: '/proximamente' },
    { nameKey: 'photosAndVideos', path: '/proximamente' },
  ],

  policiesLinkText: 'footerLinkText',
};
