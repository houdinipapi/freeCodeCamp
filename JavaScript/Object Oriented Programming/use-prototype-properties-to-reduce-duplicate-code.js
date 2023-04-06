/**
 * Add a numLegs property to the prototype of Dog
 */

function Dog(name) {
    this.name = name;
}

// Adding a property to the prototype
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");