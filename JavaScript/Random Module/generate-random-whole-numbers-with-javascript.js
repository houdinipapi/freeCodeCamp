/*
  - Generate random whole numbers with JavaScript
  1 - Use Math.random() to generate a random decimal.
  2 - Multiply the random decimal by 10.
  3 - Use another function, Math.floor() to round the number down to its nearest whole number.
  - random whole numbers generated should be between 0 and 9
*/

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}