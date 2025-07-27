import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { faqsData } from '../../data/pages/faqsData';
import { staggerContainer } from '../../hooks/animations';

import SEOComponent from '../../components/ui/SEOComponent';
import HeaderComponent from '../../components/HeaderComponent';
import FaqsContentSection from '../../sections/FaqsContentSection';
import { NAMESPACES } from '@/data/global/constants';

const FaqsPage = () => {
  const { t } = useTranslation([NAMESPACES.FAQS_PAGE, NAMESPACES.COMMON]);

  return (
    <>
      <SEOComponent
        title={t(faqsData.seo.titleKey)}
        description={t(faqsData.seo.descriptionKey)}
        keywords={t(faqsData.seo.keywords)}
        imageUrl={faqsData.seo.imageUrl}
        url={faqsData.seo.url}
      />
      <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="hidden">
        <HeaderComponent sectionData={faqsData.header} translationNS={NAMESPACES.FAQS_PAGE} />
        <div className="container mx-auto py-8 px-4">
          <FaqsContentSection faqsData={faqsData} translationNS={NAMESPACES.FAQS_PAGE} />
        </div>
      </motion.div>
    </>
  );
};

export default FaqsPage;
