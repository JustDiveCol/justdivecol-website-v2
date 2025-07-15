import React, { useEffect, useRef, useState, useMemo } from 'react';
import maplibregl, { LngLatBounds } from 'maplibre-gl';
import { motion } from 'motion/react';
import { createRoot } from 'react-dom/client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTranslation } from 'react-i18next';

import {
  allDivesites,
  getDivesitesByDestination,
} from '../../../data/content/divesites/_index';

import {
  DIVE_TYPES,
  DIVE_DIFFICULTIES,
  getDiveTypeById,
  getDifficultyById,
  getDiveLevelById,
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
    case 'blue-hole':
      return BlueHoleIcon;
    case 'freshwater':
      return FreshWaterIcon;
    case 'artificial-reef':
      return ArtificialReefIcon;
    default:
      return DiverIcon;
  }
};

const MapComponent = ({ destinationId }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);
  const { t } = useTranslation(['divesites', 'common']);

  const [activeType, setActiveType] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [filteredSites, setFilteredSites] = useState([]);

  const baseSites = useMemo(() => {
    return destinationId
      ? getDivesitesByDestination(destinationId)
      : allDivesites;
  }, [destinationId]);

  const typeFilterOptions = useMemo(() => {
    const presentTypeIds = new Set();
    filteredSites.forEach((site) => {
      site.typeIds?.forEach((id) => presentTypeIds.add(id));
    });
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
    if (map.current) return;

    const initialCenter =
      baseSites.length > 0 ? baseSites[0].coordinates : [-74.235535, 11.225996];

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.stadiamaps.com/styles/outdoors.json',
      center: initialCenter,
      zoom: 10,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [baseSites]);

  useEffect(() => {
    if (!map.current) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    const matchingSites = baseSites.filter((site) => {
      const typeMatch =
        activeType === 'all' || site.typeIds.includes(activeType);
      const difficultyMatch =
        activeDifficulty === 'all' || site.difficultyId === activeDifficulty;
      return typeMatch && difficultyMatch;
    });

    setFilteredSites(matchingSites);

    matchingSites.forEach((site) => {
      const el = document.createElement('div');
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.cursor = 'pointer';

      const IconComponent = getIconComponent(site.typeIds?.[0]);

      const MotionMarker = (
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
            backgroundColor: 'var(--color-brand-white)',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}>
          {IconComponent && (
            <IconComponent className='w-4 h-4 text-brand-primary-dark' />
          )}
        </motion.div>
      );

      createRoot(el).render(MotionMarker);

      const hoverPopup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 20,
      }).setText(t(site.nameKey));

      el.addEventListener('mouseenter', () =>
        hoverPopup.setLngLat(site.coordinates).addTo(map.current)
      );
      el.addEventListener('mouseleave', () => hoverPopup.remove());

      const fullPopup = new maplibregl.Popup({ offset: 25, closeButton: true })
        .setHTML(`
  <div style="
    font-family: var(--font-sans);
    max-width: 260px;
    padding: 16px;
    background-color: var(--color-brand-white);
    border: 2px solid var(--color-brand-primary-dark);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    color: #333;
  ">
    <h3 style="
      margin-bottom: 10px;
      font-size: 18px;
      color: var(--color-brand-primary-dark);
      font-weight: 600;
      font-family: var(--font-sans);
    ">
      ${t(site.nameKey)}
    </h3>
    <p style="
      margin-bottom: 12px;
      font-size: 14px;
      color: #555;
      font-family: var(--font-serif);
    ">
      ${t(site.shortDescriptionKey)}
    </p>
    <ul style="
      font-size: 13px;
      list-style: none;
      padding: 0;
      margin: 0;
      line-height: 1.6;
    ">
      <li><strong>${t('divesites:depthLabel')}:</strong> ${site.maxDepth}</li>
      <li><strong>${t('divesites:levelRequiredLabel')}:</strong> ${t(
        getDiveLevelById(site.levelRequiredId)?.translationKey
      )}</li>
      <li><strong>${t('divesites:difficultyLabel')}:</strong> ${t(
        getDifficultyById(site.difficultyId)?.translationKey
      )}</li>
      <li><strong>${t('divesites:typeLabel')}:</strong> ${site.typeIds
        .map((id) => t(getDiveTypeById(id)?.translationKey))
        .join(', ')}</li>
    </ul>
  </div>
`);

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(site.coordinates)
        .setPopup(fullPopup)
        .addTo(map.current);

      fullPopup.on('open', () => {
        const popupLngLat = marker.getLngLat();
        const mapInstance = map.current;
        const pixelPoint = mapInstance.project(popupLngLat);
        const newCenter = mapInstance.unproject([
          pixelPoint.x,
          pixelPoint.y - 150,
        ]);

        mapInstance.easeTo({
          center: newCenter,
          duration: 500,
          essential: true,
        });
      });

      markersRef.current.push(marker);
    });

    if (matchingSites.length > 0) {
      const bounds = new LngLatBounds();
      matchingSites.forEach((site) => bounds.extend(site.coordinates));
      map.current.fitBounds(bounds, {
        padding: 50,
        duration: 1000,
        maxZoom: 15,
      });
    } else {
      map.current.flyTo({ center: [-74.235535, 11.225996], zoom: 10 });
    }
  }, [activeType, activeDifficulty, destinationId, baseSites, t]);

  return (
    <div className='p-4'>
      <div className='mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='text-sm font-semibold'>
            {t('divesites:typeLabel')}:
          </span>
          {typeFilterOptions.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                activeType === type.id
                  ? 'bg-cta-green text-brand-white'
                  : 'bg-brand-white text-cta-green border-cta-green hover:bg-cta-green/10'
              }`}>
              {t(type.translationKey)}
            </button>
          ))}
        </div>
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='text-sm font-semibold'>
            {t('divesites:difficultyLabel')}:
          </span>
          {difficultyFilterOptions.map((diff) => (
            <button
              key={diff.id}
              onClick={() => setActiveDifficulty(diff.id)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                activeDifficulty === diff.id
                  ? 'bg-green-900 text-white'
                  : 'bg-white text-green-900 border-green-900'
              }`}>
              {t(diff.translationKey)}
            </button>
          ))}
        </div>
        <div className='mt-2 sm:mt-0'>
          <button
            onClick={() => {
              setActiveType('all');
              setActiveDifficulty('all');
            }}
            className='text-sm text-gray-600 underline hover:text-blue-700 transition'>
            {t('common:clearFiltersLabel')}
          </button>
        </div>
      </div>
      {filteredSites.length === 0 && (
        <div className='text-sm text-center text-gray-600 mb-2'>
          {t('divesites:noMatchingSites')}
        </div>
      )}
      {filteredSites.length > 0 && (
        <div className='text-sm text-gray-700 mb-2 text-center sm:text-left'>
          {t('divesites:showingSitesCountFull', {
            filtered: filteredSites.length,
            total: baseSites.length,
          })}
        </div>
      )}
      <div
        ref={mapContainer}
        className='w-full h-[500px] rounded-lg shadow-md'
      />
    </div>
  );
};

export default MapComponent;
