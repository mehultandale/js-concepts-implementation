

class Vehicle {
	constructor(type, yearOfMfg) {
		this.type = type;
		this.yearOfMfg = yearOfMfg;
	}
	printYear() {
		console.log(this.yearOfMfg);
	}
}


class Motorcycle extends Vehicle {
	printType() {
		console.log(this.type);
	}
}

function classDemo() {
	console.log("\n");
	console.log("\x1b[44m%s\x1b[0m", "Concept: Classes");
	const davidson = new Motorcycle("Davidson", 2012);
	davidson.printType();
	davidson.printYear();
	console.log("\n\n");
}


module.exports = classDemo;