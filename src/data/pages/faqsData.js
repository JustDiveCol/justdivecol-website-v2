// src/data/pages/faqsData.js
import headerBackground from '../../assets/images/page-specific/faqs/faqs-header-background.webp';
import { LOGO_MAIN } from '../global/assets';
import { SHARED_TRANSLATION_KEYS } from '../global/constants';

export const faqsData = {
  seo: {
    titleKey: 'faqsSeoTitle',
    descriptionKey: 'faqsSeoDesc',
    keywords: 'faqsSeoKeywords',
    imageUrl: headerBackground,
    url: '/faqs',
  },
  header: {
    backgroundImage: headerBackground,
    titleKey: 'faqsHeaderTitle',
    subtitleKey: 'faqsHeaderSubtitle',
    mainLogo: LOGO_MAIN.mainLogo,
    mainLogoAltKey: LOGO_MAIN.altKey,
    photoCredit: {
      prefixKey: SHARED_TRANSLATION_KEYS.photoCreditPrefixKey,
      text: 'Camilo Beltran @JustDiveCol',
    },
  },
  faqs: [
    {
      id: 'certificationsFaqsSection',
      sectionTitleKey: 'certificationsFaqsTitle',
      faqs: [
        {
          id: 'firstCertification',
          questionKey: 'faqFirstCertificationQuestion',
          answerKey: 'faqFirstCertificationAnswer',
        },
        {
          id: 'whatIsIncludedCertification',
          questionKey: 'faqWhatIsIncludedCertificationQuestion',
          answerKey: 'faqWhatIsIncludedCertificationAnswer',
        },
        {
          id: 'swimmingRequirement',
          questionKey: 'faqSwimmingRequirementQuestion',
          answerKey: 'faqSwimmingRequirementAnswer',
        },
        {
          id: 'minimunAge',
          questionKey: 'faqMinimunAgeQuestion',
          answerKey: 'faqMinimunAgeAnswer',
        },
        {
          id: 'medicalRequirement',
          questionKey: 'faqMedicalRequirementQuestion',
          answerKey: 'faqMedicalRequirementAnswer',
        },
        {
          id: 'airCompensation',
          questionKey: 'faqAirCompensationQuestion',
          answerKey: 'faqAirCompensationAnswer',
        },
        {
          id: 'respirationIssue',
          questionKey: 'faqRespirationIssueQuestion',
          answerKey: 'faqRespirationIssueAnswer',
        },
      ],
    },
    {
      id: 'tripsAndExpiriences',
      sectionTitleKey: 'tripsAndExpiriencesFaqsTitle',
      faqs: [
        {
          id: 'experienceType',
          questionKey: 'faqExperienceTypeQuestion',
          answerKey: 'faqExperienceTypeAnswer',
        },
        {
          id: 'experienceLevel',
          questionKey: 'faqExperienceLevelQuestion',
          answerKey: 'faqExperienceLevelAnswer',
        },
        {
          id: 'experienceAlone',
          questionKey: 'faqExperienceAloneQuestion',
          answerKey: 'faqExperienceAloneAnswer',
        },
        {
          id: 'experiencePacking',
          questionKey: 'faqExperiencePackingQuestion',
          answerKey: 'faqExperiencePackingAnswer',
        },
        {
          id: 'experienceCustom',
          questionKey: 'faqExperienceCustomQuestion',
          answerKey: 'faqExperienceCustomAnswer',
        },
      ],
    },
    {
      id: 'bookingAndPayment',
      sectionTitleKey: 'bookingAndPaymentFaqsTitle',
      faqs: [
        {
          id: 'bookingAndPaymentHowToReserve',
          questionKey: 'faqBookingAndPaymentHowToReserveQuestion',
          answerKey: 'faqBookingAndPaymentHowToReserveAnswer',
        },
        {
          id: 'bookingAndPaymentMethods',
          questionKey: 'faqBookingAndPaymentMethodsQuestion',
          answerKey: 'faqBookingAndPaymentMethodsAnswer',
        },
        {
          id: 'bookingAndPaymentPolicies',
          questionKey: 'faqBookingAndPaymentPoliciesQuestion',
          answerKey: 'faqBookingAndPaymentPoliciesAnswer',
        },
      ],
    },
    {
      id: 'safetyAndHealth',
      sectionTitleKey: 'safetyAndHealthFaqsTitle',
      faqs: [
        {
          id: 'safetyAndHealthMeasures',
          questionKey: 'faqSafetyAndHealthMeasuresQuestion',
          answerKey: 'faqSafetyAndHealthMeasuresAnswer',
        },
        {
          id: 'safetyAndHealthInsurance',
          questionKey: 'faqSafetyAndHealthInsuranceQuestion',
          answerKey: 'faqSafetyAndHealthInsuranceAnswer',
        },
        {
          id: 'safetyAndHealthEmergency',
          questionKey: 'faqSafetyAndHealthEmergencyQuestion',
          answerKey: 'faqSafetyAndHealthEmergencyAnswer',
        },
        {
          id: 'safetyAndHealthLiability',
          questionKey: 'faqSafetyAndHealthLiabilityQuestion',
          answerKey: 'faqSafetyAndHealthLiabilityAnswer',
        },
      ],
    },
    {
      id: 'generalInformation',
      sectionTitleKey: 'generalInformationFaqsTitle',
      faqs: [
        {
          id: 'generalInformationDiveCenter',
          questionKey: 'faqGeneralInformationDiveCenterQuestion',
          answerKey: 'faqGeneralInformationDiveCenterAnswer',
        },
        {
          id: 'generalInformationCustomExperience',
          questionKey: 'faqGeneralInformationCustomExperienceQuestion',
          answerKey: 'faqGeneralInformationCustomExperienceAnswer',
        },
        {
          id: 'generalInformationInformation',
          questionKey: 'faqGeneralInformationInformationQuestion',
          answerKey: 'faqGeneralInformationInformationAnswer',
        },
        {
          id: 'generalInformationEnvironment',
          questionKey: 'faqGeneralInformationEnvironmentQuestion',
          answerKey: 'faqGeneralInformationEnvironmentAnswer',
        },
        {
          id: 'generalInformationContact',
          questionKey: 'faqGeneralInformationContactQuestion',
          answerKey: 'faqGeneralInformationContactAnswer',
        },
      ],
    },
  ],

  // Add more sections and points as needed
};
