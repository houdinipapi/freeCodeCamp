// The checksign function uses multiple conditional operators.
// uses best practice format such that each condition is on a separate line
// checks if a number is positive, negative or zero
// The function should return positive, negative or zero.

function checkSign(num) {
  return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
}

checkSign(10);