// src/data/pages/home.js
import { experienceCategories } from '../global/sharedData.js';

export const homePageData = {
  // SEO Section
  seo: {
    titleKey: 'homeSeoTitle', // from home.js translation file
    descriptionKey: 'homeSeoDesc', // from home.js translation file
  },
  // Hero Section
  hero: {
    titleKey: 'homeHeroTitle',
    subtitleKey: 'homeHeroSubtitle',
    ctaTextKey: 'homeHeroCtaText',
    ctaLink: '/experiencias',
    imageUrl: 'https://placehold.co/1920x1080/000/fff?text=Hero+Banner',
  },
  // Featured Experiences Section
  featuredExperiences: {
    titleKey: 'homeExpTitle',
    subtitleKey: 'homeExpSubtitle',
    // We map over the shared categories and add page-specific links
    categories: experienceCategories.map((cat) => ({
      ...cat,
      link: cat.id === 'privados' ? '/contacto' : `/experiencias#${cat.id}`,
    })),
  },
  // Safety Section
  safety: {
    titleKey: 'homeSafetyTitle',
    subtitleKey: 'homeSafetySubtitle',
    points: [
      {
        id: 'guias',
        titleKey: 'homeSafetyPoint1Title',
        descriptionKey: 'homeSafetyPoint1Desc',
      },
      {
        id: 'equipos',
        titleKey: 'homeSafetyPoint2Title',
        descriptionKey: 'homeSafetyPoint2Desc',
      },
      {
        id: 'protocolos',
        titleKey: 'homeSafetyPoint3Title',
        descriptionKey: 'homeSafetyPoint3Desc',
      },
    ],
    ctaTextKey: 'homeSafetyCtaText',
    ctaLink: '/seguridad',
  },
  // Testimonials Section
  testimonials: {
    titleKey: 'homeTestimonialsTitle',
    items: [
      {
        id: 1,
        quoteKey: 'homeTestimonial1Quote',
        nameKey: 'homeTestimonial1Name',
        originKey: 'homeTestimonial1Origin',
        rating: 5,
        avatarUrl: 'https://placehold.co/100x100/000/fff?text=A1',
      },
      {
        id: 2,
        quoteKey: 'homeTestimonial2Quote',
        nameKey: 'homeTestimonial2Name',
        originKey: 'homeTestimonial2Origin',
        rating: 5,
        avatarUrl: 'https://placehold.co/100x100/000/fff?text=A2',
      },
      {
        id: 3,
        quoteKey: 'homeTestimonial3Quote',
        nameKey: 'homeTestimonial3Name',
        originKey: 'homeTestimonial3Origin',
        rating: 5,
        avatarUrl: 'https://placehold.co/100x100/000/fff?text=A3',
      },
    ],
  },
  // Final CTA Section
  finalCta: {
    titleKey: 'homeFinalCtaTitle',
    subtitleKey: 'homeFinalCtaSubtitle',
    ctaTextKey: 'homeFinalCtaText',
    ctaLink: '/contacto',
    imageUrl: 'https://placehold.co/1920x600/000/fff?text=CTA+Banner',
  },
};
