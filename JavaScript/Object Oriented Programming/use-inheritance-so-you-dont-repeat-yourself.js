/**
 * The eat method is repeated in both Cat and Bear.
 * Edit the code in the spirit of DRY (Don't Repeat Yourself) by moving the eat method to Animal supertype.
 * Animal.prototype should have the eat property
 * Bear.prototype should not have the eat property.
 * Cat.prototype should not have the eat property.
 */

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
    // eat: function() {
    //     console.log("nom nom nom");
    // }
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
    // eat: function() {
    //     console.log("nom nom nom");
    // }
};

function Animal() {};

Animal.prototype = {
        constructor: Animal,
        eat: function() {
            console.log("nom nom nom");
        }
}