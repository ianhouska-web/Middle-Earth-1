// Anatomy of a Property
id: 

    title:
        name:  "title"
        value:  "Cybersecurity"
        writable: true // boolean value
        configurable: true // boolean value
        enumerable: true // boolean value
   
// Editing a Property Attribute

 Object.defineProperty(object, "property", {
    writable: false, // When a property's "Writable" attribute is set to "false" it cannot be deleted or edited.
    configurable: false // When a property's "configurable" attribute is set to "false" it cannot be deleted but can be edited.

 });

// Proctecting an Entire Object from Modification

 Object.freeze(object)

// "Object.Freeze" does two things.
// Sets the "writable" and "configurable" attributes to false for all the properties in the object.
// It Also prevents extensions to the object because even if you lock down every property in an object
// there's nothing preventing sopmeone from adding a new property to that object.

Object.seal(object) 

// "Object.seal" soes the same things as "Object.freeze" expect it doesn't mark the properties as writable "false"
// It prevents extensions and prevents configuring any property attributes
// Properties can still be edited. 

Object.preventExtensions(object)

// This will only prevent new properties from being added.
// It doesn't do anything to the existing properties of the object.

//=====================================================================================================================

// "Enumerable" - Able to be counted or named, one by one.
 // It will run once for every enumerable property of an Object.

// Enumerating Properties of An object with the "for...in" loop. 
 // You can also use "Object.keys" or "Object.getOwnPropertyNames".

 // "for...in" - is Enumerable, Owned, and Inherited.
 // "Object.keys" - is Enumerable, and Owned.
 // "Object.getOwnPropertyNames" - is Enumerable, Non-enumerable, and Owned.

 
 // Enumerating Properties of An object with the "for...in" Loop 
 // Example: 
    for (let key in object) {
        console.log(key);
    };

// Enumerating Items of an Array

for (let item in array) {
    console.log(item);
};

// Making a Property Non-Enumerable

Object.defineProperty(contentBlock, "description", {
    enumerable: false
});

// Accessing Each Property in an Object With "Object.keys". 
// Example:
Object.keys(contentBlock).forEach(key => {
    console.log(key);
});

// Accessing Non-enumerable Properties on an Object 
// Example:
const getOwn = Object.getOwnPropertyNames(cb);
getOwn.forEach((key) => {
    console.log(key);
});