

class Vehicle {
	constructor(type, yearOfMfg) {
		this.type = type;
		this.yearOfMfg = yearOfMfg;
	}
	printYear() {
		console.log(this.yearOfMfg);
	}
}


const hondaCity = new Vehicle("car", "2010");
hondaCity.printYear();