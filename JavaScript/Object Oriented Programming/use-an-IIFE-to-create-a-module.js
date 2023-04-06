/**
 * Create a module named funModule to wrap the two mixins isCuteMixin and singMixin.
 * funModule should return an object.
 * 
 * **TESTS**
 * funModule should be defined and return an object.
 * funModule.isCuteMixin should access a function.
 * funModule.singMixin should access a function.
 */

let isCuteMixin = function(obj) {
    obj.isCute = function() {
        return true;
    };
};

let singMixin = function(obj) {
    obj.sing = function() {
        console.log("Singing to an awesome tune");
    };
};

// Create a module
let funModule = (function () {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },

        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();