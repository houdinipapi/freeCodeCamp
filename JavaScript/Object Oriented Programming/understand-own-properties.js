/**
 * Add the own properties of canary to the array ownProps.
 */

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");

// Declaring an empty array
let ownProps = [];

// Adding the own properties of canary to the array
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}