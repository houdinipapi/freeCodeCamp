// Flatten a nested array.
// You must account for varying levels of nesting.

function steamrollArray(arr) {
    let flattened = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(steamrollArray(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
}

// Example Usage
steamrollArray([1, [2], [3, [[4]]]]);