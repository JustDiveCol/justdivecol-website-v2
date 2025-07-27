// DiveSiteModal.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ImageComponent from '../../../components/common/Image/ImageComponent';

import { createPortal } from 'react-dom';

import {
  getDiveLevelById,
  getDifficultyById,
  getDiveTypeById,
  getDiveConditionById,
  getDiveTagById,
} from '../../../data/global/diveSiteOptions';
import { SHARED_TRANSLATION_KEYS } from '@/data/global/constants';

const DiveSiteModalComponent = ({ site, onClose, t }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // for exit animation

  useEffect(() => {
    setIsVisible(true);
  }, [site]);

  if (!site) return null;

  const handleClose = () => {
    setIsVisible(false); // activate exit animation
  };

  const onAnimationComplete = () => {
    if (!isVisible) {
      onClose(); // only call after the exit animation is complete
    }
  };
  const MAX_LENGTH = 180;
  const descriptionKeys = Object.keys(site).filter((key) => /^descriptionP\d+Key$/.test(key));
  const paragraphs = descriptionKeys
    .map((key) => t(site[key]))
    .filter((text) => typeof text === 'string' && text.trim().length > 0);
  const firstParagraph = paragraphs[0] || '';
  const isLong = firstParagraph.length > MAX_LENGTH;
  const shouldTruncate = isLong || paragraphs.length > 1;
  const displayedText =
    showFullDescription || !shouldTruncate
      ? firstParagraph
      : firstParagraph.slice(0, MAX_LENGTH) + '…';

  const getTagColorClass = (categoryId) => {
    switch (categoryId) {
      case 'marine-life':
        return 'bg-green-100 text-green-800';
      case 'dive-characteristics':
        return 'bg-blue-100 text-blue-800';
      case 'features':
        return 'bg-yellow-100 text-yellow-800';
      case 'location':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 p-4"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={handleClose}
          onAnimationComplete={onAnimationComplete}
        >
          <motion.div
            className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-2xl text-gray-700 font-bold"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-brand-primary-dark mb-2">
              {t(site.nameKey)}
            </h2>

            {site.typeIds?.length > 0 && (
              <p className="text-xs text-brand-primary-light italic mb-2">
                {site.typeIds.map((typeId, idx) => {
                  const type = getDiveTypeById(typeId);
                  return (
                    <span key={typeId}>
                      {' '}
                      {/* KEY ADDED HERE */}
                      {type ? t(type.translationKey) : typeId}
                      {idx < site.typeIds.length - 1 && ' · '}
                    </span>
                  );
                })}
              </p>
            )}

            {paragraphs.length > 0 && (
              <div className="text-sm text-brand-primary-medium mb-4 text-justify  space-y-3">
                <p>
                  {displayedText}
                  {shouldTruncate && !showFullDescription && (
                    <button
                      onClick={() => setShowFullDescription(true)}
                      className="ml-1 underline text-brand-cta-orange hover:text-brand-primary-dark transition text-sm"
                    >
                      {t(SHARED_TRANSLATION_KEYS.VIEW_MORE_LABEL)}
                    </button>
                  )}
                </p>
                {showFullDescription &&
                  paragraphs.slice(1).map((para, idx) => <p key={idx}>{para}</p>)}{' '}
                {/* KEY ADDED HERE */}
              </div>
            )}

            <ul className="text-sm space-y-2">
              {site.maxDepth && (
                <li className="text-sm">
                  <span className="font-bold text-brand-primary-dark">
                    {t(SHARED_TRANSLATION_KEYS.DEPTH_LABEL)}:
                  </span>{' '}
                  <span className="text-brand-primary-light">{site.maxDepth}</span>
                </li>
              )}
              {site.levelRequiredId && (
                <li className="text-sm">
                  <span className="font-bold text-brand-primary-dark">
                    {t(SHARED_TRANSLATION_KEYS.LEVEL_REQUIRED_LABEL)}:
                  </span>{' '}
                  <span className="text-brand-primary-light">
                    {(() => {
                      const level = getDiveLevelById(site.levelRequiredId);
                      return level ? t(level.translationKey) : site.levelRequiredId;
                    })()}
                  </span>
                </li>
              )}
              {site.difficultyId && (
                <li className="text-sm">
                  <span className="font-bold text-brand-primary-dark">
                    {t(SHARED_TRANSLATION_KEYS.DIFFICULTY_LABEL)}:
                  </span>{' '}
                  <span className="text-brand-primary-light">
                    {(() => {
                      const difficulty = getDifficultyById(site.difficultyId);
                      return difficulty ? t(difficulty.translationKey) : site.difficultyId;
                    })()}
                  </span>
                </li>
              )}
              {site.conditionsIds?.length > 0 && (
                <li className="text-sm">
                  <span className="font-bold text-brand-primary-dark">
                    {t(SHARED_TRANSLATION_KEYS.CONDITIONS_LABEL)}:
                  </span>{' '}
                  <span className="text-brand-primary-light">
                    {site.conditionsIds.map((condId, idx) => {
                      const condition = getDiveConditionById(condId);
                      return (
                        <span key={condId}>
                          {' '}
                          {/* KEY ADDED HERE */}
                          {condition ? t(condition.translationKey) : condId}
                          {idx < site.conditionsIds.length - 1 && ', '}
                        </span>
                      );
                    })}
                  </span>
                </li>
              )}
            </ul>

            {site.photos?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {site.photos.map((photo, idx) => (
                  <div
                    key={idx} // KEY ADDED HERE - Use photo.id if available and unique
                    className="w-full sm:w-[48%] lg:w-[31%]"
                  >
                    <ImageComponent
                      imageData={photo}
                      translationNS={'divesites'}
                      className="rounded-xl overflow-hidden shadow-md"
                    />
                  </div>
                ))}
              </div>
            )}

            {site.tagsIds?.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-bold text-brand-primary-dark mb-2">
                  {t(SHARED_TRANSLATION_KEYS.TAGS_LABEL)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {site.tagsIds.map((tagId) => {
                    const tag = getDiveTagById(tagId);
                    if (!tag) return null;

                    const colorClasses = getTagColorClass(tag.categoryId);

                    return (
                      <span
                        key={tag.id} // This key was already correct
                        className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses}`}
                      >
                        {t(tag.translationKey)}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default DiveSiteModalComponent;
