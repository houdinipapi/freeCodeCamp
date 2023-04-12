// Create a function that sums two arguments together.
// If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum
// If either argument isn't a valid number, return undefined.

function addTogether(a, b) {
    let args = Array.from(arguments);

    if (!args.every(arg => typeof arg === "number")) {
        return undefined;
    }

    if (args.length === 2) {
        return args[0] + args[1];
    }

    if (args.length === 1) {
        return function(num) {
            if (typeof num === "number") {
                return args[0] + num;
            } else {
                return undefined;
            }
        }
    }
}

// Example Usage
addTogether(2, 3);