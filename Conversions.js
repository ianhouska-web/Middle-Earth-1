// Using the Typeof function
let strValue = "HI";
console.log(typeof(strValue));
let numValue = 1;
console.log(typeof(numValue));
let boolValue = true;
console.log(typeof(boolValue));

// Joining a non-string value with a string
let age = 36;
let firstName = 'Ian'; 
let description = `${firstName} is ${age} years old`;
console.log(description);

//Converting a string to a number
let ageString = "36";
let ageNum = Number(ageString);
console.log(typeof(ageNum));
let ageNewNum = new Number(ageString);//you dont do it this way
console.log(typeof(ageNewNum));

// What about a NaN
let ageString2 = "thirty-six";
let ageNum2 = Number(ageString2);
console.log(`Age String 2: ${ageNum2}`);
let isInvaild = isNaN(ageNum2);
console.log(`Is Invaild: ${isInvaild}`);

// Converting a value to a Boolean
let num1 = 1;
let num2 = 0;
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1: ${bool1} Num2: {bool2}`);
