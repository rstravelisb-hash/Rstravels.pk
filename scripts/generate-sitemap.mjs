import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://rstravel.pk';
const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const REGIONS_DIR = path.resolve('src/data/regions');

// Static core service & informational routes
const staticRoutes = [
  '/',
  '/travel-agency-islamabad',
  '/visa-consultant-islamabad',
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
  '/contact',
  '/privacy-policy',
  '/terms'
];

const routes = new Set(staticRoutes);

// Custom visa slugs defined in destinations.ts for tier-1 countries
const CUSTOM_DESTINATION_VISAS = {
  'united-states': ['b1-b2-visa', 'business-visa'],
  'united-kingdom': ['standard-visitor-visa', 'business-visa'],
  'canada': ['visitor-visa', 'business-visa'],
  'australia': ['visitor-visa', 'business-visa'],
};

// 1. Primary destination pages & their valid sub-visas from destinations.ts
try {
  const destinationsPath = path.resolve('src/data/destinations.ts');
  if (fs.existsSync(destinationsPath)) {
    const content = fs.readFileSync(destinationsPath, 'utf-8');
    const destSlugs = [
      'schengen',
      'united-states',
      'united-kingdom',
      'canada',
      'middle-east',
      'south-asia',
      'central-asia',
      'north-africa',
      'southern-africa',
      'east-asia',
      'south-america',
      'oceania',
      'australia'
    ];

    destSlugs.forEach(slug => {
      routes.add(`/countries/${slug}`);
      const validVisas = CUSTOM_DESTINATION_VISAS[slug] || ['visit-visa', 'business-visa'];
      validVisas.forEach(visaSlug => {
        routes.add(`/countries/${slug}/visa/${visaSlug}`);
      });
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

const today = new Date().toISOString().split('T')[0];

// Build the dynamic high-SEO XML Sitemap with Image and Mobile namespaces
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${SITE_URL}/logo.avif</image:loc>
      <image:title>RS Travel and Tours Islamabad</image:title>
      <image:caption>Pakistan's #1 Visa Consultant and Travel Agency in Blue Area Islamabad</image:caption>
    </image:image>
  </url>
`;
});

sitemapXml += `</urlset>`;

// Write to public folder
fs.writeFileSync(SITEMAP_PATH, sitemapXml);
console.log(`Generated comprehensive image-enabled sitemap with ${routeList.length} URLs at ${SITEMAP_PATH}`);
