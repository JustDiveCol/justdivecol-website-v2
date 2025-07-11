// src/data/pages/safety.js

export const safetyPageData = {
  seo: {
    titleKey: 'safetySeoTitle',
    descriptionKey: 'safetySeoDesc',
  },
  header: {
    titleKey: 'safetyHeaderTitle',
    subtitleKey: 'safetyHeaderSubtitle',
    imageUrl: 'https://placehold.co/1920x1080/000/fff?text=safetyHeaderImage',
  },
  protocols: {
    titleKey: 'safetyProtocolsTitle',
    subtitleKey: 'safetyProtocolsSubtitle',
    steps: [
      {
        id: 'step1',
        nameKey: 'safetyStep1Name',
        descriptionKey: 'safetyStep1Desc',
      },
      {
        id: 'step2',
        nameKey: 'safetyStep2Name',
        descriptionKey: 'safetyStep2Desc',
      },
      {
        id: 'step3',
        nameKey: 'safetyStep3Name',
        descriptionKey: 'safetyStep3Desc',
      },
      {
        id: 'step4',
        nameKey: 'safetyStep4Name',
        descriptionKey: 'safetyStep4Desc',
      },
    ],
  },
  equipment: {
    titleKey: 'safetyEquipmentTitle',
    subtitleKey: 'safetyEquipmentSubtitle',
    items: [
      {
        id: 'reguladores',
        nameKey: 'safetyEquip1Name',
        descriptionKey: 'safetyEquip1Desc',
        icon: 'regulator',
      },
      {
        id: 'bcds',
        nameKey: 'safetyEquip2Name',
        descriptionKey: 'safetyEquip2Desc',
        icon: 'bcd',
      },
      {
        id: 'computadores',
        nameKey: 'safetyEquip3Name',
        descriptionKey: 'safetyEquip3Desc',
        icon: 'computer',
      },
    ],
  },
  certifications: {
    titleKey: 'safetyCertsTitle',
    subtitleKey: 'safetyCertsSubtitle',
    partners: [
      {
        id: 'buenas-practicas',
        nameKey: 'safetyPartner1Name',
        descriptionKey: 'safetyPartner1Desc',
        logoUrl: 'https://placehold.co/1920x1080/000/fff?text=partnerLogo1',
      },
      {
        id: 'capacitacion',
        nameKey: 'safetyPartner2Name',
        descriptionKey: 'safetyPartner2Desc',
        logoUrl: 'https://placehold.co/1920x1080/000/fff?text=partnerLogo2',
      },
    ],
  },
};
