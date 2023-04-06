/**
 * Modify the code so that instances of Dog inherit from Animal.
 * Dog.prototype should be an instance of Animal.
 */

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();