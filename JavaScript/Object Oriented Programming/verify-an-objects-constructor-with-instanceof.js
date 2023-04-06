/**
 * Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms.
 * Then, use instanceof to verify that it is an instance of House.
 */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// creating a new instance
let myHouse = new House(4);

// Checking instance
myHouse instanceof House;