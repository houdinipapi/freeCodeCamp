/**
 * Rewrite the function makeNest and remove its call so instead it is an anonymous immediately invoked function expression (IIFE).
 * 
 * **TESTS**
 * The function should be anonymous.
 * Your function should have parentheses at the end of the expression to call it immediately.
 */


// Make the function anonymous & call it immediately
(function () {
    console.log("A cozy nest is ready");
})();

// Remove this call
//makeNest()