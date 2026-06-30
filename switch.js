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