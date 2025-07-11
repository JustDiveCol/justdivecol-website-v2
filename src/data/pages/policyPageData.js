// src/data/pages/policyPageData.js
export const policyPageData = {
  seo: {
    titleKey: 'policiesSeoTitle',
    descriptionKey: 'policiesSeoDesc',
  },
  header: {
    titleKey: 'policiesHeaderTitle',
    subtitleKey: 'policiesHeaderSubtitle',
    imageUrl:
      'https://placehold.co/1920x600/0A264F/FF7A00?text=Policies+Banner', // Placeholder image
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
