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
// Practice section: quick examples to run while learning
// Practice: date formatting
console.log('--- Practice: date formatting ---');
const now = new Date();
console.log(now.toLocaleDateString());
// Exercise section: tasks for you to complete
// Exercise: date formatting
// 1. Create a new Date object.
// 2. Log the current date in your local format.
// 3. Log the year, month, and day separately.
// Answer section: canonical solution (view after trying the exercise)
// Answer: date formatting
// Example solution:
const today = new Date();
console.log('locale date:', today.toLocaleDateString());
console.log('year:', today.getFullYear());
console.log('month:', today.getMonth() + 1);
console.log('day:', today.getDate());
