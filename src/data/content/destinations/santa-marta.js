// src/data/content/destinations/santa-marta.js
// ... import other gallery images

export const santaMartaDestination = {
  id: 'santa-marta',
  status: 'published',
  nameKey: 'smName',
  card: {
    descriptionKey: 'smCardDescription',
    imageUrl: 'https://placehold.co/800x600/000/fff?text=Card+Description',
    link: '/destinos/santa-marta',
  },
  page: {
    headerImageUrl: 'https://placehold.co/1920x600/000/fff?text=Banner',
    destinationInfo: {
      titleKey: 'smInfoTitle',
      paragraphs: ['smInfoP1', 'smInfoP2'],
    },
    diveSites: {
      titleKey: 'smDiveSitesTitle',
      sites: [
        {
          id: 'barco-hundido',
          nameKey: 'smDiveSite1Name',
          descriptionKey: 'smDiveSite1Desc',
        },
        {
          id: 'natalia',
          nameKey: 'smDiveSite2Name',
          descriptionKey: 'smDiveSite2Desc',
        },
        {
          id: 'piedra-medio',
          nameKey: 'smDiveSite3Name',
          descriptionKey: 'smDiveSite3Desc',
        },
        {
          id: 'isla-aguja',
          nameKey: 'smDiveSite4Name',
          descriptionKey: 'smDiveSite4Desc',
        },
      ],
    },
    gallery: {
      titleKey: 'smGalleryTitle',
      images: [
        'https://placehold.co/800x600/000/fff?text=Imagen+1' /*, galleryImg2, etc. */,
      ],
    },
    details: {
      titleKey: 'smDetailsTitle',
      items: [
        { labelKey: 'smDetailLabel1', valueKey: 'smDetailValue1' },
        { labelKey: 'smDetailLabel2', valueKey: 'smDetailValue2' },
        { labelKey: 'smDetailLabel3', valueKey: 'smDetailValue3' },
        { labelKey: 'smDetailLabel4', valueKey: 'smDetailValue4' },
      ],
    },
    uniqueFinds: {
      titleKey: 'smUniqueFindsTitle',
      items: [
        'smUniqueFind1',
        'smUniqueFind2',
        'smUniqueFind3',
        'smUniqueFind4',
      ],
    },
  },
  seo: {
    titleKey: 'smSeoTitle',
    descriptionKey: 'smSeoDesc',
  },
};
