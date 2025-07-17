// src/data/pages/faqsData.js
import faqs_header_background from '../../assets/images/page-specific/faqs/faqs-header-background.webp';

import logo from '../../assets/images/logos/logo.png';

export const faqsData = {
  seo: {
    titleKey: 'faqsSeoTitle',
    descriptionKey: 'faqsSeoDesc',
    keywords: 'faqsSeoKeywords',
    imageUrl: faqs_header_background,
    url: '/faqs',
  },
  header: {
    backgroundImage: faqs_header_background,
    titleKey: 'faqsHeaderTitle',
    subtitleKey: 'faqsHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'faqsHeaderMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: 'faqsHeaderComplementaryLogoAlt',
    // textOverlayKey: 'faqsHeaderTextOverlay',
    photoCreditKey: 'faqsHeaderPhotoCredit',
  },
  sections: [
    {
      id: 'courses-certifications',
      titleKey: 'faqsCat1Title',
      points: [
        {
          pointKey: 'faqsCat1Q1Title',
          subPoints: ['faqsCat1Q1Point1'],
        },
        {
          pointKey: 'faqsCat1Q2Title',
          subPoints: ['faqsCat1Q2Point1'],
        },
        {
          pointKey: 'faqsCat1Q3Title',
          subPoints: ['faqsCat1Q3Point1'],
        },
        {
          pointKey: 'faqsCat1Q4Title',
          subPoints: ['faqsCat1Q4Point1'],
        },
        {
          pointKey: 'faqsCat1Q5Title',
          subPoints: ['faqsCat1Q5Point1'],
        },
        {
          pointKey: 'faqsCat1Q6Title',
          subPoints: ['faqsCat1Q6Point1'],
        },
        {
          pointKey: 'faqsCat1Q7Title',
          subPoints: ['faqsCat1Q7Point1'],
        },
      ],
    },
    {
      id: 'dive-trips-experiences',
      titleKey: 'faqsCat2Title',
      points: [
        {
          pointKey: 'faqsCat2Q1Title',
          subPoints: ['faqsCat2Q1Point1'],
        },
        {
          pointKey: 'faqsCat2Q2Title',
          subPoints: ['faqsCat2Q2Point1'],
        },
        {
          pointKey: 'faqsCat2Q3Title',
          subPoints: ['faqsCat2Q3Point1'],
        },
        {
          pointKey: 'faqsCat2Q4Title',
          subPoints: ['faqsCat2Q4Point1'],
        },
        {
          pointKey: 'faqsCat2Q5Title',
          subPoints: ['faqsCat2Q5Point1'],
        },
      ],
    },
    {
      id: 'bookings-payments',
      titleKey: 'faqsCat3Title',
      points: [
        {
          pointKey: 'faqsCat3Q1Title',
          subPoints: ['faqsCat3Q1Point1'],
        },
        {
          pointKey: 'faqsCat3Q2Title',
          subPoints: ['faqsCat3Q2Point1'],
        },
        {
          pointKey: 'faqsCat3Q3Title',
          subPoints: ['faqsCat3Q3Point1'],
        },
      ],
    },
    {
      id: 'safety-health',
      titleKey: 'faqsCat4Title',
      points: [
        {
          pointKey: 'faqsCat4Q1Title',
          subPoints: ['faqsCat4Q1Point1'],
        },
        {
          pointKey: 'faqsCat4Q2Title',
          subPoints: ['faqsCat4Q2Point1'],
        },
        {
          pointKey: 'faqsCat4Q3Title',
          subPoints: ['faqsCat4Q3Point1'],
        },
        {
          pointKey: 'faqsCat4Q4Title',
          subPoints: ['faqsCat4Q4Point1'],
        },
      ],
    },
    {
      id: 'general-information',
      titleKey: 'faqsCat5Title',
      points: [
        {
          pointKey: 'faqsCat5Q1Title',
          subPoints: ['faqsCat5Q1Point1'],
        },
        {
          pointKey: 'faqsCat5Q2Title',
          subPoints: ['faqsCat5Q2Point1'],
        },
        {
          pointKey: 'faqsCat5Q3Title',
          subPoints: ['faqsCat5Q3Point1'],
        },
        {
          pointKey: 'faqsCat5Q4Title',
          subPoints: ['faqsCat5Q4Point1'],
        },
        {
          pointKey: 'faqsCat5Q5Title',
          subPoints: ['faqsCat5Q5Point1'],
        },
      ],
    },
    // Add more sections and points as needed
  ],
};
