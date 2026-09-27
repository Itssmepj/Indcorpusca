const fs = require('fs');
const html = fs.readFileSync('C:/Users/Pranjal/.gemini/antigravity-ide/brain/813dce3c-6490-4e16-90ad-a9008024679b/scratch/user_html.html', 'utf8');

// Check the first card guten-DPOAeP
const card1 = html.match(/<div[^>]*guten-DPOAeP[\s\S]*?<\/h3>/i);
if (card1) {
  console.log('Card 1 HTML snippet:');
  console.log(card1[0]);
}

// Check if there is an arrow button or link in card 1
const link1 = html.match(/guten-DPOAeP[\s\S]*?(?=guten-hMHbya|$)/i);
if (link1) {
  const links = [...link1[0].matchAll(/<a[^>]*>[\s\S]*?<\/a>/gi)].map(m => m[0]);
  console.log('Links in Card 1:', links);
  const btns = [...link1[0].matchAll(/class="[^"]*button[^"]*"[^>]*>[\s\S]*?<\//gi)].map(m => m[0]);
  console.log('Buttons in Card 1:', btns);
}
