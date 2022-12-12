

function deepCopyExample() {
	console.log("\x1b[44m%s\x1b[0m", "Concept: Deep copy");
	let userDevice = {
		"name": "XYZ co"
	};

	console.log("Initial property value of source object: ");
	console.log(userDevice);

	let userPreferredBrand = JSON.parse(JSON.stringify(userDevice));
	userPreferredBrand.name = "ABC co";
	console.log("Property value of source object (after the deep copy's property is changed): ");
	console.log(userDevice);
	console.log("Property value of deep copied object (after the deep copy's property is changed): ");
	console.log(userPreferredBrand);
	console.log("\n\n");
}


module.exports = deepCopyExample;