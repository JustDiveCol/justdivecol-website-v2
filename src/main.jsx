// src/main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './i18n/i18n.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from './data/global/constants';

import { LanguageProvider } from './context/LanguageContext';
import App from './App.jsx';

import HomePage from './pages/HomePage/HomePage.jsx';
import ExperiencesPage from './pages/ExperiencesPage/ExperiencesPage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import SafetyPage from './pages/SafetyPage/SafetyPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import CoursePage from './pages/DetailPage/CoursePage/CoursePage.jsx';
import ExperiencePage from './pages/DetailPage/ExperiencePage/ExperiencePage.jsx';
import DestinationPage from './pages/DetailPage/DestinationPage/DestinationPage.jsx';
import PolicyPage from './pages/PolicyPage/PolicyPage.jsx';
import MapPage from './pages/MapPage/MapPage.jsx';
import GearPage from './pages/GearPage/GearPage.jsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage/TermsAndConditionsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx';
import FaqsPage from './pages/FaqsPage/FaqsPage.jsx';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import TestPage from './pages/TestPage.jsx';

/**
 * The main entry point for the React application.
 * This file sets up the routing configuration and renders the root component.
 */

// The router configuration defines all possible URL paths for the application.
// We use createHashRouter to ensure compatibility with a wider range of static hosting providers.
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Cargando...</div>}>
        {' '}
        {/* Add a loading fallback */}
        <App />
      </Suspense>
    ), // The root layout component that includes the Navbar and Footer.
    errorElement: <NotFoundPage />, // The component to display for any routing errors.
    children: [
      // --- Static Pages ---
      { index: true, element: <HomePage /> }, // The default page for the root path '/'.
      { path: ROUTES.experiences, element: <ExperiencesPage /> },
      { path: ROUTES.about, element: <AboutUsPage /> },
      { path: ROUTES.safety, element: <SafetyPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: ROUTES.policy, element: <PolicyPage /> },
      { path: ROUTES.divesites, element: <MapPage /> },
      { path: ROUTES.mainStore, element: <GearPage /> },
      { path: ROUTES.terms, element: <TermsAndConditionsPage /> },
      { path: ROUTES.privacy, element: <PrivacyPolicyPage /> },
      { path: ROUTES.faq, element: <FaqsPage /> },
      { path: ROUTES.underConstruction, element: <UnderConstructionPage /> },
      // { path: 'test', element: <TestPage /> },

      // --- Dynamic Detail Pages ---
      // These routes use URL parameters (e.g., :courseId) to render specific content.
      { path: ROUTES.certificationDetail, element: <CoursePage /> },
      { path: ROUTES.experienceDetail, element: <ExperiencePage /> },
      { path: ROUTES.destinationDetail, element: <DestinationPage /> },

      // --- Fallback Route ---
      // The wildcard '*' path catches any route that doesn't match the ones above, rendering the 404 page.
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

// Renders the application into the DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* LanguageProvider makes the language state available to the entire app. */}
    <LanguageProvider>
      {/* RouterProvider provides the routing context to the app. */}
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
