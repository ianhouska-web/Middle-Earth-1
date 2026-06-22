// creating dates
let date1 = new Date("2023-01-01");
console.log(date1);
let date2 = new Date("Janurary 1, 2023");
console.log(date2);
let date3 = new Date(); //now
console.log(date3);
let date4 = new Date("2023-01-01T02:30:04.312-05:55");
console.log(date4);
let date5 = new Date(2023, 0, 1, 2, 30, 4);
console.log(date5);

// Accessing elements from a date
console.log(`Full Year: ${date5.getFullYear()}`);
console.log(`Month (zero-indexed): ${date5.getMonth()}`);
console.log(`Day of month: ${date5.getDate()}`);
console.log(`Hours: ${date5.getHours()}`);
console.log(`Minutes: ${date5.getMinutes()}`);
console.log(`Seconds: ${date5.getSeconds()}`); 