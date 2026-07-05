// Simply fuction to log out truthyness
const isTruthy = (name, exp) => {
    console.log(`${name}: ${Boolean(exp)}`);
}

//Numbers
isTruthy("val1", 0);
isTruthy("val2", 1);
isTruthy("val3", -1);
isTruthy("val4", NaN);
isTruthy("val5", 0n);

//Boolean, Null, and Undefined
isTruthy("vali6", undefined);
isTruthy("val7", null);
isTruthy("val8", false);

// Strings
isTruthy("val9", "");
isTruthy("val10", "Hi");
isTruthy("val11", "false");

// Objects
isTruthy("val12", {});

// Undefined Variables
let var1;
isTruthy("val13", var1);
// Practice section: quick examples to run while learning
// Practice: falsy
console.log('--- Practice: falsy ---');
const practiceFalsy = '';
console.log(Boolean(practiceFalsy));
// Exercise section: tasks for you to complete
// Exercise: falsy
// 1. Create a list of values: 0, '', null, undefined, NaN.
// 2. Convert each value to Boolean.
// 3. Log which values are false.
// Answer section: canonical solution (view after trying the exercise)
// Answer: falsy
// Example solution:
const values = [0, '', null, undefined, NaN];
values.forEach((value) => {
  console.log(value, '=>', Boolean(value));
});
