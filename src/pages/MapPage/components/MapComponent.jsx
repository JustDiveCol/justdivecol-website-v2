import React, { useEffect, useRef, useState, useMemo } from 'react';
import maplibregl, { LngLatBounds } from 'maplibre-gl';
import { motion } from 'motion/react';
import { createRoot } from 'react-dom/client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTranslation } from 'react-i18next';

// ========== React Components ==========
import DiveFiltersComponent from './DiveFiltersComponent';
import DiveSiteModalComponent from './DiveSiteModalComponent';

// ========== Helpers ==========
import { destinationsById } from '../../../data/content/destinations/_index';

import {
  getMapConfigByDestination,
  getDivesitesByDestination,
  allDivesites,
} from '../../../data/content/divesites/_index';

import { DIVE_TYPES, DIVE_DIFFICULTIES } from '../../../data/global/diveSiteOptions';

// ========== Icons ==========
import { DiverIcon } from '../../../assets/icons/DiverIcons';
import { InfoIcon } from '../../../assets/icons/NavbarIcons';
import {
  ReefIcon,
  WreckIcon,
  WallIcon,
  PinnacleIcon,
  CaveIcon,
  MuckIcon,
  BlueHoleIcon,
  FreshWaterIcon,
  ArtificialReefIcon,
  FlagIcon,
} from '../../../assets/icons/MapsIcons';

// ========== Default Constants ==========
const DEFAULT_CENTER = [-74.297333, 4.570868];
const DEFAULT_ZOOM = 6;

