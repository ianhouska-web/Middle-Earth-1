// Employee
let employee = {
    firstName: "Ian",
    lastName: "Houska",
    startDate: new Date(2026,0o1,0o3),
    numYearsSercive : 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering"
};
switch (employee.department) {
    case 'Engineering':
        console.log('Meet in Building 1');
        break;
    case 'Marketing':
        console.log('Meet in Building 2');
        break;
    case 'HR':
        console.log('Meet in Building 1');
    default:
        console.log('Meet in Building 3');

}
switch (employee.department) {
    case 'Engineering':
    case 'HR':
        console.log('Meet in Building 1');
        break;
    case ' Marketing':
        console.log('Meet in Building 2');
        break;
    default:
        console.log('Meet in Building 3');
}
// Practice: switch
console.log('--- Practice: switch ---');
const color = 'blue';
switch (color) { case 'blue': console.log('blue'); break; default: console.log('other'); }

// Exercise: switch
// 1. Create a variable for a color or day.
// 2. Use a switch statement with at least three cases.
// 3. Log a different message for each case.
























































// Answer: switch
// Example solution:
const day = 'Tuesday';
switch (day) {
  case 'Monday':
  case 'Tuesday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Middle of week');
}
