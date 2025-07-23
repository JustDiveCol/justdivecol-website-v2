import {
  AVAILABILITY,
  CERTIFICATION_CATEGORIES,
  CERTIFICATION_IDS,
  CURRENCY,
  SHARED_TRANSLATION_KEYS,
} from '@/data/global/constants';

export const expSantaMartaOct2025Session = {
  id: 'santa-marta-oct-2025',
  experienceId: 'exp-santa-marta',
  slug: 'oct-2025', // ej. 'sept-2025'
  startDate: '2025-10-24',
  endDate: '2025-10-27',
  price: 4000000,
  currency: CURRENCY.COP,
  founders: false,
  capacity: 8,
  seatsAvailable: 8,
  availability: AVAILABILITY.available,
  certificationIds: [CERTIFICATION_IDS.owd],

  // --- Payment Plan ---
  paymentPlan: {
    titleKey: SHARED_TRANSLATION_KEYS.experiencesPaymentTitleKey,
    modules: [
      {
        id: 'payment1',
        nameKey: 'expSmOct25PaymentPlanStep1Name',
        descriptionKey: 'expSmOct25PaymentPlanStep1Desc',
      },
      {
        id: 'payment2',
        nameKey: 'expSmOct25PlanStep2Name',
        descriptionKey: 'expSmOct25PaymentPlanStep2Desc',
      },
      {
        id: 'payment3',
        nameKey: 'expSmOct25PlanStep3Name',
        descriptionKey: 'expSmOct25PaymentPlanStep3Desc',
      },
    ],
    notes: [SHARED_TRANSLATION_KEYS.experiencesDefaultPaymentNoteKey],
  },
};
