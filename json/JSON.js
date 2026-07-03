// JavaScript Object Notation(JSON) enable developers to convert a JavaScript object into a string.
//  This string can be passed between appilications, stored on the local file sysyem or loaded at runtime.

// JavaScript Object
let employee = {
    firstName: "Ian",
    lastName: "Houska",
    birthDate: new Date("Feburary 1, 1990"),
    numYearsEmployment: 8,
    department: "Software Development",
    title: "Loser",
    isActive: true,
    salary: 100000
};
// Convert to JSON String
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null,2);
console.log(jsonValue);

//Convert Value Back to Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

// Writing JSON Directly
let jsonString = `{
"firstName": "Ian",
"lastName": "Houska"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Practice: JSON
console.log('--- Practice: JSON ---');
const parsed = JSON.parse('{"test":1}');
console.log(parsed);

// Exercise: JSON
// 1. Create a JavaScript object with nested data.
// 2. Convert it to JSON with JSON.stringify.
// 3. Parse it back with JSON.parse and log the result.



// Answer: JSON
// Example solution:
const data = { firstName: 'Ian', age: 36, skills: ['JS', 'Node'] };
const json = JSON.stringify(data, null, 2);
console.log('JSON string:', json);
const parsedData = JSON.parse(json);
console.log('Parsed object:', parsedData);
