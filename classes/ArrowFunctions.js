// An Arrow function expression is a concept alternative to a traditional function experssion, with some semantic differences and delibrate limitations in usage.

// function expression
const isIanFunction = function (name) {
   return (name === "Ian");
}
 // Multiline Arrow Function

 const isIanArrow = (name) => {
   return (name === "Ian");
 }

 // Single line arrow function with a parameter

 const isIan = name => name === "Ian";

 // Single line arrow function with no parameters
 
 const lineBreak = () => console.log("");

 // Arrow function with multiple parameters

 const logArray = (item, index) => {
    console.log(`${index}: ${item}`);
 }

 // Transformer functions ------------------------------------------- true or false output

 const transformBooleanValue = (input) => {
    return (input === "yes");
 }

 // The find() method returns the first element in the provided array that satisfies the provided testing function. if no values satisfy the testing function, undefined is returned.

 const array1 = [5, 12, 8, 130, 44];
 const found = array1.find(element => element > 10)
 console.log(found);
 // expected output should be 12

 
 // ARRAY PROTOTYPE.FILTER()
 // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const results = words.filter(word => word.length > 6);
console.log(results);
// expected output: Array ["exuberant", "destruction", "present"]


// RECURSION
// In programming recurison is when you call a function within itself. In doing this, an infinte loop can occur, so this must be done in a way where a function will not call itself continually.

// HIGHER-ORDER FUNCTIONS
// In JavaScript, a higher-order function takes one or more parameters and returns another function as its return value.
