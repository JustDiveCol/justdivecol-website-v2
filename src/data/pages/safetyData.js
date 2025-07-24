// src/data/pages/safety.js

import headerBackground from '../../assets/images/page-specific/safety/safety-header-background.webp';
import logoPartner1 from '../../assets/images/page-specific/safety/safety-logo-partner-1.webp';
import logoPartner2 from '../../assets/images/page-specific/safety/safety-logo-partner-2.webp';

import { LOGO_MAIN } from '../global/assets';
import { ROUTES, SHARED_TRANSLATION_KEYS } from '../global/constants';

export const safetyPageData = {
  seo: {
    titleKey: 'safetySeoTitle',
    descriptionKey: 'safetySeoDesc',
    keywords: 'safetySeoKeywords',
    imageUrl: headerBackground,
    url: ROUTES.safety,
  },
  header: {
    backgroundImage: headerBackground,
    titleKey: 'safetyHeaderTitle',
    subtitleKey: 'safetyHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
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
        id: 'regulator',
        nameKey: 'safetyEquip1Name',
        descriptionKey: 'safetyEquip1Desc',
        icon: 'regulator',
      },
      {
        id: 'bcd',
        nameKey: 'safetyEquip2Name',
        descriptionKey: 'safetyEquip2Desc',
        icon: 'bcd',
      },
      {
        id: 'computer',
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
        logoUrl: logoPartner1,
      },
      {
        id: 'capacitacion',
        nameKey: 'safetyPartner2Name',
        descriptionKey: 'safetyPartner2Desc',
        logoUrl: logoPartner2,
      },
    ],
  },
};
