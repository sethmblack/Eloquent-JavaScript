// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55. (console.log(sum(range(1,10))))
// As a bonus assignment, modify your range function to take an optional third argument that indicates the "step" value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range (1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range (5, 2, -1) produces [5, 4, 3, 2].

var array = [];
var total = 0;

// function range (start, end) {
//     for (var i = start; i <= end; i++) {
//         array.push(i);
//     };
//     return array;
// };

function range (start, end, step) {
    if (step === undefined && start <= end) {
        step = 1;
    } else if (step === undefined && start > end) {
        step = -1;
    } else if ((step < 0 && start < end) || (step > 0 && start > end)) {
        step = step * -1;
    };

    if (start < end) {
        for (var i = start; i <= end; i += step) {
            array.push(i);
        };
    } else {
        for (var i = start; i >= end; i += step) {
                array.push(i);
       };
    };
    console.log(array);
};

function sum(Array) {
    for (var i = 0; i < Array.length; i++) {
        total += Array[i];
    };
    console.log(total);
};

range(2, 50, 2);
sum(array);