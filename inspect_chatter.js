const fs = require('fs');

async function fetchChatter() {
  try {
    const res = await fetch('https://chatter-live.vercel.app/');
    const html = await res.text();
    console.log('--- HTML Length ---', html.length);
    
    // Find CSS files
    const cssMatches = [...html.matchAll(/href="(\/_next\/static\/css\/[^"]+)"/g)].map(m => m[1]);
    console.log('CSS Matches:', cssMatches);

    for (const cssUrl of cssMatches) {
      const cRes = await fetch('https://chatter-live.vercel.app' + cssUrl);
      const cssText = await cRes.text();
      console.log('\n--- CSS File ---', cssUrl);
      console.log(cssText.slice(0, 1500));
      // Extract custom variables
      const vars = [...cssText.matchAll(/--[a-zA-Z0-9_-]+:\s*[^;]+/g)].map(m => m[0]);
      console.log('\nCustom CSS Variables:', vars);
    }

    // Inspect script chunks to see structure & layout
    const scriptMatches = [...html.matchAll(/src="(\/_next\/static\/chunks\/[^"]+)"/g)].map(m => m[1]);
    console.log('\nScript Matches:', scriptMatches);
  } catch(e) {
    console.error(e);
  }
}
fetchChatter();
