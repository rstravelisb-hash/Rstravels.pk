import fs from 'fs';
import path from 'path';

// Check if sharp is available
async function compressImages() {
  try {
    const sharp = (await import('sharp')).default;

    const publicDir = path.resolve('public');
    const assetsDir = path.resolve('src/assets');

    console.log("Starting image compression with sharp...");

    // Compress public images
    const publicFiles = fs.readdirSync(publicDir);
    for (const file of publicFiles) {
      const fullPath = path.join(publicDir, file);
      if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const buffer = fs.readFileSync(fullPath);
        const outputBuffer = await sharp(buffer).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
        fs.writeFileSync(fullPath, outputBuffer);
        console.log(`Compressed ${file}: ${buffer.length} -> ${outputBuffer.length} bytes`);
      } else if (file.endsWith('.png') && !file.startsWith('favicon')) {
        const buffer = fs.readFileSync(fullPath);
        const outputBuffer = await sharp(buffer).png({ quality: 80, compressionLevel: 9 }).toBuffer();
        fs.writeFileSync(fullPath, outputBuffer);
        console.log(`Compressed ${file}: ${buffer.length} -> ${outputBuffer.length} bytes`);
      }
    }

    // Compress src/assets images
    const assetFiles = fs.readdirSync(assetsDir);
    for (const file of assetFiles) {
      const fullPath = path.join(assetsDir, file);
      if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const buffer = fs.readFileSync(fullPath);
        const outputBuffer = await sharp(buffer).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
        fs.writeFileSync(fullPath, outputBuffer);
        console.log(`Compressed ${file}: ${buffer.length} -> ${outputBuffer.length} bytes`);
      } else if (file.endsWith('.png')) {
        const buffer = fs.readFileSync(fullPath);
        const outputBuffer = await sharp(buffer).png({ quality: 80, compressionLevel: 9 }).toBuffer();
        fs.writeFileSync(fullPath, outputBuffer);
        console.log(`Compressed ${file}: ${buffer.length} -> ${outputBuffer.length} bytes`);
      }
    }

    // Resize favicons to their optimal standard dimensions
    const favPng = path.join(publicDir, 'favicon.png');
    if (fs.existsSync(favPng)) {
      const buffer = fs.readFileSync(favPng);
      const smallBuffer = await sharp(buffer).resize(64, 64).png().toBuffer();
      fs.writeFileSync(favPng, smallBuffer);
      console.log(`Resized favicon.png: ${buffer.length} -> ${smallBuffer.length} bytes`);
    }

    const appleTouch = path.join(publicDir, 'apple-touch-icon.png');
    if (fs.existsSync(appleTouch)) {
      const buffer = fs.readFileSync(appleTouch);
      const appleBuffer = await sharp(buffer).resize(180, 180).png().toBuffer();
      fs.writeFileSync(appleTouch, appleBuffer);
      console.log(`Resized apple-touch-icon.png: ${buffer.length} -> ${appleBuffer.length} bytes`);
    }

    console.log("Image compression complete!");
  } catch (err) {
    console.error("Sharp compression error:", err);
  }
}

compressImages();
