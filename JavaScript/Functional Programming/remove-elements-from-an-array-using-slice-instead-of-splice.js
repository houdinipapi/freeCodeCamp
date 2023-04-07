// Rewrite the function nonMutatingSplice by using slice instead of splice.
// It shold limit the provided cities array to length of 3, and return a new array with only the first three items.
// Do not mutate the original array provided to the function.

function nonMutatingSplice(cities) {
    //return cities.splice(3);
    return cities.slice(0, 3);
    
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);