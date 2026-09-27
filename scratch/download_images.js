const fs = require('fs');
const path = require('path');
const https = require('https');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f.endsWith('.css'));
const urls = new Set();
const regex = /https:\/\/[^'"\)\s]+\.(?:png|jpg|jpeg|webp)/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[0].includes('indcorpusca.com') || match[0].includes('jegtheme.com')) {
      urls.add(match[0]);
    }
  }
}

console.log(`Found ${urls.size} unique remote image URLs:`);
for (const u of urls) {
  console.log(u);
}

const imagesDir = path.join(__dirname, '..', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, response => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return resolve({ url, success: false, status: response.statusCode });
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve({ url, success: true, dest }));
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      resolve({ url, success: false, error: err.message });
    });
  });
}

async function run() {
  for (const u of urls) {
    const filename = path.basename(u);
    const dest = path.join(imagesDir, filename);
    if (!fs.existsSync(dest)) {
      console.log(`Downloading ${filename}...`);
      const res = await download(u, dest);
      console.log(`Result:`, res.success ? 'OK' : 'FAILED', filename);
    } else {
      console.log(`Already exists: ${filename}`);
    }
  }
}

run();
