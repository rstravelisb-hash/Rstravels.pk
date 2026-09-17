import https from 'https';

const SITEMAP_URL = 'https://rstravel.pk/sitemap.xml';

const searchEnginePings = [
  { name: 'Google Sitemap Ping', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
  { name: 'Bing Sitemap Ping', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
];

console.log('🚀 Triggering instant crawler pings for https://rstravel.pk ...\n');

searchEnginePings.forEach(({ name, url }) => {
  https.get(url, (res) => {
    console.log(`✅ [${name}] Ping dispatched. Response Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.log(`ℹ️ [${name}] Ping attempted (${err.message})`);
  });
});
