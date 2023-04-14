// A function that takes a ROT13 encoded string as input and returns a decode string

function rot13(message) {
    let decodedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const letter = message[i];

        if (letter.match(/[A-Za-z]/)) { // Check if the character is a letter
            const charCode = letter.charCodeAt(0);
            let decodedCharCode;

            if (charCode >= 65 && charCode <= 90) { // Uppercase letters
                decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
            } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
                decodedCharCode = ((charCode - 97 + 13) % 26) + 97;
            }

            decodedMessage += String.fromCharCode(decodedCharCode);
            
            // Convert ASCII code to letter and add to output string
        } else {
            decodedMessage += letter; // Non-alphanumeric characters are passed through
        }
    }
    return decodedMessage;
}