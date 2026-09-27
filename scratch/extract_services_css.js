const fs = require('fs');
const content = fs.readFileSync('C:/Users/Pranjal/.gemini/antigravity-ide/brain/813dce3c-6490-4e16-90ad-a9008024679b/.system_generated/steps/2505/content.md', 'utf8');

// find all <style> blocks
const styleBlocks = [...content.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
const allCss = styleBlocks.join('\n');
fs.writeFileSync('d:/Work/Projects/Indcorpusca/scratch/live_services_css.css', allCss);

const cardClasses = [
  'guten-p9dpdU', 'guten-u4uOXj', 'guten-y1UTPh', 'guten-j9IApO',
  'guten-GocGXi', 'guten-P8Ye0b', 'guten-oT6Ak3', 'guten-tKEOaQ', 'aka01c', 'guten-S3jyAl', 'guten-V2qUNu',
  'guten-DPOAeP', 'guten-hMHbya', 'guten-NrEfkE', 'guten-ctevvg', 'guten-bYWCoH', 'guten-sNo6Q6', 'guten-0lnAuE'
];

cardClasses.forEach(cls => {
  const reg = new RegExp('[^{}]*\\.' + cls + '[^{}]*\\{[^}]*\\}', 'g');
  const m = allCss.match(reg);
  if (m) {
    console.log(`\n=== .${cls} ===`);
    m.forEach(r => console.log(r.trim()));
  }
});
