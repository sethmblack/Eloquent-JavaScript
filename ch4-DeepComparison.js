// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.    

function deepEqual (value1, value2) {
    var keysInValue1 = 0, keysInValue2 = 0;

    function isPrimitive(test) {
        return (test !== Object(test));
    };
    
    if(isPrimitive(value1) && isPrimitive(value2))
        return value1 === value2;

    for(var prop in value2)
        keysInValue2++;

    for (var prop in value1) {
        keysInValue1++;
        if (!value2.hasOwnProperty(prop) || !deepEqual(value1[prop], value2[prop]))
                return false;
    }

    return keysInValue1 === keysInValue2;
};



var testObj = {here: {is: "this"}, object: 2};
var testObj2 = {hello: {is: "this"}, object: 2};
var testObj3 = {hello: {is: "this"}, object: {hello: {is: "this"}, object: 2}};
var testObj4 = {hello: {is: "this"}, object: null};
var testObj5 = null;
var testObj6 = {hello: null};
var testObj7 = 2;

console.log(deepEqual(testObj, testObj));
console.log(deepEqual(testObj, testObj2));
console.log(deepEqual(testObj2, testObj4));
console.log(deepEqual(testObj5, testObj5));
console.log(deepEqual(testObj5, testObj6));
console.log(deepEqual(testObj6, testObj6));
console.log(deepEqual(testObj7, 2));
console.log(deepEqual(testObj5, null));
console.log(deepEqual(testObj3, {haiasdfr: {is: "an"}, object: {haiasdfr: {is: "an"}, object: 2}}));
console.log(deepEqual(testObj3, {hello: {is: "this"}, object: {hello: {is: "this"}, object: 2}}));

