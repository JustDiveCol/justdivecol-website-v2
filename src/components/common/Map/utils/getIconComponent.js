// utils/getIconComponent.js

import { DiverIcon } from '../../../../assets/icons/DiverIcon';
import { ReefIcon } from '../../../../assets/icons/ReefIcon';
import { WreckIcon } from '../../../../assets/icons/WreckIcon';
import { WallIcon } from '../../../../assets/icons/WallIcon';
import { PinnacleIcon } from '../../../../assets/icons/PinnacleIcon';
import { CaveIcon } from '../../../../assets/icons/CaveIcon';
import { DriftIcon } from '../../../../assets/icons/DriftIcon';
import { MuckIcon } from '../../../../assets/icons/MuckIcon';
import { BlueHoleIcon } from '../../../../assets/icons/BlueHoleIcon';
import { FreshWaterIcon } from '../../../../assets/icons/FreshWaterIcon';
import { ArtificialReefIcon } from '../../../../assets/icons/ArtificialReefIcon';

export const getIconComponent = (typeId) => {
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
