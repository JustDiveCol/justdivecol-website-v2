// src/data/content/certifications/utils.js
import { certifications as rawCerts } from './index'; // tu array de certificaciones
import { ROUTES } from '@/data/global/constants';

/**
 * Recorre cada certificación y construye seo.url desde ROUTES.CERTIFICATIONS y cert.slug
 */
export function attachCertificationUrls() {
  return rawCerts.map((cert) => ({
    ...cert,
    seo: {
      ...cert.seo,
      url: `${ROUTES.certifications}/${cert.slug}`,
    },
  }));
}
