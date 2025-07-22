// src/data/global/footerData.js
import { ROUTES } from './constants';

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
    { nameKey: 'policy', path: ROUTES.policy },
    { nameKey: 'terms', path: ROUTES.terms },
    { nameKey: 'privacy', path: ROUTES.privacy },
    { nameKey: 'faq', path: ROUTES.faq },
    { nameKey: 'divesites', path: ROUTES.divesites },
    // { nameKey: 'gear', path: '/proximamente' },
  ],

  policiesLinkText: 'footerLinkText',
};
