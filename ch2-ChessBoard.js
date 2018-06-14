// Write a program that creates a string that represents an 8x8 grid, using new-line characters to setarate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
// Passing this string to the console.log should show something like this: 
// _______________________________________________

// # # # #
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
//  # # # #
//  _____________________________________________

var size = 50;
var string = "";

for(var x = 0; x < size; x++) {
    for(var i = 0; i < size; i++) {
        if((x + i) % 2 == 0) {
            string += "#"
        } else {
            string += " "
        };
    };
    string += "\n";
};

console.log(string);