

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


const davidson = new Motorcycle("Davidson", 2012);
davidson.printType();
davidson.printYear();