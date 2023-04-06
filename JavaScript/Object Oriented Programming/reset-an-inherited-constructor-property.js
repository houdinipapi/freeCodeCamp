/**
 * Fix the code so dck.constructor and beagle.constructor return their respective constructors.
 * 
 * **TESTS**
 * Bird.prototype should be an instance of Animal.
 * duck.constructor should return Bird.
 * Dog.prototype should be an instance of Animal.
 * beagle.constructor should return Dog.
 */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.property);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);
console.log(beagle.constructor);