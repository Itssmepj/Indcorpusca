const fs = require('fs');
const css = fs.readFileSync('d:/Work/Projects/Indcorpusca/scratch/page_52.css', 'utf8');

const cardClasses = [
  'guten-p9dpdU', 'guten-u4uOXj', 'guten-y1UTPh', 'guten-j9IApO',
  'guten-GocGXi', 'guten-P8Ye0b', 'guten-oT6Ak3', 'guten-tKEOaQ', 'aka01c', 'guten-S3jyAl', 'guten-V2qUNu',
  'guten-DPOAeP', 'guten-hMHbya', 'guten-NrEfkE', 'guten-ctevvg', 'guten-bYWCoH', 'guten-sNo6Q6', 'guten-0lnAuE'
];

cardClasses.forEach(cls => {
  const reg = new RegExp('[^{}]*\\.' + cls + '[^{}]*\\{[^}]*\\}', 'g');
  const m = css.match(reg);
  if (m) {
    console.log(`\n=== .${cls} ===`);
    m.forEach(r => console.log(r.trim()));
  }
});
