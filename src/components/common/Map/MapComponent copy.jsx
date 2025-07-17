// MapComponent.jsx
import React, { useEffect, useRef, useState, useMemo } from 'react';
import maplibregl, { LngLatBounds } from 'maplibre-gl';
import { motion } from 'framer-motion';
import { createRoot } from 'react-dom/client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTranslation } from 'react-i18next';

import {
  getMapConfigByDestination,
  getDivesitesByDestination,
  allDivesites,
} from '../../../data/content/divesites/_index';

import {
  DIVE_TYPES,
  DIVE_DIFFICULTIES,
} from '../../../data/global/diveSiteOptions';

import { DiverIcon } from '../../../assets/icons/DiverIcon';
import { ReefIcon } from '../../../assets/icons/ReefIcon';
import { WreckIcon } from '../../../assets/icons/WreckIcon';
import { WallIcon } from '../../../assets/icons/WallIcon';
import { PinnacleIcon } from '../../../assets/icons/PinnacleIcon';
import { CaveIcon } from '../../../assets/icons/CaveIcon';
import { DriftIcon } from '../../../assets/icons/DriftIcon';
import { MuckIcon } from '../../../assets/icons/MuckIcon';
import { BlueHoleIcon } from '../../../assets/icons/BlueHoleIcon';
import { FreshWaterIcon } from '../../../assets/icons/FreshWaterIcon';
import { ArtificialReefIcon } from '../../../assets/icons/ArtificialReefIcon';

import { SearchIcon } from '../../../assets/icons/SearchIcon';
import DiveSiteModal from './DiveSiteModal';

const DEFAULT_CENTER = [-74.297333, 4.570868]; // Aproximadamente el centro de Colombia
const DEFAULT_ZOOM = 6; // Zoom nacional para mostrar casi todo el país

const getIconComponent = (typeId) => {
  switch (typeId) {
    case 'reef':
      return ReefIcon;
    case 'wreck':
      return WreckIcon;
    case 'wall':
      return WallIcon;
    case 'pinnacle':
      return PinnacleIcon;
    case 'cavern':
    case 'cave':
    case 'cenote':
      return CaveIcon;
    case 'drift':
      return DriftIcon;
    case 'muck':
      return MuckIcon;
    case 'blueHole':
      return BlueHoleIcon;
    case 'freshwater':
      return FreshWaterIcon;
    case 'artificialReef':
      return ArtificialReefIcon;
    default:
      return DiverIcon;
  }
};

