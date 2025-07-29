// src/App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// Layout Components
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

// UI Components
import RouteScrollManagerComponent from './components/layout/RouteScrollManagerComponent';
import FloatingActionsComponent from './components/ui/FloatingActionsComponent';

// Providers
import { CertificationProvider } from './data/content/certifications/DataProvider';
import { DestinationProvider } from './data/content/destinations/DataProvider';
import { ExperienceProvider } from './data/content/experiences/DataProvider';

export const App = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen bg-brand-primary-dark">
      <Navbar />
      {/* Handles scroll-to-top behavior on route changes. */}
      <RouteScrollManagerComponent />
      {/* Enables page transition animations. */}
      <AnimatePresence mode="wait">
        <CertificationProvider>
          <DestinationProvider>
            <ExperienceProvider>
              <main key={location.pathname} className="pt-20 flex-grow">
                <Outlet />
              </main>
            </ExperienceProvider>
          </DestinationProvider>
        </CertificationProvider>
      </AnimatePresence>
      <Footer />
      <FloatingActionsComponent />
    </div>
  );
};

export default App;
