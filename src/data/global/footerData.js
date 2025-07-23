// src/data/global/footerData.js
import { ROUTES } from './constants';

export const footerData = {
  sloganKey: 'footerSlogan',

  closingMessageKey: 'footerClosingMessage',

  copyrightKey: 'footerCopyright',

  creditsKey: 'footerCredits',

  importantLinksTitle: 'footerLinksTitle',

  navLinks: [
    { nameKey: 'policy', path: ROUTES.policy },
    { nameKey: 'terms', path: ROUTES.terms },
    { nameKey: 'privacy', path: ROUTES.privacy },
    { nameKey: 'faqs', path: ROUTES.faq },
    { nameKey: 'divesites', path: ROUTES.divesites },
    // { nameKey: 'gear', path: '/proximamente' },
  ],

  policiesLinkText: 'footerLinkText',
};
