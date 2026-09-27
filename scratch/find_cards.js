const fs = require('fs');
const css = fs.readFileSync('d:/Work/Projects/Indcorpusca/scratch/page_45.css', 'utf8');

// Find all background-image urls in page_45.css
const cardMatches = [...css.matchAll(/(\.guten-[A-Za-z0-9]+)[^{}]*\{[^}]*background-image:\s*url\(([^)]+)\)[^}]*\}/g)];
console.log('Cards with background-images:');
cardMatches.forEach(m => {
  console.log(m[1], '-->', m[2]);
});
