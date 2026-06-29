// Rounding a number to an integer
let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceiling: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

// Fixed
let fixed = num1.toFixed(3);
console.log(`Fixed Type: ${typeof(fixed)} Fixed Value: ${fixed}`);

//Displaying in a locale-specific format
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`);
