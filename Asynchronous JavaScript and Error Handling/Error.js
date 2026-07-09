// Importing the Node filesystem module
import fs from 'node:fs/promises';

// Reading a file and parsing it as JSON
const rawData = await fs.readFile("./data.json");
const dataObj = JSON.parse(rawData);

// Reading a file and parsing it as JSON (if you arent sure of the result)
 try {
    const rawData = await fs.readFile("./data.json");
    const dataObj = JSON.parse(rawData);
} catch(err){
    console.log(`Error Name: ${err.name}`);
    console.log(`Error Message: ${err.message}`);
}

// Reading a file and parsing it as JSON(without Async)
fs.readFile("./data.json")
    .then(rawData => {
        return JSON.parse(rawData);
    })
    .catch(err => {
        console.log(`Error Name: ${err.name}`);
        console.log(`Error Message: ${err.message}`);

    });