/**
 * A functio that splits an array (first argument) into groups the length of size (second argument)
 * returns them as a two dimensional array
 */

function chunkArrayInGroups(arr, size)
{
    // Declare a new array
    let newArr = [];

    // Loop through the array with a step of size
    for (let i = 0; i < arr.length; i += size)
    {
        // Slice a portion of the array of length size starting from the current index i
        let slicedPortion = arr.slice(i, i + size);

        // Push the sliced portion into the new array
        newArr.push(slicedPortion);
    }
    return newArr;
}