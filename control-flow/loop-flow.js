// Array of Complex Objects
const employees = require('../data.json');

// Listing only the First five items in the array
for (let i = 0; i < employees.length; i++) {
    if (i ===5) {
        break;
    }
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
}

// Searching only for first names that start with a "B"
for (let employee of employees) {
    if(!employee.firstName.startsWith("B")) {
        continue;
    }
    console.log(`Name: ${employee.firstName} ${employee.lastName}`);
}

// Nested Loop control flow
for (let emp of employees) {
    for (let property in emp) {
        if(property === "dateBirth") {
            continue;
        }
        console.log(`${property}: ${emp[property]}`);
    }
    console.log('--');
}

// Practice: loop flow
console.log('--- Practice: loop flow ---');
for (const item of [1, 2]) console.log(item);

// Exercise: loop flow
// 1. Create an array of numbers.
// 2. Loop through it and skip a value with continue.
// 3. Stop the loop early with break.





























































// Answer: loop flow
// Example solution:
const numbers = [10, 20, 30, 40];
for (const number of numbers) {
  if (number === 30) continue;
  if (number === 40) break;
  console.log(number);
}
