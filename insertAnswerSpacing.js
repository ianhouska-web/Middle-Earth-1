const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of list) {
    if (ent.name === 'node_modules' || ent.name.startsWith('.git')) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) results = results.concat(walk(full));
    else if (ent.isFile() && full.endsWith('.js')) results.push(full);
  }
  return results;
}

const files = walk(process.cwd());
let changed = 0;
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  if (!text.includes('// Practice:') || !text.includes('// Answer:')) continue;
  // Normalize CRLF to LF for processing
  const orig = text;
  let newText = text;
  // If the file contains a Practice section, normalize spacing before any Answer header
  if (newText.includes('// Practice:')) {
    // Replace any number of newlines (and optional spaces) immediately before // Answer: with exactly 4 newlines
    newText = newText.replace(/(\r?\n)+\s*\/\/ Answer:/g, '\n\n\n\n// Answer:');
  }
  if (newText !== orig) {
    fs.writeFileSync(file, newText, 'utf8');
    console.log('PATCHED', file);
    changed++;
  }
}
console.log(`DONE. Files changed: ${changed}`);
