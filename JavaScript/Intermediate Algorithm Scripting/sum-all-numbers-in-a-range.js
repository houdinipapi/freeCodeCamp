function sumAll(arr) {
    // determine the minimum and maximum numbers
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // loop through all the numbers between the minimum and maximu numbers and add them up
    let sum = 0;
    for (let i = min; i <= max; i++)
    {
        sum += i;
    }

    // add the sum of the two input numbers to the sum of allthe numbers in between to get the final result
    return sum;
}

// example usage
sumAll([1, 4]); // outputs 10