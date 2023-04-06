/**
 * Modify the dog.sayLegs method to remove any references to dog.
 * dog.sayLegs() should return the given string.
 * The code should use the this keyword to access the numLegs property of dog.
 */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + this.numLegs + " legs.";
    }
};

dog.sayLegs();