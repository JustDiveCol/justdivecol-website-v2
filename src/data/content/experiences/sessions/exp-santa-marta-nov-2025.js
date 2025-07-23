import {
  AVAILABILITY,
  CERTIFICATION_CATEGORIES,
  CERTIFICATION_IDS,
  CURRENCY,
  SHARED_TRANSLATION_KEYS,
} from '@/data/global/constants';

export const expSantaMartaNov2025Session = {
  id: 'santa-marta-nov-2025',
  experienceId: 'exp-santa-marta',
  slug: 'nov-2025', // ej. 'sept-2025'
  startDate: '2025-11-21',
  endDate: '2025-11-24',
  price: 3500000,
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
        nameKey: 'expSmNov25PaymentPlanStep1Name',
        descriptionKey: 'expSmNov25PaymentPlanStep1Desc',
      },
      {
        id: 'payment2',
        nameKey: 'expSmNov25PlanStep2Name',
        descriptionKey: 'expSmNov25PaymentPlanStep2Desc',
      },
      {
        id: 'payment3',
        nameKey: 'expSmNov25PlanStep3Name',
        descriptionKey: 'expSmNov25PaymentPlanStep3Desc',
      },
    ],
    notes: [SHARED_TRANSLATION_KEYS.experiencesDefaultPaymentNoteKey],
  },
};