const MotionMarker = ({ IconComponent, isSelected }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.3 }}
    transition={{ type: 'spring', stiffness: 120, damping: 10 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--color-brand-primary-dark)',
      borderRadius: '9999px',
      backgroundColor: isSelected
        ? 'var(--color-brand-cta-orange)'
        : 'var(--color-brand-white)',
      width: '100%',
      height: '100%',
      pointerEvents: 'auto',
      transition: 'background-color 0.3s ease',
    }}>
    <motion.div
      whileHover={{ scale: 1.6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
      <IconComponent
        className={
          isSelected ? 'text-white w-4 h-4' : 'text-brand-primary-dark w-4 h-4'
        }
      />
    </motion.div>
  </motion.div>
);

const MapComponent = ({ destinationId }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef({});
  const hoverPopupRef = useRef(null);
  const { t } = useTranslation(['divesites', 'common']);

  const [activeType, setActiveType] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [filteredSites, setFilteredSites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSite, setActiveSite] = useState(null);
  const [selectedSiteId, setSelectedSiteId] = useState(null);
  const selectedSiteIdRef = useRef(null);

  const {
    center: initialCenter,
    zoom: initialZoom,
    minZoom,
    maxZoom,
  } = getMapConfigByDestination(destinationId);

  const baseSites = useMemo(
    () =>
      destinationId ? getDivesitesByDestination(destinationId) : allDivesites,
    [destinationId]
  );

  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, { root, el }]) => {
      const site = baseSites.find((s) => s.id === id);
      if (!site) return;
      const IconComponent = getIconComponent(site.typeIds?.[0]);
      root.render(
        <MotionMarker
          IconComponent={IconComponent}
          isSelected={id === selectedSiteId}
        />
      );
    });
  }, [selectedSiteId, baseSites]);

  const typeFilterOptions = useMemo(() => {
    const presentTypeIds = new Set();
    filteredSites.forEach((site) =>
      site.typeIds?.forEach((id) => presentTypeIds.add(id))
    );
    const filteredTypes = DIVE_TYPES.filter((type) =>
      presentTypeIds.has(type.id)
    );
    return [{ id: 'all', translationKey: 'common:allLabel' }, ...filteredTypes];
  }, [filteredSites]);

  const difficultyFilterOptions = useMemo(() => {
    const presentDifficultyIds = new Set(
      filteredSites.map((s) => s.difficultyId)
    );
    const filteredDifficulties = DIVE_DIFFICULTIES.filter((diff) =>
      presentDifficultyIds.has(diff.id)
    );
    return [
      { id: 'all', translationKey: 'common:allLabel' },
      ...filteredDifficulties,
    ];
  }, [filteredSites]);

  useEffect(() => {
    if (!map.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.stadiamaps.com/styles/outdoors.json',
        center: initialCenter,
        zoom: initialZoom,
        minZoom: minZoom,
        maxZoom: maxZoom,
      });
      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    } else {
      map.current.flyTo({
        center: initialCenter,
        zoom: initialZoom,
        essential: true,
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [destinationId, initialCenter, initialZoom, maxZoom, minZoom]);

  useEffect(() => {
    if (!map.current) return;

    Object.values(markersRef.current).forEach(({ marker }) => marker.remove());
    markersRef.current = {};

    const translatedSites = baseSites.map((site) => ({
      ...site,
      translatedName: t(site.nameKey),
    }));

    const matchingSites = translatedSites.filter((site) => {
      const typeMatch =
        activeType === 'all' || site.typeIds.includes(activeType);
      const difficultyMatch =
        activeDifficulty === 'all' || site.difficultyId === activeDifficulty;
      const nameMatch = site.translatedName
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return typeMatch && difficultyMatch && nameMatch;
    });

    setFilteredSites(matchingSites);

    if (!matchingSites.some((site) => site.id === selectedSiteIdRef.current)) {
      setSelectedSiteId(null);
    }

    matchingSites.forEach((site) => {
      const el = document.createElement('div');
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.cursor = 'pointer';

      const IconComponent = getIconComponent(site.typeIds?.[0]);
      const root = createRoot(el);
      root.render(
        <MotionMarker
          IconComponent={IconComponent}
          isSelected={selectedSiteIdRef.current === site.id}
        />
      );

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(site.coordinates)
        .addTo(map.current);

      const popupContent = document.createElement('div');
      popupContent.innerText = site.translatedName;
      popupContent.style.padding = '6px 12px';
      popupContent.style.backgroundColor = 'white';
      popupContent.className = 'text-brand-primary-dark font-semibold text-sm';
      popupContent.style.fontSize = '14px';
      popupContent.style.fontWeight = '600';
      popupContent.style.borderRadius = '8px';
      popupContent.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      popupContent.style.pointerEvents = 'none';
      popupContent.style.border = 'none';

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 25,
        anchor: 'bottom',
        className: 'unstyled-popup', // clase personalizada para sobrescribir el estilo por defecto
      }).setDOMContent(popupContent);

      el.addEventListener('mouseenter', () => {
        hoverPopupRef.current = popup;
        popup.setLngLat(site.coordinates).addTo(map.current);
      });

      el.addEventListener('mouseleave', () => {
        popup.remove();
        hoverPopupRef.current = null;
      });

      el.addEventListener('click', () => {
        if (hoverPopupRef.current) {
          hoverPopupRef.current.remove();
          hoverPopupRef.current = null;
        }
        setActiveSite(site);
        setSelectedSiteId(site.id);
        map.current.flyTo({
          center: site.coordinates,
          zoom: 13.5,
          essential: true,
          speed: 1.2,
          curve: 1.42,
        });
      });

      markersRef.current[site.id] = { marker, el, root };
    });

    if (matchingSites.length > 0) {
      const bounds = new LngLatBounds();
      matchingSites.forEach((site) => bounds.extend(site.coordinates));
      map.current.fitBounds(bounds, {
        padding: 50,
        duration: 1000,
        maxZoom: maxZoom || 15,
      });
    } else {
      const fallback = {
        center: initialCenter || DEFAULT_CENTER,
        zoom: initialZoom || DEFAULT_ZOOM,
      };

      map.current.flyTo({ center: fallback.center, zoom: fallback.zoom });
    }
  }, [
    activeType,
    activeDifficulty,
    searchQuery,
    destinationId,
    baseSites,
    t,
    initialCenter,
    initialZoom,
    maxZoom,
  ]);

  useEffect(() => {
    selectedSiteIdRef.current = selectedSiteId;
  }, [selectedSiteId]);

  return (
    <div className='p-4'>
      <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:justify-between'>
        {/* Filtros en dos columnas de ancho igual */}
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
            onClick={() => {
              setActiveType('all');
              setActiveDifficulty('all');
            }}
            className='cursor-pointer px-4 py-1.5 text-sm font-semibold rounded-full border border-brand-neutral text-brand-neutral hover:bg-brand-cta-orange hover:text-brand-primary-dark transition shadow-sm'>
            {t('common:clearFiltersLabel')}
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-start mb-4'>
        <div>
          <div className='relative w-full'>
            {/* Ícono de búsqueda a la izquierda */}
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='w-4 h-4 text-brand-neutral/60' />
            </div>

            {/* Campo de búsqueda */}
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                t('common:searchPlaceholder') || 'Buscar por nombre...'
              }
              className='w-full pl-10 pr-8 py-2 border rounded-md text-sm text-brand-neutral placeholder:text-brand-neutral/60 focus:outline-none focus:ring-2 focus:ring-brand-cta-orange'
            />

            {/* Botón limpiar */}
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

      <div
        ref={mapContainer}
        className='w-full h-[500px] rounded-lg shadow-md'
      />

      {activeSite && (
        <DiveSiteModal
          site={activeSite}
          onClose={() => setActiveSite(null)}
          t={t}
        />
      )}
    </div>
  );
};

export default MapComponent;
