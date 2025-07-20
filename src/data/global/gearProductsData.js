// gearProductsData.js
// Listado inicial de productos de buceo organizados por categoría
// Aún no incluye descripciones ni detalles, solo id, src (placeholder) y nameKey

export const gearProductsData = {
  // 1. Equipo de respiración
  respiration: {
    imageUrl: 'https://placehold.co/400x400?text=Respiration',
    products: [
      {
        id: 'mask',
        src: 'https://placehold.co/400x400?text=Mask',
        nameKey: 'gearProductMask',
      },
      {
        id: 'snorkel',
        src: 'https://placehold.co/400x400?text=Snorkel',
        nameKey: 'gearProductSnorkel',
      },
      {
        id: 'regulator',
        src: 'https://placehold.co/400x400?text=Regulator',
        nameKey: 'gearProductRegulator',
      },
      {
        id: 'spg',
        src: 'https://placehold.co/400x400?text=SPG',
        nameKey: 'gearProductSPG',
      },
      // {
      //   id: 'octopus',
      //   src: 'https://placehold.co/400x400?text=Octopus',
      //   nameKey: 'gearProductOctopus',
      // },
      // {
      //   id: 'airSensor',
      //   src: 'https://placehold.co/400x400?text=Air+Sensor',
      //   nameKey: 'gearProductAirSensor',
      // },
    ],
  },

  // 2. Propulsión
  propulsion: {
    imageUrl: 'https://placehold.co/400x400?text=Propulsion',
    products: [
      {
        id: 'fins',
        src: 'https://placehold.co/400x400?text=Fins',
        nameKey: 'gearProductFins',
      },
    ],
  },

  // 3. Control de flotabilidad
  buoyancy: {
    imageUrl: 'https://placehold.co/400x400?text=Buoyancy',
    products: [
      {
        id: 'bcd',
        src: 'https://placehold.co/400x400?text=BCD',
        nameKey: 'gearProductBcd',
      },
      {
        id: 'weightSystem',
        src: 'https://placehold.co/400x400?text=Weight+System',
        nameKey: 'gearProductWeightSystem',
      },
    ],
  },

  // 4. Protección térmica y comodidad
  thermal: {
    imageUrl: 'https://placehold.co/400x400?text=Thermal',
    products: [
      {
        id: 'wetsuit',
        src: 'https://placehold.co/400x400?text=Wetsuit',
        nameKey: 'gearProductWetsuit',
      },
      {
        id: 'gloves',
        src: 'https://placehold.co/400x400?text=Gloves',
        nameKey: 'gearProductGloves',
      },
      {
        id: 'boots',
        src: 'https://placehold.co/400x400?text=Boots',
        nameKey: 'gearProductBoots',
      },
      {
        id: 'hood',
        src: 'https://placehold.co/400x400?text=Hood',
        nameKey: 'gearProductHood',
      },
    ],
  },

  // 5. Gestión de gas y computación de inmersión
  gasAndComputing: {
    imageUrl: 'https://placehold.co/400x400?text=GasAndComputing',
    products: [
      {
        id: 'tank',
        src: 'https://placehold.co/400x400?text=Tank',
        nameKey: 'gearProductTank',
      },
      {
        id: 'diveComputer',
        src: 'https://placehold.co/400x400?text=Dive+Computer',
        nameKey: 'gearProductDiveComputer',
      },
      {
        id: 'depthGauge',
        src: 'https://placehold.co/400x400?text=Depth+Gauge',
        nameKey: 'gearProductDepthGauge',
      },
    ],
  },

  // 6. Navegación y señalización
  navigation: {
    imageUrl: 'https://placehold.co/400x400?text=Navigation',
    products: [
      {
        id: 'compass',
        src: 'https://placehold.co/400x400?text=Compass',
        nameKey: 'gearProductCompass',
      },
      {
        id: 'dsmb',
        src: 'https://placehold.co/400x400?text=DSMB',
        nameKey: 'gearProductDSMB',
      },
      {
        id: 'whistle',
        src: 'https://placehold.co/400x400?text=Whistle',
        nameKey: 'gearProductWhistle',
      },
    ],
  },

  // 7. Iluminación
  lighting: {
    imageUrl: 'https://placehold.co/400x400?text=Lighting',
    products: [
      {
        id: 'torch',
        src: 'https://placehold.co/400x400?text=Torch',
        nameKey: 'gearProductTorch',
      },
    ],
  },

  // 8. Seguridad y herramientas
  safety: {
    imageUrl: 'https://placehold.co/400x400?text=Safety+and+tools',
    products: [
      {
        id: 'knife',
        src: 'https://placehold.co/400x400?text=Knife',
        nameKey: 'gearProductKnife',
      },
      {
        id: 'repairKit',
        src: 'https://placehold.co/400x400?text=Repair+Kit',
        nameKey: 'gearProductRepairKit',
      },
    ],
  },

  // 9. Registro y documentación
  documentation: {
    imageUrl: 'https://placehold.co/400x400?text=Documentation',
    products: [
      {
        id: 'logbook',
        src: 'https://placehold.co/400x400?text=Logbook',
        nameKey: 'gearProductLogbook',
      },
      {
        id: 'dryBag',
        src: 'https://placehold.co/400x400?text=Dry+Bag',
        nameKey: 'gearProductDryBag',
      },
    ],
  },

  // 10. Transporte y mantenimiento
  transportAndMaintenance: {
    imageUrl: 'https://placehold.co/400x400?text=Transport+and+maintenance',
    products: [
      {
        id: 'gearBag',
        src: 'https://placehold.co/400x400?text=Gear+Bag',
        nameKey: 'gearProductGearBag',
      },
      {
        id: 'cleaningKit',
        src: 'https://placehold.co/400x400?text=Cleaning+Kit',
        nameKey: 'gearProductCleaningKit',
      },
    ],
  },

  // 11. Otros/Accesorios
  accessories: {
    imageUrl: 'https://placehold.co/400x400?text=Accesories',
    products: [
      {
        id: 'spareMouthpiece',
        src: 'https://placehold.co/400x400?text=Spare+Mouthpiece',
        nameKey: 'gearProductSpareMouthpiece',
      },
      {
        id: 'defog',
        src: 'https://placehold.co/400x400?text=Defog',
        nameKey: 'gearProductDefog',
      },
      {
        id: 'bungeeClips',
        src: 'https://placehold.co/400x400?text=Bungee+Clips',
        nameKey: 'gearProductBungeeClips',
      },
      {
        id: 'tankBoot',
        src: 'https://placehold.co/400x400?text=Tank+Boot',
        nameKey: 'gearProductTankBoot',
      },
      {
        id: 'batteries',
        src: 'https://placehold.co/400x400?text=Batteries',
        nameKey: 'gearProductBatteries',
      },
    ],
  },
};
