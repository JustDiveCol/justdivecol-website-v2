// src/data/pages/policyPageData.js

import policy_header_background from '../../assets/images/page-specific/policy/policy-header-background.webp';

export const policyPageData = {
  seo: {
    titleKey: 'policiesSeoTitle',
    descriptionKey: 'policiesSeoDesc',
  },
  header: {
    titleKey: 'policiesHeaderTitle',
    subtitleKey: 'policiesHeaderSubtitle',
    imageUrl: policy_header_background,
  },
  sections: [
    {
      id: 'booking-cancellation',
      titleKey: 'policiesSection1Title',
      points: [
        'policiesSection1Point1',
        'policiesSection1Point2',
        'policiesSection1Point3',
        'policiesSection1Point4',
      ],
    },
    {
      id: 'safety-regulations',
      titleKey: 'policiesSection2Title',
      points: [
        'policiesSection2Point1',
        'policiesSection2Point2',
        'policiesSection2Point3',
      ],
    },
    {
      id: 'equipment-rental',
      titleKey: 'policiesSection3Title',
      points: [
        'policiesSection3Point1',
        'policiesSection3Point2',
        'policiesSection3Point3',
      ],
    },
    // Add more sections and points as needed
  ],
};
