// src/data/pages/policyPageData.js

import policy_header_background from '../../assets/images/page-specific/policy/policy-header-background.webp';

import logo from '../../assets/images/logos/logo.png';

export const policyPageData = {
  seo: {
    titleKey: 'policiesSeoTitle',
    descriptionKey: 'policiesSeoDesc',
    keywords: 'policiesSeoKeywords',
    imageUrl: policy_header_background,
    url: '/politicas',
  },
  header: {
    backgroundImage: policy_header_background,
    titleKey: 'policiesHeaderTitle',
    subtitleKey: 'policiesHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'policiesHeaderMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: 'policiesHeaderComplementaryLogoAlt',
    // textOverlayKey: 'policiesHeaderTextOverlay',
    photoCreditKey: 'policiesHeaderPhotoCredit',
  },
  sections: [
    {
      id: 'booking-and-payment-policy',
      titleKey: 'policiesSection1Title',
      points: [
        {
          pointKey: 'policiesSection1Point1',
        },
        {
          pointKey: 'policiesSection1Point2',
        },
        {
          pointKey: 'policiesSection1Point3',
        },
      ],
    },
    {
      id: 'cancellation-and-refund-policy',
      titleKey: 'policiesSection2Title',
      points: [
        {
          pointKey: 'policiesSection2Point1',
          subPoints: [
            'policiesSection2Point1a',
            'policiesSection2Point1b',
            'policiesSection2Point1c',
            'policiesSection2Point1d',
          ],
        },
        {
          pointKey: 'policiesSection2Point2',
          subPoints: ['policiesSection2Point2a', 'policiesSection2Point2b'],
        },
        {
          pointKey: 'policiesSection2Point3',
          subPoints: ['policiesSection2Point3a'],
        },
      ],
    },
    {
      id: 'safety-and-health-regulations-and-guidelines',
      titleKey: 'policiesSection3Title',
      points: [
        {
          pointKey: 'policiesSection3Point1',
        },
        {
          pointKey: 'policiesSection3Point2',
        },
        {
          pointKey: 'policiesSection3Point3',
        },
        {
          pointKey: 'policiesSection3Point4',
        },
        {
          pointKey: 'policiesSection3Point5',
        },
      ],
    },
    {
      id: 'equipment-rental-and-use-policy',
      titleKey: 'policiesSection4Title',
      points: [
        {
          pointKey: 'policiesSection4Point1',
        },
        {
          pointKey: 'policiesSection4Point2',
        },
        {
          pointKey: 'policiesSection4Point3',
        },
        {
          pointKey: 'policiesSection4Point4',
        },
      ],
    },
    {
      id: 'responsibility-and-acceptance-of-risks',
      titleKey: 'policiesSection5Title',
      points: [
        {
          pointKey: 'policiesSection5Point1',
        },
        {
          pointKey: 'policiesSection5Point2',
        },
        {
          pointKey: 'policiesSection5Point3',
        },
      ],
    },

    // Add more sections and points as needed
  ],
};
