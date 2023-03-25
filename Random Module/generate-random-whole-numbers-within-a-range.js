/*
  - Generate random whole numbers within a rangeOfNumbers
  - The function takes a range myMin and myMax
  - Returns a random whole number that's greater than or equal to myMin,
  - and is less than or equal to myMax (inclusive)
*/

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}