// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    const arr = [];

    // loop through each object in the input array
    for (let i = 0; i < collection.length; i++) {
        let found = true;

        // loop through each key-value pair in the source object
        for (let key in source) {
            if (!collection[i].hasOwnProperty(key) || collection[i][key] !== source[key]) {
                found = false;
                break;
            }
        }

        // if all key-value pairs are found in the current object, add it to the result array
        if (found) {
            arr.push(collection[i]);
        }
    }

    // return the result array
    return arr;

}

// Example Usage
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // outputs [{ first: "Tybalt", last: "Capulet" }]