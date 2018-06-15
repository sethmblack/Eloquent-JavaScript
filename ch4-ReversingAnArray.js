// Write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, takes an array as an argument and produces a new array that has the same elements in the inverse OES_standard_derivatives. 
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as an argument in order to reverse its elements. Neither may use the standard reverse method.

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function reverseArray(Array) {
    var newArray = [];
    for (var i = Array.length - 1; i >= 0; i--) {
        newArray.push(Array[i]);
    };
    console.log(newArray);
};

function reverseArrayInPlace (Array) {
    for (var x = 0, y = Array.length - 1; x < y; x++, y--) {
        let temp = Array[x];
        Array[x] = Array[y];
        Array[y] = temp;
    };
    console.log(Array);
};

reverseArray(testArray);
reverseArrayInPlace(testArray);