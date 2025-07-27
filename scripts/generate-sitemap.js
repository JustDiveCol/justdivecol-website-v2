// scripts/generate-sitemap.js
import fs from 'fs';
import { allDestinationsLite } from '../src/data/sitemap/destinations-lite.js';
import { publishedExperiencesLite } from '../src/data/sitemap/experiences-lite.js';
import { publishedCoursesLite } from '../src/data/sitemap/courses-lite.js';
import { staticPaths } from '../src/data/sitemap/static-paths.js';

const BASE_URL = 'https://www.justdivecol.com';

const generateSitemap = async () => {
  const destinationPages = allDestinationsLite.map((dest) => `/destinations/${dest.id}`);
  const experiencePages = publishedExperiencesLite.map((exp) => `/experiences/${exp.id}`);
  const coursePages = publishedCoursesLite.map((course) => `/certifications/${course.id}`);

  const allRoutes = [...staticPaths, ...destinationPages, ...experiencePages, ...coursePages];

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
  console.log('✅ sitemap.xml generated successfully!');
};

generateSitemap();
