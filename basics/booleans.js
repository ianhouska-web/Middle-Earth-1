// Defining booleans
let trueValue = true;
console.log(trueValue);
let falseValue = false;
console.log(falseValue);

// Using the NOT operator with Booleans
let notTrue = !true;
console.log(notTrue);
let notFalse = !false;
console.log(notFalse);
// Practice: booleans
console.log('--- Practice: booleans ---');
const isOpen = false;
console.log(!isOpen);

// Exercise: booleans
// 1. Declare two boolean variables.
// 2. Log the results of &&, ||, and !.
// 3. Use the values inside an if statement.
let trueValue1 = true;
let falseValue1 = false;
console.log(trueValue1 && falseValue1);
console.log(trueValue1 || falseValue1);
console.log(!trueValue1);



// Answer: booleans
// Example solution:
const isLoggedIn = true;
const hasPermission = false;
console.log('and:', isLoggedIn && hasPermission);
console.log('or:', isLoggedIn || hasPermission);
console.log('not:', !isLoggedIn);
if (isLoggedIn && !hasPermission) {
  console.log('Logged in but no permission');
} else if (isLoggedIn && hasPermission) {
  console.log('Logged in with permission');
} else {
  console.log('Not logged in');
}
