// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    const newArr = [];

    // loop through arr1 and check if each element is in arr2
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }

    // loop through arr2 and check if each element is in arr1
    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            newArr.push(arr2[j]);
        }
    }

    // return the new array containing elemets present in only one of the two input arrays
    return newArr;
}

// example usage
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);