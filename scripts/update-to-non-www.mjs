import fs from 'fs';
import path from 'path';

function updateUrlsInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace https://rstravels.pk with https://rstravels.pk
  const updated = content
    .replace(/https:\/\/www\.rstravels\.pk/g, 'https://rstravels.pk');

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf-8');
    console.log(`Updated URLs to non-www in: ${filePath}`);
  }
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        processDirectory(fullPath);
      }
    } else if (/\.(tsx|ts|html|mjs|js|txt|xml|json)$/.test(entry.name)) {
      updateUrlsInFile(fullPath);
    }
  }
}

console.log("Starting https://rstravels.pk (non-www) standardization across entire codebase...");
processDirectory(path.resolve('src'));
processDirectory(path.resolve('public'));
processDirectory(path.resolve('scripts'));
updateUrlsInFile(path.resolve('index.html'));
console.log("Non-www URL update complete!");
