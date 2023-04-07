// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
// You can use any of the methods covered in this section, and don't use replace.
// REQUIREMENTS
// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

function urlSlug(title) {
    return title
        .toLowerCase() // convert the title to lowercase
        .trim() // remove any white-space at the beginning or end
        .split(/\s+/) // split the title into an array of words using one or more spaces as separator
        .join("-"); // join the words using a hyphen as separator
}
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");