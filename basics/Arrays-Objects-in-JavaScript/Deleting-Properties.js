// What is CRUD?

// CRUD stands for Create , Update, Read, Delete.

// Creating Properties 
Object.property = "value" // Dot Notation
object["property"] = "value" // Bracket Notation

// Reading Properties. If it exists it will return the value. If it doesn't then it will say undefined.
object.property // reads Dot Notation Property
object["property"] // reads Bracket Property

// Updating properties is just like Creating Properties
object.property // Dot Notation
object["propertyu"] // Bracket Notation

// Deleting Properties
delete object.property // Dot Notation
delete object["property"] // Bracket Notation

    // Example: we only want to use lightyellow
const contentBlockPrototype = {
    id: "no id",
    title: "no title",
    description: "no content",
    color: "white"
};
const updateCardDisplay = function() {


    if (contentBlock.color != "lightyellow")
        delete contentBlock.color;

    document.getElementById("cardBody").style.backgroundColor = contentBlock.color;

};


