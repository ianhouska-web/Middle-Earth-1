const fs = require('fs');
const path = require('path');
const projectRoot = path.resolve(__dirname);
const examples = {
  'basics/arrays.js': `// Practice: arrays
console.log('--- Practice: arrays ---');
const practiceArray = ['apple', 'banana', 'cherry'];
practiceArray.push('date');
console.log('Add:', practiceArray);
practiceArray.splice(1, 1); // remove banana
console.log('After remove:', practiceArray);
console.log('Contains cherry?', practiceArray.includes('cherry'));
practiceArray.forEach((item, index) => console.log(index, item));
`,
  'basics/assigments.js': `// Practice: assignments
console.log('--- Practice: assignments ---');
let value = 10;
value += 5;
console.log('Add 5:', value);
value *= 2;
console.log('Multiply by 2:', value);
value -= 4;
console.log('Subtract 4:', value);
value /= 2;
console.log('Divide by 2:', value);
`,
  'basics/booleans.js': `// Practice: booleans
console.log('--- Practice: booleans ---');
const isLoggedIn = true;
const hasPermission = false;
if (isLoggedIn && hasPermission) {
  console.log('Access granted');
} else {
  console.log('Access denied');
}
console.log('Not logged in?', !isLoggedIn);
`,
  'basics/falsy.js': `// Practice: falsy
console.log('--- Practice: falsy ---');
const values = [0, '', null, undefined, [], {}, 'hello'];
values.forEach((value) => {
  console.log(value, '=>', Boolean(value));
});
`,
  'basics/Conversions.js': `// Practice: conversions
console.log('--- Practice: conversions ---');
const text = '42';
const num = Number(text);
console.log('String to Number:', num, typeof num);
const text2 = 0;
console.log('Number to String:', String(text2), typeof String(text2));
console.log('Boolean of "" =>', Boolean(''));
console.log('Boolean of 5 =>', Boolean(5));
`,
  'basics/comparison.js': `// Practice: comparison
console.log('--- Practice: comparison ---');
console.log('3 == "3"?', 3 == '3');
console.log('3 === "3"?', 3 === '3');
const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log('a === b?', a === b);
console.log('a === c?', a === c);
`,
  'basics/math.js': `// Practice: math
console.log('--- Practice: math ---');
const sum = 5 + 7;
const product = 4 * 3;
const power = 2 ** 5;
const remainder = 17 % 3;
console.log('sum:', sum);
console.log('product:', product);
console.log('power:', power);
console.log('remainder:', remainder);
`,
  'basics/null-undefined.js': `// Practice: null vs undefined
console.log('--- Practice: null vs undefined ---');
let missing;
console.log('missing:', missing, typeof missing);
const empty = null;
console.log('empty:', empty, typeof empty);
console.log('missing == empty?', missing == empty);
console.log('missing === empty?', missing === empty);
`,
  'basics/number.js': `// Practice: number
console.log('--- Practice: number ---');
const integer = 12345;
const floatValue = 3.14159;
const scientific = floatValue.toExponential(2);
console.log('integer:', integer);
console.log('float:', floatValue.toFixed(2));
console.log('scientific:', scientific);
console.log('BigInt:', 12345678901234567890n);
`,
  'basics/objects.js': `// Practice: object
console.log('--- Practice: object ---');
const practiceObj = { firstName: 'Ian', lastName: 'Houska' };
practiceObj.age = 36;
console.log('Added age:', practiceObj);
delete practiceObj.lastName;
console.log('After delete:', practiceObj);
`,
  'basics/strings.js': `// Practice: string
console.log('--- Practice: string ---');
const phrase = 'JavaScript is fun';
console.log('Length:', phrase.length);
console.log('Uppercase:', phrase.toUpperCase());
console.log('Contains JavaScript?', phrase.includes('JavaScript'));
console.log('Words:', phrase.split(' '));
`,
  'classes/classes.js': `// Practice: class
console.log('--- Practice: class ---');
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return \`${this.name} is ${this.age} years old\`;
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  describe() {
    return \`${super.describe()} and studies ${this.major}\`;
  }
}
const student = new Student('Ian', 36, 'JavaScript');
console.log(student.describe());
`,
  'control-flow/conditionals.js': `// Practice: conditional
console.log('--- Practice: conditional ---');
const score = 7;
if (score >= 9) {
  console.log('Great');
} else if (score >= 5) {
  console.log('Good');
} else {
  console.log('Needs practice');
}
`,
  'control-flow/for-loops.js': `// Practice: for loop
console.log('--- Practice: for loop ---');
const items = ['a', 'b', 'c'];
for (let i = 0; i < items.length; i++) {
  console.log('index', i, items[i]);
}
for (const item of items) {
  console.log('for-of', item);
}
`,
  'control-flow/loop-flow.js': `// Practice: loop flow
console.log('--- Practice: loop flow ---');
const numbers = [10, 20, 30, 40];
for (const number of numbers) {
  if (number === 30) continue;
  if (number === 40) break;
  console.log(number);
}
`,
  'control-flow/switch.js': `// Practice: switch
console.log('--- Practice: switch ---');
const day = 'Tuesday';
switch (day) {
  case 'Monday':
  case 'Tuesday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Middle of week');
}
`,
  'control-flow/while Loops.js': `// Practice: while loop
console.log('--- Practice: while loop ---');
let count = 0;
while (count < 3) {
  console.log('while', count);
  count++;
}
count = 0;
do {
  console.log('do while', count);
  count++;
} while (count < 3);
`,
  'data-structures/maps-sets.js': `// Practice: map/set
console.log('--- Practice: map/set ---');
const practiceMap = new Map();
practiceMap.set('name', 'Ian');
practiceMap.set('age', 36);
practiceMap.forEach((value, key) => console.log(key, value));
const practiceSet = new Set([1, 2, 2, 3]);
console.log('set values:', [...practiceSet]);
console.log('has 2?', practiceSet.has(2));
`,
  'formatting/dates.js': `// Practice: date formatting
console.log('--- Practice: date formatting ---');
const now = new Date();
console.log('ISO:', now.toISOString());
console.log('Locale US:', now.toLocaleDateString('en-US'));
console.log('Locale GB:', now.toLocaleDateString('en-GB'));
`,
  'formatting/Formatting Dates.js': `// Practice: Formatting Dates
console.log('--- Practice: Formatting Dates ---');
const now2 = new Date();
const options = { weekday: 'long', month: 'short', day: 'numeric' };
console.log('Custom format:', now2.toLocaleDateString('en-US', options));
`,
  'formatting/Formatting Numbers.js': `// Practice: Formatting Numbers
console.log('--- Practice: Formatting Numbers ---');
const amount = 123456.78;
console.log('USD:', new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount));
console.log('EUR:', new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount));
console.log('Percent:', new Intl.NumberFormat('en-US', { style: 'percent' }).format(0.75));
`,
  'json/JSON.js': `// Practice: JSON
console.log('--- Practice: JSON ---');
const raw = '{"name":"Ian","age":36}';
const parsed = JSON.parse(raw);
console.log('parsed object:', parsed);
const jsonString = JSON.stringify(parsed, null, 2);
console.log('pretty JSON:\n' + jsonString);
`
};
for (const [rel, block] of Object.entries(examples)) {
  const file = path.join(projectRoot, rel);
  if (!fs.existsSync(file)) {
    console.error('MISSING', rel);
    continue;
  }
  let data = fs.readFileSync(file, 'utf8');
  const regex = /\/\/ Practice:[\s\S]*$/m;
  if (regex.test(data)) {
    data = data.replace(regex, block);
  } else {
    data += '\n' + block;
  }
  fs.writeFileSync(file, data, 'utf8');
  console.log('UPDATED', rel);
}
