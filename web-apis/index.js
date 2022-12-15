

import batteryStatusDemo from "./batteryStatusDemo.js";
import canvasDemo from "./canvasDemo.js";


/* Battery status */
batteryStatusDemo.logBatteryStatus();
canvasDemo.insertCanvas();

/* Console Table example */
function Employee(employeeID, employeeFirstName, employeeLastName, employeeDepartment) {
	this.employeeID = employeeID;
	this.employeeFirstName = employeeFirstName;
	this.employeeLastName = employeeLastName;
	this.employeeDepartment = employeeDepartment;
}

const john = new Employee("TSL1", "John", "Doe", "Development");
const tom = new Employee("TSL2", "Tom", "Test", "IT");
const alice = new Employee("TSL3", "Alice", "Test", "Sales");

console.table([john, tom, alice]);