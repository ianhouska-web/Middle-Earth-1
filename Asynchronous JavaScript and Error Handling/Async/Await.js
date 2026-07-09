// Async and Await
// The async fuction declaration delares an async function where the await keyword is permitted within the function body. 
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
// avoiding the need to explicatitly configure promise chains... Use of async and await enables the use of ordinary try/catch blocks around asynchronous code.

// Import node Filesystem Module(wont run in our terminal)
import fs from "node:fs/promises";

async function loadData() {
    const data = await fs.readFile('./data.json', 'utf8');
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("complete");
}

loadData().then(() => console.log("Promise Completed"));

// Top Level Await
// Top-Level await enables modules to act as a big async functios: With top-level await ECMAScriptm Modules(ESM) can await resources,
// causing other modules who import them to wait befire they start evaluating their body.

// loading and writing data to a filesystem------------------------
const loadData = async () => {
    console.log("loading employees......");
    try {
        const fileData = await fs.readFile('./data.json');
        employees = JSON.parse(fileData);
    } catch (err) {
        console.error("Cannot load in employees");
        throw err;
    }
}

const writeData = async () => {
    console.log("Writing employees.....");
    try {
        await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
    } catch (err) {
        console.error("Cannot write employees data.");
    }
}
// Appilication execution ---------------------------------------------
const main = async () => {
    // Get the command the user wants to execute
    const command = process.argv[2].toLowerCase();

    switch (command) {

        case 'list':
            listEmployees();
            break;

        case 'add':
            addEmployee();
            break;

        case 'search-by-id':
            searchById();
            break;

        case 'search-by-name':
            searchByName();
            break;

        default:
            console.log('Unsupported command. Exiting...');
            process.exit(1);

    }
}

loadData()
    .then(main)
    .catch((err) => {
        console.error("Cannot complete startup.");
        throw err;
    });

// SPREAD SYNTAX - (...) the spread syntax allows an iterable, such as an array or string to be expanded in places where zero or more arguments(for function calls) or elements(for Array literals) are expected. 
// In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
                            // Example of a Spread Syntax//
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers));
//expected output: 6
console.log(sum.apply(null, numbers));
//expected output: 6