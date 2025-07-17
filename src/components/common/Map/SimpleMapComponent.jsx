// SimpleMapComponent.jsx
import React, { useRef, useEffect, useState, useMemo } from 'react';
import maplibregl, { LngLatBounds } from 'maplibre-gl';
import { createRoot } from 'react-dom/client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTranslation } from 'react-i18next';

import {
  getMapConfigByDestination,
  getDivesitesByDestination,
  allDivesites,
} from '../../../data/content/divesites/_index';

import { getIconComponent } from './utils/getIconComponent';
import MotionMarker from './MotionMarker';
import DiveSiteModal from './DiveSiteModal';

const SimpleMapComponent = ({
  destinationId,
  sites,
  selectedSiteId,
  setSelectedSiteId,
  setActiveSite,
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef({});
  const hoverPopupRef = useRef(null);
  const { t } = useTranslation(['divesites', 'common']);

  const [internalActiveSite, internalSetActiveSite] = useState(null);
  const [internalSelectedSiteId, internalSetSelectedSiteId] = useState(null);
  const selectedSiteIdRef = useRef(null);

  const {
    center: initialCenter,
    zoom: initialZoom,
    minZoom,
    maxZoom,
  } = getMapConfigByDestination(destinationId);

  const handleCloseModal = () => {
    // Cierra el modal inmediatamente
    setActive(null);

    // Mantén el ícono seleccionado visible por 1.5 segundos
    setTimeout(() => {
      setSelectedId(null);
    }, 1500);
  };

  const baseSites = useMemo(
    () =>
      sites ??
      (destinationId ? getDivesitesByDestination(destinationId) : allDivesites),
    [sites, destinationId]
  );

  const selectedId = selectedSiteId ?? internalSelectedSiteId;
  const setSelectedId = setSelectedSiteId ?? internalSetSelectedSiteId;
  const activeSite = setActiveSite
    ? baseSites.find((s) => s.id === selectedId)
    : internalActiveSite;
  const setActive = setActiveSite ?? internalSetActiveSite;

  useEffect(() => {
    if (!map.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.stadiamaps.com/styles/outdoors.json',
        center: initialCenter,
        zoom: initialZoom,
        minZoom,
        maxZoom,
      });
      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [destinationId, initialCenter, initialZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (!map.current || !baseSites.length) return;

    const bounds = new LngLatBounds();
    baseSites.forEach((site) => bounds.extend(site.coordinates));
    map.current.fitBounds(bounds, {
      padding: 50,
      duration: 1000,
      maxZoom: maxZoom || 15,
    });
  }, [baseSites, maxZoom]);

  useEffect(() => {
    if (!map.current) return;

    Object.values(markersRef.current).forEach(({ marker }) => marker.remove());
    markersRef.current = {};

    const translatedSites = baseSites.map((site) => ({
      ...site,
      translatedName: t(site.nameKey),
    }));

    translatedSites.forEach((site) => {
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
      popupContent.className = 'text-brand-primary-dark font-semibold text-sm';
      popupContent.style.fontSize = '14px';
      popupContent.style.fontWeight = '600';
      popupContent.style.borderRadius = '8px';
      popupContent.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      popupContent.style.pointerEvents = 'none';
      popupContent.style.backgroundColor = 'transparent';

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 25,
        anchor: 'bottom',
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

        setActive(site);
        setSelectedId(site.id);

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
  }, [baseSites, setActive, setSelectedId, t]);

  useEffect(() => {
    selectedSiteIdRef.current = selectedId;
    Object.entries(markersRef.current).forEach(([id, { root }]) => {
      const site = baseSites.find((s) => s.id === id);
      if (!site) return;
      const IconComponent = getIconComponent(site.typeIds?.[0]);

      root.render(
        <MotionMarker
          IconComponent={IconComponent}
          isSelected={id === selectedSiteIdRef.current}
        />
      );
    });
  }, [selectedId, baseSites]);

  return (
    <div className='p-4'>
      <div
        ref={mapContainer}
        className='w-full h-[500px] rounded-lg shadow-md'
      />
      {activeSite && (
        <DiveSiteModal
          site={activeSite}
          onClose={handleCloseModal}
          t={t}
        />
      )}
    </div>
  );
};

export default SimpleMapComponent;
