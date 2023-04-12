// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        let currentCharCode = str.charCodeAt(i);
        let nextCharCode = str.charCodeAt(i + 1);

        if (nextCharCode - currentCharCode > 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
    return undefined;
}