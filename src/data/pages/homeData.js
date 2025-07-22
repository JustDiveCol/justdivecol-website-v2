// src/data/pages/home.js
import { experienceCategories } from '../global/sharedData.js';

import heroBackground from '../../assets/images/page-specific/home/home-hero-background.webp';
import ctaBackground from '../../assets/images/page-specific/home/home-cta-background.webp';

import { LOGO_MAIN } from '../global/assets.js';
import { SHARED_TRANSLATION_KEYS, ROUTES, BUTTON_TYPES } from '../global/constants.js';

export const homePageData = {
  // === SEO SECTION ===
  seo: {
    titleKey: 'homeSeoTitle',
    descriptionKey: 'homeSeoDesc',
    keywords: 'homeSeoKeywords',
    imageUrl: heroBackground,
    url: ROUTES.home,
  },
  // === HERO SECTION ===
  hero: {
    imageUrl: heroBackground,
    titleKey: 'homeHeroTitle',
    subtitleKey: 'homeHeroSubtitle',
    ctaTextKey: SHARED_TRANSLATION_KEYS.experiencesTextButtonKey,
    ctaAction: {
      type: BUTTON_TYPES.internal,
      path: ROUTES.experiences,
    },
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAlt: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },

  // === EXPERIENCES SECTION ===
  featuredExperiences: {
    titleKey: 'homeExpTitle',
    subtitleKey: 'homeExpSubtitle',

    categories: experienceCategories.map((cat) => ({
      ...cat,
      link: cat.id === 'custom' ? `${ROUTES.contact}` : `${ROUTES.experiences}#${cat.id}`,
    })),
  },

  // Safety Section
  safety: {
    titleKey: 'homeSafetyTitle',
    subtitleKey: 'homeSafetySubtitle',
    points: [
      {
        id: 'guides',
        titleKey: 'homeSafetyPoint1Title',
        descriptionKey: 'homeSafetyPoint1Desc',
      },
      {
        id: 'gear',
        titleKey: 'homeSafetyPoint2Title',
        descriptionKey: 'homeSafetyPoint2Desc',
      },
      {
        id: 'protocols',
        titleKey: 'homeSafetyPoint3Title',
        descriptionKey: 'homeSafetyPoint3Desc',
      },
    ],
    ctaTextKey: SHARED_TRANSLATION_KEYS.safetyTextButtonKey,
    ctaAction: {
      type: BUTTON_TYPES.internal,
      path: ROUTES.safety,
    },
  },
  // Testimonials Section
  testimonials: {
    // titleKey: 'homeTestimonialsTitle',
    // items: [
    //   {
    //     id: 1,
    //     quoteKey: 'homeTestimonial1Quote',
    //     nameKey: 'homeTestimonial1Name',
    //     originKey: 'homeTestimonial1Origin',
    //     rating: 5,
    //     avatarUrl: 'https://placehold.co/100x100/000/fff?text=A1',
    //   },
    //   {
    //     id: 2,
    //     quoteKey: 'homeTestimonial2Quote',
    //     nameKey: 'homeTestimonial2Name',
    //     originKey: 'homeTestimonial2Origin',
    //     rating: 5,
    //     avatarUrl: 'https://placehold.co/100x100/000/fff?text=A2',
    //   },
    //   {
    //     id: 3,
    //     quoteKey: 'homeTestimonial3Quote',
    //     nameKey: 'homeTestimonial3Name',
    //     originKey: 'homeTestimonial3Origin',
    //     rating: 5,
    //     avatarUrl: 'https://placehold.co/100x100/000/fff?text=A3',
    //   },
    // ],
  },
  // Final CTA Section
  finalCta: {
    backgroundImage: ctaBackground,
    titleKey: 'homeFinalCtaTitle',
    subtitleKey: 'homeFinalCtaSubtitle',
    ctaTextKey: SHARED_TRANSLATION_KEYS.contactTextButtonKey,
    ctaAction: {
      type: 'whatsapp',
      whatsAppMessageKey: 'generalWhatsappMessage',
    },
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.mainLogo,
    // complementaryLogo: '',
    // complementaryLogoAltKey: '',
    // textOverlayKey: '',
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefix,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
};
