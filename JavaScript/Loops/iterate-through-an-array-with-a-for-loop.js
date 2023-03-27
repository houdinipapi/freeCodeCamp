/**
 * Declare and initialize a variable total to 0.
 * Use for loop to add the value of each element of the myArr array to total.
 */

// Setup
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for ( let i = 0; i <= (myArr.length - 1); i++) {
  total = total + myArr[i];
}