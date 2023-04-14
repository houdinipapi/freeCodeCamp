// Return true if the passed string looks like a valid US phone number
function telephoneCheck(str){
    // Define Regular Expression pattern for valid US phone numbers
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    // Test if the input string matches the pattern
    return pattern.test(str);
}