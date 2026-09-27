const fs = require('fs');
const html = fs.readFileSync('scratch/firmly_testimonials.html', 'utf8');

// Find all image sources
const imgRegex = /src=["']([^"']+)["']|url\(["']?([^"')]+)["']?\)/g;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1] || match[2]);
}
console.log('Images found:', Array.from(new Set(images)));

// Check sections, columns, headings, text
const cheerioLikeRegex = /<([a-z0-9]+)[^>]*class=["']([^"']+)["'][^>]*>/gi;
let tagMatch;
const classes = new Set();
while ((tagMatch = cheerioLikeRegex.exec(html)) !== null) {
  tagMatch[2].split(/\s+/).forEach(c => classes.add(c));
}
console.log('Key classes:', Array.from(classes).filter(c => c.includes('testim') || c.includes('guten') || c.includes('swiper')));
