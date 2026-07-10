import chalk from 'chalk';
import { logObject,numEmployeesLogged } from './Logging.js';

//console.log(`${chalk.blue.bold('First Name: ')} Ian`);
//console.log(`${chalk.green.bold('Last Name: ')} Houska`);

const employee = {
    id: 0,
    email: "ianhouska@gmail.com",
    firstName: "Ian",
    lastName: "Houska",
    salaryUSD: 246463,
    localCurrency: "PEN",
    dateBirth: "1990-03-02",
    startDate: "July 7th 2026",
    isActive: true,
};

logObject(employee);
logObject(employee);
console.log(`${chalk.blue.bold('Employees Logged: ')} ${chalk.red.bold(numEmployeesLogged)}`);