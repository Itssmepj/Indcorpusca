const fs = require('fs');
const css1 = fs.readFileSync('scratch/page_45.css', 'utf8');
const css2 = fs.readFileSync('scratch/firmly_all_css.css', 'utf8');
const combined = css1 + '\n' + css2;

const regex = /([^{}]*guten-viSm13[^{}]*)\{([^{}]+)\}/g;
let m;
console.log('=== guten-viSm13 rules ===');
while ((m = regex.exec(combined)) !== null) {
  console.log(m[1].trim() + ' {\n  ' + m[2].trim() + '\n}');
}

const regex2 = /([^{}]*swiper-button-[^{}]*)\{([^{}]+)\}/g;
console.log('=== swiper button rules ===');
while ((m = regex2.exec(combined)) !== null) {
  if (m[1].includes('viSm13') || m[1].includes('testimonials')) {
    console.log(m[1].trim() + ' {\n  ' + m[2].trim() + '\n}');
  }
}
