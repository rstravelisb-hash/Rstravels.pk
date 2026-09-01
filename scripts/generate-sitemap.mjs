import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://rstravels.pk';
const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const REGIONS_DIR = path.resolve('src/data/regions');

// Static core service & informational routes
const staticRoutes = [
  '/',
  '/about',
  '/visa-services',
  '/countries',
  '/air-ticketing',
  '/hotel-booking',
  '/travel-insurance',
  '/passport-services',
  '/profile-assessment',
  '/consultation',
  '/umrah',
  '/pakistan-visa',
  '/faq',
  '/testimonials',
  '/contact'
];

const routes = new Set(staticRoutes);

// 1. Primary destination pages & their sub-visas from destinations.ts
try {
  const destinationsPath = path.resolve('src/data/destinations.ts');
  if (fs.existsSync(destinationsPath)) {
    const content = fs.readFileSync(destinationsPath, 'utf-8');
    const slugRegex = /slug:\s*"([^"]+)"/g;
    let match;
    const destSlugs = new Set();
    
    // Extract destination items
    const destArrayMatch = content.match(/export const DESTINATIONS[\s\S]*?=\s*\[([\s\S]*?)\];/);
    if (destArrayMatch) {
      while ((match = slugRegex.exec(destArrayMatch[1])) !== null) {
        destSlugs.add(match[1]);
      }
    }

    destSlugs.forEach(slug => {
      routes.add(`/countries/${slug}`);
      routes.add(`/countries/${slug}/visa/visit-visa`);
      routes.add(`/countries/${slug}/visa/tourist-visa`);
      routes.add(`/countries/${slug}/visa/business-visa`);
    });
  }
} catch (err) {
  console.warn("Could not read destinations.ts:", err.message);
}

// 2. Regional country routes from all region data files
const regionFileMap = {
  'schengen-countries.ts': 'schengen',
  'south-asia_countries.ts': 'south-asia',
  'central-asia_countries.ts': 'central-asia',
  'north-africa_countries.ts': 'north-africa',
  'southern-africa_countries.ts': 'southern-africa',
  'middle-east_countries.ts': 'middle-east',
  'east-asia_countries.ts': 'east-asia',
  'americas-countries.ts': 'americas',
  'europe-others_countries.ts': 'europe-others',
  'south-america_countries.ts': 'south-america',
  'oceania-countries.ts': 'oceania'
};

Object.entries(regionFileMap).forEach(([file, regionSlug]) => {
  try {
    const filePath = path.join(REGIONS_DIR, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const slugRegex = /slug:\s*"([^"]+)"/g;
      let match;
      while ((match = slugRegex.exec(content)) !== null) {
        const countrySlug = match[1];
        routes.add(`/countries/${regionSlug}/${countrySlug}`);
      }
    }
  } catch (err) {
    console.warn(`Could not read ${file}:`, err.message);
  }
});

// Build the dynamic high-SEO XML Sitemap
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

const routeList = Array.from(routes);

routeList.forEach(route => {
  let priority = '0.7';
  let changefreq = 'monthly';

  if (route === '/') {
    priority = '1.0';
    changefreq = 'weekly';
  } else if (['/visa-services', '/air-ticketing', '/umrah', '/countries', '/consultation', '/profile-assessment'].includes(route)) {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (route.startsWith('/countries/') && !route.includes('/visa/')) {
    priority = '0.8';
    changefreq = 'monthly';
  }

  sitemapXml += `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemapXml += `</urlset>`;

// Write to public folder
fs.writeFileSync(SITEMAP_PATH, sitemapXml);
console.log(`Generated comprehensive sitemap with ${routeList.length} URLs at ${SITEMAP_PATH}`);
