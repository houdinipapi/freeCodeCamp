/**
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 */

function mutation(arr)
{
    // Convert both strings to lowercase for case-insensitive comparison
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();

    // Loop through each character in str2
    for (let i = 0; i < str2.length; i++)
    {
        // If the current character is not found in str1, return false
        if (str1.indexOf(str2[i]) === -1)
        {
            return false;
        }
    }

    // If we reach the end of the loop, all characters in str2 were found in str1, so return true
    return true;
}