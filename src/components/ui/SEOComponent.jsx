import React, { useEffect } from 'react';

/**
 * A logic-only component that dynamically updates the document head
 * with SEO and social media (Open Graph, Twitter) meta tags.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the page.
 * @param {string} props.description - The meta description for the page.
 * @param {string} [props.keywords] - A comma-separated string of keywords for the page.
 * @param {string} [props.imageUrl] - The absolute URL for the social sharing image.
 * @param {string} [props.url] - The relative path of the page (e.g., '/about-us').
 */
const SEOComponent = ({ title, description, keywords, imageUrl, url }) => {
  useEffect(() => {
    const fullTitle = `${title} | JustDiveCol`;
    document.title = fullTitle;

    /**
     * Finds and updates a meta tag in the document head.
     * If the tag doesn't exist, it creates it.
     * @param {string} name - The 'name' or 'property' attribute of the meta tag.
     * @param {string} content - The 'content' attribute value.
     */
    const updateMeta = (name, content) => {
      let element = document.querySelector(
        `meta[name="${name}"], meta[property="${name}"]`
      );
      if (!element) {
        element = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // --- Standard Meta Tags ---
    if (description) updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // --- Open Graph Tags (for Facebook, WhatsApp, etc.) ---
    if (url) updateMeta('og:url', `https://www.justdivecol.com${url}`);
    updateMeta('og:type', 'website');
    updateMeta('og:title', fullTitle);
    if (description) updateMeta('og:description', description);
    if (imageUrl) updateMeta('og:image', imageUrl);

    // --- Twitter Card Tags ---
    updateMeta('twitter:card', 'summary_large_image');
    if (url) updateMeta('twitter:url', `https://www.justdivecol.com${url}`);
    updateMeta('twitter:title', fullTitle);
    if (description) updateMeta('twitter:description', description);
    if (imageUrl) updateMeta('twitter:image', imageUrl);

    // Se añade 'keywords' al array de dependencias
  }, [title, description, keywords, imageUrl, url]);

  return null;
};

export default SEOComponent;
