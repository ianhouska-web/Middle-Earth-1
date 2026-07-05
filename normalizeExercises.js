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
  const orig = text;

  // Insert explanatory comments above Practice/Exercise/Answer if missing
  text = text.replace(/(^|\n)([^\n]*?)\n\s*\/\/ Practice:/g, (m, p1, p2) => {
    // If previous non-empty line is already an explanation, skip
    const prev = p2.trim();
    if (prev.startsWith('// Practice section:') || prev.startsWith('// Practice:')) return m;
    return `${p1}${p2}\n// Practice section: quick examples to run while learning\n// Practice:`;
  });
  text = text.replace(/(^|\n)([^\n]*?)\n\s*\/\/ Exercise:/g, (m, p1, p2) => {
    const prev = p2.trim();
    if (prev.startsWith('// Exercise section:') || prev.startsWith('// Exercise:')) return m;
    return `${p1}${p2}\n// Exercise section: tasks for you to complete\n// Exercise:`;
  });
  text = text.replace(/(^|\n)([^\n]*?)\n\s*\/\/ Answer:/g, (m, p1, p2) => {
    const prevExercise = p2.trim();
    if (prev.startsWith('// Answer section:') || prev.startsWith('// Answer:')) return m;
    return `${p1}${p2}\n// Answer section: canonical solution (view after trying the exercise)\n// Answer:`;
  });

  // Normalize variable names inside Exercise blocks by appending 'Exercise' to declared identifiers
  const exerciseBlockRe = /\/\/ Exercise:[\s\S]*?(?=(\/\/ Answer:|$))/g;
  text = text.replace(exerciseBlockRe, (block) => {
    // process each declaration line
    return block.replace(/(^|\n)(\s*)(const|let|var)\s+([A-Za-z_$][\w$]*)(\s*=)?/g, (m, p1, p2, decl, name, assign) => {
      // don't append if name already ends with Exercise
      if (name.endsWith('Exercise')) return m;
      const newName = name + 'Exercise';
      return `${p1}${p2}${decl} ${newName}${assign || ''}`;
    });
  });

  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    console.log('PATCHEd', file);
    changed++;
  }
}
console.log(`DONE. Files changed: ${changed}`);
