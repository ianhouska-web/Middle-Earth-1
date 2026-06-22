// Creating single-line strings
let firstName = "Ian";
let lastName = "Houska";
let title = "Title of Dad";
console.log(firstName,lastName,title);


// String concatentaion with the plus operator
let fullName = firstName + " " + lastName;
console.log(title + " " + fullName);

// String concatention with template literals (preferred)
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Creating multi-line strings with n\
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio)

// Creating multi-line strings with backticks ``
bio = `About Ian Houska:
Ian Houska is a father of one and he currently works at HFT.
He is currently working on learning how to code.
It is a very slow process.`;
console.log(bio) 

// Escaping Characters
let quote = 'Ian said, "JavaScript is fun!"';
quote = "Ian said, \"JavaScript is fun!\"";
quote = `In JavaScript, you must escape the \\ character`;
console.log(quote);

//String Length
let length = quote.length;
console.log(`Quote Length: ${length}`)

// Accessing specific characters
let secondCharacter = quote[1];
console.log(`Second Character: ${secondCharacter}`);

// Changing Case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullName.toLowerCase();
console.log(lowercaseName);

// Finding a substring
let idx1 = fullName.indexOf("n");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("ska");
console.log(`Index 2: ${idx2}`);
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`);

// Does a string contain a substring
let doesContain = fullName.includes("ska");
console.log(doesContain);