const fs = require('fs');
const content = fs.readFileSync('C:/Users/Pranjal/.gemini/antigravity-ide/brain/813dce3c-6490-4e16-90ad-a9008024679b/.system_generated/steps/2505/content.md', 'utf8');

const startStr = '<section class="wp-block-gutenverse-section guten-element guten-section guten-p9dpdU';
const startIdx = content.indexOf(startStr);
// find matching end or next section
const endStr = '<div class="section-wrapper" data-id="YGfhRY">'; // or next major section
const endIdx = content.indexOf('data-id="YGfhRY"', startIdx);

console.log('Start index:', startIdx, 'End index:', endIdx);
const sectionHtml = content.substring(startIdx, endIdx);
fs.writeFileSync('d:/Work/Projects/Indcorpusca/scratch/exact_services_section.html', sectionHtml);
console.log('Saved exact services section, length:', sectionHtml.length);
