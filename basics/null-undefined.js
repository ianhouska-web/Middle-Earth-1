// What happens when you don't give a variable a value
let x;
console.log(x);
console.log(typeof(x));
x = "Hello";
console.log(x);

//How do we set a variable to a purposefully empty value
let manager = null;
console.log(manager);
console.log(typeof(manager));

// Practice: null vs undefined
console.log('--- Practice: null vs undefined ---');
let practiceUndefined;
console.log(practiceUndefined, practiceUndefined === undefined);



// Exercise: null vs undefined
// 1. Declare one variable with no value and one with null.
// 2. Log their types.
// 3. Compare them with == and ===.












































































// Answer: null vs undefined
// Example solution:
let missing;
console.log('missing:', missing, typeof missing);
const empty = null;
console.log('empty:', empty, typeof empty);
console.log('missing == empty?', missing == empty);
console.log('missing === empty?', missing === empty);
