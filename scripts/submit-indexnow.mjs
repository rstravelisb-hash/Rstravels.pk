import fs from 'fs';
import path from 'path';
import https from 'https';

const HOST = 'rstravels.pk';
const KEY = 'a37ca1a6c2664bd5a502861389a5816c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.resolve('public/sitemap.xml');

async function submitIndexNow() {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.error("sitemap.xml not found. Please run prebuild first.");
      return;
    }

    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
    let match;
    const urlList = [];

    while ((match = locRegex.exec(sitemapContent)) !== null) {
      urlList.push(match[1]);
    }

    console.log(`Found ${urlList.length} URLs to submit to IndexNow...`);

    const payload = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList,
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      console.log(`IndexNow Submission Response Status Code: ${res.statusCode} (${res.statusMessage})`);
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log("✅ Successfully submitted all URLs to IndexNow (Bing, Yandex, Seznam, Naver)!");
        } else {
          console.log("Response body:", data);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`IndexNow submission failed: ${e.message}`);
    });

    req.write(payload);
    req.end();
  } catch (err) {
    console.error("IndexNow script error:", err);
  }
}

submitIndexNow();
