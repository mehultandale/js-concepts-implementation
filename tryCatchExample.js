

function tryCatchExample() {
	try {
		console.log("\n");
		console.log("\x1b[44m%s\x1b[0m", "Concept: Try-catch-finally");
		console.log("This is a try block that throws error on even minutes.");
		console.log("(on uncommenting the below code)");
		// let timeNow = new Date().getMinutes();
		// if((timeNow % 2) === 0) {
		// 	throw new Error("Minutes are even: " + timeNow);
		// }

	} catch(e) {
		console.log("This is a catch block that has caught exception: ", e);
	} finally {
		console.log("This is a finally block");
		console.log("\n");
	}
}


module.exports = tryCatchExample;