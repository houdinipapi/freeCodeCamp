/**
 * you are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n)
{
    //Create a copy of arr2 to avoid modifying the original array
    let arr2Copy = arr2.slice();

    //Loop through arr1 and insert its elements into arr2Copy at index n
    for (let i = 0; i < arr1.length; i++)
    {
        arr2Copy.splice(n + i, 0, arr1[i]);
    }

    //Return the modified arr2Copy
    return arr2Copy;
}