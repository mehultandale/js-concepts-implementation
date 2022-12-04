

console.log("JS Concepts");


console.log("Concept: Script mode");


function displayNums(a, b) {
	"use strict";
	console.log("Strict mode works with 'simple' parameter list");
	console.log("a", a, "b", b);
}
displayNums(1, 2);

console.log("but NOT with default parameter list");
function displayAlphabets(letter1='x', letter2='y') {
	// Comment, uncomment this line to see the concept work
	"use strict";
	console.log(letter1, letter2);
}
displayAlphabets();