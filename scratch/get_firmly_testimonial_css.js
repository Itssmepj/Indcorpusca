const fs = require('fs');

// Fetch the main style.css or gutenverse css from firmly
async function getCSS() {
  const res = await fetch('https://fse.jegtheme.com/firmly/');
  const html = await res.text();
  
  // Find all stylesheet links
  const links = [];
  const linkRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[1]);
  }
  console.log('Stylesheet links:', links.length);
  
  let combinedCSS = '';
  for (const link of links) {
    try {
      const cssRes = await fetch(link);
      const text = await cssRes.text();
      combinedCSS += '\n/* ' + link + ' */\n' + text;
    } catch (e) {
      console.error('Error fetching', link, e.message);
    }
  }
  
  // Also find inline <style> tags
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    combinedCSS += '\n/* inline style */\n' + styleMatch[1];
  }
  
  fs.writeFileSync('scratch/firmly_all_css.css', combinedCSS);
  console.log('Saved combined CSS, total size:', combinedCSS.length);

  // Search for classes
  const targetClasses = ['guten-F6fIV0', 'guten-syrrUX', 'guten-Ep3U1c', 'guten-fZ54dn', 'guten-viSm13', 'quote-override', 'testimonials'];
  for (const cls of targetClasses) {
    let pos = 0;
    console.log('=== Matches for ' + cls + ' ===');
    while ((pos = combinedCSS.indexOf(cls, pos)) !== -1) {
      const start = Math.max(0, pos - 100);
      const end = Math.min(combinedCSS.length, pos + 400);
      console.log(combinedCSS.substring(start, end).replace(/\n\s+/g, ' '));
      pos += cls.length + 50;
      break; // just first match
    }
  }
}

getCSS().catch(console.error);
