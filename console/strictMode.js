

function displayNums(a, b) {
	"use strict";
	console.log("Strict mode works with 'simple' parameter list");
	console.log("a", a, "b", b);
}


function displayAlphabets(letter1='x', letter2='y') {
	console.log("but NOT with default parameter list");
	
	// Comment, uncomment this line to see the concept work
	// "use strict";

	console.log(letter1, letter2);
}


function strictModeDemo() {
	console.log("\x1b[44m%s\x1b[0m", "Concept: Strict mode");
	displayNums(1, 2);
	displayAlphabets();
}


module.exports = strictModeDemo;