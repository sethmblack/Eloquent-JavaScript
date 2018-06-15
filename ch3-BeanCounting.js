// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.

function countChar (String, character) {
    var charCount = 0;
    for (var i = 0; i < String.length; i++) {
        if (String.charAt(i) === character) {
            charCount ++;
        };
    };
    return charCount;
};

console.log(countChar("BsdfgBasdfBafsdBBBawerqawB", "B"))


// function countBs (String) {
//     var totalBs = 0;
//     for (var i = 0; i < String.length; i++) {        
//         if(String.charAt(i) === "B") {
//             totalBs ++;
//         };
//     };
//     return totalBs;
// };

// console.log(countBs("BsdfgBasdfBafsdBBBawerqawB"));