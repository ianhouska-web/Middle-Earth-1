//Creating an object
const person = {
    firstName: "Ian",
    lastName: "Houska"
};

// Creating a Map
const map1 = new Map();
map1.set("firstName", "Ian");
map1.set("lastName", "Houska");
console.log(map1);

// Using Non-String keys
map1.set(new Date().getTime(),"Number Key");
map1.set({}, "Array Key");
map1.set(() => "HI", "Function Key");
console.log(map1);

// Checking the size
console.log(`Map Size: ${map1.size}`);

// Accessing values in a Map
console.log(map1.get("lastName"));
console.log(map1.get([])); //undefined

// Deleting values in a Map
map1.delete("firstName");
console.log(`Map Size: ${map1.size}`);

//Creating a Set
const set1 = new Set();
set1.add("Ian");
console.log(set1);

//Checking the Set Size
console.log(`Set Size: ${set1.size}`);

//Trying to add the same value again
set1.add("Ian");
console.log(`Set Size: ${set1.size}`);

// Adding in Complex Values
const team1 = new Set();
const emp1 = {
    firstName: "Ian",
    lastName: "Houska"
};
team1.add(emp1);
console.log(`Team1 size: ${team1.size}`);

// Detecting if a Set has an Object
console.log(`Does have employee: ${team1.has(emp1)}`);

//Removing Values from a Set
team1.delete(emp1);
console.log(`Team1 size: ${team1.size}`);
// Practice section: quick examples to run while learning
// Practice: map/set
console.log('--- Practice: map/set ---');
const practiceMap = new Map([['a', 1]]);
console.log(practiceMap.get('a'));
const practiceSet = new Set(['a', 'b']);
console.log(practiceSet.has('b'));
// Exercise section: tasks for you to complete
// Exercise: map/set
// 1. Create a Map and add a few key/value pairs.
// 2. Create a Set with duplicate values.
// 3. Log the Map entries and Set values.
// Answer section: canonical solution (view after trying the exercise)
// Answer: map/set
// Example solution:
const practiceMapAnswer = new Map();
practiceMapAnswer.set('name', 'Ian');
practiceMapAnswer.set('age', 36);
practiceMapAnswer.forEach((value, key) => console.log(key, value));
const practiceSetAnswer = new Set([1, 2, 2, 3]);
console.log('set values:', [...practiceSetAnswer]);
console.log('has 2?', practiceSetAnswer.has(2));
