// Greater then and less than with numbers
let val1 = (7>5);
console.log(`vali1: ${val1}`);
let val2 = 5 <= 3;
console.log(`val2: ${val2}`);

// Equality
let val3 = (3 == 3);
console.log(`val3: ${val3}`);
let val4 = (true === false);
console.log(`val4: ${val4}`);
let val5 = ("HI" !== "hi");
console.log(`val5: ${val5}`);

// Primitive Equality (passed by value)
let str1 = "Hello";
let str2 = "Hello";
let val6 = (str1 == str2);
console.log(`val6: ${val6}`);

// Objects equality (passed by reference)
let obj1 = {};
let obj2 = {};
let val7 = (obj1 === obj2);
console.log(`val7: ${val7}`);

let obj3 = obj2;
let val8 = (obj2 === obj3);
console.log(`val8: ${val8}`);

//strict equality vs equality
let val9 = ('42' == 42);
let val10 = ('42' === 42);
console.log(`val9: ${val9} val10: ${val10}`);

let val11 = (undefined == null);
let val12 = (undefined === null);
console.log(`val11: ${val11} val12: ${val12}`);

// Practice: comparison
console.log('--- Practice: comparison ---');
console.log(2 === 2, 2 !== '2');

// Exercise: comparison
// 1. Compare two values that are the same but different types using == and ===.
// 2. Compare two objects with the same properties.
// 3. Log the results and explain the difference.




















































// Answer: comparison
// Example solution:
console.log('3 == "3"?', 3 == '3');
console.log('3 === "3"?', 3 === '3');
const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log('a === b?', a === b);
console.log('a === c?', a === c);
