// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // replace spaces and underscores with dashes
    str = str.replace(/[\s_]/g, "-");

    // replace camelCase with lowercase words separated by dashes;
    str = str.replace(/([a-z])([A-Z])/g, "$1-$2");

    // convert to all lowercase
    str = str.toLowerCase();

    // return the resulting string
    return str;
}

// Example usage
spinalCase('This Is Spinal Tap'); // outputs "this-is-spinal-tap"