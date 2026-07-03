const fs = require('fs');
const path = require('path');
const projectRoot = path.resolve(__dirname);
const answers = {
  'basics/arrays.js': "// Answer: arrays\n// Example solution:\nconst favoriteFoods = ['pizza', 'sushi', 'tacos'];\nfavoriteFoods.splice(1, 1);\nfavoriteFoods.push('ramen');\nconsole.log('Final array:', favoriteFoods);\nconsole.log('Length:', favoriteFoods.length);\n",
  'basics/assigments.js': "// Answer: assignments\n// Example solution:\nlet number = 10;\nnumber += 5;\nconsole.log('After += 5:', number);\nnumber -= 3;\nconsole.log('After -= 3:', number);\nnumber *= 2;\nconsole.log('After *= 2:', number);\nnumber /= 4;\nconsole.log('After /= 4:', number);\n",
  'basics/booleans.js': "// Answer: booleans\n// Example solution:\nconst isLoggedIn = true;\nconst hasPermission = false;\nconsole.log('and:', isLoggedIn && hasPermission);\nconsole.log('or:', isLoggedIn || hasPermission);\nconsole.log('not:', !isLoggedIn);\nif (isLoggedIn && !hasPermission) {\n  console.log('Logged in but no permission');\n} else if (isLoggedIn && hasPermission) {\n  console.log('Logged in with permission');\n} else {\n  console.log('Not logged in');\n}\n",
  'basics/falsy.js': "// Answer: falsy\n// Example solution:\nconst values = [0, '', null, undefined, NaN];\nvalues.forEach((value) => {\n  console.log(value, '=>', Boolean(value));\n});\n",
  'basics/Conversions.js': "// Answer: conversions\n// Example solution:\nconst text = '42';\nconst num = Number(text);\nconsole.log('string to number:', num, typeof num);\nconst value = 42;\nconst str = String(value);\nconsole.log('number to string:', str, typeof str);\nconsole.log('Boolean of empty string:', Boolean(''));\nconsole.log('Boolean of 1:', Boolean(1));\n",
  'basics/comparison.js': "// Answer: comparison\n// Example solution:\nconsole.log('3 == \"3\"?', 3 == '3');\nconsole.log('3 === \"3\"?', 3 === '3');\nconst a = { x: 1 };\nconst b = { x: 1 };\nconst c = a;\nconsole.log('a === b?', a === b);\nconsole.log('a === c?', a === c);\n",
  'basics/math.js': "// Answer: math\n// Example solution:\nconsole.log('2 + 3 =', 2 + 3);\nconsole.log('10 - 4 =', 10 - 4);\nconsole.log('5 * 6 =', 5 * 6);\nconsole.log('20 / 4 =', 20 / 4);\nconsole.log('17 % 3 =', 17 % 3);\nconsole.log('2 ** 5 =', 2 ** 5);\nlet count = 1;\ncount++;\nconsole.log('increment:', count);\ncount--;\nconsole.log('decrement:', count);\n",
  'basics/null-undefined.js': "// Answer: null vs undefined\n// Example solution:\nlet missing;\nconsole.log('missing:', missing, typeof missing);\nconst empty = null;\nconsole.log('empty:', empty, typeof empty);\nconsole.log('missing == empty?', missing == empty);\nconsole.log('missing === empty?', missing === empty);\n",
  'basics/number.js': "// Answer: number\n// Example solution:\nconst value = 123.456;\nconsole.log('fixed:', value.toFixed(2));\nconsole.log('exponential:', value.toExponential(2));\nconst big = 12345678901234567890n;\nconsole.log('BigInt:', big);\n",
  'basics/objects.js': "// Answer: object\n// Example solution:\nconst profile = { firstName: 'Ian', lastName: 'Houska' };\nprofile.age = 36;\ndelete profile.lastName;\nfor (const key in profile) {\n  console.log(key, profile[key]);\n}\n",
  'basics/strings.js': "// Answer: string\n// Example solution:\nconst sentence = 'JavaScript is fun';\nconsole.log('length:', sentence.length);\nconsole.log('uppercase:', sentence.toUpperCase());\nconsole.log('contains JavaScript?', sentence.includes('JavaScript'));\nconsole.log('words:', sentence.split(' '));\n",
  'classes/classes.js': "// Answer: class\n// Example solution:\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    return `${this.name} barks`;\n  }\n}\nconst dog = new Dog('Buddy');\nconsole.log(dog.speak());\n",
  'control-flow/conditionals.js': "// Answer: conditional\n// Example solution:\nconst score = 7;\nif (score >= 9) {\n  console.log('Great');\n} else if (score >= 5) {\n  console.log('Good');\n} else {\n  console.log('Needs practice');\n}\n",
  'control-flow/for-loops.js': "// Answer: for loop\n// Example solution:\nconst names = ['Ian', 'John', 'Jane'];\nfor (let i = 0; i < names.length; i++) {\n  console.log('index', i, names[i]);\n}\nfor (const name of names) {\n  console.log('for-of', name);\n}\n",
  'control-flow/loop-flow.js': "// Answer: loop flow\n// Example solution:\nconst numbers = [10, 20, 30, 40];\nfor (const number of numbers) {\n  if (number === 30) continue;\n  if (number === 40) break;\n  console.log(number);\n}\n",
  'control-flow/switch.js': "// Answer: switch\n// Example solution:\nconst day = 'Tuesday';\nswitch (day) {\n  case 'Monday':\n  case 'Tuesday':\n    console.log('Start of week');\n    break;\n  case 'Friday':\n    console.log('End of week');\n    break;\n  default:\n    console.log('Middle of week');\n}\n",
  'control-flow/while Loops.js': "// Answer: while loop\n// Example solution:\nlet count = 0;\nwhile (count < 3) {\n  console.log('while', count);\n  count++;\n}\ncount = 0;\ndo {\n  console.log('do while', count);\n  count++;\n} while (count < 3);\n",
  'data-structures/maps-sets.js': "// Answer: map/set\n// Example solution:\nconst practiceMap = new Map();\npracticeMap.set('name', 'Ian');\npracticeMap.set('age', 36);\npracticeMap.forEach((value, key) => console.log(key, value));\nconst practiceSet = new Set([1, 2, 2, 3]);\nconsole.log('set values:', [...practiceSet]);\nconsole.log('has 2?', practiceSet.has(2));\n",
  'formatting/dates.js': "// Answer: date formatting\n// Example solution:\nconst today = new Date();\nconsole.log('locale date:', today.toLocaleDateString());\nconsole.log('year:', today.getFullYear());\nconsole.log('month:', today.getMonth() + 1);\nconsole.log('day:', today.getDate());\n",
  'formatting/Formatting Dates.js': "// Answer: Formatting Dates\n// Example solution:\nconst now = new Date();\nconst options = { weekday: 'long', month: 'short', day: 'numeric' };\nconsole.log(now.toLocaleDateString('en-US', options));\nconsole.log(now.toLocaleDateString('en-GB', options));\n",
  'formatting/Formatting Numbers.js': "// Answer: Formatting Numbers\n// Example solution:\nconst amount = 123456.78;\nconsole.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount));\nconsole.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount));\nconsole.log(new Intl.NumberFormat('en-US', { style: 'percent' }).format(0.75));\n",
  'json/JSON.js': "// Answer: JSON\n// Example solution:\nconst data = { firstName: 'Ian', age: 36, skills: ['JS', 'Node'] };\nconst json = JSON.stringify(data, null, 2);\nconsole.log('JSON string:', json);\nconst parsedData = JSON.parse(json);\nconsole.log('Parsed object:', parsedData);\n"
};
for (const [rel, answer] of Object.entries(answers)) {
  const file = path.join(projectRoot, rel);
  if (!fs.existsSync(file)) {
    console.error('MISSING', rel);
    continue;
  }
  let data = fs.readFileSync(file, 'utf8');
  if (data.includes('// Answer:')) {
    console.log('SKIPPING existing answer:', rel);
    continue;
  }
  data += '\n' + answer;
  fs.writeFileSync(file, data, 'utf8');
  console.log('UPDATED', rel);
}
