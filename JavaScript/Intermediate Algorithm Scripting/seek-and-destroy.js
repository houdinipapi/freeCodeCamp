// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

function destroyer(arr) {
    // get all the argumentsafter the initial array using the arguments object
    const args = Array.from(arguments).slice(1);

    // loop through the initial array and remove any elements that match any of the arguments
    for (let i = 0; i < arr.length; i++) {
        if (args.indexOf(arr[i]) !== -1) {
            arr.splice(i, 1);
            i--;
        }
    }

    // return the modified initial array
    return arr;
}

// example usage
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // outputs [1, 4, 5]