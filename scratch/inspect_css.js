const fs = require('fs');
const css = fs.readFileSync('d:/Work/Projects/Indcorpusca/scratch/page_45.css', 'utf8');
const idx = css.indexOf('.guten-bYWCoH');
console.log(css.substring(idx + 1800, idx + 3500));
