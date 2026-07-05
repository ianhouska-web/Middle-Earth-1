// Create an Object with object literal (preferred)
let obj1 = {};

//Create an Object with a constructor
let obj2 = new Object();

// Populate properties on on object
obj1.firstName = "Ian";
obj1.lastName = "Houska";
obj1.isActive = true;
obj1.startDate = new Date("Januaray 1, 2022");
obj1.vacationDays = 14;
console.log(obj1);

// Populating an Object on creation with object literal syntax
let obj3 = {
    firstName: "Ian",
    lastName: "Houska",
    isActive: true,
    startDate: new Date("January 1, 2022"),
    vacationDays: 14
};
console.log(obj3);

// Accessing properties from an object
console.log(`First Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3["lastName"]}`);

// Deleting properties from an Object


// Accessing a property that doesn't exist
console.log(`Non-existent value: ${obj3.middleName}`);

// Objects are passed by reference, not value
let obj4 = obj3;
obj4.lastName = "Houska";
console.log(`Last Name (obj3): ${obj3.lastName}`);
// Practice section: quick examples to run while learning
// Practice: object
console.log('--- Practice: object ---');
const practiceObj = { one: 1 };
console.log(practiceObj.one);
// Exercise section: tasks for you to complete
// Exercise: object
// 1. Create an object with at least two properties.
// 2. Add a new property.
// 3. Delete one property.
// 4. Loop over the object and log each key and value.
// Answer section: canonical solution (view after trying the exercise)
// Answer: object
// Example solution:
const profile = { firstName: 'Ian', lastName: 'Houska' };
profile.age = 36;
delete profile.lastName;
for (const key in profile) {
  console.log(key, profile[key]);
}
