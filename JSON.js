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
"lastName": "Houska",
}`;
let obj = JSON.parse(jsonString);
console.log(obj);
