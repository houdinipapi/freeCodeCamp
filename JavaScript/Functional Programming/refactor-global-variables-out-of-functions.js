// Rewrite the code so the global array bookList is not changed inside either function.
// The add function should add the given bookName to the end of the array passed to it and return a new array (list).
// The remove function should remove the given bookName from the array passed to it.
// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
    // Make a copy of the original array and add the new book to the end
    const newList = [...bookList, bookName];
    return newList;
}

function remove(bookList, bookName) {
    // Find the index of the book to remove
    const bookIndex = bookList.indexOf(bookName);

    // Make a copy of the original array and remove the book if it exists
    if (bookIndex >= 0) {
        const newList = [...bookList.slice(0, bookIndex), ...bookList.slice(bookIndex + 1)];
        return newList;
    }
}