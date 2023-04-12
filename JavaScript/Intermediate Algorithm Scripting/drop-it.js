// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
    let index = 0;

    while (index < arr.length && !func(arr[index])) {
        index++;
    }

    if (index === arr.length) {
        return [];
    } else {
        return arr.slice(index);
    }
}

// Example Usage
dropElements([1, 2, 3], function(n) {return n < 3; });