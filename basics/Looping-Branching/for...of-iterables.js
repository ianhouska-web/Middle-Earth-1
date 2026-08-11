// Iterables are objects that can be iterated over with a for..of loop. Arrays, strings, maps, sets, and more are all iterables. 
// The for..of loop can be used to iterate over the values of an iterable object.

// Example of a for..of loop with a string
console.log("Strings:");
    const string = "abc";
    for (const letter of string) {
        console.log(letter);
    };

    // Example of a for..of loop with a set
    console.log("set:");
    const set = new Set(["a", "b", "c"]);
    for (const elemnet of set){
        console.log(elemnet);
    };

    // example of a for..of loop with a map
    console.log("Map");
    const map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3,'three'],
    ]);
    for (const entry of map) {
        console.lofg(entry);
    };
    // if you want to access value of the entry
    for (const entry of map) {
        console.log(`At key ${entry[0]} we have value ${entry[1]}`); // this will log the key and value of each entry in the map
    }; 

    // if you want to access the key and value of the entry
    consoile.log("keys:");
    for(const key of map.keys()){
        console.log(key);
    };
    // if you want to access the value of the entry
    console.log("Values:");
    for (const value of map.values()){
        console.log(value);
    };