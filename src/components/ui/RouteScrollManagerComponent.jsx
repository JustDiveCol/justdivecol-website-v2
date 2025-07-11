// src/components/ui/RouteScrollManagerComponent.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Manages the scroll position on route changes.
 * - If the new route has no hash, it scrolls to the top of the page.
 * - If the new route includes a hash (#), it smoothly scrolls to the corresponding section.
 */
const RouteScrollManagerComponent = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL has a hash (e.g., /page#section)
    if (hash) {
      // A short timeout is used to give the browser time to render the page
      // before attempting to scroll to the element.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // 100ms is generally sufficient.
    } else {
      // If there's no hash, simply scroll to the top.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // The effect runs every time the path or hash changes.

  // This component does not render any visible UI.
  return null;
};

export default RouteScrollManagerComponent;
