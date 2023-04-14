function palindrome(str) {
    // remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

    // compare the string with its reverse
    return str === str.split('').reverse().join('');
}