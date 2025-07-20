// src/data/pages/gearFaqsData.js
import logo from '../../assets/images/logos/logo.png';
import padi from '../../assets/images/logos/padi.png';

export const gearFaqsData = {
  overallTitleKey: 'gearFaqsOverallTitle',
  seo: {
    titleKey: 'gearFaqsSeoTitle',
    descriptionKey: 'gearFaqsSeoDesc',
    keywords: 'gearFaqsSeoKeywords',
    imageUrl: 'https://placehold.co/1920x600?text=Paso+1+-+Mascaras',
    url: '/gear/faqs',
  },
  banner: {
    backgroundImage: 'https://placehold.co/1920x600?text=Paso+1+-+Mascaras',
    titleKey: 'gearFaqsBannerTitle',
    subtitleKey: 'gearFaqsBannerSubtitle',
    mainLogo: logo,
    mainLogoAltKey: 'gearFaqsBannerMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'gearFaqsBannerComplementaryLogoAlt',
    // textOverlayKey: 'gearFaqsBannerTextOverlay',
    photoCreditKey: 'gearFaqsBannerPhotoCredit',
    variant: 'header',
  },
  faqs: [
    {
      id: 'respirationFaqsSection',
      sectionTitleKey: 'faqsSectionRespirationTitle',
      faqs: [
        {
          id: 'needOwnRegulator',
          questionKey: 'faqNeedOwnRegulatorQuestion',
          answerKey: 'faqNeedOwnRegulatorAnswer',
        },
        {
          id: 'sensorAdvantage',
          questionKey: 'faqSensorAdvantageQuestion',
          answerKey: 'faqSensorAdvantageAnswer',
        },
        {
          id: 'regulatorMaintenance',
          questionKey: 'faqRegulatorMaintenanceQuestion',
          answerKey: 'faqRegulatorMaintenanceAnswer',
        },
        {
          id: 'snorkelFoldable',
          questionKey: 'faqSnorkelFoldableQuestion',
          answerKey: 'faqSnorkelFoldableAnswer',
        },
      ],
    },
    {
      id: 'propulsionFaqsSection',
      sectionTitleKey: 'faqsSectionPropulsionTitle',
      faqs: [
        {
          id: 'openVsClosedFins',
          questionKey: 'faqOpenVsClosedFinsQuestion',
          answerKey: 'faqOpenVsClosedFinsAnswer',
        },
        {
          id: 'channelVsFlatBlades',
          questionKey: 'faqChannelVsFlatBladesQuestion',
          answerKey: 'faqChannelVsFlatBladesAnswer',
        },
        {
          id: 'finsCleaning',
          questionKey: 'faqFinsCleaningQuestion',
          answerKey: 'faqFinsCleaningAnswer',
        },
        {
          id: 'carbonFinsWorthIt',
          questionKey: 'faqCarbonFinsWorthItQuestion',
          answerKey: 'faqCarbonFinsWorthItAnswer',
        },
      ],
    },
    {
      id: 'buoyancyFaqsSection',
      sectionTitleKey: 'faqsSectionBuoyancyTitle',
      faqs: [
        {
          id: 'beltVsIntegratedWeights',
          questionKey: 'faqBeltVsIntegratedWeightsQuestion',
          answerKey: 'faqBeltVsIntegratedWeightsAnswer',
        },
        {
          id: 'jacketVsWingBCD',
          questionKey: 'faqJacketVsWingBCDQuestion',
          answerKey: 'faqJacketVsWingBCDAnswer',
        },
        {
          id: 'BCDLeakTroubleshoot',
          questionKey: 'faqBCDLeakTroubleshootQuestion',
          answerKey: 'faqBCDLeakTroubleshootAnswer',
        },
      ],
    },
    {
      id: 'thermalFaqsSection',
      sectionTitleKey: 'faqsSectionThermalTitle',
      faqs: [
        {
          id: 'needOwnWetsuitCaribbean',
          questionKey: 'faqNeedOwnWetsuitCaribbeanQuestion',
          answerKey: 'faqNeedOwnWetsuitCaribbeanAnswer',
        },
        {
          id: 'glovesProhibited',
          questionKey: 'faqGlovesProhibitedQuestion',
          answerKey: 'faqGlovesProhibitedAnswer',
        },
        {
          id: 'shortyVsFull',
          questionKey: 'faqShortyVsFullQuestion',
          answerKey: 'faqShortyVsFullAnswer',
        },
        {
          id: 'dryWetsuit',
          questionKey: 'faqDryWetsuitQuestion',
          answerKey: 'faqDryWetsuitAnswer',
        },
      ],
    },
    {
      id: 'gasAndSignalingFaqsSection',
      sectionTitleKey: 'faqsSectionGasSignalingTitle',
      faqs: [
        {
          id: 'SMBVSDSMB',
          questionKey: 'faqSMBVSDSMBQuestion',
          answerKey: 'faqSMBVSDSMBAnswer',
        },
        {
          id: 'needOwnTank',
          questionKey: 'faqNeedOwnTankQuestion',
          answerKey: 'faqNeedOwnTankAnswer',
        },
        {
          id: 'whenToInflateDSMB',
          questionKey: 'faqWhenToInflateDSMBQuestion',
          answerKey: 'faqWhenToInflateDSMBAnswer',
        },
        {
          id: 'DSMBLeakTest',
          questionKey: 'faqDSMBLeakTestQuestion',
          answerKey: 'faqDSMBLeakTestAnswer',
        },
      ],
    },
    {
      id: 'lightingToolsFaqsSection',
      sectionTitleKey: 'faqsSectionLightingToolsTitle',
      faqs: [
        {
          id: 'torchUse',
          questionKey: 'faqTorchUseQuestion',
          answerKey: 'faqTorchUseAnswer',
        },
        {
          id: 'torchBackup',
          questionKey: 'faqTorchBackupQuestion',
          answerKey: 'faqTorchBackupAnswer',
        },
        {
          id: 'knifeVsCutter',
          questionKey: 'faqKnifeVsCutterQuestion',
          answerKey: 'faqKnifeVsCutterAnswer',
        },
        {
          id: 'cutterMaterial',
          questionKey: 'faqCutterMaterialQuestion',
          answerKey: 'faqCutterMaterialAnswer',
        },
      ],
    },
    {
      id: 'transportMaintenanceFaqsSection',
      sectionTitleKey: 'faqsSectionTransportMaintenanceTitle',
      faqs: [
        {
          id: 'kitRepairValue',
          questionKey: 'faqKitRepairValueQuestion',
          answerKey: 'faqKitRepairValueAnswer',
        },
        {
          id: 'defogDIY',
          questionKey: 'faqDefogDIYQuestion',
          answerKey: 'faqDefogDIYAnswer',
        },
        {
          id: 'overweightAvoidance',
          questionKey: 'faqOverweightAvoidanceQuestion',
          answerKey: 'faqOverweightAvoidanceAnswer',
        },
        {
          id: 'zipperLubrication',
          questionKey: 'faqZipperLubricationQuestion',
          answerKey: 'faqZipperLubricationAnswer',
        },
        {
          id: 'bagMeshUse',
          questionKey: 'faqBagMeshUseQuestion',
          answerKey: 'faqBagMeshUseAnswer',
        },
      ],
    },
  ],
  cta: {
    titleKey: 'gearFaqsCtaTitle',
    subtitleKey: 'gearFaqsCtaSubtitle',
    backgroundImage: 'https://placehold.co/1920x800?text=Banner+Multiple+Cta',
    mainLogo: logo,
    mainLogoAltKey: 'gearFaqsCtaMainLogoAlt',
    // complementaryLogo: padi,
    // complementaryLogoAltKey: 'gearFaqsCtaComplementaryLogoAlt',
    // textOverlayKey: 'gearFaqsCtaTextOverlay',
    photoCreditKey: 'gearFaqsCtaPhotoCredit',
    ctaButtons: [
      {
        to: '/gear/store',
        textKey: 'gearFaqsCtaButtonShopText',
        isExternal: false,
      },
      {
        to: '/contact',
        textKey: 'gearFaqsCtaButtonContactText',
        isExternal: false,
      },
    ],
  },
};
