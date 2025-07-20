import gear_home_hero_background from '../../assets/images/page-specific/gear/home/gear-home-hero-background.webp';

import logo from '../../assets/images/logos/logo.png';
import padi from '../../assets/images/logos/padi.png';

export const gearHomePageData = {
  // ========== Common ==========
  gearSectionTitleKey: 'gearSectionTitle',

  // ========== SEO ==========
  seo: {
    titleKey: 'gearHomeSeoTitle',
    descriptionKey: 'gearHomeSeoDesc',
    keywords: 'gearHomeSeoKeywords',
    imageUrl: gear_home_hero_background,
    url: '/gear/home',
  },
  hero: {
    backgroundImage: gear_home_hero_background,
    titleKey: 'gearHomeHeroTitle',
    subtitleKey: 'gearHomeHeroSubtitle',
    ctaLink: '/gear/home',
    mainLogo: logo,
    mainLogoAlt: 'gearHomeHeroMainLogoAlt',
    photoCreditKey: 'gearHomeHeroPhotoCreditKey',
  },
  content: {
    titleKey: 'gearHomeContentTitle',
    contentParagraph1Key: 'gearHomeContentParagraph1',
    contentParagraph2Key: 'gearHomeContentParagraph2',
    contentParagraph3Key: 'gearHomeContentParagraph3',
    contentParagraph4Key: 'gearHomeContentParagraph4',
  },
  cards: {
    titleKey: 'gearHomeCardsTitle',
    gearCategoriesData: [
      {
        id: 'gear-guide',
        backgroundImage: 'https://placehold.co/600x800?text=Gear+Guide',
        titleKey: 'gearGuideCardTitle',
        categoryKey: 'gearGuideCardCategory',
        mainLogo: logo,
        // mainLogoAltKey: 'gearGuideCardMainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey: 'gearGuideCardComplementaryLogoAlt',
        photoCreditKey: 'gearGuideCardPhotoCredit',
        link: '/gear/guide',
      },
      {
        id: 'gear-faqs',
        backgroundImage: 'https://placehold.co/600x800?text=Gear+Faqs',
        titleKey: 'gearFaqsCardTitle',
        categoryKey: 'gearFaqsCardCategory',
        mainLogo: logo,
        // mainLogoAltKey: 'gearFaqsCardMainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey: 'gearFaqsCardComplementaryLogoAlt',
        photoCreditKey: 'gearFaqsCardPhotoCredit',
        link: '/gear/faqs',
      },
      {
        id: 'gear-store',
        backgroundImage: 'https://placehold.co/600x800?text=Gear+Store',
        titleKey: 'gearStoreCardTitle',
        categoryKey: 'gearStoreCardCategory',
        mainLogo: logo,
        // mainLogoAltKey: 'gearStoreCardMainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey: 'gearStoreCardComplementaryLogoAlt',
        photoCreditKey: 'gearStoreCardPhotoCredit',
        link: '/gear/store',
      },
    ],
  },
  cta: {
    titleKey: 'gearHomeCtaTitle',
    subtitleKey: 'gearHomeCtaSubtitle',
    backgroundImage: 'https://placehold.co/1920x800?text=Banner+Multiple+Cta',
    mainLogo: logo,
    mainLogoAltKey: 'gearHomeCtaMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'gearHomeCtaComplementaryLogoAlt',
    // textOverlayKey: 'gearHomeCtaTextOverlay',
    photoCreditKey: 'gearHomeCtaPhotoCredit',
    ctaButtons: [
      {
        to: '/gear/store',
        textKey: 'gearHomeCtaButtonShopText',
        isExternal: false,
      },
      {
        to: '/contact',
        textKey: 'gearHomeCtaButtonContactText',
        isExternal: false,
      },
    ],
  },
};
