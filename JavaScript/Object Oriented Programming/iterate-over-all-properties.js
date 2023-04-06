/**
 * Add all of the own properties of beagle to the array ownProps.
 * Add all of the prototype properties of Dog to the array prototypeProps.
 */

function Dog(name)
{
    this.name = name; //own property
}

Dog.prototype.numLegs = 4; //prototype property

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle)
{
    if (beagle.hasOwnProperty(property))
    {
        ownProps.push(property);
    }
    else
    {
        prototypeProps.push(property);
    }
}