const fs = require('fs');
const css = fs.readFileSync('d:/Work/Projects/Indcorpusca/scratch/page_45.css', 'utf8');

// Find all classes in user_html.html
const html = fs.readFileSync('C:/Users/Pranjal/.gemini/antigravity-ide/brain/813dce3c-6490-4e16-90ad-a9008024679b/scratch/user_html.html', 'utf8');
const classMatches = [...html.matchAll(/class="([^"]+)"/g)];
const classes = new Set();
classMatches.forEach(m => m[1].split(/\s+/).forEach(c => classes.add(c)));

console.log('Classes count:', classes.size);
for (const cls of classes) {
  if (!cls.startsWith('guten-') && !cls.startsWith('wp-')) continue;
  // find css rules mentioning cls
  const regex = new RegExp('[^{}]*\\.' + cls + '[^{}]*\\{[^}]*\\}', 'g');
  const matches = css.match(regex);
  if (matches) {
    console.log(`\n=== .${cls} ===`);
    matches.forEach(r => console.log(r.trim()));
  }
}
