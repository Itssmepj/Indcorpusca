const fs = require('fs');
const css = fs.readFileSync('d:/Work/Projects/Indcorpusca/scratch/page_45.css', 'utf8');

const matches = [...css.matchAll(/[^{}]*\.guten-DPOAeP[^{}]*\{[^}]*\}/g)];
matches.forEach(m => console.log(m[0]));
