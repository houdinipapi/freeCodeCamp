// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
// You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

Array.prototype.myMap = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++)
    {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};