// ========== Icons ==========
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
      return CaveIcon;
    case 'cave':
      return CaveIcon;
    case 'cenote':
      return CaveIcon;
    case 'drift':
      return DiverIcon;
    case 'muck':
      return MuckIcon;
    case 'blueHole':
      return BlueHoleIcon;
    case 'freshwater':
      return FreshWaterIcon;
    case 'artificialReef':
      return ArtificialReefIcon;
    default:
      return FlagIcon;
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
      backgroundColor: isSelected ? 'var(--color-brand-cta-orange)' : 'var(--color-brand-white)',
      width: '100%',
      height: '100%',
      pointerEvents: 'auto',
      transition: 'background-color 0.3s ease',
    }}
  >
    <motion.div
      whileHover={{ scale: 1.6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <IconComponent
        className={isSelected ? 'text-white w-4 h-4' : 'text-brand-primary-dark w-4 h-4'}
      />
    </motion.div>
  </motion.div>
);

const MapComponent = ({ destinationId }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef({});
  const hoverPopup = useRef(
    new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 25,
      anchor: 'bottom',
      className: 'unstyled-popup',
    })
  );
  const isInitialMount = useRef(true);
  const { t } = useTranslation(['divesites', 'map', 'destinations']);

  const [mapHeight, setMapHeight] = useState('500px');
  const [activeType, setActiveType] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [activeDestination, setActiveDestination] = useState('all');
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
    () => (destinationId ? getDivesitesByDestination(destinationId) : allDivesites),
    [destinationId]
  );

  const typeFilterOptions = useMemo(() => {
    const relevantSites = baseSites.filter(
      (site) =>
        (activeDifficulty === 'all' || site.difficultyId === activeDifficulty) &&
        (activeDestination === 'all' || site.destinationId === activeDestination)
    );
    const presentTypeIds = new Set();
    relevantSites.forEach((site) => site.typeIds?.forEach((id) => presentTypeIds.add(id)));
    const filteredTypes = DIVE_TYPES.filter((type) => presentTypeIds.has(type.id));
    return [{ id: 'all', translationKey: 'map:allLabel' }, ...filteredTypes];
  }, [baseSites, activeDifficulty, activeDestination]);

  const difficultyFilterOptions = useMemo(() => {
    const relevantSites = baseSites.filter(
      (site) =>
        (activeType === 'all' || site.typeIds.includes(activeType)) &&
        (activeDestination === 'all' || site.destinationId === activeDestination)
    );
    const presentDifficultyIds = new Set(relevantSites.map((s) => s.difficultyId));
    const filteredDifficulties = DIVE_DIFFICULTIES.filter((diff) =>
      presentDifficultyIds.has(diff.id)
    );
    return [{ id: 'all', translationKey: 'map:allLabel' }, ...filteredDifficulties];
  }, [baseSites, activeType, activeDestination]);

  const destinationOptions = useMemo(() => {
    if (destinationId) return [];
    const relevantSites = baseSites.filter(
      (site) =>
        (activeType === 'all' || site.typeIds.includes(activeType)) &&
        (activeDifficulty === 'all' || site.difficultyId === activeDifficulty)
    );
    const uniqueDestinationIds = new Set(relevantSites.map((s) => s.destinationId));
    if (uniqueDestinationIds.size === 0) return [];
    const options = Array.from(uniqueDestinationIds)
      .map((id) => {
        const destination = destinationsById[id];
        if (!destination) return null;
        return { id: destination.id, translationKey: destination.nameKey };
      })
      .filter(Boolean);
    if (uniqueDestinationIds.size > 1) {
      return [{ id: 'all', translationKey: 'map:allLabel' }, ...options];
    }
    return options;
  }, [baseSites, activeType, activeDifficulty, destinationId]);

  useEffect(() => {
    const calculateAndSetMapHeight = () => {
      if (mapContainer.current) {
        const topOffset = mapContainer.current.getBoundingClientRect().top;
        const PADDING_BOTTOM = 16;
        const MIN_MAP_HEIGHT = 500;
        const availableHeight = window.innerHeight - topOffset - PADDING_BOTTOM;
        const finalHeight = Math.max(availableHeight, MIN_MAP_HEIGHT);
        setMapHeight(`${finalHeight}px`);
      }
    };
    calculateAndSetMapHeight();
    window.addEventListener('resize', calculateAndSetMapHeight);
    return () => window.removeEventListener('resize', calculateAndSetMapHeight);
  }, []);

  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, { root }]) => {
      const site = baseSites.find((s) => s.id === id);
      if (!site) return;
      const IconComponent = getIconComponent(site.typeIds?.[0]);
      root.render(
        <MotionMarker IconComponent={IconComponent} isSelected={id === selectedSiteId} />
      );
    });
  }, [selectedSiteId, baseSites]);

  useEffect(() => {
    if (!map.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://a.tile.opentopomap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            },
          },
          layers: [
            {
              id: 'osm',
              type: 'raster',
              source: 'osm',
            },
          ],
        },
        center: initialCenter,
        zoom: initialZoom,
        minZoom,
        maxZoom,
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
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setSelectedSiteId(null);
    setActiveSite(null);
  }, [activeType, activeDifficulty, activeDestination, searchQuery]);

  useEffect(() => {
    if (!map.current) return;
    Object.values(markersRef.current).forEach(({ marker }) => marker.remove());
    markersRef.current = {};

    const matchingSites = baseSites
      .filter((site) => {
        const typeMatch = activeType === 'all' || site.typeIds.includes(activeType);
        const difficultyMatch =
          activeDifficulty === 'all' || site.difficultyId === activeDifficulty;
        const destinationMatch =
          activeDestination === 'all' || site.destinationId === activeDestination;
        const translatedName = t(site.nameKey);
        const nameMatch = translatedName?.toLowerCase().includes(searchQuery.toLowerCase());
        return typeMatch && difficultyMatch && destinationMatch && nameMatch;
      })
      .map((site) => ({ ...site, translatedName: t(site.nameKey) }));

    setFilteredSites(matchingSites);

    if (!matchingSites.some((site) => site.id === selectedSiteIdRef.current)) {
      if (selectedSiteIdRef.current) setSelectedSiteId(null);
    }

    matchingSites.forEach((site) => {
      const el = document.createElement('div');
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.cursor = 'pointer';
      const IconComponent = getIconComponent(site.typeIds?.[0]);
      const root = createRoot(el);

      root.render(
        <MotionMarker IconComponent={IconComponent} isSelected={selectedSiteId === site.id} />
      );

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(site.coordinates)
        .addTo(map.current);

      // --- FIX: Event listeners simplified for correct hover behavior ---
      el.addEventListener('mouseenter', () => {
        // Always show popup on hover, regardless of selection state.
        map.current.getCanvas().style.cursor = 'pointer';
        const popupContent = document.createElement('div');
        popupContent.innerText = site.translatedName;
        popupContent.style.padding = '6px 12px';
        popupContent.style.backgroundColor = 'white';
        popupContent.className = 'text-brand-primary-dark font-semibold text-sm';
        popupContent.style.borderRadius = '8px';
        popupContent.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';

        hoverPopup.current
          .setLngLat(site.coordinates)
          .setDOMContent(popupContent)
          .addTo(map.current);
      });

      el.addEventListener('mouseleave', () => {
        map.current.getCanvas().style.cursor = '';
        if (hoverPopup.current.isOpen()) {
          hoverPopup.current.remove();
        }
      });

      el.addEventListener('click', () => {
        // Ensure hover popup is removed before handling the click.
        map.current.getCanvas().style.cursor = '';
        if (hoverPopup.current.isOpen()) {
          hoverPopup.current.remove();
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

    if (matchingSites.length > 0 && !selectedSiteId) {
      const bounds = new LngLatBounds();
      matchingSites.forEach((site) => bounds.extend(site.coordinates));
      if (bounds.getNorthEast() && bounds.getSouthWest()) {
        map.current.fitBounds(bounds, {
          padding: 50,
          duration: 1000,
          maxZoom: maxZoom || 15,
        });
      }
    } else if (matchingSites.length === 0) {
      const fallback = {
        center: initialCenter || DEFAULT_CENTER,
        zoom: initialZoom || DEFAULT_ZOOM,
      };
      map.current.flyTo({ center: fallback.center, zoom: fallback.zoom });
    }
  }, [
    baseSites,
    activeType,
    activeDifficulty,
    activeDestination,
    searchQuery,
    t,
    destinationId,
    initialCenter,
    initialZoom,
    maxZoom,
    selectedSiteId,
  ]);

  useEffect(() => {
    selectedSiteIdRef.current = selectedSiteId;
  }, [selectedSiteId]);

  return (
    <div className="p-2">
      <DiveFiltersComponent
        t={t}
        activeType={activeType}
        setActiveType={setActiveType}
        typeFilterOptions={typeFilterOptions}
        activeDifficulty={activeDifficulty}
        setActiveDifficulty={setActiveDifficulty}
        difficultyFilterOptions={difficultyFilterOptions}
        activeDestination={activeDestination}
        setActiveDestination={setActiveDestination}
        destinationOptions={destinationOptions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearFilters={() => {
          setActiveType('all');
          setActiveDifficulty('all');
          setActiveDestination('all');
          setSearchQuery('');
          setSelectedSiteId(null);
        }}
        filteredSites={filteredSites}
        baseSites={baseSites}
      />
      <div
        ref={mapContainer}
        style={{ height: mapHeight }}
        className="w-full rounded-lg shadow-md"
      />
      {activeSite && (
        <DiveSiteModalComponent
          site={activeSite}
          onClose={() => {
            setActiveSite(null);
          }}
          t={t}
        />
      )}
      <div
        className="bg-brand-cta-yellow/20 border border-brand-cta-yellow/30 text-brand-cta-yellow px-4 py-3 rounded-lg relative mt-4 text-sm"
        role="alert"
      >
        <div className="flex items-center">
          <InfoIcon className="w-5 h-5 mr-3" />
          <div>
            <strong className="font-bold">{t('mapDisclaimerTitle', { ns: 'map' })}</strong>
            <span className="block sm:inline">{t('mapDisclaimerText', { ns: 'map' })}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
