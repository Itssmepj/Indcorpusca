const fs = require('fs');
const html = fs.readFileSync('scratch/firmly_testimonials.html', 'utf8');

const start = html.indexOf('<section class="wp-block-gutenverse-section guten-element guten-section guten-F6fIV0');
const end = html.indexOf('</section>', start);
// Note that section might have nested sections. Let's find the closing tag for this section.
let depth = 0;
let pos = start;
let sectionEnd = -1;

while (pos < html.length) {
  const nextOpen = html.indexOf('<section', pos);
  const nextClose = html.indexOf('</section>', pos);
  
  if (nextClose === -1) break;
  
  if (nextOpen !== -1 && nextOpen < nextClose) {
    depth++;
    pos = nextOpen + 8;
  } else {
    depth--;
    pos = nextClose + 10;
    if (depth === 0) {
      sectionEnd = pos;
      break;
    }
  }
}

if (sectionEnd !== -1) {
  const sectionContent = html.substring(start, sectionEnd);
  fs.writeFileSync('scratch/exact_testimonial_section.html', sectionContent);
  console.log('Saved exact section, length:', sectionContent.length);
} else {
  console.log('Could not find section end');
}
