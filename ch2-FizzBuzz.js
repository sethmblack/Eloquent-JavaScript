// Write a program that uses console.log to print all the numbers from 1 to 100, with two exeptions. For numbers divisible by 3 print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working,modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.

var count = 1;
var message;

for(var i = 0; i < 100; i++){
	if(count % 3 === 0) {
		message = "Fizz";
		if(count % 5 === 0) {
			message += "Buzz";
		};
	} else if (count % 5 === 0) {
		message = "Buzz";
	} else {
		message = count;
	};
	console.log(message);
	count ++;
}

// for(var i = 0; i < 100; i++) {
// 	if (count % 3 === 0){
// 		console.log("Fizz");
// 	} else if (count % 5 === 0){
// 		console.log("Buzz");
// 	} else {
// 		console.log(count);
// 	}
// 	count ++;
// };