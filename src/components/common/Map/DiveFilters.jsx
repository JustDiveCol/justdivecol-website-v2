// DiveFilters.jsx
import React from 'react';
import { SearchIcon } from '../../../assets/icons/SearchIcon';

const DiveFilters = ({
  t,
  activeType,
  setActiveType,
  typeFilterOptions,
  activeDifficulty,
  setActiveDifficulty,
  difficultyFilterOptions,
  searchQuery,
  setSearchQuery,
  clearFilters,
  filteredSites,
  baseSites,
}) => {
  return (
    <>
      <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:justify-between'>
        <div className='flex flex-col sm:flex-row sm:flex-grow gap-6'>
          {/* Columna Tipo */}
          <div className='w-full sm:w-1/2'>
            <span className='block text-xl font-semibold text-brand-neutral mb-2'>
              {t('divesites:typeLabel')}
            </span>
            <div className='flex flex-wrap gap-2'>
              {typeFilterOptions.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`cursor-pointer px-3 py-1 rounded-full text-xs border transition font-medium ${
                    activeType === type.id
                      ? 'text-brand-cta-green bg-brand-white border-brand-cta-green'
                      : 'text-brand-white bg-brand-cta-green border-brand-white hover:bg-brand-neutral/10'
                  }`}>
                  {t(type.translationKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Columna Dificultad */}
          <div className='w-full sm:w-1/2'>
            <span className='block text-xl font-semibold text-brand-neutral mb-2'>
              {t('divesites:difficultyLabel')}
            </span>
            <div className='flex flex-wrap gap-2'>
              {difficultyFilterOptions.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setActiveDifficulty(diff.id)}
                  className={`cursor-pointer px-3 py-1 rounded-full text-xs border transition font-medium ${
                    activeDifficulty === diff.id
                      ? 'text-brand-cta-orange bg-brand-white border-brand-cta-orange'
                      : 'text-brand-white bg-brand-cta-orange border-brand-white hover:bg-brand-neutral/10'
                  }`}>
                  {t(diff.translationKey)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Botón reset */}
        <div className='sm:pt-6 content-center'>
          <button
            onClick={clearFilters}
            className='cursor-pointer px-4 py-1.5 text-sm font-semibold rounded-full border border-brand-neutral text-brand-neutral hover:bg-brand-cta-orange hover:text-brand-primary-dark transition shadow-sm'>
            {t('common:clearFiltersLabel')}
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-start mb-4'>
        <div className='relative w-full'>
          {/* Ícono de búsqueda */}
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='w-4 h-4 text-brand-neutral/60' />
          </div>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              t('common:searchPlaceholder') || 'Buscar por nombre...'
            }
            className='w-full pl-10 pr-8 py-2 border rounded-md text-sm text-brand-neutral placeholder:text-brand-neutral/60 focus:outline-none focus:ring-2 focus:ring-brand-cta-orange'
          />
          {searchQuery && (
            <button
              type='button'
              onClick={() => setSearchQuery('')}
              className='absolute inset-y-0 right-0 pr-3 flex items-center text-brand-neutral/60 hover:text-brand-cta-orange transition cursor-pointer'
              aria-label='Limpiar búsqueda'>
              ✕
            </button>
          )}
        </div>

        <div className='flex items-center text-sm sm:justify-end sm:text-right h-full'>
          {filteredSites.length === 0 ? (
            <div className='text-brand-neutral text-md'>
              {t('divesites:noMatchingSites')}
            </div>
          ) : (
            <div className='text-brand-neutral text-md'>
              {t('divesites:showingSitesCountFull', {
                filtered: filteredSites.length,
                total: baseSites.length,
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiveFilters;
