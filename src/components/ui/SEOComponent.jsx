// src/components/ui/SEOComponent.jsx
import React, { useEffect } from 'react';

const SEOComponent = ({ title, description }) => {
  useEffect(() => {
    // --- Update Document Title ---
    if (title) {
      document.title = `${title} | JustDiveCol`;
    }

    // --- Update Meta Description ---
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }
  }, [title, description]);

  return null;
};

export default SEOComponent;
