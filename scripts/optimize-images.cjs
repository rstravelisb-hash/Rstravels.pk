const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.resolve('src/assets');
const PUBLIC_DIR = path.resolve('public');

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const avifPath = path.join(dir, `${baseName}.avif`);

  try {
    const statBefore = fs.statSync(filePath);
    
    // Compress and convert to AVIF
    await sharp(filePath)
      .avif({ quality: 80, effort: 6 })
      .toFile(avifPath);

    const statAfter = fs.statSync(avifPath);
    const reduction = (((statBefore.size - statAfter.size) / statBefore.size) * 100).toFixed(1);
    console.log(`Converted: ${path.relative(process.cwd(), filePath)} (${(statBefore.size / 1024).toFixed(1)} KB) -> ${path.basename(avifPath)} (${(statAfter.size / 1024).toFixed(1)} KB) [${reduction}% smaller]`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function scanAndConvert(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        await scanAndConvert(fullPath);
      }
    } else {
      await processFile(fullPath);
    }
  }
}

async function run() {
  console.log('--- Converting Assets in src/assets ---');
  await scanAndConvert(ASSETS_DIR);
  console.log('--- Converting Assets in public ---');
  await scanAndConvert(PUBLIC_DIR);
  console.log('AVIF conversion and compression complete.');
}

run().catch(console.error);
