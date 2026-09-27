const fs = require('fs');
const html = fs.readFileSync('C:/Users/Pranjal/.gemini/antigravity-ide/brain/813dce3c-6490-4e16-90ad-a9008024679b/scratch/user_html.html', 'utf8');

const m = html.match(/guten-DPOAeP[\s\S]*?(?=guten-hMHbya|$)/i);
if (m) {
  // strip style attributes to see pure HTML structure
  console.log(m[0].replace(/\s*style="[^"]*"/gi, ''));
}
