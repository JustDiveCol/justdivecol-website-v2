// src/data/pages/privacyData.js

import headerBackground from '../../assets/images/page-specific/privacy/header-background.webp';

import { LOGO_MAIN } from '../global/assets';
import { ROUTES, SHARED_TRANSLATION_KEYS } from '../global/constants';

export const privacyData = {
  seo: {
    titleKey: 'privacySeoTitle',
    descriptionKey: 'privacySeoDesc',
    keywords: 'privacySeoKeywords',
    imageUrl: headerBackground,
    url: ROUTES.privacy,
  },
  header: {
    backgroundImage: headerBackground,
    titleKey: 'privacyHeaderTitle',
    subtitleKey: 'privacyHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  sections: [
    {
      id: 'information-we-collect',
      titleKey: 'privacySection1Title',
      points: [
        {
          pointKey: 'privacySection1Point1',
        },
        {
          pointKey: 'privacySection1Point2',
        },
        {
          pointKey: 'privacySection1Point3',
        },
      ],
    },
    {
      id: 'how-we-use-your-information',
      titleKey: 'privacySection2Title',
      points: [
        {
          pointKey: 'privacySection2Point1',
        },
        {
          pointKey: 'privacySection2Point2',
        },
        {
          pointKey: 'privacySection2Point3',
        },
        {
          pointKey: 'privacySection2Point4',
        },
      ],
    },
    {
      id: 'how-we-share-your-information',
      titleKey: 'privacySection3Title',
      points: [
        {
          pointKey: 'privacySection3Point1',
        },
        {
          pointKey: 'privacySection3Point2',
        },
        {
          pointKey: 'privacySection3Point3',
        },
      ],
    },
    {
      id: 'your-rights-and-choices',
      titleKey: 'privacySection4Title',
      points: [
        {
          pointKey: 'privacySection4Point1',
        },
        {
          pointKey: 'privacySection4Point2',
        },
        {
          pointKey: 'privacySection4Point3',
        },
      ],
    },
    {
      id: 'data-security',
      titleKey: 'privacySection5Title',
      points: [
        {
          pointKey: 'privacySection5Point1',
        },
        {
          pointKey: 'privacySection5Point2',
        },
      ],
    },
    {
      id: 'data-retention',
      titleKey: 'privacySection6Title',
      points: [
        {
          pointKey: 'privacySection6Point1',
        },
      ],
    },
    {
      id: 'changes-to-this-privacy-policy',
      titleKey: 'privacySection7Title',
      points: [
        {
          pointKey: 'privacySection7Point1',
        },
        {
          pointKey: 'privacySection7Point2',
        },
      ],
    },
    {
      id: 'contact',
      titleKey: 'privacySection8Title',
      points: [
        {
          pointKey: 'privacySection8Point1',
        },
      ],
    },

    // Add more sections and points as needed
  ],
};
