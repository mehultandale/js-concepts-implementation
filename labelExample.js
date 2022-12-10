

function labelExample() {
	console.log("\x1b[44m%s\x1b[0m", "Concept: Label");
	console.log("The loop in the label iterates thrice and prints: 'HAHAHA'")
	testPrint:
	for(let i=0; i<3; i++) {
		console.log(`%c
			_    _     __
			||  ||	  /_ \\
			|---||	 //--\\\\
			||  ||	//    \\\\

		`, `font-family: monospace`);
	}
}


module.exports = labelExample;