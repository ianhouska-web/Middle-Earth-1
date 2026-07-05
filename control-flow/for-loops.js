// Array of Data
const names = [ "Ian", "John", "Jane", "Molly" ];

// Quick Example of a for loop
for (let i = 0; i < names.length; i++) {
    console.log(`Name: ${names[i]}`);
}

// Using a For...of Loop
for (let name of names) {
    console.log(`Name: ${name}`);
}

// Array of Complex Objects
const employees = require('../data.json');

const employee = employees[0];
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}
console.log('---------');
// Practice section: quick examples to run while learning
// Practice: for loop
console.log('--- Practice: for loop ---');
for (let i = 0; i < 2; i++) console.log(i);
// Exercise section: tasks for you to complete
// Exercise: for loop
// 1. Create an array of names.
// 2. Loop through it with a for loop and log each name.
// 3. Loop again with for...of and log the index and value.
// Answer section: canonical solution (view after trying the exercise)
// Answer: for loop
// Example solution:
const namesAnswer = ['Ian', 'John', 'Jane'];
for (let i = 0; i < namesAnswer.length; i++) {
  console.log('index', i, namesAnswer[i]);
}
for (const name of namesAnswer) {
  console.log('for-of', name);
}
