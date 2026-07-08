// Validator Functions
const isStringInputValid = function (input) {
    return (input) ? true: false;
}

const isBooleanInputValid = function (input) {
    return(input === "yes" || input === "no");
}

const isStartYearValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023) {
        return false;
    }
    return true;
}

const isStartMonthValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
        return false;
    }
    return true;
}

const isStartDayValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
        return false;
    }
    return true;
}

// Inputing a Validator function into a code
if (validator && !validator(value)) {
    console.error(`--Invalid input` );
    ProcessingInstruction.exit(1);
}
return value;

// Example of Validator Functions

let employee = {
    firstName: "Ian",
    lastName: "Houska",
    startDateYear: "2022",
    startDateMonth: "7",
    startDateDay: "12",
    isActive: true,
};

employee.firstName = "Ian";
employee.lastName = "Houska";
employee.startDate = "2023";
employee.startMonth = "7";
employee.startDay = "12";

const isStringInputValid = function (input) {
    return (input) ? true: false;
}

const isBooleanInputValid = function (input) {
    return(input === "yes" || input === "no");
}

const isStartYearValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023) {
        return false;
    }
    return true;
}

const isStartMonthValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
        return false;
    }
    return true;
}

const isStartDayValid = function (input) {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
        return false;
    }
    return true;
}

function getInput(prompt, validator) {
    let value = require('prompt-sync')()(prompt);
    if (validator && !validator(value)) {
        console.error(`--Invalid input` );
        process.exit(1);
    }
    return value;
}

function addEmployee() {
    console.log(`Add Employee----------------------------`);
    console.log('');
    let employee = {};
    employee.firstName = getInput("first Name: ", isStringInputValid);
    employee.lastname = getInput("Last Name: ", isStringInputValid);
    let startDateYear = getInput("Employee Start Year (1990-2023): ", isStartYearValid);
    let startDateMonth = getInput("Employee Start Date Month (1-12)", isStartMonthValid);
    let startDateDay = getInput("Employee Start Date Day (1-31)", isStartDayValid);
    employee.startDate = new Date(startDateYear, startDateMonth -1, startDateDay);
    employee.isActive = getInput("Is employee active (yes or no):", isBooleanInputValid);
    return employee;
}

let newEmployee = addEmployee();
console.log(newEmployee);