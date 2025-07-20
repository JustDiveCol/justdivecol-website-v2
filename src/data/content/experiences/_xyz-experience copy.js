// src/data/content/experiences/exp-sm-sept-2025.js

// Import all local images for this specific experience.
import xyz_header_background from '../../../assets/images/page-specific/experiences/xyz/xyz-header-background.webp';
import xyz_gallery_01 from '../../../assets/images/page-specific/experiences/xyz/xyz-gallery-01.webp';
import xyz_gallery_02 from '../../../assets/images/page-specific/experiences/xyz/xyz-gallery-02.webp';
import xyz_gallery_03 from '../../../assets/images/page-specific/experiences/xyz/xyz-gallery-03.webp';
import xyz_gallery_04 from '../../../assets/images/page-specific/experiences/xyz/xyz-gallery-04.webp';

import logo from '../../../assets/images/logos/logo.png';
import padi from '../../../assets/images/logos/padi.png';

/**
 * Data structure for the "XYZ - XX XX" experience.
 * This object is the single source of truth for all content related to this trip.
 */
export const _xyzExperience = {
  // --- Metadata ---
  id: 'experiencia-xyz', // Unique identifier for the trip.
  status: 'published', // 'published' or 'draft'.
  destinationId: 'xyz', // Crucial link to the corresponding destination data file.
  type: 'trip', // Type of experience.
  nameKey: 'xyzName', // Translation key for the trip's name.

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

  // --- Main Content ---
  details: {
    titleKey: 'xyzDetailsTitle',
    startDate: '2025-09-26',
    endDate: '2025-09-29',
    items: [
      {
        labelKey: 'xyzDetailLabel1',
        valueKey: 'xyzDetailValue1',
      },
      {
        labelKey: 'xyzDetailLabel2',
        valueKey: 'xyzDetailValue2',
      },
      {
        labelKey: 'xyzDetailLabel3',
        valueKey: 'xyzDetailValue3',
      },
      {
        labelKey: 'xyzDetailLabel4',
        valueKey: 'xyzDetailValue4',
      },
    ],
  },

  // --- Itinerary Content ---
  itinerary: {
    titleKey: 'xyzItineraryTitle',
    days: [
      {
        day: 1,
        titleKey: 'xyzItineraryDay1Title',
        descriptionKey: 'xyzItineraryDay1Desc',
      },
      {
        day: 2,
        titleKey: 'xyzItineraryDay2Title',
        descriptionKey: 'xyzItineraryDay2Desc',
      },
      {
        day: 3,
        titleKey: 'xyzItineraryDay3Title',
        descriptionKey: 'xyzItineraryDay3Desc',
      },
      {
        day: 4,
        titleKey: 'xyzItineraryDay4Title',
        descriptionKey: 'xyzItineraryDay4Desc',
      },
    ],
    notes: ['xyzItineraryNote1', 'xyzItineraryNote2'],
  },

  // --- Included ---
  whatIsIncluded: {
    titleKey: 'xyzIncludedTitle',
    items: [
      'xyzIncludeItem1',
      'xyzIncludeItem2',
      'xyzIncludeItem3',
      'xyzIncludeItem4',
    ],
  },

  // --- NOT Included ---
  whatIsNotIncluded: {
    titleKey: 'xyzNotIncludedTitle',
    items: [
      'xyzNotIncludeItem1',
      'xyzNotIncludeItem2',
      'xyzNotIncludeItem3',
      'xyzNotIncludeItem4',
    ],
  },

  // --- Offered Courses ---
  offeredCourses: {
    titleKey: 'xyzOfferedCoursesTitle',
    ids: ['padi-open-water-diver'], // Array of course IDs offered on this trip.
  },

  // --- Gallery ---
  gallery: {
    titleKey: 'xyzGalleryTitle',
    images: [
      {
        backgroundImage: xyz_gallery_01,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg1MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'xyzGaleryImg1ComplementaryLogoAlt',
        // textOverlayKey: 'xyzGaleryImg1TextOverlay',
        photoCreditKey: 'xyzGaleryImg1PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: xyz_gallery_02,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg2MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'xyzGaleryImg2ComplementaryLogoAlt',
        // textOverlayKey: 'xyzGaleryImg2TextOverlay',
        photoCreditKey: 'xyzGaleryImg2PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: xyz_gallery_03,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg3MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'xyzGaleryImg3ComplementaryLogoAlt',
        // textOverlayKey: 'xyzGaleryImg3TextOverlay',
        photoCreditKey: 'xyzGaleryImg3PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
      {
        backgroundImage: xyz_gallery_04,
        mainLogo: logo,
        mainLogoAltKey: 'xyzGaleryImg4MainLogoAlt',
        // complementaryLogo: padi,
        // complementaryLogoAltKey 'xyzGaleryImg4ComplementaryLogoAlt',
        // textOverlayKey: 'xyzGaleryImg4TextOverlay',
        photoCreditKey: 'xyzGaleryImg4PhotoCredit',
        variant: 'horizontal', // fullscreen, header, horizontal, vertical, square
      },
    ],
  },

  // --- Final Call to Action ---
  cta: {
    titleKey: 'xyzCtaTitle',
    buttonTextKey: 'xyzCtaButtonText',
    link: '/contacto',
  },
};

export const i18n = {
  // ===== Experience XYZ =====
  xyzName: 'Experiencia de certificación Open Water: Santa Marta',
  // --- SEO Content ---
  xyzSeoTitle:
    'Certificación PADI Open Water en Santa Marta | Viaje de Buceo JustDiveCol',
  xyzSeoDesc:
    'Obtén tu licencia de buceo PADI Open Water en un viaje inolvidable a Santa Marta con JustDiveCol. Aprende en las aguas cristalinas del Caribe colombiano y comienza tu exploración submarina.',

  // --- Page Header ---
  xyzHeaderTitle: 'Tu aventura submarina comienza aquí',
  xyzHeaderSubtitle:
    'Obtén tu certificación PADI Open Water en las mágicas aguas de Santa Marta con una experiencia inolvidable.',
  xyzHeaderMainLogoAlt: 'Logo JustDiveCol',
  xyzHeadercomplementaryLogoAltKey 'Logo PADI',
  // xyzHeaderTextOverlay: '',
  xyzHeaderPhotoCredit: 'Créditos: Camilo Beltran @JustDiveCol',

  // --- Card Description Content ---
  xyzDescTitle: 'Donde nace un nuevo explorador del mundo azul',

  xyzDescP1:
    'Imagina tu primera inmersión, no solo en cualquier lugar, sino en las vibrantes aguas cristalinas del Caribe colombiano, con base en Santa Marta. Esta experiencia está meticulosamente diseñada para que, desde cero, te sumerjas con confianza. Te guiaremos paso a paso a través de las diversas y protegidas bahías de la región, un verdadero paraíso submarino.',
  xyzDescP2:
    'Más que un curso, este viaje es el inicio de una profunda pasión por el buceo, una que te impulsará a explorar el 70% del planeta. Prepárate para transformar tu percepción del mundo y descubrir un universo lleno de vida y color bajo la superficie.',

  // --- Main Content ---
  xyzDetailsTitle: 'Detalles de tu experiencia de certificación',

  xyzDetailLabel1: 'Precio',
  xyzDetailValue1: 'COP 3.500.000',

  xyzDetailLabel2: 'Inmersiones',
  xyzDetailValue2: '5 en aguas confinadas + 4 en aguas abiertas',

  xyzDetailLabel3: 'Nivel mínimo requerido',
  xyzDetailValue3: 'Ninguno (solo ganas de explorar y un espíritu aventurero)',

  xyzDetailLabel4: 'Edad mínima',
  xyzDetailValue4: '10 años (se aplican condiciones para menores)',

  // --- Itinerary Content ---
  xyzItineraryTitle: 'Tu camino para convertirte en buzo certificado',

  xyzItineraryDay1Title: 'Llegada y fundamentos en aguas confinadas',
  xyzItineraryDay1Desc:
    'Arribo a Santa Marta, la puerta al Caribe. Tras un reponedor almuerzo, daremos inicio a tu emocionante aventura con la primera sesión de desarrollo de habilidades en un entorno controlado. Aquí te familiarizarás con el equipo y los principios básicos del buceo.',

  xyzItineraryDay2Title: '¡Al mar! tus primeras inmersiones en aguas abiertas',
  xyzItineraryDay2Desc:
    'Este es el momento que has estado esperando. Nos prepararemos para realizar tus dos primeras inmersiones en las espectaculares aguas abiertas de Santa Marta y sus alrededores. Descubre la vida marina en su hábitat natural. Tendrás la tarde libre para relajarte y procesar tus nuevas experiencias.',

  xyzItineraryDay3Title: 'Completando tu certificación y celebración',
  xyzItineraryDay3Desc:
    'Realizamos las dos últimas inmersiones que completarán tu certificación, consolidando tus habilidades y confianza. Por la noche, celebraremos tu logro con una ceremonia de graduación en un ambiente festivo y memorable.',

  xyzItineraryDay4Title: 'Despedida de un nuevo explorador submarino',
  xyzItineraryDay4Desc:
    'Disfruta de un último desayuno como buzo PADI Open Water Diver certificado, recordando los increíbles momentos vividos. Después, realizarás el check-out del hotel, llevando contigo no solo una certificación, sino una pasión de por vida.',

  xyzItineraryNote1:
    'Recomendamos encarecidamente comprar tu vuelo de regreso para después del mediodía del último día, para garantizar un margen de seguridad post-buceo (18-24 horas sin volar).',
  xyzItineraryNote2:
    'Para experiencias con menores de edad, es obligatorio presentar una autorización notariada del acudiente legal o de ambos padres, según la normativa vigente.',

  // --- Included ---
  xyzIncludedTitle: '¿Qué incluye tu experiencia de certificación?',

  xyzIncludeItem1:
    'Alojamiento por 3 noches y 4 días en hotel seleccionado (habitaciones dobles/triples).',
  xyzIncludeItem2:
    'Plan de alimentación completo durante la estadía: cenas (3), desayunos (3) y snacks diarios.',
  xyzIncludeItem3:
    'Todos los traslados necesarios: aeropuerto-hotel-aeropuerto y a todas las actividades de buceo/curso.',
  xyzIncludeItem4:
    'Cubrimiento fotográfico de tus inmersiones y momentos clave.',

  // --- NOT Included ---
  xyzNotIncludedTitle: 'Tu inversión NO incluye',

  xyzNotIncludeItem1:
    'Tiquetes aéreos nacionales o internacionales hacia y desde Santa Marta.',
  xyzNotIncludeItem2:
    'Bebidas alcohólicas, bebidas no especificadas y comidas adicionales fuera del plan.',
  xyzNotIncludeItem3: 'Propinas para guías, instructores y personal de apoyo.',
  xyzNotIncludeItem4:
    'Otros gastos personales no mencionados explícitamente en el plan.',

  // --- Offered Courses ---
  xyzOfferedCoursesTitle: 'Certificación principal de esta experiencia',

  // Gallery
  xyzGalleryTitle: 'Momentos inolvidables de tu experiencia',

  xyzGaleryImg1MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg1complementaryLogoAltKey '',
  // xyzGaleryImg1TextOverlay: '',
  xyzGaleryImg1PhotoCredit: 'Créditos: XYZ',

  xyzGaleryImg2MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg2complementaryLogoAltKey '',
  // xyzGaleryImg2TextOverlay: '',
  xyzGaleryImg2PhotoCredit: 'Créditos: Camilo Beltran @JustDiveCol',

  xyzGaleryImg3MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg3complementaryLogoAltKey '',
  // xyzGaleryImg3TextOverlay: '',
  xyzGaleryImg3PhotoCredit: 'Créditos: Camilo Beltran @JustDiveCol',

  xyzGaleryImg4MainLogoAlt: 'Logo JustDiveCol',
  // xyzGaleryImg4complementaryLogoAltKey '',
  // xyzGaleryImg4TextOverlay: '',
  xyzGaleryImg4PhotoCredit: 'Créditos: Camilo Beltran @JustDiveCol',

  // --- CTA ---
  xyzCtaTitle: '¿Listo para tu primera inmersión y tu certificación?',
  xyzCtaButtonText: 'Comienza tu aventura con JustDiveCol',
};
