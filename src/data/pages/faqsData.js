// src/data/pages/faqsData.js
import faqs_header_background from '../../assets/images/page-specific/faqs/faqs-header-background.webp';

import logo from '../../assets/images/logos/logo.png';

export const faqsData = {
  seo: {
    titleKey: 'faqsSeoTitle',
    descriptionKey: 'faqsSeoDesc',
    keywords: 'faqsSeoKeywords',
    imageUrl: faqs_header_background,
    url: '/faqs',
  },
  header: {
    backgroundImage: faqs_header_background,
    titleKey: 'faqsHeaderTitle',
    subtitleKey: 'faqsHeaderSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'faqsHeaderMainLogoAlt',
    // complementaryLogo: '',
    // complementaryLogoAltKey: 'faqsHeaderComplementaryLogoAlt',
    // textOverlayKey: 'faqsHeaderTextOverlay',
    photoCreditKey: 'faqsHeaderPhotoCredit',
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
