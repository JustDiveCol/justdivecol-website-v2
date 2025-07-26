import { IMAGE_VARIANTS, STATUS } from '@/data/global/constants';

// date -u +"%Y-%m-%dT%H:%M:%SZ"

export const certificationTemplate = {
  id: '', // unique string
  status: STATUS.draft, // 'published' | 'draft'
  type: 'certification',
  slug: '', // URL-friendly identifier
  category: '', // e.g., 'Open Water', 'Advanced'
  languages: [], // array of ISO codes, e.g., ['es', 'en']
  createdAt: '', // ISO date string
  updatedAt: '', // ISO date string
  prerequisites: [], // array of certification IDs required before taking this
  seo: {
    titleKey: '',
    descriptionKey: '',
    keywords: '',
    imageUrl: '',
    url: '',
  },
  header: {
    backgroundImage: '',
    titleKey: '',
    subtitleKey: '',
    mainLogo: '',
    mainLogoAltKey: '',
    complementaryLogo: '',
    complementaryLogoAltKey: '',
    photoCredit: {
      prefixKey: '',
      text: '',
    },
  },
  description: {
    titleKey: '',
    paragraphs: [],
  },
  card: {
    backgroundImage: '',
    mainLogo: '',
    mainLogoAltKey: '',
    complementaryLogo: '',
    complementaryLogoAltKey: '',
    textOverlayKey: '',
    photoCredit: {
      // credit on card
      prefixKey: '',
      text: '',
    },
    variant: IMAGE_VARIANTS.horizontal,
  },
  details: {
    titleKey: '',
    durationKey: '',
    durationValue: 0,
    price: 0,
    currency: '',
    items: [],
  },
  curriculum: {
    titleKey: '',
    modules: [],
    notes: [],
    learningObjectives: [],
    estimatedTimePerModule: {},
  },
  requirements: {
    titleKey: '',
    items: [],
  },
  whatIsIncluded: {
    titleKey: '',
    items: [],
  },
  gallery: {
    titleKey: '',
    images: [], // array of { backgroundImage, mainLogo, mainLogoAltKey, photoCredit: {prefixKey,text}, variant, altTextKey, captionKey }
  },
  cta: {
    textKey: '',
    translationNS: '',
    action: {
      type: '',
      whatsAppMessageKey: '',
      whatsAppMessageValues: {},
      whatsAppMessageNS: '',
      path: '',
    },
    animateOnView: false,
    viewportOptions: { once: true, amount: 0.4 },
    className: '',
    containerClassName: '',
    motionVariants: {},
    motionInitial: '',
    motionAnimate: '',
    motionTransition: {},
  },
};
