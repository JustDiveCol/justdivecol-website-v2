// src/pages/GearPage/GearPage.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Importar los componentes de las sub-páginas
import GearNavbarComponent from './components/GearNavbarComponent';
import GearHomePage from './pages/GearHomePage/GearHomePage';
import GearGuidePage from './pages/GearGuidePage/GearGuidePage';
import GearFaqsPage from './pages/GearFaqsPage/GearFaqsPage';
import StorePage from './pages/GearStorePage/GearStorePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const GearPage = () => {
  return (
    <div className='bg-brand-neutral'>
      <GearNavbarComponent />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Navigate
                to='home'
                replace
              />
            }
          />
          <Route
            path='home'
            element={<GearHomePage />}
          />
          <Route
            path='guide'
            element={<GearGuidePage />}
          />
          <Route
            path='faqs'
            element={<GearFaqsPage />}
          />
          <Route
            path='xyz'
            element={<StorePage />}
          />
          <Route
            path='store'
            element={
              <Navigate
                to='/proximamente'
                replace
              />
            }
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default GearPage;
