// src/data/pages/terms.js

import headerBackground from '../../assets/images/page-specific/terms/header-background.webp';

import { LOGO_MAIN } from '../global/assets';
import { ROUTES, SHARED_TRANSLATION_KEYS } from '../global/constants';

export const termsData = {
  seo: {
    titleKey: 'termsSeoTitle',
    descriptionKey: 'termsSeoDesc',
    keywords: 'termsSeoKeywords',
    imageUrl: headerBackground,
    url: ROUTES.terms,
  },
  header: {
    backgroundImage: headerBackground,
    titleKey: 'termsHeaderTitle',
    subtitleKey: 'termsHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  sections: [
    {
      id: 'acceptance-terms',
      titleKey: 'termsSection1Title',
      points: [
        {
          pointKey: 'termsSection1Point1',
        },
        {
          pointKey: 'termsSection1Point2',
        },
      ],
    },
    {
      id: 'service-usage',
      titleKey: 'termsSection2Title',
      points: [
        {
          pointKey: 'termsSection2Point1',
        },
        {
          pointKey: 'termsSection2Point2',
        },
        {
          pointKey: 'termsSection2Point3',
        },
      ],
    },
    {
      id: 'intellectual-property',
      titleKey: 'termsSection3Title',
      points: [
        {
          pointKey: 'termsSection3Point1',
        },
        {
          pointKey: 'termsSection3Point2',
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      titleKey: 'termsSection4Title',
      points: [
        {
          pointKey: 'termsSection4Point1',
        },
        {
          pointKey: 'termsSection4Point2',
        },
        {
          pointKey: 'termsSection4Point3',
        },
      ],
    },
    {
      id: 'third-party-links',
      titleKey: 'termsSection5Title',
      points: [
        {
          pointKey: 'termsSection5Point1',
        },
        {
          pointKey: 'termsSection5Point2',
        },
      ],
    },
    {
      id: 'governing-law-and-jurisdiction',
      titleKey: 'termsSection6Title',
      points: [
        {
          pointKey: 'termsSection6Point1',
        },
        {
          pointKey: 'termsSection6Point2',
        },
      ],
    },
    {
      id: 'severability',
      titleKey: 'termsSection7Title',
      points: [
        {
          pointKey: 'termsSection7Point1',
        },
      ],
    },

    // Add more sections and points as needed
  ],
};
