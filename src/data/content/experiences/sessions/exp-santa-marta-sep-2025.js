import {
  AVAILABILITY,
  CERTIFICATION_IDS,
  CURRENCY,
  SHARED_TRANSLATION_KEYS,
} from '@/data/global/constants';

export const expSantaMartaSep2025Session = {
  id: 'santa-marta-sept-2025',
  experienceId: 'exp-santa-marta',
  slug: 'sept-2025', // ej. 'sept-2025'
  // titleKey: 'expSmSep25Title',
  startDate: '2025-09-26',
  endDate: '2025-09-29',
  price: 3500000,
  currency: CURRENCY.COP,
  founders: true,
  capacity: 8,
  seatsAvailable: 8,
  availability: AVAILABILITY.available,
  certificationIds: [CERTIFICATION_IDS.owd],

  // --- Payment Plan ---
  paymentPlan: {
    titleKey: SHARED_TRANSLATION_KEYS.EXPERIENCES_PAYMENT_TITLE,
    modules: [
      {
        id: 'payment1',
        nameKey: 'expSmSep25PaymentPlanStep1Name',
        descriptionKey: 'expSmSep25PaymentPlanStep1Desc',
      },
      {
        id: 'payment2',
        nameKey: 'expSmSep25PlanStep2Name',
        descriptionKey: 'expSmSep25PaymentPlanStep2Desc',
      },
      {
        id: 'payment3',
        nameKey: 'expSmSep25PlanStep3Name',
        descriptionKey: 'expSmSep25PaymentPlanStep3Desc',
      },
    ],
    notes: [SHARED_TRANSLATION_KEYS.EXPERIENCES_DEFAULT_PAYMENT_NOTE],
  },
};
