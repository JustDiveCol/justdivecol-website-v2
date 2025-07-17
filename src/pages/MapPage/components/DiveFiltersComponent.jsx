import React from 'react';

import { SearchIcon } from '../../../assets/icons/NavbarIcons';

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
  activeDestination,
  setActiveDestination,
  destinationOptions,
}) => {
  return (
    <>
      <div className='flex flex-col gap-6 mb-6'>
        {/* FILA 1: Filtro de Destino */}
        {destinationOptions.length > 0 && (
          <div className='w-full'>
            <span className='block text-xl font-semibold text-brand-neutral mb-2'>
              {t('divesites:destinationLabel', 'Destino')}
            </span>
            <div className='flex flex-wrap gap-2'>
              {destinationOptions.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setActiveDestination(dest.id)}
                  className={`cursor-pointer px-3 py-1 rounded-full text-xs border transition font-medium ${
                    activeDestination === dest.id
                      ? 'text-brand-cta-yellow bg-brand-white border-brand-cta-yellow'
                      : 'text-brand-white bg-brand-cta-yellow border-brand-white hover:bg-brand-neutral/10'
                  }`}>
                  {t(dest.translationKey, { ns: 'destinations' })}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FILA 2: Otros Filtros */}
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='flex flex-col sm:flex-row flex-grow gap-6'>
            {/* Columna Tipo */}
            <div className='w-full sm:w-1/2'>
              <span className='block text-xl font-semibold text-brand-neutral mb-2'>
                {t('divesites:typeLabel')}
              </span>
              <div className='flex flex-wrap gap-2 min-h-[26px] items-center'>
                {typeFilterOptions.length > 1 ? (
                  typeFilterOptions.map((type) => (
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
                  ))
                ) : (
                  <span className='text-sm text-brand-neutral/70 italic'>
                    {t('divesites:noOptionsAvailable')}
                  </span>
                )}
              </div>
            </div>

            {/* Columna Dificultad */}
            <div className='w-full sm:w-1/2'>
              <span className='block text-xl font-semibold text-brand-neutral mb-2'>
                {t('divesites:difficultyLabel')}
              </span>
              <div className='flex flex-wrap gap-2 min-h-[26px] items-center'>
                {difficultyFilterOptions.length > 1 ? (
                  difficultyFilterOptions.map((diff) => (
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
                  ))
                ) : (
                  <span className='text-sm text-brand-neutral/70 italic'>
                    {t('divesites:noOptionsAvailable')}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Botón reset */}
          <div className='flex items-center justify-center sm:justify-end w-full sm:w-auto'>
            <button
              onClick={clearFilters}
              className='cursor-pointer px-4 py-1.5 h-fit text-xs font-semibold rounded-full border border-brand-neutral text-brand-neutral hover:bg-brand-cta-orange hover:text-brand-primary-dark transition shadow-sm'>
              {t('common:clearFiltersLabel')}
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Búsqueda y Contador (sin cambios) */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-start mb-4'>
        <div className='relative w-full'>
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
