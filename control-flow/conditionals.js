// Employee
let employee ={
    firstName: "Ian",
    lastName: "Houska",
    startDate: new Date(2026, 0o1, 0o3),
    numYearsService: 10,
    isActive: true,
    department: "Programming",
    title: "Head Programmer",
};

    //Example of module introduction
    let badgeColor;

    if (employee.numYearsService < 5) {
        employee.badgeColor = "blue";
    }    else if (employee.numYearsService < 10) {
            employee.badgeColor = "yellow";
    }        else if (employee.numYearsService < 15) {
                employee.badgeColor = "purple";
    }            else if (employee.numYearsService < 20) {
                    employee.badgeColor = "silver";
    }                else {
                        employee.badgeColor = "Red";
                    }
    console.log(`Years: ${employee.numYearsService} Badge Color: ${employee.badgeColor}`);
    
// Evaluating multiple conditions for truthyness in all conditions
if(employee.numYearsService > 5 && employee.department === "Programming") {
console.log(`Employee meets criteria`);
}

// Evaluating mulitple conditions for truthyness in one or more conditions
if(employee.numYearsService > 10 || employee.title.startsWith ("Head")) {
 console.log(`Employee meets criteria`);
}
// Evaluating for a condition to NOT be true
if(employee.numYearsService > 20 && !employee.isActive) {
console.log(`Employee is retired with full retirement benefit`);
}
// Using the ternary operator
if(employee.numYearsService > 10) {
    employee.annualBonus = 1000;
} else {
    employee.annualBonus = 500;
}

employee.annualBonus = (employee.numYearsService > 10) ? 1000 : 500;
// Practice section: quick examples to run while learning
// Practice: conditional
console.log('--- Practice: conditional ---');
const score = 8;
console.log(score > 5 ? 'pass' : 'fail');
// Exercise section: tasks for you to complete
// Exercise: conditional
// 1. Use if / else if / else for a score value.
// 2. Log different messages for high, medium, and low scores.
// Answer section: canonical solution (view after trying the exercise)
// Answer: conditional
// Example solution:
const score2 = 7;
if (score2 >= 9) {
  console.log('Great');
} else if (score2 >= 5) {
  console.log('Good');
} else {
  console.log('Needs practice');
}
