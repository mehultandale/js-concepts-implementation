

(function () {

	console.log("\x1b[44m%s\x1b[0m", "Concept: Immediately Invoked Function Expression (IIFE)");
	console.log("This is logged from a IIFE.");
	let a = 1;
	console.log("The value of variable a is ", a , ".");

})();

console.log("The value of variable a would be undefined here.");
console.log("IIFEs, thus, prevent the pollution of global namespace. \n\n");
// Uncommenting the below line would throw an error
// console.log(a);