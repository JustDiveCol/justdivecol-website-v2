// src/data/content/certifications/DataProvider.jsx
import React, { createContext, useContext, useMemo } from 'react';
import { attachCertificationUrls } from './utils';

const CertContext = createContext(null);

export function CertificationProvider({ children }) {
  const data = useMemo(() => {
    const certifications = attachCertificationUrls();
    return { certifications };
  }, []);

  return <CertContext.Provider value={data}>{children}</CertContext.Provider>;
}

export function useCertifications() {
  const ctx = useContext(CertContext);
  if (!ctx) throw new Error('useCertifications debe usarse dentro de <CertificationProvider>');
  return ctx;
}
