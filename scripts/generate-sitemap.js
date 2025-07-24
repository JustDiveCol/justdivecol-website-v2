// scripts/generate-sitemap.js
import fs from 'fs';
import { allDestinationsLite } from '../src/data/sitemap/destinations-lite.js';
import { publishedExperiencesLite } from '../src/data/sitemap/experiences-lite.js';
import { publishedCoursesLite } from '../src/data/sitemap/courses-lite.js';
import { navLinks } from '../src/data/global/navbarData.js'; // este parece no tener problemas

const BASE_URL = 'https://www.justdivecol.com';

const generateSitemap = async () => {
  // Static pages from navbar
  const staticPages = navLinks.map((link) => link.path);

  // Dynamic pages
  const destinationPages = allDestinationsLite.map((dest) => `/destinos/${dest.id}`);
  const experiencePages = publishedExperiencesLite.map((exp) => `/experiencias/${exp.id}`);
  const coursePages = publishedCoursesLite.map((course) => `/cursos/${course.id}`);

  // All unique routes
  const allRoutes = [
    ...staticPages,
    ...destinationPages,
    ...experiencePages,
    ...coursePages,
    '/politicas',
  ];
  const uniqueRoutes = [...new Set(allRoutes)];

  const sitemapContent = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${uniqueRoutes
        .map((route) => {
          return `
            <url>
              <loc>${BASE_URL}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemapContent.trim());
  console.log('sitemap.xml generated successfully!');
};

generateSitemap();
