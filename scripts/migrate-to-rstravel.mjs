import fs from 'fs';
import path from 'path';

function updateUrlsInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace all variations of rstravel.pk (www, non-www, email, schema) to rstravel.pk
  let updated = content
    .replace(/https:\/\/www\.rstravels\.pk/g, 'https://rstravel.pk')
    .replace(/https:\/\/rstravels\.pk/g, 'https://rstravel.pk')
    .replace(/http:\/\/www\.rstravels\.pk/g, 'https://rstravel.pk')
    .replace(/http:\/\/rstravels\.pk/g, 'https://rstravel.pk')
    .replace(/info@rstravels\.pk/g, 'info@rstravel.pk')
    .replace(/contact@rstravels\.pk/g, 'contact@rstravel.pk')
    .replace(/support@rstravels\.pk/g, 'support@rstravel.pk')
    .replace(/@rstravels\.pk/g, '@rstravel.pk')
    .replace(/rstravels\.pk/g, 'rstravel.pk');

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf-8');
    console.log(`Updated to rstravel.pk in: ${filePath}`);
  }
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist' && entry.name !== '.tanstack') {
        processDirectory(fullPath);
      }
    } else if (/\.(tsx|ts|html|mjs|js|txt|xml|json|jsonc|md)$/.test(entry.name)) {
      updateUrlsInFile(fullPath);
    }
  }
}

console.log("Standardizing all URLs and references to https://rstravel.pk across entire codebase...");
processDirectory(path.resolve('src'));
processDirectory(path.resolve('public'));
processDirectory(path.resolve('scripts'));
updateUrlsInFile(path.resolve('index.html'));
updateUrlsInFile(path.resolve('vercel.json'));
updateUrlsInFile(path.resolve('wrangler.jsonc'));
console.log("Completed domain migration to rstravel.pk!");
