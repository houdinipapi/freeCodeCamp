/**
 * Remove all falsy values from an array.
 * Return a new array; do not mutate the original array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * Hint: Try converting each value to a Boolean.
 */

function bouncer(arr)
{
    //Create a new empty array to store the truthy values
    let newArray = [];

    //Loop throught the input array
    for (let i = 0; i < arr.length; i++)
    {
        //If the current value is truthy, add it to the new array
        if (Boolean(arr[i]))
        {
            newArray.push(arr[i]);
        }
    }
    // Return the new array
    return newArray;
}