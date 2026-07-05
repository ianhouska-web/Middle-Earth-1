// Creating a date
let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(`Date 1: ${date1}`);

// Display just the calendar date
console.log(`Calendar Date: ${date1.toDateString()}`);

//Display a locale-specific date string
console.log(`Locale 'en-US: ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale 'en-GB: ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale 'ja-JP: ${date1.toLocaleDateString('ja-JP')}`);

//Display just the Time
console.log(`Date Time: ${date1.toTimeString()}`);

//Display a locale-specific time string
console.log(`Locale en-US: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleTimeString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleTimeString('ja-JP')}`);

// Custom date string
let options = {
    dateStyle: "short",
    timeStyle: "short"
};
console.log(`Custom Date: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custom Date: ${date1.toLocaleString('ar-KW',)}`);
// Practice section: quick examples to run while learning
// Practice: Formatting Dates
console.log('--- Practice: Formatting Dates ---');
const now2 = new Date();
console.log(now2.toLocaleString('en-US', { dateStyle: 'short' }));
// Exercise section: tasks for you to complete
// Exercise: Formatting Dates
// 1. Create a Date object.
// 2. Use toLocaleDateString with options to format the date.
// 3. Log the formatted strings.
// Answer section: canonical solution (view after trying the exercise)
// Answer: Formatting Dates
// Example solution:
const now = new Date();
const optionsAnswer = { weekday: 'long', month: 'short', day: 'numeric' };
console.log(now.toLocaleDateString('en-US', optionsAnswer));
console.log(now.toLocaleDateString('en-GB', optionsAnswer));
