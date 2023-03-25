/*
  - The countdown function is pre-defined in freeCodeCamp
  - The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
  - If the function is called with a number less than 1, the function should return an empty array.
  - eg. calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
*/

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}