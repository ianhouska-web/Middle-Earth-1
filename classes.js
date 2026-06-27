// Creating a class in JavaScript
class CalendarDay {
    //private fields
    #month;
    #day;
    #year;
    //constructor
    constructor(month, day, year) {
        this.#month = month;
        this.#day = day;
        this.#year = year;
    }
    //public method
    toString() {
        return `${this.#year}-${this.#month+1}-${this.#day}`;
    }
}
//Using our new Class
let day1 = new CalendarDay(2, 0, 2023);
console.log(day1.toString());

// Declaring variables
let myAge = 36;
const myName = "Ian"

// Logging to console
console.log(myAge);
console.log(myName);