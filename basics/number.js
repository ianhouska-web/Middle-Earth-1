// Define number Values
let num1 = 6;
let num2 = -1000000;
let num3 = 1.234567;

//Defining big and small numbers
let num4 = 1560000000000000000000;
console.log(num4);
let num5 = -0.0000000000000000021;
console.log(num5)

//Creating numbers with e-notation
let num6 = 1.2e+10
console.log(num6)

// How big and small can we get with the number type
console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Value: ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Integer: ${Number.MAX_SAFE_INGETER}`);

// Creating BigInt's
let bigInt1 = 1n;
let bigInt2 = 1_560_000_000_000_000_000n;
console.log(bigInt1,bigInt2);
// Practice section: quick examples to run while learning
// Practice: number
console.log('--- Practice: number ---');
console.log(typeof 12345, 1_234 + 5);
// Exercise section: tasks for you to complete
// Exercise: number
// 1. Create a number and log it with toFixed(2).
// 2. Convert a number to exponential form.
// 3. Create a BigInt and log it.
// Answer section: canonical solution (view after trying the exercise)
// Answer: number
// Example solution:
const value = 123.456;
console.log('fixed:', value.toFixed(2));
console.log('exponential:', value.toExponential(2));
const big = 12345678901234567890n;
console.log('BigInt:', big);
