// src/data/pages/privacyData.js

import privacy_header_background from '../../assets/images/page-specific/privacy/privacy-header-background.webp';

import { LOGO_MAIN } from '../global/assets';
import { ROUTES, SHARED_TRANSLATION_KEYS } from '../global/constants';

export const privacyData = {
  seo: {
    titleKey: 'ppSeoTitle',
    descriptionKey: 'ppSeoDesc',
    keywords: 'ppSeoKeywords',
    imageUrl: privacy_header_background,
    url: ROUTES.privacy,
  },
  header: {
    backgroundImage: privacy_header_background,
    titleKey: 'ppHeaderTitle',
    subtitleKey: 'ppHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  sections: [
    {
      id: 'information-we-collect',
      titleKey: 'ppSection1Title',
      points: [
        {
          pointKey: 'ppSection1Point1',
        },
        {
          pointKey: 'ppSection1Point2',
        },
        {
          pointKey: 'ppSection1Point3',
        },
      ],
    },
    {
      id: 'how-we-use-your-information',
      titleKey: 'ppSection2Title',
      points: [
        {
          pointKey: 'ppSection2Point1',
        },
        {
          pointKey: 'ppSection2Point2',
        },
        {
          pointKey: 'ppSection2Point3',
        },
        {
          pointKey: 'ppSection2Point4',
        },
      ],
    },
    {
      id: 'how-we-share-your-information',
      titleKey: 'ppSection3Title',
      points: [
        {
          pointKey: 'ppSection3Point1',
        },
        {
          pointKey: 'ppSection3Point2',
        },
        {
          pointKey: 'ppSection3Point3',
        },
      ],
    },
    {
      id: 'your-rights-and-choices',
      titleKey: 'ppSection4Title',
      points: [
        {
          pointKey: 'ppSection4Point1',
        },
        {
          pointKey: 'ppSection4Point2',
        },
        {
          pointKey: 'ppSection4Point3',
        },
      ],
    },
    {
      id: 'data-security',
      titleKey: 'ppSection5Title',
      points: [
        {
          pointKey: 'ppSection5Point1',
        },
        {
          pointKey: 'ppSection5Point2',
        },
      ],
    },
    {
      id: 'data-retention',
      titleKey: 'ppSection6Title',
      points: [
        {
          pointKey: 'ppSection6Point1',
        },
      ],
    },
    {
      id: 'changes-to-this-privacy-policy',
      titleKey: 'ppSection7Title',
      points: [
        {
          pointKey: 'ppSection7Point1',
        },
        {
          pointKey: 'ppSection7Point2',
        },
      ],
    },
    {
      id: 'contact',
      titleKey: 'ppSection8Title',
      points: [
        {
          pointKey: 'ppSection8Point1',
        },
      ],
    },

    // Add more sections and points as needed
  ],
};
