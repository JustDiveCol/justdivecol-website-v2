// src/data/pages/aboutUsData.js

import about_us_header_background from '../../assets/images/page-specific/about-us/about-us-header-background.webp';
import about_us_history_image from '../../assets/images/page-specific/about-us/about-us-history-image.webp';

import team_avatar_camilo_beltran from '../../assets/images/page-specific/about-us/team-avatar-camilo-beltran.webp';
import team_avatar_alejandra_vargas from '../../assets/images/page-specific/about-us/team-avatar-alejandra-vargas.webp';
import team_avatar_pablo_orjuela from '../../assets/images/page-specific/about-us/team-avatar-pablo-orjuela.webp';

import logo from '../../assets/images/logos/logo.png';
import padi from '../../assets/images/logos/padi.png';

export const aboutUsPageData = {
  seo: {
    titleKey: 'aboutSeoTitle',
    descriptionKey: 'aboutSeoDesc',
    keywords: 'aboutSeoKeywords',
    imageUrl: about_us_header_background,
    url: '/nosotros',
  },

  header: {
    backgroundImage: about_us_header_background,
    titleKey: 'aboutHeaderTitle',
    subtitleKey: 'aboutHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'aboutHeaderMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'aboutHeaderComplementaryLogoAlt',
    // textOverlayKey: 'aboutHeaderTextOverlay',
    photoCreditKey: 'aboutHeaderPhotoCredit',
  },

  history: {
    titleKey: 'aboutHistoryTitle',
    paragraphs: ['aboutHistoryP1', 'aboutHistoryP2', 'aboutHistoryP3'],
    image: {
      backgroundImage: about_us_history_image,
      mainLogo: logo,
      mainLogoAltKey: 'aboutHistoryImageMainLogoAlt',
      // complementaryLogo: padi,
      // complementaryLogoAltKey: 'aboutHistoryImageComplementaryLogoAlt',
      // textOverlayKey: 'aboutHistoryImageTextOverlay',
      photoCreditKey: 'aboutHistoryImagePhotoCredit',
      variant: 'vertical', // fullscreen, header, horizontal, vertical, square
    },
  },

  team: {
    titleKey: 'aboutTeamTitle',
    subtitleKey: 'aboutTeamSubtitle',
    members: [
      {
        id: 'camilo',
        nameKey: 'aboutTeamMember1Name',
        roleKey: 'aboutTeamMember1Role',
        bioKey: 'aboutTeamMember1Bio',
        imageUrl: team_avatar_camilo_beltran,
        funFacts: [
          'aboutTeamMember1Fact1',
          'aboutTeamMember1Fact2',
          'aboutTeamMember1Fact3',
        ],
      },
      {
        id: 'alejandra',
        nameKey: 'aboutTeamMember2Name',
        roleKey: 'aboutTeamMember2Role',
        bioKey: 'aboutTeamMember2Bio',
        imageUrl: team_avatar_alejandra_vargas,
        funFacts: [
          'aboutTeamMember2Fact1',
          'aboutTeamMember2Fact2',
          'aboutTeamMember2Fact3',
        ],
      },
      {
        id: 'pablo',
        nameKey: 'aboutTeamMember3Name',
        roleKey: 'aboutTeamMember3Role',
        bioKey: 'aboutTeamMember3Bio',
        imageUrl: team_avatar_pablo_orjuela,
        funFacts: [
          'aboutTeamMember3Fact1',
          'aboutTeamMember3Fact2',
          'aboutTeamMember3Fact3',
        ],
      },
    ],
  },

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
