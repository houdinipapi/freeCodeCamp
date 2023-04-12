// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    // sort the input array in descending order
    arr.sort ((a, b) => b - a);

    // generate an array of numbers in the range
    let range = [];
    for (let i = arr[0]; i >= arr[1]; i--) {
        range.push(i);
    }

    // find the smallest common mltiple
    let lcm = range[0];
    for (let i = 1; i < range.length; i++) {
        let gcd = findGCD(lcm, range[i]);
        lcm = (lcm * range[i]) / gcd;
    }
    return lcm;
}

function findGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}

// Example Usage
smallestCommons([1,5]);