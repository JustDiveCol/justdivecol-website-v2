// src/data/content/courses/padi-open-water-diver.js

// Import all local images for this course.
import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

import xyz_header_background from '../../../assets/images/page-specific/courses/open-water/xyz-header-background.webp';
import xyz_card_image from '../../../assets/images/page-specific/courses/open-water/xyz-card-image.webp';
import xyz_gallery_01 from '../../../assets/images/page-specific/courses/open-water/xyz-gallery-01.webp';
import xyz_gallery_02 from '../../../assets/images/page-specific/courses/open-water/xyz-gallery-02.webp';
import xyz_gallery_03 from '../../../assets/images/page-specific/courses/open-water/xyz-gallery-03.webp';
import xyz_gallery_04 from '../../../assets/images/page-specific/courses/open-water/xyz-gallery-04.webp';

/**
 * Data structure for the XYZ course.
 * This object serves as the single source of truth for all content related to this course.
 */
export const _xyzCourse = {
  // --- Metadata ---
  id: 'xyz-course', // Unique identifier for the course.
  status: 'draft', // 'published' or 'draft'.
  type: 'certification', // The type of experience.

  // --- SEO Content ---
  seo: {
    titleKey: 'xyzSeoTitle',
    descriptionKey: 'xyzSeoDesc',
  },

  // --- Page Header ---
  header: {
    backgroundImage: xyz_header_background,
    titleKey: 'xyzHeaderTitle',
    subtitleKey: 'xyzHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'xyzHeaderMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'xyzHeaderComplementaryLogoAlt',
    // textOverlayKey: 'xyzHeaderTextOverlay',
    photoCreditKey: 'xyzHeaderPhotoCredit',
  },

  // --- Card Description Content ---
  description: {
    titleKey: 'xyzDescTitle',
    paragraphs: ['xyzDescP1', 'xyzDescP2'],
  },

  // --- Card Display ---
  card: {
    backgroundImage: xyz_card_image,
    mainLogo: logo,
    mainLogoAltKey: 'xyzCardMainLogoAlt',
    complementaryLogo: padi,
    complementaryLogoAltKey: 'xyzCardComplementaryLogoAlt',
    textOverlayKey: 'xyzCardTextOverlay',
    photoCreditKey: 'xyzCardPhotoCredit',
    variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
  },

  // --- Main Content ---
  details: {
    titleKey: 'xyzDetailsTitle',
    items: [
      { labelKey: 'xyzDetailLabel1', valueKey: 'xyzDetailValue1' },
      { labelKey: 'xyzDetailLabel2', valueKey: 'xyzDetailValue2' },
    ],
  },

  // --- Curriculim Content ---
  curriculum: {
    titleKey: 'xyzCurriculumTitle',
    modules: [
      {
        id: 'id1',
        nameKey: 'xyzModule1Name',
        descriptionKey: 'xyzModule1Desc',
      },
      {
        id: 'id2',
        nameKey: 'xyzModule2Name',
        descriptionKey: 'xyzModule2Desc',
      },
      {
        id: 'id3',
        nameKey: 'xyzModule3Name',
        descriptionKey: 'xyzModule3Desc',
      },
      {
        id: 'id4',
        nameKey: 'xyzModule4Name',
        descriptionKey: 'xyzModule4Desc',
      },
    ],
    notes: ['xyzCurriculumNote1'],
  },

  // --- Requirements ---
  requirements: {
    titleKey: 'xyzReqsTitle',
    items: ['xyzReqItem1', 'xyzReqItem2', 'xyzReqItem3', 'xyzReqItem4'],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: 'xyzIncludedTitle',
    items: [
      'xyzIncludeItem1',
      'xyzIncludeItem2',
      'xyzIncludeItem3',
      'xyzIncludeItem4',
      'xyzIncludeItem5',
      'xyzIncludeItem6',
      'xyzIncludeItem7',
      'xyzIncludeItem8',
    ],
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'xyzGalleryTitle',
    images: [
      {
        backgroundImage: xyz_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg1MainLogoAlt',
        complementaryLogo: padi,
        complementaryLogoAltKey 'xyzGaleryImg1ComplementaryLogoAlt',
        textOverlayKey: 'xyzGaleryImg1TextOverlay',
        photoCreditKey: 'xyzGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: xyz_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg2MainLogoAlt',
        complementaryLogo: padi,
        complementaryLogoAltKey 'xyzGaleryImg2ComplementaryLogoAlt',
        textOverlayKey: 'xyzGaleryImg2TextOverlay',
        photoCreditKey: 'xyzGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: xyz_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg3MainLogoAlt',
        complementaryLogo: padi,
        complementaryLogoAltKey 'xyzGaleryImg3ComplementaryLogoAlt',
        textOverlayKey: 'xyzGaleryImg3TextOverlay',
        photoCreditKey: 'xyzGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: xyz_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg4MainLogoAlt',
        complementaryLogo: padi,
        complementaryLogoAltKey 'xyzGaleryImg4ComplementaryLogoAlt',
        textOverlayKey: 'xyzGaleryImg4TextOverlay',
        photoCreditKey: 'xyzGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },

  // --- Call to action ---
  cta: {
    titleKey: 'xyzCtaTitle',
    buttonTextKey: 'xyzCtaButtonText',
    link: '/contacto',
  },
};

export const i18n = {
  // ===== XYZ =====
  // --- SEO Content ---
  xyzSeoTitle: 'PADI Open Water Diver Course | Learn to Dive with JustDiveCol',
  xyzSeoDesc:
    "Become a certified diver with JustDiveCol's PADI Open Water Diver course, your gateway to the fascinating underwater world. Learn the fundamentals and get your globally recognized certification to explore the depths with confidence.",

  // --- Header Content ---
  xyzHeaderTitle: 'PADI Open Water Diver: Your Passport to the Blue World',
  xyzHeaderSubtitle:
    'Discover the 70% of the planet waiting to be explored by you.',
  xyzHeaderMainLogoAlt: 'Logo JustDiveCol',
  xyzHeadercomplementaryLogoAltKey 'Logo PADI',
  xyzHeaderPhotoCredit: 'Credits: Camilo Beltran @JustDiveCol',

  // --- Card Description Content ---
  xyzDescTitle: 'Become a Certified Diver: Adventure Awaits',

  xyzDescP1:
    "The PADI Open Water Diver course is the most recognized and sought-after diving certification worldwide. Millions of people have opened their eyes to the wonders of the aquatic world through this transformative experience. It's the first step towards a lifetime of underwater exploration.",
  xyzDescP2:
    "At JustDiveCol, we'll guide you step-by-step on this exciting journey, from essential theoretical principles to your first breaths and fin kicks in the ocean. Our commitment is for you to become a competent, safe, responsible, and deeply passionate diver of the depths.",
  // xyzDescP3: '',

  // --- Card Display ---
  xyzCardMainLogoAlt: 'Logo JustDiveCol',
  xyzCardcomplementaryLogoAltKey 'Logo PADI',
  xyzCardTextOverlay: 'Courses',
  xyzCardPhotoCredit: 'Credits: Camilo Beltran @JustDiveCol',

  // --- Main Content ---
  xyzDetailsTitle: 'Your Certification Adventure in Detail',

  xyzDetailLabel1: 'Estimated duration',
  xyzDetailValue1: '3 to 4 days (flexible)',

  xyzDetailLabel2: 'Maximum depth',
  xyzDetailValue2: '18 meters (60 feet)',

  // --- Curriculim Content ---
  xyzCurriculumTitle: 'What Will You Learn in Your Open Water Course?',

  xyzModule1Name: 'Interactive theoretical modules',
  xyzModule1Desc:
    "Through the innovative PADI eLearning® platform, you'll learn the fundamental principles of diving at your own pace, from the comfort of your home.",

  xyzModule2Name: 'Personalized virtual guidance',
  xyzModule2Desc:
    'We complement your study with 5 live virtual sessions where one of our expert instructors will reinforce key concepts, answer all your questions, and prepare you for the next step.',

  xyzModule3Name: 'Confined water practical sessions',
  xyzModule3Desc:
    "In a safe and controlled environment, like a pool, you'll practice and master all essential diving skills. Here you'll build your confidence before venturing into the open sea.",

  xyzModule4Name: 'Exciting open water dives',
  xyzModule4Desc:
    "The culmination of your learning! You'll complete four memorable dives in the ocean, applying everything you learned under your instructor's expert supervision. Prepare to be amazed.",

  xyzCurriculumNote1:
    "Internationally recognized certification: Upon successful completion of the course, you'll earn a globally valid PADI credential, opening the doors to underwater exploration in any destination.",

  // --- Requirements ---
  xyzReqsTitle: 'Requirements to Start Your Adventure',

  xyzReqItem1: 'Must be at least 10 years old (for Junior Open Water Diver)',
  xyzReqItem2:
    'Be comfortable in the water and know how to swim (no need to be an Olympic swimmer)',
  xyzReqItem3:
    "Complete and pass a medical questionnaire or obtain a physician's authorization, if necessary.",
  xyzReqItem4:
    'Commit to actively participating in all theoretical and practical sessions of the course.',

  // --- Included ---
  xyzIncludedTitle: 'Your Course Includes Everything You Need to Dive',

  xyzIncludeItem1: 'International PADI Open Water Diver Certification',
  xyzIncludeItem2: 'Unlimited access to the PADI eLearning® platform',
  xyzIncludeItem3:
    '5 live virtual sessions with a PADI instructor for guidance and Q&A.',
  xyzIncludeItem4: '5 guided confined water sessions (pool)',
  xyzIncludeItem5: '4 thrilling open water dives (ocean)',
  xyzIncludeItem6:
    'Full set of top-quality diving equipment rental (mask, fins, wetsuit, regulator, BCD, tank).',
  xyzIncludeItem7:
    'Personalized accompaniment from a highly qualified PADI Instructor.',
  xyzIncludeItem8: 'Full dive insurance for the entire duration of the course.',

  // --- Gallery ---
  xyzGalleryTitle: 'Unforgettable Moments from Your Course',

  xyzGaleryImg1MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg1complementaryLogoAltKey '',
  // xyzGaleryImg1TextOverlay: '',
  xyzGaleryImg1PhotoCredit: 'Credits: Camilo Beltran @JustDiveCol',

  xyzGaleryImg2MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg2complementaryLogoAltKey '',
  // xyzGaleryImg2TextOverlay: '',
  xyzGaleryImg2PhotoCredit: 'Credits: XYZ',

  xyzGaleryImg3MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg3complementaryLogoAltKey '',
  // xyzGaleryImg3TextOverlay: '',
  xyzGaleryImg3PhotoCredit: 'Credits: Camilo Beltran @JustDiveCol',

  xyzGaleryImg4MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg4complementaryLogoAltKey '',
  // xyzGaleryImg4TextOverlay: '',
  xyzGaleryImg4PhotoCredit: 'Credits: Camilo Beltran @JustDiveCol',

  // --- CTA ---
  xyzCtaTitle: "Can't find dates that work for you?",
  xyzCtaButtonText: 'Contact Us for Personalized Options',
};
