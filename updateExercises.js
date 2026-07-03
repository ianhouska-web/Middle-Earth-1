const fs = require('fs');
const path = require('path');
const projectRoot = path.resolve(__dirname);
const exercises = {
  'basics/arrays.js': `// Exercise: arrays
// 1. Create an array of three favorite foods.
// 2. Remove the second item.
// 3. Add a new food to the end.
// 4. Log the final array and its length.
`,
  'basics/assigments.js': `// Exercise: assignments
// 1. Declare a number variable.
// 2. Use +=, -=, *=, and /= on it.
// 3. Log the value after each change.
`,
  'basics/booleans.js': `// Exercise: booleans
// 1. Declare two boolean variables.
// 2. Log the results of &&, ||, and !.
// 3. Use the values inside an if statement.
`,
  'basics/falsy.js': `// Exercise: falsy
// 1. Create a list of values: 0, '', null, undefined, NaN.
// 2. Convert each value to Boolean.
// 3. Log which values are false.
`,
  'basics/Conversions.js': `// Exercise: conversions
// 1. Convert a string to a number and log its type.
// 2. Convert a number to a string and log its type.
// 3. Convert different values to Boolean and log them.
`,
  'basics/comparison.js': `// Exercise: comparison
// 1. Compare two values that are the same but different types using == and ===.
// 2. Compare two objects with the same properties.
// 3. Log the results and explain the difference.
`,
  'basics/math.js': `// Exercise: math
// 1. Use +, -, *, /, and % with two numbers.
// 2. Use exponentiation and log the result.
// 3. Use increment and decrement operators.
`,
  'basics/null-undefined.js': `// Exercise: null vs undefined
// 1. Declare one variable with no value and one with null.
// 2. Log their types.
// 3. Compare them with == and ===.
`,
  'basics/number.js': `// Exercise: number
// 1. Create a number and log it with toFixed(2).
// 2. Convert a number to exponential form.
// 3. Create a BigInt and log it.
`,
  'basics/objects.js': `// Exercise: object
// 1. Create an object with at least two properties.
// 2. Add a new property.
// 3. Delete one property.
// 4. Loop over the object and log each key and value.
`,
  'basics/strings.js': `// Exercise: string
// 1. Create a sentence string.
// 2. Log its length, uppercase version, and whether it includes a word.
// 3. Split the sentence into words and log the array.
`,
  'classes/classes.js': `// Exercise: class
// 1. Create a class with a constructor and at least one method.
// 2. Extend that class with a subclass.
// 3. Instantiate the subclass and log the result of the method.
`,
  'control-flow/conditionals.js': `// Exercise: conditional
// 1. Use if / else if / else for a score value.
// 2. Log different messages for high, medium, and low scores.
`,
  'control-flow/for-loops.js': `// Exercise: for loop
// 1. Create an array of names.
// 2. Loop through it with a for loop and log each name.
// 3. Loop again with for...of and log the index and value.
`,
  'control-flow/loop-flow.js': `// Exercise: loop flow
// 1. Create an array of numbers.
// 2. Loop through it and skip a value with continue.
// 3. Stop the loop early with break.
`,
  'control-flow/switch.js': `// Exercise: switch
// 1. Create a variable for a color or day.
// 2. Use a switch statement with at least three cases.
// 3. Log a different message for each case.
`,
  'control-flow/while Loops.js': `// Exercise: while loop
// 1. Use a while loop to count from 0 to 2.
// 2. Use a do...while loop to count from 0 to 2.
// 3. Log each value in both loops.
`,
  'data-structures/maps-sets.js': `// Exercise: map/set
// 1. Create a Map and add a few key/value pairs.
// 2. Create a Set with duplicate values.
// 3. Log the Map entries and Set values.
`,
  'formatting/dates.js': `// Exercise: date formatting
// 1. Create a new Date object.
// 2. Log the current date in your local format.
// 3. Log the year, month, and day separately.
`,
  'formatting/Formatting Dates.js': `// Exercise: Formatting Dates
// 1. Create a Date object.
// 2. Use toLocaleDateString with options to format the date.
// 3. Log the formatted strings.
`,
  'formatting/Formatting Numbers.js': `// Exercise: Formatting Numbers
// 1. Format a number as USD and EUR.
// 2. Format the same number as a percentage.
`,
  'json/JSON.js': `// Exercise: JSON
// 1. Create a JavaScript object with nested data.
// 2. Convert it to JSON with JSON.stringify.
// 3. Parse it back with JSON.parse and log the result.
`
};
for (const [rel, exercise] of Object.entries(exercises)) {
  const file = path.join(projectRoot, rel);
  if (!fs.existsSync(file)) {
    console.error('MISSING', rel);
    continue;
  }
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('// Exercise:')) {
    console.log('SKIPPING existing exercise:', rel);
    continue;
  }
  content += '\n' + exercise;
  fs.writeFileSync(file, content, 'utf8');
  console.log('UPDATED', rel);
}
