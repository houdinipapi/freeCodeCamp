/**
 * celsius - temperature in Celsius.
 * Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
 * The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 */

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertCtoF(30);