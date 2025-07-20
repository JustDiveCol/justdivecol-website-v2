// src/pages/GearPage/pages/GearGuidePage/sections/CategoryProductsSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { gearProductsData } from '../../../../../data/global/gearProductsData';

import { DiverIcon } from '../../../../../assets/icons/DiverIcons';
import { CloseIcon } from '../../../../../assets/icons/NavbarIcons';

// Import the new viewVariants
import { viewVariants } from '../../../../../hooks/animations';

// Map icon components to category IDs
const CategoryIcons = {
  respiration: (p) => <DiverIcon {...p} />,
  propulsion: (p) => <DiverIcon {...p} />,
  buoyancy: (p) => <DiverIcon {...p} />,
  thermal: (p) => <DiverIcon {...p} />,
  gasAndComputing: (p) => <DiverIcon {...p} />,
  navigation: (p) => <DiverIcon {...p} />,
  lighting: (p) => <DiverIcon {...p} />,
  safety: (p) => <DiverIcon {...p} />,
  documentation: (p) => <DiverIcon {...p} />,
  transportAndMaintenance: (p) => <DiverIcon {...p} />,
  accessories: (p) => <DiverIcon {...p} />,
  // Add other categories as needed
};

// Process the gearProductsData into the categoryData structure
const categoryData = Object.keys(gearProductsData).map((key) => ({
  id: key,
  title: key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase()),
  Icon: CategoryIcons[key],

  imageSrc:
    gearProductsData[key].imageUrl ||
    'https://placehold.co/96x96/cccccc/ffffff?text=No+Img',
  products: gearProductsData[key].products,
}));

const CategoryProductsSection = () => {
  const { t } = useTranslation('gearGuidePage'); // Use appropriate namespace for translation
  const [openCategory, setOpenCategory] = useState(null);
  const heroRef = useRef(null); // Ref for the main container to detect outside clicks

  // Effect to handle clicks outside the component to close the panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the main container AND a category is open
      if (
        openCategory &&
        heroRef.current &&
        !heroRef.current.contains(event.target)
      ) {
        setOpenCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCategory]); // Re-run effect only when openCategory changes

  // Find the details of the currently selected category
  const selectedCategoryDetails = openCategory
    ? categoryData.find((c) => c.id === openCategory)
    : null;

  // Function to scroll to a specific product section (if applicable, remove if not needed)
  const scrollToSection = (id) => {
    // You might need to adjust this logic if your products are on another page or in a different section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Optionally, you might want to close the category view after scrolling
      // setOpenCategory(null);
    }
  };

  return (
    <section className='bg-brand-neutral pb-4'>
      <main className='px-4'>
        <div
          ref={heroRef}
          className='container w-full mx-auto flex flex-col items-center bg-white rounded-2xl shadow-lg relative'>
          <AnimatePresence mode='wait'>
            {!openCategory ? (
              <motion.div
                key='category-grid'
                variants={viewVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='w-full flex flex-col items-center text-center p-6'>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
                  {t('exploreYourGearTitle')}
                </h1>
                <p className='text-gray-600 mb-8'>
                  {t('selectCategoryPrompt')}
                </p>

                {/* Responsive container: flex wrap centered */}
                <div className='w-full overflow-x-auto md:overflow-x-visible no-scrollbar p-4'>
                  <div className='flex flex-wrap justify-center gap-x-6 gap-y-8'>
                    {categoryData.map((category) => (
                      <div
                        key={category.id}
                        className='flex flex-col items-center w-20 sm:w-24'>
                        <button
                          onClick={() => setOpenCategory(category.id)}
                          className='relative cursor-pointer group w-16 h-16 sm:w-24 sm:h-24 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-transform hover:scale-110 active:scale-100'>
                          <img
                            src={category.imageSrc}
                            alt={t(`gearCategories.${category.id}`)}
                            className='w-full h-full object-cover rounded-full'
                          />
                        </button>
                        <span className='mt-2 text-xs sm:text-sm text-gray-700 font-medium'>
                          {t(`gearCategories.${category.id}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={openCategory}
                variants={viewVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='w-full flex flex-col items-center text-center p-6 overflow-y-auto no-scrollbar'>
                <button
                  onClick={() => setOpenCategory(null)}
                  aria-label='Close category view'
                  className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-2 rounded-full hover:bg-gray-100'>
                  <CloseIcon className='w-6 h-6' />
                </button>
                <div className='flex flex-col items-center gap-4 mb-6'>
                  <button
                    onClick={() => setOpenCategory(null)}
                    aria-label={`Back from ${selectedCategoryDetails.title}`}
                    className='w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-transform hover:scale-110 active:scale-100'>
                    {selectedCategoryDetails.Icon && (
                      <selectedCategoryDetails.Icon className='w-8 h-8' />
                    )}
                  </button>
                  <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    {t(`gearCategories.${selectedCategoryDetails.id}`)}
                  </h1>
                </div>

                {/* Responsive products container centered */}
                <div className='p-5 bg-blue-50 rounded-xl border border-blue-200 w-full overflow-x-auto md:overflow-x-visible'>
                  <div className='flex flex-wrap justify-center gap-x-6 gap-y-8'>
                    {selectedCategoryDetails.products.map((item) => (
                      <div
                        key={item.id}
                        className='flex flex-col items-center w-20 sm:w-28'>
                        <Link
                          to={`/gear/guide#${item.id}`}
                          onClick={() => scrollToSection(item.id)}
                          className='relative cursor-pointer group w-16 h-16 sm:w-24 sm:h-24 bg-brand-secondary rounded-full flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-transform hover:scale-110 active:scale-100'>
                          <img
                            src={item.src}
                            alt={t(`gearProducts.${item.nameKey}`)}
                            className='w-full h-full object-cover rounded-full'
                          />
                          <div className='absolute inset-0 rounded-full bg-black/60 flex items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-white text-xs font-semibold capitalize'>
                              {t(`gearProducts.${item.nameKey}`)}
                            </span>
                          </div>
                        </Link>
                        <span className='mt-2 text-xs sm:text-sm capitalize text-gray-600'>
                          {t(`gearProducts.${item.nameKey}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </section>
  );
};

export default CategoryProductsSection;
