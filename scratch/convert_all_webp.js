const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imagesDir = path.join(__dirname, '..', 'images');
const files = fs.readdirSync(imagesDir);

console.log('Converting images to WebP format...');

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
    // Keep transparent logos as png or also provide webp
    const baseName = path.basename(file, ext);
    const webpName = baseName + '.webp';
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, webpName);

    if (!fs.existsSync(outputPath)) {
      console.log(`Converting ${file} -> ${webpName}`);
      try {
        execSync(`npx sharp-cli -i "${inputPath}" -o "${outputPath}" -q 85`, { stdio: 'inherit' });
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err.message);
      }
    } else {
      console.log(`Already exists: ${webpName}`);
    }
  }
}

console.log('Conversion complete!');
