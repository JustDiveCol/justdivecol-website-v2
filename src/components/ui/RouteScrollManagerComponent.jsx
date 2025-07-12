// src/components/ui/RouteScrollManagerComponent.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Manages the scroll position on route changes.
 * - If the new route has no hash, it scrolls to the top of the page.
 * - If a hash is present (e.g., /page#section), it smoothly scrolls to the
 * corresponding element after a brief delay.
 */
const RouteScrollManagerComponent = () => {
  const { pathname, hash } = useLocation();

  // This effect runs every time the path or hash changes.
  useEffect(() => {
    if (hash) {
      // A short timeout gives the browser time to render the new page content
      // before attempting to scroll. 100ms is generally sufficient.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If there's no hash, scroll to the top of the page on navigation.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // This is a logic-only component and does not render any UI.
  return null;
};

export default RouteScrollManagerComponent;
