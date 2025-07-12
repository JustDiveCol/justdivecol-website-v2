// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './i18n/i18n.js';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';
import App from './App.jsx';

// --- Page Components ---
import HomePage from './pages/HomePage/HomePage.jsx';
import ExperiencesPage from './pages/ExperiencesPage/ExperiencesPage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import SafetyPage from './pages/SafetyPage/SafetyPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import CoursePage from './pages/DetailPage/CoursePage/CoursePage.jsx';
import ExperiencePage from './pages/DetailPage/ExperiencePage/ExperiencePage.jsx';
import DestinationPage from './pages/DetailPage/DestinationPage/DestinationPage.jsx';
import PoliciesPage from './pages/PolicyPage/PolicyPage.jsx';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

/**
 * The main entry point for the React application.
 * This file sets up the routing configuration and renders the root component.
 */

// The router configuration defines all possible URL paths for the application.
// We use createHashRouter to ensure compatibility with a wider range of static hosting providers.
const router = createHashRouter([
  {
    path: '/',
    element: <App />, // The root layout component that includes the Navbar and Footer.
    errorElement: <NotFoundPage />, // The component to display for any routing errors.
    children: [
      // --- Static Pages ---
      { index: true, element: <HomePage /> }, // The default page for the root path '/'.
      { path: 'experiencias', element: <ExperiencesPage /> },
      { path: 'nosotros', element: <AboutUsPage /> },
      { path: 'seguridad', element: <SafetyPage /> },
      { path: 'contacto', element: <ContactPage /> },
      { path: 'politicas', element: <PoliciesPage /> },
      { path: 'proximamente', element: <UnderConstructionPage /> },

      // --- Dynamic Detail Pages ---
      // These routes use URL parameters (e.g., :courseId) to render specific content.
      { path: 'cursos/:courseId', element: <CoursePage /> },
      { path: 'expediciones/:tripId', element: <ExperiencePage /> },
      { path: 'destinos/:destinationId', element: <DestinationPage /> },

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
