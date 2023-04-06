/**
 * Modify the code to show the correct prototype chain.
 * The code should show that Object.prototype is the prototype of Dog.prototype
 */

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

DOMStringMap.prototype.isPrototypeOf(beagle); // yields true

Object.prototype.isPrototypeOf(Dog.prototype);