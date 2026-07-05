//Creating an array in JavaScript
let arr1 = [];
let arr2 = ["item1", "item2"];
let arr3 = new Array();
let arr4 = new Array("item1", "item2");

//Accessing array values
let names = ["Ian", "John", "Jane", "Molly"];
console.log(`Names Length: ${names.length}`);
console.log(`First Name: ${names[0]}`);
console.log(`Second Name: ${names[1]}`);
console.log(`Tenth Name: ${names[10]}`); //undefined

//Searching for values in an array
const includesIan = names.includes("Ian");
console.log(`Includes Ian: ${includesIan}`);
const includesMolly = names.includes("Molly");
console.log(`Includes Molly: ${includesMolly}`);
const ianIndex = names.indexOf("Ian");
console.log(`Ian Index: ${ianIndex}`);

//Adding values - at the end of an array
names.push("Molly");
console.log(`Names: ${names}`);

//Adding values - at the beginning of an array
names.unshift("Alice");
console.log(`Names: ${names}`);

// adding values - at a specific index
names.splice(2, 0, "Bob");
console.log(names);

//Removing values - at the beginning of an array
names.shift();
console.log(names);

//Removing values - at the end of an array
names.splice(5, 1);
console.log(names);

// Arrays and Objects
const obj1 = {
    firstName: "Ian",
    lastName: "Smith",
};

const obj2 = {
    firstName: "John",
    lastName: "Doe",
};

const obj3 = {
    firstName: "Jane",
    lastName: "Doe",
};

const employees = [obj1, obj2];
console.log(`Is identical object in array: ${employees.includes(obj3)}`); //false
console.log(`Is same object in array: ${employees.includes(obj1)}`); //true
// Practice section: quick examples to run while learning
// Practice: arrays
console.log('--- Practice: arrays ---');
const practiceArray = ['apple', 'banana'];
practiceArray.push('cherry');
console.log(practiceArray);
// Exercise section: tasks for you to complete
// Exercise: arrays
// 1. Create an array of three favorite foods.
// 2. Remove the second item.
// 3. Add a new food to the end.
// 4. Log the final array and its length.
// Answer section: canonical solution (view after trying the exercise)
// Answer: arrays
// Example solution:
const favoriteFoods = ['pizza', 'sushi', 'tacos'];
favoriteFoods.splice(1, 1);
favoriteFoods.push('ramen');
console.log('Final array:', favoriteFoods);
console.log('Length:', favoriteFoods.length);
