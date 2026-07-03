// Array of Complex Objects
const employees = require('../data.json');

// Basic While Loop
let i = 0;
while(employees[i]) {
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++;
}
console.log(`-----`);

// Do while Loop
i = 0;
do {
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++;
} while(employees[i]);
// Practice: while loop
console.log('--- Practice: while loop ---');
let count = 0;
while (count < 2) { console.log(count); count++; }

// Exercise: while loop
// 1. Use a while loop to count from 0 to 2.
// 2. Use a do...while loop to count from 0 to 2.
// 3. Log each value in both loops.









































































// Answer: while loop
// Example solution:
let countAnswer = 0;
while (countAnswer < 3) {
  console.log('while', countAnswer);
  countAnswer++;
}
countAnswer = 0;
do {
  console.log('do while', countAnswer);
  countAnswer++;
} while (countAnswer < 3);
