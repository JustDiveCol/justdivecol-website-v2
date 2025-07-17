// src/data/pages/safety.js

import safety_header_background from '../../assets/images/page-specific/safety/safety-header-background.webp';
import safety_logo_partner_1 from '../../assets/images/page-specific/safety/safety-logo-partner-1.webp';
import safety_logo_partner_2 from '../../assets/images/page-specific/safety/safety-logo-partner-2.webp';

import logo from '../../assets/images/logos/logo.png';

export const safetyPageData = {
  seo: {
    titleKey: 'safetySeoTitle',
    descriptionKey: 'safetySeoDesc',
    keywords: 'safetySeoKeywords',
    imageUrl: safety_header_background,
    url: '/seguridad',
  },
  header: {
    backgroundImage: safety_header_background,
    titleKey: 'safetyHeaderTitle',
    subtitleKey: 'safetyHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'safetyHeaderMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: 'safetyHeaderComplementaryLogoAlt',
    // textOverlayKey: 'safetyHeaderTextOverlay',
    photoCreditKey: 'safetyHeaderPhotoCredit',
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
        logoUrl: safety_logo_partner_1,
      },
      {
        id: 'capacitacion',
        nameKey: 'safetyPartner2Name',
        descriptionKey: 'safetyPartner2Desc',
        logoUrl: safety_logo_partner_2,
      },
    ],
  },
};
