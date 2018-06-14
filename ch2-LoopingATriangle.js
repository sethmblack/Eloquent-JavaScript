// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var pound = ("#");

for(i = 0; i < 7; i++){
  console.log(pound);
  pound += "#";
};
