const fs = require('fs');
const content = fs.readFileSync('C:/Users/Pranjal/.gemini/antigravity-ide/brain/813dce3c-6490-4e16-90ad-a9008024679b/.system_generated/steps/2505/content.md', 'utf8');
const links = [...content.matchAll(/<link[^>]+rel=['"]stylesheet['"][^>]+href=['"]([^'"]+)['"]/gi)].map(m => m[1]);
console.log('Stylesheet links:', links);
