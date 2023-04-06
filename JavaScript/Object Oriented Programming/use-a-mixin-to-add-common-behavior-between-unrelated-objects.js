/**
 * Create a mixin named glideMixin that defines a method named glide.
 * Then use the glideMixin to give both bird and boat the ability to glide.
 * 
 * **TESTS**
 * Your code should declare a glideMixin variable that is a function.
 * Your code should use the glideMixin on the bird object to give it the glide method.
 * Your code should use the glideMixin on the boat object to give it the glide method.
 */

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Creating a glideMixin
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Ability to glide!")
    }
};

// Give bird and boat ability to glide
glideMixin(bird);
glideMixin(boat);