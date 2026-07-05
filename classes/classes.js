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
// Practice section: quick examples to run while learning
// Practice: class
console.log('--- Practice: class ---');
class PracticeDay { constructor(name) { this.name = name; } }
console.log(new PracticeDay('Test').name);
// Exercise section: tasks for you to complete
// Exercise: class
// 1. Create a class with a constructor and at least one method.
// 2. Extend that class with a subclass.
// 3. Instantiate the subclass and log the result of the method.
// Answer section: canonical solution (view after trying the exercise)
// Answer: class
// Example solution:
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}
class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}
const dog = new Dog('Buddy');
console.log(dog.speak());
