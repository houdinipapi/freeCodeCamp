/**
 * Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
 * In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
 * Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
 * Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
 */


class Thermostat {
  constructor (fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  // getter
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);;
  }

  // setter
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius