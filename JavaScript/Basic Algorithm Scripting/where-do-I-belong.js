/**
 * Return the lowest index at which a value (second argument) should be inserted into an array(first argument) once it has been sorted.
 * The returned value should be a number.
 */

function getIndexToIns(arr, num)
{
    //Sort teh input array in ascending order
    arr.sort((a, b) => a - b);

    //Loop through the sorted array and find the first element greater than or equal to num
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] >= num)
        {
            return i;
        }
    }

    //If we reach the end of the array, num is greater than all elements in arr, so return arr.length
    return arr.length;
}