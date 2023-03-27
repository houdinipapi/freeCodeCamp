/**
 * parseInt - parses a string and returns an integer
 * radix - specifies the base of the number in the string (can be an integer btwn 2 and 36)
 * parseInt in the convertToInteger function converts a binary number to an integer and returns it.
 */

function convertToInteger(str) {

  return parseInt(str, 2);
}

convertToInteger("10011");