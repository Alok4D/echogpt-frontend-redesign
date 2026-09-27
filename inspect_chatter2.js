const fs = require('fs');

async function inspectChatterComponents() {
  const url = 'https://chatter-live.vercel.app/_next/static/chunks/app/(landing)/page-8d1d0ea90f61a202.js';
  const res = await fetch(url);
  const text = await res.text();
  
  // Find classNames used
  const classes = [...text.matchAll(/className:\s*"([^"]+)"/g)].map(m => m[1]);
  console.log('Sample ClassNames used in Chatter:');
  console.log(classes.slice(0, 30));

  // Find colors and gradients
  const colorMatches = [...text.matchAll(/from-[a-zA-Z0-9_-]+|to-[a-zA-Z0-9_-]+|bg-[a-zA-Z0-9_#-]+|text-[a-zA-Z0-9_#-]+/g)].map(m => m[0]);
  const uniqueColors = [...new Set(colorMatches)];
  console.log('\nUnique Colors & Classes:', uniqueColors.slice(0, 40));
}

inspectChatterComponents();
