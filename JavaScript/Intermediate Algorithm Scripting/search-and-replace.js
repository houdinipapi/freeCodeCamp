// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
    // Create a function that changes the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        let targetArr = target.split("");
        let sourceArr = source.split("");

        //iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
        for (let i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        // join modified targetArr to string and return
        return targetArr.join("");
    }
    // replace "before" with "after" with "before"-casing
    return str.replace(before, applyCasing(before, after));
}

// Example Usage
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // outputs "A quick brown fox leaped over the lazy dog"