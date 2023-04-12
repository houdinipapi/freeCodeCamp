// Pig Latin is a way of altering English words. The rules are as follows:
// - If a word begins with a constant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vovel, just add way at the end.
// Translate the provided string to Pig Latin.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    // check if the string starts with a vowel
    if (str.match(/^[aeiou]/)) {
        return str + "way";
    }

    // find the first consonant or consonant cluster and move it to the end
    const match = str.match(/^[^aeiou]+/);
    if (match) {
        const consonants = match[0];
        const rest = str.slice(consonants.length);
        return rest + consonants + "ay";
    }

    // if the string contains no vowels, just add "ay" to the end
    return str + "ay";
}

// Example Usage
translatePigLatin("consonant");