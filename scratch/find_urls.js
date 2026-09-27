const fs = require('fs');
const css = fs.readFileSync('d:/Work/Projects/Indcorpusca/scratch/page_45.css', 'utf8');
const urls = [...css.matchAll(/https:\/\/fse\.jegtheme\.com[^\s\)\"\']+/g)].map(m => m[0]);
console.log('Unique URLs in page_45.css:', [...new Set(urls)]);
