// MapLayout.jsx
import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import DiveFilters from './DiveFilters';
import SimpleMapComponent from './SimpleMapComponent';

import {
  getDivesitesByDestination,
  allDivesites,
} from '../../../data/content/divesites/_index';
import {
  DIVE_TYPES,
  DIVE_DIFFICULTIES,
} from '../../../data/global/diveSiteOptions';

const MapLayout = ({ destinationId }) => {
  const { t } = useTranslation(['divesites', 'common']);

  const [activeType, setActiveType] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSiteId, setSelectedSiteId] = useState(null);
  const [activeSite, setActiveSite] = useState(null);

  const baseSites = useMemo(() => {
    return destinationId
      ? getDivesitesByDestination(destinationId)
      : allDivesites;
  }, [destinationId]);

  const translatedSites = useMemo(() => {
    return baseSites.map((site) => ({
      ...site,
      translatedName: t(site.nameKey),
    }));
  }, [baseSites, t]);

  const filteredSites = useMemo(() => {
    return translatedSites.filter((site) => {
      const matchesType =
        activeType === 'all' || site.typeIds.includes(activeType);
      const matchesDifficulty =
        activeDifficulty === 'all' || site.difficultyId === activeDifficulty;
      const matchesSearch = site.translatedName
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesType && matchesDifficulty && matchesSearch;
    });
  }, [translatedSites, activeType, activeDifficulty, searchQuery]);

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
    const presentDifficulties = new Set(
      filteredSites.map((s) => s.difficultyId)
    );
    const filteredDifficulties = DIVE_DIFFICULTIES.filter((d) =>
      presentDifficulties.has(d.id)
    );
    return [
      { id: 'all', translationKey: 'common:allLabel' },
      ...filteredDifficulties,
    ];
  }, [filteredSites]);

  return (
    <div className='p-4'>
      <DiveFilters
        t={t}
        activeType={activeType}
        setActiveType={setActiveType}
        typeFilterOptions={typeFilterOptions}
        activeDifficulty={activeDifficulty}
        setActiveDifficulty={setActiveDifficulty}
        difficultyFilterOptions={difficultyFilterOptions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearFilters={() => {
          setActiveType('all');
          setActiveDifficulty('all');
          setSearchQuery('');
        }}
        filteredSites={filteredSites}
        baseSites={baseSites}
      />

      <SimpleMapComponent
        destinationId={destinationId}
        sites={filteredSites}
        selectedSiteId={selectedSiteId}
        setSelectedSiteId={setSelectedSiteId}
        activeSite={activeSite}
        setActiveSite={setActiveSite}
      />
    </div>
  );
};

export default MapLayout;
