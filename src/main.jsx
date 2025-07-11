// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './i18n/i18n.js';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';

// This is the main layout component that wraps all pages
import App from './App.jsx';

// --- Page Components ---
// Primary pages of the application
import HomePage from './pages/HomePage/HomePage.jsx';
import ExperiencesPage from './pages/ExperiencesPage/ExperiencesPage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import SafetyPage from './pages/SafetyPage/SafetyPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';

// Dynamic pages for specific content
import CoursePage from './pages/DetailPage/CoursePage/CoursePage.jsx';
import ExperiencePage from './pages/DetailPage/ExperiencePage/ExperiencePage.jsx';
import DestinationPage from './pages/DetailPage/DestinationPage/DestinationPage.jsx';

// Other pages
import PoliciesPage from './pages/PolicyPage/PolicyPage.jsx';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

// Create the router configuration using the modern object-based approach
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'experiencias', element: <ExperiencesPage /> },
      { path: 'nosotros', element: <AboutUsPage /> },
      { path: 'seguridad', element: <SafetyPage /> },
      { path: 'contacto', element: <ContactPage /> },

      // Dynamic Routes
      { path: 'cursos/:courseId', element: <CoursePage /> },
      { path: 'expediciones/:tripId', element: <ExperiencePage /> },
      { path: 'destinos/:destinationId', element: <DestinationPage /> },
      { path: 'politicas', element: <PoliciesPage /> },
      { path: 'proximamente', element: <UnderConstructionPage /> },

      // Fallback route for any other path
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

// Render the app using the RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
