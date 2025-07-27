// src/data/content/certifications/utils.js
import { certifications as rawCerts } from './index';
import { ROUTES } from '@/data/global/constants';

export function attachCertificationUrls() {
  return rawCerts.map((cert) => ({
    ...cert,
    seo: {
      ...cert.seo,
      url: `${ROUTES.certifications}/${cert.slug}`,
    },
  }));
}
