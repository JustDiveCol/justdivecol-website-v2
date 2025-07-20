// src/data/pages/storeProductsData.js

// Asume que tendrás imágenes en una carpeta específica, por ejemplo:
// import maskProduct from '../../assets/images/store/mask-product.jpg';
// import finsProduct from '../../assets/images/store/fins-product.jpg';
// import wetsuitProduct from '../../assets/images/store/wetsuit-product.jpg';
// import regulatorProduct from '../../assets/images/store/regulator-product.jpg';
// import computerProduct from '../../assets/images/store/computer-product.jpg';

export const storeProductsData = {
  seo: {
    titleKey: 'contactSeoTitle',
    descriptionKey: 'contactSeoDesc',
    keywords: 'contactSeoKeywords',
    imageUrl: '',
    url: '/gear/store',
  },
  sectionTitleKey: 'productsSectionTitle', // Clave de traducción para el título de la sección
  products: [
    {
      id: 'product-mask-001',
      nameKey: 'productMaskName', // Clave de traducción para el nombre
      descriptionKey: 'productMaskDescription', // Clave de traducción para la descripción
      image: '/assets/images/store/mask-product.jpg', // Ruta de imagen
      price: 120.0,
      categoryKey: 'categoryMasks', // Clave de traducción para la categoría
      link: '/gear/store/mask-001', // Enlace a la página de detalle del producto (futuro)
    },
    {
      id: 'product-fins-002',
      nameKey: 'productFinsName',
      descriptionKey: 'productFinsDescription',
      image: '/assets/images/store/fins-product.jpg',
      price: 85.5,
      categoryKey: 'categoryFins',
      link: '/gear/store/fins-002',
    },
    {
      id: 'product-wetsuit-003',
      nameKey: 'productWetsuitName',
      descriptionKey: 'productWetsuitDescription',
      image: '/assets/images/store/wetsuit-product.jpg',
      price: 250.0,
      categoryKey: 'categoryWetsuits',
      link: '/gear/store/wetsuit-003',
    },
    {
      id: 'product-regulator-004',
      nameKey: 'productRegulatorName',
      descriptionKey: 'productRegulatorDescription',
      image: '/assets/images/store/regulator-product.jpg',
      price: 450.0,
      categoryKey: 'categoryRegulators',
      link: '/gear/store/regulator-004',
    },
    {
      id: 'product-computer-005',
      nameKey: 'productComputerName',
      descriptionKey: 'productComputerDescription',
      image: '/assets/images/store/computer-product.jpg',
      price: 320.0,
      categoryKey: 'categoryComputers',
      link: '/gear/store/computer-005',
    },
    // Añade más productos aquí
  ],
};
