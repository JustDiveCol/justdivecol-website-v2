// src/data/pages/aboutUsData.js

import headerBackground from '../../assets/images/page-specific/about-us/header-background.webp';
import historyImage from '../../assets/images/page-specific/about-us/history-image.webp';

import memberImage1 from '../../assets/images/page-specific/about-us/member-1-image.webp';
import memberImage2 from '../../assets/images/page-specific/about-us/member-2-image.webp';
import memberImage3 from '../../assets/images/page-specific/about-us/member-3-image.webp';

import { IMAGE_VARIANTS, ROUTES, SHARED_TRANSLATION_KEYS } from '../global/constants';
import { LOGO_MAIN } from '../global/assets';

export const aboutUsPageData = {
  // === SEO SECTION ===
  seo: {
    titleKey: 'aboutSeoTitle',
    descriptionKey: 'aboutSeoDesc',
    keywords: 'aboutSeoKeywords',
    imageUrl: headerBackground,
    url: ROUTES.about,
  },

  // === HEADER SECTION ===
  header: {
    backgroundImage: headerBackground,
    titleKey: 'aboutHeaderTitle',
    subtitleKey: 'aboutHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },

  // === HISTORY SECTION ===
  history: {
    titleKey: 'aboutHistoryTitle',
    paragraphs: ['aboutHistoryP1', 'aboutHistoryP2', 'aboutHistoryP3'],
    image: {
      backgroundImage: historyImage,
      mainLogo: LOGO_MAIN.mainLogo,
      mainLogoAltKey: LOGO_MAIN.altKey,
      photoCredit: {
        prefixKey: SHARED_TRANSLATION_KEYS.PHOTO_CREDIT_PREFIX,
        text: 'Camilo Beltran @JustDiveCol',
      },
      variant: IMAGE_VARIANTS.vertical,
    },
  },

  // === TEAM SECTION ===
  team: {
    titleKey: 'aboutTeamTitle',
    subtitleKey: 'aboutTeamSubtitle',
    members: [
      {
        id: 'camilo',
        nameKey: 'aboutTeamMember1Name',
        roleKey: 'aboutTeamMember1Role',
        bioKey: 'aboutTeamMember1Bio',
        imageUrl: memberImage1,
        funFacts: ['aboutTeamMember1Fact1', 'aboutTeamMember1Fact2', 'aboutTeamMember1Fact3'],
      },
      {
        id: 'alejandra',
        nameKey: 'aboutTeamMember2Name',
        roleKey: 'aboutTeamMember2Role',
        bioKey: 'aboutTeamMember2Bio',
        imageUrl: memberImage2,
        funFacts: ['aboutTeamMember2Fact1', 'aboutTeamMember2Fact2', 'aboutTeamMember2Fact3'],
      },
      {
        id: 'pablo',
        nameKey: 'aboutTeamMember3Name',
        roleKey: 'aboutTeamMember3Role',
        bioKey: 'aboutTeamMember3Bio',
        imageUrl: memberImage3,
        funFacts: ['aboutTeamMember3Fact1', 'aboutTeamMember3Fact2', 'aboutTeamMember3Fact3'],
      },
    ],
  },

  // === COMMITMENT SECTION ===
  commitment: {
    titleKey: 'aboutCommitmentTitle',
    subtitleKey: 'aboutCommitmentSubtitle',
    points: [
      {
        id: 'sostenibilidad',
        icon: 'leaf',
        titleKey: 'aboutCommitmentPoint1Title',
        descriptionKey: 'aboutCommitmentPoint1Desc',
      },
      {
        id: 'seguridad',
        icon: 'shield',
        titleKey: 'aboutCommitmentPoint2Title',
        descriptionKey: 'aboutCommitmentPoint2Desc',
      },
      {
        id: 'comunidad',
        icon: 'heart',
        titleKey: 'aboutCommitmentPoint3Title',
        descriptionKey: 'aboutCommitmentPoint3Desc',
      },
    ],
  },
};
