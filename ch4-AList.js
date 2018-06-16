// Example:
// _______________________

// var list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };
// _______________________

// Write a function arrayToList that builds up a data structure like the example when given [1, 2, 3] as an argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
// If you haven't already, also write a recursive version of nth.

var testArray = [1, 2, 3];

function prepend (value, list) {
    return {value, rest: list};
};

function arrayToList(array) {
    var list = null;

    for (var i = array.length -1; i >= 0; i--) {
        list = prepend(array[i], list);
    };
    return list;
};

function listToArray(list) {
    newArray = [];

    while (list) {
        newArray.push(list.value);
        list = list.rest;
    };
    return newArray;
};

// function nth (list, index) {
//     return listToArray(list)[index];
// };

function nth (list, index) {
    if (!list) {
        return undefined;
    } else if (index == 0) {
        return list.value;
    } else {
        return nth (list.rest, index - 1);
    }
};

console.log(prepend(1, null));
console.log(arrayToList(testArray));
console.log(listToArray(arrayToList(testArray)));
console.log(nth(arrayToList(testArray), 0));
console.log(nth(arrayToList(testArray), 2));
console.log(nth(arrayToList(testArray), 5));
