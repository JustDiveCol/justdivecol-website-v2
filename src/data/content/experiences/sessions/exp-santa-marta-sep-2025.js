import {
  AVAILABILITY,
  CERTIFICATION_CATEGORIES,
  CERTIFICATION_IDS,
  CURRENCY,
} from '@/data/global/constants';

export const expSantaMartaSep2025Session = {
  id: 'santa-marta-sept-2025',
  experienceId: 'exp-santa-marta',
  slug: 'sept-2025', // ej. 'sept-2025'
  startDate: '2025-09-26',
  endDate: '2025-09-29',
  price: 3500000,
  currency: CURRENCY.COP,
  capacity: 8,
  seatsAvailable: 8,
  availability: AVAILABILITY.available,
  certificationIds: [CERTIFICATION_IDS.owd],
};
