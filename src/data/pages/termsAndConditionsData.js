// src/data/pages/termsAndConditionData.js

import tyc_header_background from '../../assets/images/page-specific/tyc/tyc-header-background.webp';

import logo from '../../assets/images/logos/logo.png';

export const termsAndConditionData = {
  seo: {
    titleKey: 'tcaSeoTitle',
    descriptionKey: 'tcaSeoDesc',
  },
  header: {
    backgroundImage: tyc_header_background,
    titleKey: 'tcaHeaderTitle',
    subtitleKey: 'tcaHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'tcaHeaderMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: 'tcaHeaderComplementaryLogoAlt',
    // textOverlayKey: 'tcaHeaderTextOverlay',
    photoCreditKey: 'tcaHeaderPhotoCredit',
  },
  sections: [
    {
      id: 'acceptance-terms',
      titleKey: 'tcaSection1Title',
      points: [
        {
          pointKey: 'tcaSection1Point1',
        },
        {
          pointKey: 'tcaSection1Point2',
        },
      ],
    },
    {
      id: 'service-usage',
      titleKey: 'tcaSection2Title',
      points: [
        {
          pointKey: 'tcaSection2Point1',
        },
        {
          pointKey: 'tcaSection2Point2',
        },
        {
          pointKey: 'tcaSection2Point3',
        },
      ],
    },
    {
      id: 'intellectual-property',
      titleKey: 'tcaSection3Title',
      points: [
        {
          pointKey: 'tcaSection3Point1',
        },
        {
          pointKey: 'tcaSection3Point2',
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      titleKey: 'tcaSection4Title',
      points: [
        {
          pointKey: 'tcaSection4Point1',
        },
        {
          pointKey: 'tcaSection4Point2',
        },
        {
          pointKey: 'tcaSection4Point3',
        },
      ],
    },
    {
      id: 'third-party-links',
      titleKey: 'tcaSection5Title',
      points: [
        {
          pointKey: 'tcaSection5Point1',
        },
        {
          pointKey: 'tcaSection5Point2',
        },
      ],
    },
    {
      id: 'governing-law-and-jurisdiction',
      titleKey: 'tcaSection6Title',
      points: [
        {
          pointKey: 'tcaSection6Point1',
        },
        {
          pointKey: 'tcaSection6Point2',
        },
      ],
    },
    {
      id: 'severability',
      titleKey: 'tcaSection7Title',
      points: [
        {
          pointKey: 'tcaSection7Point1',
        },
      ],
    },

    // Add more sections and points as needed
  ],
};
